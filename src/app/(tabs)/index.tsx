import { useMemo, useState } from 'react';
import { View, TextInput, FlatList, Pressable, StyleSheet, ScrollView } from 'react-native';
import { Text } from '../../components/AppText';
import { foods } from '../../data/foods';
import { colors } from '../../constants/colors';

const categories = ['All', ...Array.from(new Set(foods.map(f => f.category)))];
const dot = { green: colors.green, yellow: colors.yellow, red: colors.red };
const label = { green: 'Eat freely', yellow: 'Limit', red: 'Avoid / rarely' };

export default function FoodsScreen() {
  const [query, setQuery] = useState('');
  const [cat, setCat] = useState('All');

  const data = useMemo(
    () =>
      foods.filter(
        f =>
          (cat === 'All' || f.category === cat) &&
          (f.name + (f.localNames ?? '')).toLowerCase().includes(query.toLowerCase())
      ),
    [query, cat]
  );

  return (
    <View style={s.container}>
      <TextInput
        style={s.search}
        placeholder="Search foods (e.g. ewa, ugwu)"
        value={query}
        onChangeText={setQuery}
      />
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 8 }}>
          {categories.map(c => (
            <Pressable key={c} onPress={() => setCat(c)} style={[s.chip, cat === c && s.chipOn]}>
              <Text style={[s.chipText, cat === c && { color: '#fff' }]}>{c}</Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>
      <FlatList
        data={data}
        keyExtractor={f => f.id}
        renderItem={({ item }) => (
          <View style={s.card}>
            <View style={s.row}>
              <View style={[s.dot, { backgroundColor: dot[item.verdict] }]} />
              <Text style={s.name}>{item.name}</Text>
              <Text style={s.price}>{'₦'.repeat(item.price)}</Text>
            </View>
            {item.localNames ? <Text style={s.local}>{item.localNames}</Text> : null}
            <Text style={s.meta}>
              {label[item.verdict]} • GI: {item.gi} • Carbs: {item.carbs}
            </Text>
            <Text style={s.meta}>Portion: {item.portion}</Text>
            <Text style={s.note}>{item.note}</Text>
          </View>
        )}
      />
    </View>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg, padding: 12 },
  search: { backgroundColor: '#fff', borderRadius: 10, padding: 12, fontSize: 16, borderWidth: 1, borderColor: colors.border, marginBottom: 10 },
  chip: { paddingHorizontal: 14, paddingVertical: 8, borderRadius: 20, backgroundColor: '#fff', borderWidth: 1, borderColor: colors.border, marginRight: 8 },
  chipOn: { backgroundColor: colors.primary, borderColor: colors.primary },
  chipText: { color: colors.text, fontSize: 14 },
  card: { backgroundColor: colors.card, borderRadius: 12, padding: 14, marginBottom: 10, borderWidth: 1, borderColor: colors.border },
  row: { flexDirection: 'row', alignItems: 'center' },
  dot: { width: 12, height: 12, borderRadius: 6, marginRight: 8 },
  name: { flex: 1, fontSize: 17, fontWeight: '700', color: colors.text },
  price: { color: colors.primary, fontWeight: '700' },
  local: { color: colors.muted, marginTop: 2 },
  meta: { color: colors.muted, marginTop: 4, fontSize: 13 },
  note: { color: colors.text, marginTop: 6, fontSize: 14 },
});