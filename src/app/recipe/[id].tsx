import { View, Pressable, StyleSheet, ScrollView } from 'react-native';
import { Text } from '../../components/AppText';
import { useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { recipes } from '../../data/recipes';
import { colors } from '../../constants/colors';
import { useFavorites } from '../../context/favorites';

// Common allergens we check for in each recipe (name + ingredients)
const ALLERGENS: { label: string; words: string[] }[] = [
  { label: 'Groundnuts / nuts', words: ['groundnut', 'peanut', 'cashew'] },
  { label: 'Eggs', words: ['egg'] },
  {
    label: 'Fish / crayfish / seafood',
    words: ['fish', 'titus', 'tilapia', 'croaker', 'catfish', 'sardine', 'mackerel', 'prawn', 'shrimp', 'crayfish'],
  },
  { label: 'Wheat', words: ['wheat', 'bread', 'flour', 'semovita', 'semolina', 'noodle', 'pasta', 'couscous'] },
];

export default function RecipeDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { favs, toggle } = useFavorites();
  const r = recipes.find(x => x.id === id);

  if (!r) return <Text style={{ padding: 20 }}>Recipe not found.</Text>;
  const isFav = favs.includes(r.id);

  // "garden egg" is a vegetable, so remove it before looking for eggs
  const text = `${r.name} ${r.ingredients.join(' ')}`.toLowerCase().replace(/garden eggs?/g, '');
  const found = ALLERGENS.filter(a => a.words.some(w => text.includes(w))).map(a => a.label);

  return (
    <ScrollView style={s.container} contentContainerStyle={{ padding: 16, paddingBottom: 40 }}>
      <View style={s.row}>
        <Text style={s.title}>{r.name}</Text>
        <Pressable onPress={() => toggle(r.id)} hitSlop={10}>
          <Ionicons name={isFav ? 'heart' : 'heart-outline'} size={28} color={colors.red} />
        </Pressable>
      </View>

      <View style={s.stats}>
        <Stat label="Time" value={`${r.time} min`} />
        <Stat label="Serves" value={`${r.servings}`} />
        <Stat label="Carbs*" value={`${r.carbs}g`} />
        <Stat label="Calories*" value={`${r.calories}`} />
        <Stat label="GI" value={r.gi} />
      </View>
      <Text style={s.small}>*Approximate, per serving.</Text>

      {r.meal === 'Soup' && (
        <View style={s.swallow}>
          <View style={s.noteHead}>
            <Ionicons name="restaurant-outline" size={18} color={colors.primary} />
            <Text style={s.noteTitle}>  Swallow not included</Text>
          </View>
          <Text style={s.noteText}>
            The nutrition above is for the soup or stew only. If you eat it with a swallow, choose one from the Side
            filter on the Recipes tab and keep it to a measured, fist-sized portion.
          </Text>
        </View>
      )}

      <Text style={s.h}>Ingredients</Text>
      {r.ingredients.map((i, idx) => (
        <Text key={idx} style={s.item}>• {i}</Text>
      ))}

      <Text style={s.h}>Steps</Text>
      {r.steps.map((st, idx) => (
        <Text key={idx} style={s.item}>{idx + 1}. {st}</Text>
      ))}

      <View style={s.tip}>
        <Text style={s.tipTitle}>Diabetic-friendly tip</Text>
        <Text style={s.item}>{r.tip}</Text>
      </View>

      <View style={s.allergy}>
        <View style={s.noteHead}>
          <Ionicons name="warning-outline" size={18} color="#9A6B00" />
          <Text style={[s.noteTitle, { color: '#9A6B00' }]}>  Allergy check</Text>
        </View>
        {found.length > 0 ? (
          <Text style={s.noteText}>
            This recipe contains or may contain: {found.join(', ')}. Do not eat it if you are allergic. Ingredients and
            seasoning cubes can differ between brands, so always check the labels.
          </Text>
        ) : (
          <Text style={s.noteText}>
            We did not find groundnuts, eggs, fish or wheat in this ingredient list. Always check your own allergies
            and the labels on packaged items.
          </Text>
        )}
      </View>
    </ScrollView>
  );
}

const Stat = ({ label, value }: { label: string; value: string }) => (
  <View style={s.stat}>
    <Text style={s.statValue}>{value}</Text>
    <Text style={s.statLabel}>{label}</Text>
  </View>
);

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg },
  row: { flexDirection: 'row', alignItems: 'center' },
  title: { flex: 1, fontSize: 22, fontWeight: '800', color: colors.text, marginRight: 10 },
  stats: { flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#fff', borderRadius: 12, padding: 12, marginTop: 14, borderWidth: 1, borderColor: colors.border },
  stat: { alignItems: 'center', flex: 1 },
  statValue: { fontWeight: '700', color: colors.primary, fontSize: 15 },
  statLabel: { color: colors.muted, fontSize: 12, marginTop: 2 },
  small: { color: colors.muted, fontSize: 12, marginTop: 6 },
  h: { fontSize: 18, fontWeight: '700', color: colors.text, marginTop: 20, marginBottom: 6 },
  item: { fontSize: 16, color: colors.text, lineHeight: 24, marginBottom: 4 },
  tip: { backgroundColor: '#E8F5EE', borderRadius: 12, padding: 14, marginTop: 20 },
  tipTitle: { fontWeight: '700', color: colors.primary, marginBottom: 4 },
  swallow: { backgroundColor: '#EEF6F2', borderRadius: 12, padding: 14, marginTop: 14, borderWidth: 1, borderColor: colors.border },
  allergy: { backgroundColor: '#FFF6E0', borderRadius: 12, padding: 14, marginTop: 14, borderWidth: 1, borderColor: '#F0D890' },
  noteHead: { flexDirection: 'row', alignItems: 'center', marginBottom: 6 },
  noteTitle: { fontWeight: '700', color: colors.primary, fontSize: 15 },
  noteText: { fontSize: 14, lineHeight: 21, color: colors.text },
});