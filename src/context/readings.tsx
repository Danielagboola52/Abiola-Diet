import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Reading, Unit } from '../types';

const READINGS_KEY = 'readings';
const UNIT_KEY = 'unit';

type Ctx = {
  readings: Reading[];
  unit: Unit;
  addReading: (r: Reading) => void;
  removeReading: (id: string) => void;
  setUnit: (u: Unit) => void;
};

const ReadingsCtx = createContext<Ctx>({
  readings: [],
  unit: 'mg/dL',
  addReading: () => {},
  removeReading: () => {},
  setUnit: () => {},
});

export const useReadings = () => useContext(ReadingsCtx);

export function ReadingsProvider({ children }: { children: ReactNode }) {
  const [readings, setReadings] = useState<Reading[]>([]);
  const [unit, setUnitState] = useState<Unit>('mg/dL');

  useEffect(() => {
    AsyncStorage.getItem(READINGS_KEY).then(v => {
      if (v) setReadings(JSON.parse(v));
    });
    AsyncStorage.getItem(UNIT_KEY).then(v => {
      if (v === 'mg/dL' || v === 'mmol/L') setUnitState(v);
    });
  }, []);

  const save = (next: Reading[]) => {
    setReadings(next);
    AsyncStorage.setItem(READINGS_KEY, JSON.stringify(next));
  };

  const addReading = (r: Reading) => save([r, ...readings]);
  const removeReading = (id: string) => save(readings.filter(r => r.id !== id));

  const setUnit = (u: Unit) => {
    setUnitState(u);
    AsyncStorage.setItem(UNIT_KEY, u);
  };

  return (
    <ReadingsCtx.Provider value={{ readings, unit, addReading, removeReading, setUnit }}>
      {children}
    </ReadingsCtx.Provider>
  );
}