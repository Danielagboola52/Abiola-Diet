import { useEffect, useState, ReactNode } from 'react';
import { View, Text, Pressable, ScrollView, StyleSheet, StatusBar, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../constants/colors';

// Change this value (e.g. to 'disclaimerAccepted_test1') if you want to see the screen again while testing.
const KEY = 'disclaimerAccepted';

const points = [
  'Abiola Diet gives general food and lifestyle information for people living with diabetes. It is not medical advice and does not replace your doctor, dietitian or pharmacist.',
  'Never change, skip or stop your medication or insulin because of anything in this app. Always speak to your doctor first.',
  'Food and nutrition values are approximate and will vary with brands, cooking methods and portion sizes.',
  'Blood sugar readings you enter must come from a glucometer. This app cannot measure your sugar and cannot diagnose any condition.',
  'If your sugar is very low or very high, or you feel very unwell, get medical help immediately. Do not wait for the app.',
  'Check every recipe for ingredients you are allergic to, especially groundnuts, eggs, fish and wheat.',
];

export default function DisclaimerGate({ children }: { children: ReactNode }) {
  const [status, setStatus] = useState<'loading' | 'show' | 'ok'>('loading');
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem(KEY)
      .then(v => setStatus(v === 'yes' ? 'ok' : 'show'))
      .catch(() => setStatus('show'));
  }, []);

  const accept = async () => {
    try {
      await AsyncStorage.setItem(KEY, 'yes');
    } catch {
      // If saving fails we still let the person in; they will just see this once more next time.
    }
    setStatus('ok');
  };

  if (status === 'ok') return <>{children}</>;

  if (status === 'loading') {
    return (
      <View style={[styles.screen, styles.center]}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.iconWrap}>
          <Ionicons name="medical" size={40} color="#FFFFFF" />
        </View>
        <Text style={styles.title}>Welcome to Abiola Diet</Text>
        <Text style={styles.subtitle}>Please read this before you continue</Text>

        <View style={styles.card}>
          {points.map((p, i) => (
            <View key={i} style={styles.row}>
              <Ionicons name="checkmark-circle" size={20} color={colors.primary} style={styles.rowIcon} />
              <Text style={styles.rowText}>{p}</Text>
            </View>
          ))}
        </View>

        <Pressable style={styles.checkRow} onPress={() => setChecked(!checked)}>
          <Ionicons
            name={checked ? 'checkbox' : 'square-outline'}
            size={26}
            color={checked ? colors.primary : colors.muted}
          />
          <Text style={styles.checkText}>I have read and understood this information.</Text>
        </Pressable>

        <Pressable
          style={[styles.button, !checked && styles.buttonOff]}
          disabled={!checked}
          onPress={accept}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.bg },
  center: { alignItems: 'center', justifyContent: 'center' },
  content: { padding: 20, paddingTop: (StatusBar.currentHeight ?? 24) + 16, paddingBottom: 40 },
  iconWrap: {
    alignSelf: 'center', width: 76, height: 76, borderRadius: 38,
    backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center', marginBottom: 14,
  },
  title: { fontSize: 24, fontWeight: '700', color: colors.text, textAlign: 'center' },
  subtitle: { fontSize: 15, color: colors.muted, textAlign: 'center', marginTop: 4, marginBottom: 18 },
  card: {
    backgroundColor: colors.card, borderRadius: 14, padding: 16,
    borderWidth: 1, borderColor: colors.border,
  },
  row: { flexDirection: 'row', marginBottom: 14 },
  rowIcon: { marginRight: 10, marginTop: 1 },
  rowText: { flex: 1, fontSize: 15, lineHeight: 22, color: colors.text },
  checkRow: { flexDirection: 'row', alignItems: 'center', marginTop: 20, marginBottom: 16 },
  checkText: { flex: 1, marginLeft: 10, fontSize: 15, color: colors.text },
  button: { backgroundColor: colors.primary, paddingVertical: 15, borderRadius: 12, alignItems: 'center' },
  buttonOff: { opacity: 0.4 },
  buttonText: { color: '#FFFFFF', fontSize: 17, fontWeight: '700' },
});