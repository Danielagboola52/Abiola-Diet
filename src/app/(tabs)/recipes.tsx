import { useMemo, useState } from 'react';
import { View, TextInput, FlatList, Pressable, StyleSheet, ScrollView } from 'react-native';
import { Text } from '../../components/AppText';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { recipes } from '../../data/recipes';
import { colors } from '../../constants/colors';
import { useFavorites } from '../../context/favorites';

const filters = ['All', '❤ Favorites', 'Breakfast', 'Lunch', 'Dinner', 'Snack', 'Soup', 'Side'];

export default function RecipesScreen() {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('All');
  const { favs } = useFavorites();

  const data = useMemo(
    () =>
      recipes.filter(r => {
        const matchFilter =
          filter === 'All' ||
          (filter === '❤ Favorites' ? favs.includes(r.id) : r.meal === filter);
        return matchFilter && r.name.toLowerCase().includes(query.toLowerCase());
      }),
    [query, filter, favs]
  );

  return (
    <View style={s.container}>
      <TextInput
        style={s.search}
        placeholder="Search recipes"
        value={query}
        onChangeText={setQuery}
      />
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 8 }}>
          {filters.map(f => (
            <Pressable key={f} onPress={() => setFilter(f)} style={[s.chip, filter === f && s.chipOn]}>
              <Text style={[s.chipText, filter === f && { color: '#fff' }]}>{f}</Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>
      <Text style={{ color: colors.muted, marginBottom: 6 }}>{data.length} recipes</Text>
      <FlatList
        data={data}
        keyExtractor={r => r.id}
        ListEmptyComponent={<Text style={s.empty}>No recipes found.</Text>}
        renderItem={({ item }) => (
          <Pressable style={s.card} onPress={() => router.push(`/recipe/${item.id}`)}>
            <View style={s.row}>
              <Text style={s.name}>{item.name}</Text>
              {favs.includes(item.id) && <Ionicons name="heart" size={18} color={colors.red} />}
            </View>
            <Text style={s.meta}>
              {item.meal} • {item.time} min • {item.carbs}g carbs • GI: {item.gi} • {'₦'.repeat(item.budget)}
            </Text>
          </Pressable>
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
  name: { flex: 1, fontSize: 17, fontWeight: '700', color: colors.text },
  meta: { color: colors.muted, marginTop: 6, fontSize: 13 },
  empty: { textAlign: 'center', color: colors.muted, marginTop: 30 },
});