import { Stack } from 'expo-router';
import { FavoritesProvider } from '../context/favorites';
import { ReadingsProvider } from '../context/readings';
import { SettingsProvider } from '../context/settings';
import { PlannerProvider } from '../context/plan';
import { colors } from '../constants/colors';
import DisclaimerGate from '../components/DisclaimerGate';

export default function RootLayout() {
  return (
    <SettingsProvider>
      <FavoritesProvider>
        <ReadingsProvider>
          <PlannerProvider>
            <DisclaimerGate>
              <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen
                  name="recipe/[id]"
                  options={{
                    title: 'Recipe',
                    headerStyle: { backgroundColor: colors.primary },
                    headerTintColor: '#fff',
                  }}
                />
              </Stack>
            </DisclaimerGate>
          </PlannerProvider>
        </ReadingsProvider>
      </FavoritesProvider>
    </SettingsProvider>
  );
}