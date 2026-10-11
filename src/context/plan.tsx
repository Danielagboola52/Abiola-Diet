import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
export const SLOTS = ['Breakfast', 'Lunch', 'Dinner', 'Snack'];

const PLAN_KEY = 'weeklyPlan';
const CHECKED_KEY = 'shoppingChecked';

type PlannerCtx = {
  plan: Record<string, string>; // key "Monday|Breakfast" -> recipe id
  checked: Record<string, boolean>; // key = ingredient text in lower case
  setMeal: (day: string, slot: string, recipeId: string | null) => void;
  clearPlan: () => void;
  toggleChecked: (key: string) => void;
  clearChecked: () => void;
};

const PlannerContext = createContext<PlannerCtx>({
  plan: {},
  checked: {},
  setMeal: () => {},
  clearPlan: () => {},
  toggleChecked: () => {},
  clearChecked: () => {},
});

export function PlannerProvider({ children }: { children: ReactNode }) {
  const [plan, setPlan] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  useEffect(() => {
    AsyncStorage.getItem(PLAN_KEY)
      .then(v => {
        if (v) setPlan(JSON.parse(v));
      })
      .catch(() => {});
    AsyncStorage.getItem(CHECKED_KEY)
      .then(v => {
        if (v) setChecked(JSON.parse(v));
      })
      .catch(() => {});
  }, []);

  const savePlan = (next: Record<string, string>) => {
    AsyncStorage.setItem(PLAN_KEY, JSON.stringify(next)).catch(() => {});
  };
  const saveChecked = (next: Record<string, boolean>) => {
    AsyncStorage.setItem(CHECKED_KEY, JSON.stringify(next)).catch(() => {});
  };

  const setMeal = (day: string, slot: string, recipeId: string | null) => {
    const next = { ...plan };
    const k = `${day}|${slot}`;
    if (recipeId) next[k] = recipeId;
    else delete next[k];
    setPlan(next);
    savePlan(next);
  };

  const clearPlan = () => {
    setPlan({});
    setChecked({});
    savePlan({});
    saveChecked({});
  };

  const toggleChecked = (key: string) => {
    const next = { ...checked, [key]: !checked[key] };
    setChecked(next);
    saveChecked(next);
  };

  const clearChecked = () => {
    setChecked({});
    saveChecked({});
  };

  return (
    <PlannerContext.Provider value={{ plan, checked, setMeal, clearPlan, toggleChecked, clearChecked }}>
      {children}
    </PlannerContext.Provider>
  );
}

export const usePlanner = () => useContext(PlannerContext);