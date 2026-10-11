import { useMemo, useState } from 'react';
import { View, TextInput, FlatList, Pressable, StyleSheet, ScrollView, Modal, Alert, Share, StatusBar } from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Text } from '../../components/AppText';
import { colors } from '../../constants/colors';
import { recipes } from '../../data/recipes';
import { DAYS, SLOTS, usePlanner } from '../../context/plan';
import { Recipe } from '../../types';

const byId = new Map<string, Recipe>(recipes.map(r => [r.id, r]));

// Which recipe types are shown first for each meal slot
const slotMeals: Record<string, string[]> = {
  Breakfast: ['Breakfast'],
  Lunch: ['Lunch', 'Soup', 'Side'],
  Dinner: ['Dinner', 'Soup', 'Side'],
  Snack: ['Snack'],
};

// Used only to sort the shopping list by food name instead of by quantity
const sortName = (t: string) =>
  t
    .toLowerCase()
    .replace(/^[\d\s/.-]*((cups?|tbsp|tsp|kg|g|ml|l|pieces?|slices?|handfuls?|medium|small|large)\s+)*/i, '');

export default function PlannerScreen() {
  const { plan, checked, setMeal, clearPlan, toggleChecked, clearChecked } = usePlanner();
  const [mode, setMode] = useState<'plan' | 'shop'>('plan');
  const [picker, setPicker] = useState<{ day: string; slot: string } | null>(null);
  const [query, setQuery] = useState('');
  const [showAll, setShowAll] = useState(false);

  const planned = useMemo(
    () => Object.values(plan).map(id => byId.get(id)).filter((r): r is Recipe => !!r),
    [plan]
  );

  const shopping = useMemo(() => {
    const map = new Map<string, { key: string; text: string; count: number }>();
    planned.forEach(r =>
      r.ingredients.forEach(ing => {
        const key = ing.trim().toLowerCase();
        const e = map.get(key);
        if (e) e.count += 1;
        else map.set(key, { key, text: ing.trim(), count: 1 });
      })
    );
    return Array.from(map.values()).sort((a, b) => sortName(a.text).localeCompare(sortName(b.text)));
  }, [planned]);

  const toBuy = shopping.filter(i => !checked[i.key]).length;

  const pickerList = useMemo(() => {
    if (!picker) return [];
    const q = query.trim().toLowerCase();
    return recipes.filter(r => {
      if (!showAll && !slotMeals[picker.slot].includes(r.meal)) return false;
      return !q || r.name.toLowerCase().includes(q);
    });
  }, [picker, query, showAll]);

  const openPicker = (day: string, slot: string) => {
    setQuery('');
    setShowAll(false);
    setPicker({ day, slot });
  };

  const dayCarbs = (day: string) =>
    SLOTS.reduce((sum, slot) => {
      const id = plan[`${day}|${slot}`];
      const r = id ? byId.get(id) : undefined;
      return sum + (r ? r.carbs : 0);
    }, 0);

  const confirmClear = () =>
    Alert.alert('Clear the whole plan?', 'This removes all planned meals and shopping ticks.', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Clear', style: 'destructive', onPress: clearPlan },
    ]);

  const shareList = () => {
    const lines = shopping
      .filter(i => !checked[i.key])
      .map(i => `- ${i.text}${i.count > 1 ? ` (x${i.count})` : ''}`);
    Share.share({ message: `Abiola Diet shopping list\n\n${lines.join('\n')}` }).catch(() => {});
  };

  return (
    <View style={s.container}>
      {/* Mode switch */}
      <View style={s.switchWrap}>
        {(['plan', 'shop'] as const).map(m => (
          <Pressable key={m} onPress={() => setMode(m)} style={[s.switchBtn, mode === m && s.switchOn]}>
            <Text style={[s.switchText, mode === m && { color: '#fff' }]}>
              {m === 'plan' ? 'Weekly plan' : `Shopping list${shopping.length ? ` (${toBuy})` : ''}`}
            </Text>
          </Pressable>
        ))}
      </View>

      {mode === 'plan' ? (
        <ScrollView contentContainerStyle={{ padding: 12, paddingBottom: 40 }}>
          <Text style={s.intro}>
            Tap a slot to choose a recipe. Carbs per day are approximate and do not include any swallow you add.
          </Text>
          {DAYS.map(day => {
            const carbs = dayCarbs(day);
            return (
              <View key={day} style={s.card}>
                <View style={s.dayHead}>
                  <Text style={s.day}>{day}</Text>
                  {carbs > 0 && <Text style={s.small}>about {carbs} g carbs</Text>}
                </View>
                {SLOTS.map(slot => {
                  const id = plan[`${day}|${slot}`];
                  const r = id ? byId.get(id) : undefined;
                  return (
                    <View key={slot} style={s.slotRow}>
                      <Text style={s.slot}>{slot}</Text>
                      <Pressable style={{ flex: 1 }} onPress={() => openPicker(day, slot)}>
                        {r ? (
                          <Text style={s.recipe} numberOfLines={2}>{r.name}</Text>
                        ) : (
                          <Text style={s.add}>+ Add a meal</Text>
                        )}
                      </Pressable>
                      {r && (
                        <>
                          <Pressable
                            hitSlop={8}
                            style={s.icon}
                            onPress={() => router.push(`/recipe/${r.id}` as any)}
                          >
                            <Ionicons name="open-outline" size={20} color={colors.primary} />
                          </Pressable>
                          <Pressable hitSlop={8} style={s.icon} onPress={() => setMeal(day, slot, null)}>
                            <Ionicons name="close-circle" size={20} color={colors.muted} />
                          </Pressable>
                        </>
                      )}
                    </View>
                  );
                })}
              </View>
            );
          })}
          {planned.length > 0 && (
            <Pressable style={s.clearBtn} onPress={confirmClear}>
              <Text style={s.clearText}>Clear whole plan</Text>
            </Pressable>
          )}
        </ScrollView>
      ) : (
        <ScrollView contentContainerStyle={{ padding: 12, paddingBottom: 40 }}>
          {shopping.length === 0 ? (
            <Text style={s.empty}>
              Your shopping list is empty. Add meals in the Weekly plan and the ingredients will appear here.
            </Text>
          ) : (
            <>
              <Text style={s.intro}>
                {toBuy} item{toBuy === 1 ? '' : 's'} left to buy. Tap an item to tick it off. Quantities are as written in each
                recipe, and "x2" means the item is used in 2 planned meals.
              </Text>
              <View style={s.card}>
                {shopping.map(item => {
                  const done = !!checked[item.key];
                  return (
                    <Pressable key={item.key} style={s.shopRow} onPress={() => toggleChecked(item.key)}>
                      <Ionicons
                        name={done ? 'checkbox' : 'square-outline'}
                        size={24}
                        color={done ? colors.primary : colors.muted}
                      />
                      <Text style={[s.shopText, done && s.shopDone]}>
                        {item.text}
                        {item.count > 1 ? `  x${item.count}` : ''}
                      </Text>
                    </Pressable>
                  );
                })}
              </View>
              <View style={s.btnRow}>
                <Pressable style={[s.btn, { backgroundColor: colors.primary }]} onPress={shareList}>
                  <Ionicons name="share-outline" size={18} color="#fff" />
                  <Text style={s.btnText}>  Share list</Text>
                </Pressable>
                <Pressable style={[s.btn, s.btnOutline]} onPress={clearChecked}>
                  <Text style={[s.btnText, { color: colors.primary }]}>Clear ticks</Text>
                </Pressable>
              </View>
            </>
          )}
        </ScrollView>
      )}

      {/* Recipe picker */}
      <Modal visible={!!picker} animationType="slide" onRequestClose={() => setPicker(null)}>
        <View style={s.modal}>
          <View style={s.modalHead}>
            <Text style={s.modalTitle}>{picker ? `${picker.day}: ${picker.slot}` : ''}</Text>
            <Pressable onPress={() => setPicker(null)} hitSlop={10}>
              <Text style={s.close}>Close</Text>
            </Pressable>
          </View>
          <TextInput style={s.search} placeholder="Search recipes" value={query} onChangeText={setQuery} />
          <Pressable style={s.showAll} onPress={() => setShowAll(!showAll)}>
            <Ionicons
              name={showAll ? 'checkbox' : 'square-outline'}
              size={22}
              color={showAll ? colors.primary : colors.muted}
            />
            <Text style={s.showAllText}>Show all recipe types</Text>
          </Pressable>
          <Text style={s.small}>{pickerList.length} recipes</Text>
          <FlatList
            data={pickerList}
            keyExtractor={r => r.id}
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={{ paddingTop: 8, paddingBottom: 30 }}
            renderItem={({ item }) => (
              <Pressable
                style={s.pickRow}
                onPress={() => {
                  if (picker) setMeal(picker.day, picker.slot, item.id);
                  setPicker(null);
                }}
              >
                <Text style={s.pickName}>{item.name}</Text>
                <Text style={s.small}>
                  {item.meal} • {item.time} min • {item.carbs} g carbs
                </Text>
              </Pressable>
            )}
          />
        </View>
      </Modal>
    </View>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg },
  switchWrap: { flexDirection: 'row', margin: 12, marginBottom: 0, borderWidth: 1, borderColor: colors.border, borderRadius: 10, overflow: 'hidden', backgroundColor: '#fff' },
  switchBtn: { flex: 1, paddingVertical: 10, alignItems: 'center' },
  switchOn: { backgroundColor: colors.primary },
  switchText: { fontSize: 15, fontWeight: '600', color: colors.text },
  intro: { color: colors.muted, fontSize: 13, lineHeight: 19, marginBottom: 12 },
  card: { backgroundColor: colors.card, borderRadius: 12, padding: 14, marginBottom: 12, borderWidth: 1, borderColor: colors.border },
  dayHead: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 },
  day: { fontSize: 17, fontWeight: '700', color: colors.text },
  small: { color: colors.muted, fontSize: 12, lineHeight: 17 },
  slotRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: 9, borderTopWidth: 1, borderTopColor: colors.border },
  slot: { width: 86, color: colors.muted, fontSize: 13 },
  recipe: { color: colors.text, fontSize: 15, fontWeight: '600' },
  add: { color: colors.primary, fontSize: 15 },
  icon: { paddingHorizontal: 6 },
  clearBtn: { alignItems: 'center', padding: 12, marginTop: 4 },
  clearText: { color: colors.red, fontSize: 15, fontWeight: '600' },
  empty: { textAlign: 'center', color: colors.muted, marginTop: 40, lineHeight: 22, paddingHorizontal: 20 },
  shopRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: colors.border },
  shopText: { flex: 1, marginLeft: 12, fontSize: 15, color: colors.text },
  shopDone: { textDecorationLine: 'line-through', color: colors.muted },
  btnRow: { flexDirection: 'row' },
  btn: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 13, borderRadius: 10, marginRight: 8 },
  btnOutline: { borderWidth: 1, borderColor: colors.primary, backgroundColor: '#fff', marginRight: 0 },
  btnText: { color: '#fff', fontSize: 15, fontWeight: '700' },
  modal: { flex: 1, backgroundColor: colors.bg, padding: 14, paddingTop: (StatusBar.currentHeight ?? 24) + 10 },
  modalHead: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  modalTitle: { fontSize: 19, fontWeight: '700', color: colors.text },
  close: { color: colors.primary, fontSize: 16, fontWeight: '600' },
  search: { backgroundColor: '#fff', borderRadius: 10, padding: 12, fontSize: 16, borderWidth: 1, borderColor: colors.border },
  showAll: { flexDirection: 'row', alignItems: 'center', marginVertical: 10 },
  showAllText: { marginLeft: 8, fontSize: 14, color: colors.text },
  pickRow: { backgroundColor: '#fff', borderRadius: 10, padding: 12, marginBottom: 8, borderWidth: 1, borderColor: colors.border },
  pickName: { fontSize: 16, fontWeight: '600', color: colors.text, marginBottom: 2 },
});