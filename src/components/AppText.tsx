import { Text as RNText, TextProps, StyleSheet } from 'react-native';
import { useSettings } from '../context/settings';

// Drop-in replacement for React Native's Text that follows the in-app "larger text" setting.
export function Text({ style, ...rest }: TextProps) {
  const { scale } = useSettings();
  const flat = StyleSheet.flatten(style) || {};
  const size = (flat.fontSize ?? 14) * scale;
  const lineHeight = flat.lineHeight ? flat.lineHeight * scale : undefined;
  return <RNText {...rest} style={[flat, { fontSize: size }, lineHeight ? { lineHeight } : null]} />;
}