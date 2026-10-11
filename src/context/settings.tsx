import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Settings = {
  largeText: boolean;
  scale: number;
  setLargeText: (v: boolean) => void;
};

const KEY = 'largeText';

const SettingsContext = createContext<Settings>({
  largeText: false,
  scale: 1,
  setLargeText: () => {},
});

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [largeText, setLargeTextState] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem(KEY)
      .then(v => setLargeTextState(v === 'yes'))
      .catch(() => {});
  }, []);

  const setLargeText = (v: boolean) => {
    setLargeTextState(v);
    AsyncStorage.setItem(KEY, v ? 'yes' : 'no').catch(() => {});
  };

  return (
    <SettingsContext.Provider value={{ largeText, scale: largeText ? 1.25 : 1, setLargeText }}>
      {children}
    </SettingsContext.Provider>
  );
}

export const useSettings = () => useContext(SettingsContext);