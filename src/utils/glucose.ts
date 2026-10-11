import { Timing, Unit } from '../types';
import { colors } from '../constants/colors';

export const toDisplay = (mgdl: number, unit: Unit) =>
  unit === 'mg/dL' ? String(Math.round(mgdl)) : (mgdl / 18).toFixed(1);

export const fromDisplay = (value: number, unit: Unit) =>
  unit === 'mg/dL' ? Math.round(value) : Math.round(value * 18);

export interface Status {
  label: string;
  color: string;
  message: string;
}

// General adult targets (American Diabetes Association):
// before meals / fasting 80-130 mg/dL, after meals under 180 mg/dL.
// A doctor may set different targets for each person.
export function classify(mgdl: number, timing: Timing): Status {
  if (mgdl < 54) {
    return {
      label: 'Very low',
      color: colors.red,
      message:
        'Treat now: take 15g of fast sugar (3 teaspoons of sugar in water, or half a cup of juice or soft drink), recheck in 15 minutes. If not improving or the person is confused, get emergency help.',
    };
  }
  if (mgdl < 70) {
    return {
      label: 'Low',
      color: colors.red,
      message:
        'Take 15g of fast sugar (3 teaspoons of sugar in water, or half a cup of juice), then recheck in 15 minutes. Eat a small snack once it rises.',
    };
  }
  if (mgdl > 300) {
    return {
      label: 'Very high',
      color: colors.red,
      message:
        'Drink water, avoid hard exercise, and contact your doctor or clinic today. Go to a hospital urgently if there is vomiting, drowsiness, fast breathing or stomach pain.',
    };
  }
  const upper = timing === 'After meal' ? 180 : 130;
  if (mgdl > upper) {
    return {
      label: 'Above target',
      color: colors.yellow,
      message:
        'Above the usual target. Drink water, take a short walk if you feel well, and watch your portions. If this keeps happening, tell your doctor.',
    };
  }
  return {
    label: 'In range',
    color: colors.green,
    message: 'Good reading. Keep up your routine.',
  };
}