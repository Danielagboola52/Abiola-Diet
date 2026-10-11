export type Level = 'low' | 'medium' | 'high';
export type Verdict = 'green' | 'yellow' | 'red';
export type Price = 1 | 2 | 3;

export interface Food {
  id: string;
  name: string;
  localNames?: string;
  category: 'Beans & Legumes' | 'Vegetables' | 'Grains & Tubers' | 'Proteins' | 'Fruits' | 'Oils & Seasoning';
  verdict: Verdict;
  gi: Level;
  carbs: Level;
  price: Price;
  portion: string;
  note: string;
}

export type Meal = 'Breakfast' | 'Lunch' | 'Dinner' | 'Snack' | 'Soup';

export interface Recipe {
  id: string;
  name: string;
  meal: Meal;
  time: number;            // minutes
  servings: number;
  budget: Price;           // 1 = cheap, 3 = pricey
  gi: Level;
  carbs: number;           // grams per serving (approx.)
  calories: number;        // per serving (approx.)
  ingredients: string[];
  steps: string[];
  tip: string;
}

export type Timing = 'Fasting' | 'Before meal' | 'After meal' | 'Bedtime' | 'Random';
export type Unit = 'mg/dL' | 'mmol/L';

export interface Reading {
  id: string;
  mgdl: number;      // always stored in mg/dL
  timing: Timing;
  note: string;
  date: string;      // ISO string
  meal?: string;     // what the person ate (optional)
  recipeId?: string; // set when they picked an app recipe
}