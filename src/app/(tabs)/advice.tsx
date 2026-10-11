import { useState } from 'react';
import { View, Text, ScrollView, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../constants/colors';
import { sections, emergency, plateTips, Tip } from '../../data/advice';

const tipStyle = {
  do: { icon: 'checkmark-circle' as const, color: colors.green },
  dont: { icon: 'close-circle' as const, color: colors.red },
  info: { icon: 'information-circle' as const, color: colors.primary },
};

export default function AdviceScreen() {
  const [open, setOpen] = useState<string | null>(null);
  const [mode, setMode] = useState<'low' | 'high'>('low');
  const e = emergency[mode];

  return (
    <ScrollView style={s.container} contentContainerStyle={{ padding: 12, paddingBottom: 40 }}>
      {/* Disclaimer */}
      <View style={s.banner}>
        <Ionicons name="shield-checkmark" size={20} color={colors.primary} />
        <Text style={s.bannerText}>
          This information is general guidance for adults with diabetes. It does not replace advice from your doctor.
        </Text>
      </View>

      {/* Emergency card */}
      <View style={s.emergency}>
        <View style={s.emRow}>
          <Ionicons name="warning" size={22} color={colors.red} />
          <Text style={s.emHeading}>Emergency guide</Text>
        </View>
        <View style={s.toggle}>
          {(['low', 'high'] as const).map(m => (
            <Pressable key={m} onPress={() => setMode(m)} style={[s.toggleBtn, mode === m && s.toggleOn]}>
              <Text style={[s.toggleText, mode === m && { color: '#fff' }]}>
                {m === 'low' ? 'Low sugar' : 'High sugar'}
              </Text>
            </Pressable>
          ))}
        </View>

        <Text style={s.emTitle}>{e.title}</Text>
        <Text style={s.emLabel}>Signs</Text>
        <Text style={s.body}>{e.signs}</Text>
        <Text style={s.emLabel}>What to do</Text>
        {e.steps.map((st, i) => (
          <Text key={i} style={s.body}>{i + 1}. {st}</Text>
        ))}
        <View style={s.danger}>
          <Text style={s.dangerText}>{e.danger}</Text>
        </View>
      </View>

      {/* Plate method */}
      <View style={s.card}>
        <Text style={s.h}>The plate method</Text>
        <View style={s.plate}>
          <View style={[s.plateBlock, { flex: 2, backgroundColor: '#CFEBD9' }]}>
            <Text style={s.plateBig}>½</Text>
            <Text style={s.plateText}>Vegetables</Text>
          </View>
          <View style={{ flex: 1 }}>
            <View style={[s.plateBlock, { flex: 1, backgroundColor: '#FBE3B8' }]}>
              <Text style={s.plateBig}>¼</Text>
              <Text style={s.plateText}>Protein</Text>
            </View>
            <View style={[s.plateBlock, { flex: 1, backgroundColor: '#F4CBB5' }]}>
              <Text style={s.plateBig}>¼</Text>
              <Text style={s.plateText}>Starch</Text>
            </View>
          </View>
        </View>
        {plateTips.map((t, i) => (
          <Text key={i} style={s.body}>• {t}</Text>
        ))}
      </View>

      {/* Sections */}
      {sections.map(sec => {
        const isOpen = open === sec.id;
        return (
          <View key={sec.id} style={s.card}>
            <Pressable style={s.secHeader} onPress={() => setOpen(isOpen ? null : sec.id)}>
              <Ionicons name={sec.icon} size={22} color={colors.primary} />
              <Text style={s.secTitle}>{sec.title}</Text>
              <Ionicons name={isOpen ? 'chevron-up' : 'chevron-down'} size={20} color={colors.muted} />
            </Pressable>
            {isOpen && (
              <View style={{ marginTop: 10 }}>
                {sec.intro ? <Text style={s.intro}>{sec.intro}</Text> : null}
                {sec.items.map((it: Tip, i) => (
                  <View key={i} style={s.tipRow}>
                    <Ionicons name={tipStyle[it.t].icon} size={20} color={tipStyle[it.t].color} style={{ marginTop: 2 }} />
                    <Text style={s.tipText}>{it.text}</Text>
                  </View>
                ))}
              </View>
            )}
          </View>
        );
      })}

      <Text style={s.footer}>
        Sources: American Diabetes Association Standards of Care, International Diabetes Federation, and World Health Organization guidance, adapted for Nigerian foods and lifestyle. Targets can differ for each person. Always follow your own doctor's advice.
      </Text>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg },
  banner: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#E8F5EE', borderRadius: 12, padding: 12, marginBottom: 12 },
  bannerText: { flex: 1, marginLeft: 10, color: colors.text, fontSize: 13, lineHeight: 18 },
  emergency: { backgroundColor: '#FFF5F5', borderRadius: 12, padding: 14, marginBottom: 12, borderWidth: 1.5, borderColor: colors.red },
  emRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  emHeading: { fontSize: 18, fontWeight: '800', color: colors.red, marginLeft: 8 },
  toggle: { flexDirection: 'row', borderWidth: 1, borderColor: colors.red, borderRadius: 10, overflow: 'hidden', marginBottom: 12 },
  toggleBtn: { flex: 1, paddingVertical: 10, alignItems: 'center', backgroundColor: '#fff' },
  toggleOn: { backgroundColor: colors.red },
  toggleText: { fontWeight: '700', color: colors.red },
  emTitle: { fontSize: 16, fontWeight: '700', color: colors.text, marginBottom: 6 },
  emLabel: { fontWeight: '700', color: colors.red, marginTop: 10, marginBottom: 4 },
  body: { fontSize: 15, color: colors.text, lineHeight: 22, marginBottom: 4 },
  danger: { backgroundColor: colors.red, borderRadius: 10, padding: 12, marginTop: 12 },
  dangerText: { color: '#fff', fontSize: 14, lineHeight: 20, fontWeight: '600' },
  card: { backgroundColor: colors.card, borderRadius: 12, padding: 14, marginBottom: 12, borderWidth: 1, borderColor: colors.border },
  h: { fontSize: 18, fontWeight: '700', color: colors.text, marginBottom: 10 },
  plate: { flexDirection: 'row', height: 140, borderRadius: 14, overflow: 'hidden', marginBottom: 12, borderWidth: 1, borderColor: colors.border },
  plateBlock: { alignItems: 'center', justifyContent: 'center' },
  plateBig: { fontSize: 24, fontWeight: '800', color: colors.text },
  plateText: { fontSize: 13, fontWeight: '600', color: colors.text },
  secHeader: { flexDirection: 'row', alignItems: 'center' },
  secTitle: { flex: 1, fontSize: 17, fontWeight: '700', color: colors.text, marginLeft: 10 },
  intro: { color: colors.muted, fontSize: 14, lineHeight: 20, marginBottom: 10 },
  tipRow: { flexDirection: 'row', marginBottom: 10 },
  tipText: { flex: 1, marginLeft: 10, fontSize: 15, lineHeight: 22, color: colors.text },
  footer: { color: colors.muted, fontSize: 12, textAlign: 'center', marginTop: 8, lineHeight: 18 },
});