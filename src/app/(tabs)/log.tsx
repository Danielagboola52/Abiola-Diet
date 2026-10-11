import { useMemo, useState } from 'react';
import { View, TextInput, Pressable, ScrollView, Alert, StyleSheet, useWindowDimensions } from 'react-native';
import { Text } from '../../components/AppText';
import Svg, { Rect, Polyline, Circle, Line, G, Text as SvgText } from 'react-native-svg';
import { colors } from '../../constants/colors';
import { useReadings } from '../../context/readings';
import { classify, fromDisplay, toDisplay } from '../../utils/glucose';
import { recipes } from '../../data/recipes';
import { Reading, Timing } from '../../types';

const timings: Timing[] = ['Fasting', 'Before meal', 'After meal', 'Bedtime', 'Random'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const formatDate = (iso: string) => {
  const d = new Date(iso);
  const hh = String(d.getHours()).padStart(2, '0');
  const mm = String(d.getMinutes()).padStart(2, '0');
  return `${d.getDate()} ${months[d.getMonth()]}, ${hh}:${mm}`;
};

export default function LogScreen() {
  const { readings, unit, setUnit, addReading, removeReading } = useReadings();
  const [value, setValue] = useState('');
  const [timing, setTiming] = useState<Timing>('Fasting');
  const [note, setNote] = useState('');
  const [meal, setMeal] = useState('');
  const [recipeId, setRecipeId] = useState<string | undefined>(undefined);
  const [latest, setLatest] = useState<Reading | null>(null);

  const suggestions = useMemo(() => {
    const q = meal.trim().toLowerCase();
    if (q.length < 2 || recipeId) return [];
    return recipes.filter(r => r.name.toLowerCase().includes(q)).slice(0, 5);
  }, [meal, recipeId]);

  const save = () => {
    const num = parseFloat(value.replace(',', '.'));
    if (isNaN(num)) {
      Alert.alert('Enter a number', 'Please type your glucometer reading.');
      return;
    }
    const mgdl = fromDisplay(num, unit);
    if (mgdl < 20 || mgdl > 600) {
      Alert.alert('Check the reading', `That value looks wrong for ${unit}. Please check the unit and try again.`);
      return;
    }
    const reading: Reading = {
      id: Date.now().toString(),
      mgdl,
      timing,
      note: note.trim(),
      date: new Date().toISOString(),
      meal: meal.trim() || undefined,
      recipeId,
    };
    addReading(reading);
    setLatest(reading);
    setValue('');
    setNote('');
    setMeal('');
    setRecipeId(undefined);
  };

  const confirmDelete = (id: string) =>
    Alert.alert('Delete reading?', 'This cannot be undone.', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Delete', style: 'destructive', onPress: () => removeReading(id) },
    ]);

  const status = latest ? classify(latest.mgdl, latest.timing) : null;

  const total = readings.length;
  const avg = total ? readings.reduce((a, r) => a + r.mgdl, 0) / total : 0;
  const lowest = total ? Math.min(...readings.map(r => r.mgdl)) : 0;
  const highest = total ? Math.max(...readings.map(r => r.mgdl)) : 0;
  const inRange = readings.filter(r => classify(r.mgdl, r.timing).label === 'In range').length;

  return (
    <ScrollView
      style={s.container}
      contentContainerStyle={{ padding: 12, paddingBottom: 40 }}
      keyboardShouldPersistTaps="handled"
    >
      {/* Add reading */}
      <View style={s.card}>
        <View style={s.rowBetween}>
          <Text style={s.h}>Add reading</Text>
          <View style={s.unitRow}>
            {(['mg/dL', 'mmol/L'] as const).map(u => (
              <Pressable key={u} onPress={() => setUnit(u)} style={[s.unit, unit === u && s.unitOn]}>
                <Text style={[s.unitText, unit === u && { color: '#fff' }]}>{u}</Text>
              </Pressable>
            ))}
          </View>
        </View>

        <Text style={s.hint}>
          Type the number shown on your glucometer. No meter? A pharmacy, clinic or laboratory can test your blood sugar.
        </Text>

        <TextInput
          style={s.input}
          placeholder={unit === 'mg/dL' ? 'e.g. 110' : 'e.g. 6.1'}
          keyboardType="decimal-pad"
          value={value}
          onChangeText={setValue}
        />

        <Text style={s.label}>When was it taken?</Text>
        <View style={s.wrap}>
          {timings.map(t => (
            <Pressable key={t} onPress={() => setTiming(t)} style={[s.chip, timing === t && s.chipOn]}>
              <Text style={[s.chipText, timing === t && { color: '#fff' }]}>{t}</Text>
            </Pressable>
          ))}
        </View>
        {timing === 'After meal' && (
          <Text style={s.hint}>Test about 2 hours after your first bite for the most useful result.</Text>
        )}

        <Text style={s.label}>What did you eat? (optional)</Text>
        <TextInput
          style={s.input}
          placeholder="Type a meal, e.g. moi moi"
          value={meal}
          onChangeText={t => {
            setMeal(t);
            setRecipeId(undefined);
          }}
        />
        {suggestions.map(r => (
          <Pressable
            key={r.id}
            style={s.sug}
            onPress={() => {
              setMeal(r.name);
              setRecipeId(r.id);
            }}
          >
            <Text style={s.sugText}>{r.name}</Text>
          </Pressable>
        ))}

        <TextInput
          style={[s.input, { marginTop: 10 }]}
          placeholder="Note (optional): how you feel, portion size"
          value={note}
          onChangeText={setNote}
        />

        <Pressable style={s.saveBtn} onPress={save}>
          <Text style={s.saveText}>Save reading</Text>
        </Pressable>
      </View>

      {/* Result of latest save */}
      {latest && status && (
        <View style={[s.result, { borderColor: status.color }]}>
          <Text style={[s.resultTitle, { color: status.color }]}>
            {toDisplay(latest.mgdl, unit)} {unit} • {status.label}
          </Text>
          <Text style={s.resultMsg}>{status.message}</Text>
        </View>
      )}

      {/* Summary */}
      {total > 0 && (
        <View style={s.card}>
          <Text style={s.h}>Summary</Text>
          <View style={s.statsRow}>
            <Stat label="Average" value={toDisplay(avg, unit)} />
            <Stat label="Lowest" value={toDisplay(lowest, unit)} />
            <Stat label="Highest" value={toDisplay(highest, unit)} />
            <Stat label="In range" value={`${Math.round((inRange / total) * 100)}%`} />
          </View>
          <Text style={s.small}>Based on {total} reading{total > 1 ? 's' : ''} ({unit}).</Text>
        </View>
      )}

      {/* Meal insights */}
      <MealInsights />

      {/* Chart */}
      {total > 0 && <Chart />}

      {/* History */}
      <Text style={[s.h, { marginTop: 8, marginBottom: 8 }]}>History</Text>
      {total === 0 && <Text style={s.empty}>No readings yet. Add your first one above.</Text>}
      {readings.slice(0, 50).map(r => {
        const st = classify(r.mgdl, r.timing);
        return (
          <Pressable key={r.id} style={s.hist} onLongPress={() => confirmDelete(r.id)}>
            <View style={[s.bar, { backgroundColor: st.color }]} />
            <View style={{ flex: 1 }}>
              <Text style={s.histValue}>
                {toDisplay(r.mgdl, unit)} {unit}{'  '}
                <Text style={{ color: st.color, fontSize: 14 }}>{st.label}</Text>
              </Text>
              <Text style={s.small}>{r.timing} • {formatDate(r.date)}</Text>
              {r.meal ? <Text style={s.histNote}>Ate: {r.meal}</Text> : null}
              {r.note ? <Text style={s.histNote}>{r.note}</Text> : null}
            </View>
            <Pressable onPress={() => confirmDelete(r.id)} hitSlop={10}>
              <Text style={s.del}>✕</Text>
            </Pressable>
          </Pressable>
        );
      })}

      <Text style={s.disclaimer}>
        Targets shown are general adult guidelines. Your doctor may set different targets for you. This app does not replace medical advice.
      </Text>
    </ScrollView>
  );
}

function MealInsights() {
  const { readings, unit } = useReadings();

  const groups: Record<string, { name: string; sum: number; n: number }> = {};
  readings.forEach(r => {
    if (r.timing !== 'After meal' || !r.meal) return;
    const key = r.meal.toLowerCase();
    if (!groups[key]) groups[key] = { name: r.meal, sum: 0, n: 0 };
    groups[key].sum += r.mgdl;
    groups[key].n += 1;
  });

  const list = Object.values(groups)
    .map(g => ({ ...g, avg: g.sum / g.n }))
    .sort((a, b) => b.avg - a.avg);

  return (
    <View style={s.card}>
      <Text style={s.h}>Meal check</Text>
      {list.length === 0 ? (
        <Text style={s.small}>
          Save a reading as "After meal" and type what you ate. Here you will see how each meal affects your sugar.
        </Text>
      ) : (
        <>
          {list.map(g => {
            const st = classify(g.avg, 'After meal');
            return (
              <View key={g.name} style={s.insightRow}>
                <View style={[s.dotBig, { backgroundColor: st.color }]} />
                <View style={{ flex: 1 }}>
                  <Text style={s.insightName}>{g.name}</Text>
                  <Text style={s.small}>
                    {g.n} reading{g.n > 1 ? 's' : ''} • {st.label}
                  </Text>
                </View>
                <Text style={[s.insightVal, { color: st.color }]}>
                  {toDisplay(g.avg, unit)} {unit}
                </Text>
              </View>
            );
          })}
          <Text style={s.small}>
            Average sugar after each meal, highest first. Meals in yellow or red may need a smaller portion or less starch. Discuss patterns with your doctor.
          </Text>
        </>
      )}
    </View>
  );
}

function Chart() {
  const { readings, unit } = useReadings();
  const { width } = useWindowDimensions();
  const w = width - 24 - 28;
  const h = 180;
  const pad = { l: 34, r: 8, t: 10, b: 20 };

  const pts = readings.slice(0, 14).reverse();
  const vals = pts.map(p => p.mgdl);
  const yMin = Math.min(60, ...vals) - 10;
  const yMax = Math.max(200, ...vals) + 10;

  const x = (i: number) =>
    pts.length === 1 ? pad.l + (w - pad.l - pad.r) / 2 : pad.l + (i * (w - pad.l - pad.r)) / (pts.length - 1);
  const y = (v: number) => pad.t + ((yMax - v) / (yMax - yMin)) * (h - pad.t - pad.b);

  const line = pts.map((p, i) => `${x(i)},${y(p.mgdl)}`).join(' ');
  const gridValues = [70, 130, 180, 250].filter(g => g > yMin && g < yMax);

  return (
    <View style={s.card}>
      <Text style={s.h}>Trend (last {pts.length})</Text>
      <Svg width={w} height={h}>
        <Rect
          x={pad.l}
          y={y(180)}
          width={w - pad.l - pad.r}
          height={y(80) - y(180)}
          fill={colors.green}
          opacity={0.12}
        />
        {gridValues.map(g => (
          <G key={g}>
            <Line x1={pad.l} x2={w - pad.r} y1={y(g)} y2={y(g)} stroke={colors.border} strokeWidth={1} />
            <SvgText x={pad.l - 4} y={y(g) + 4} fontSize={10} fill={colors.muted} textAnchor="end">
              {toDisplay(g, unit)}
            </SvgText>
          </G>
        ))}
        {pts.length > 1 && <Polyline points={line} fill="none" stroke={colors.primary} strokeWidth={2} />}
        {pts.map((p, i) => (
          <Circle
            key={p.id}
            cx={x(i)}
            cy={y(p.mgdl)}
            r={5}
            fill={classify(p.mgdl, p.timing).color}
            stroke="#fff"
            strokeWidth={1.5}
          />
        ))}
      </Svg>
      <Text style={s.small}>Shaded area is the general healthy range (80 to 180 mg/dL).</Text>
    </View>
  );
}

const Stat = ({ label, value }: { label: string; value: string }) => (
  <View style={{ alignItems: 'center', flex: 1 }}>
    <Text style={s.statValue}>{value}</Text>
    <Text style={s.small}>{label}</Text>
  </View>
);

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg },
  card: { backgroundColor: colors.card, borderRadius: 12, padding: 14, marginBottom: 12, borderWidth: 1, borderColor: colors.border },
  rowBetween: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 },
  h: { fontSize: 18, fontWeight: '700', color: colors.text },
  hint: { color: colors.muted, fontSize: 12, lineHeight: 17, marginBottom: 10 },
  unitRow: { flexDirection: 'row', borderWidth: 1, borderColor: colors.border, borderRadius: 8, overflow: 'hidden' },
  unit: { paddingHorizontal: 10, paddingVertical: 6, backgroundColor: '#fff' },
  unitOn: { backgroundColor: colors.primary },
  unitText: { fontSize: 13, color: colors.text },
  input: { backgroundColor: '#fff', borderRadius: 10, padding: 12, fontSize: 18, borderWidth: 1, borderColor: colors.border },
  label: { color: colors.muted, marginTop: 12, marginBottom: 6, fontSize: 13 },
  wrap: { flexDirection: 'row', flexWrap: 'wrap' },
  chip: { paddingHorizontal: 12, paddingVertical: 8, borderRadius: 20, backgroundColor: '#fff', borderWidth: 1, borderColor: colors.border, marginRight: 8, marginBottom: 8 },
  chipOn: { backgroundColor: colors.primary, borderColor: colors.primary },
  chipText: { color: colors.text, fontSize: 14 },
  sug: { backgroundColor: '#E8F5EE', borderRadius: 8, padding: 10, marginTop: 6 },
  sugText: { color: colors.text, fontSize: 15 },
  saveBtn: { backgroundColor: colors.primary, borderRadius: 10, padding: 14, alignItems: 'center', marginTop: 14 },
  saveText: { color: '#fff', fontSize: 16, fontWeight: '700' },
  result: { backgroundColor: '#fff', borderRadius: 12, padding: 14, marginBottom: 12, borderWidth: 2 },
  resultTitle: { fontSize: 18, fontWeight: '800' },
  resultMsg: { color: colors.text, marginTop: 6, fontSize: 15, lineHeight: 22 },
  statsRow: { flexDirection: 'row', marginTop: 10 },
  statValue: { fontSize: 20, fontWeight: '800', color: colors.primary },
  small: { color: colors.muted, fontSize: 12, marginTop: 4, lineHeight: 17 },
  empty: { textAlign: 'center', color: colors.muted, marginVertical: 20 },
  insightRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: colors.border },
  dotBig: { width: 12, height: 12, borderRadius: 6, marginRight: 10 },
  insightName: { fontSize: 15, fontWeight: '600', color: colors.text },
  insightVal: { fontSize: 16, fontWeight: '800' },
  hist: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', borderRadius: 12, padding: 12, marginBottom: 8, borderWidth: 1, borderColor: colors.border },
  bar: { width: 5, alignSelf: 'stretch', borderRadius: 3, marginRight: 12 },
  histValue: { fontSize: 17, fontWeight: '700', color: colors.text },
  histNote: { color: colors.text, fontSize: 13, marginTop: 4 },
  del: { color: colors.muted, fontSize: 18, paddingHorizontal: 6 },
  disclaimer: { color: colors.muted, fontSize: 12, textAlign: 'center', marginTop: 16, lineHeight: 18 },
});