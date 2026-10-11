import { Pressable, Text } from 'react-native';
import { useSettings } from '../context/settings';
import { colors } from '../constants/colors';

export default function TextSizeButton() {
  const { largeText, setLargeText } = useSettings();
  return (
    <Pressable
      onPress={() => setLargeText(!largeText)}
      accessibilityRole="button"
      accessibilityLabel={largeText ? 'Switch to normal text size' : 'Switch to larger text size'}
      style={{
        marginRight: 14,
        paddingHorizontal: 12,
        paddingVertical: 5,
        borderRadius: 16,
        backgroundColor: largeText ? '#FFFFFF' : 'rgba(255,255,255,0.22)',
      }}
    >
      <Text style={{ color: largeText ? colors.primary : '#FFFFFF', fontWeight: '700', fontSize: 16 }}>Aa</Text>
    </Pressable>
  );
}