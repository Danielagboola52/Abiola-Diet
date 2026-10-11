import { Food } from '../types';

const baseFoods: Food[] = [
  { id: 'f1', name: 'Brown Beans', localNames: 'Ewa / Akidi', category: 'Beans & Legumes', verdict: 'green', gi: 'low', carbs: 'medium', price: 1, portion: '1 small ladle cooked', note: 'High in fibre and protein. Slows sugar rise.' },
  { id: 'f2', name: 'Moi Moi Beans (Honey/Oloyin)', category: 'Beans & Legumes', verdict: 'green', gi: 'low', carbs: 'medium', price: 1, portion: '1 wrap', note: 'Steamed, not fried. Go easy on oil.' },
  { id: 'f3', name: 'Ugwu (Pumpkin Leaf)', localNames: 'Ugu', category: 'Vegetables', verdict: 'green', gi: 'low', carbs: 'low', price: 1, portion: 'Eat freely', note: 'Very low carb and rich in vitamins.' },
  { id: 'f4', name: 'Efo / Spinach', localNames: 'Shoko, Tete', category: 'Vegetables', verdict: 'green', gi: 'low', carbs: 'low', price: 1, portion: 'Eat freely', note: 'Great base for soups. Use less palm oil.' },
  { id: 'f5', name: 'Okra', localNames: 'Ila / Okwuru', category: 'Vegetables', verdict: 'green', gi: 'low', carbs: 'low', price: 1, portion: 'Eat freely', note: 'Fibre-rich and filling.' },
  { id: 'f6', name: 'Garden Egg', localNames: 'Igba / Anyara', category: 'Vegetables', verdict: 'green', gi: 'low', carbs: 'low', price: 1, portion: 'Eat freely', note: 'Low carb. Good raw or in sauce.' },
  { id: 'f7', name: 'Bitter Leaf', localNames: 'Onugbu / Ewuro', category: 'Vegetables', verdict: 'green', gi: 'low', carbs: 'low', price: 1, portion: 'Eat freely', note: 'Commonly used in Nigerian soups. Wash well.' },
  { id: 'f8', name: 'Tomatoes & Peppers', localNames: 'Tomati, Tatashe', category: 'Vegetables', verdict: 'green', gi: 'low', carbs: 'low', price: 2, portion: 'Normal cooking amounts', note: 'Base for most stews.' },
  { id: 'f9', name: 'Unripe Plantain', category: 'Grains & Tubers', verdict: 'yellow', gi: 'medium', carbs: 'medium', price: 1, portion: '1 small finger, boiled', note: 'Better than ripe plantain. Boil or steam, avoid frying.' },
  { id: 'f10', name: 'Oats', category: 'Grains & Tubers', verdict: 'green', gi: 'medium', carbs: 'medium', price: 2, portion: '3 tablespoons dry', note: 'Choose plain oats, no added sugar.' },
  { id: 'f11', name: 'Brown Rice / Ofada Rice', category: 'Grains & Tubers', verdict: 'yellow', gi: 'medium', carbs: 'high', price: 2, portion: '1/2 cup cooked', note: 'Better than white rice but still measure it.' },
  { id: 'f12', name: 'Eba (Garri)', category: 'Grains & Tubers', verdict: 'red', gi: 'high', carbs: 'high', price: 1, portion: 'Small ball, rarely', note: 'Raises sugar fast. Swap for oat or unripe plantain swallow.' },
  { id: 'f13', name: 'Egusi (Melon Seed)', category: 'Oils & Seasoning', verdict: 'yellow', gi: 'low', carbs: 'low', price: 2, portion: '2 tablespoons ground', note: 'Nutritious but high in fat. Watch quantity.' },
  { id: 'f14', name: 'Ogbono', category: 'Oils & Seasoning', verdict: 'yellow', gi: 'low', carbs: 'low', price: 2, portion: '1 tablespoon ground', note: 'Helps slow sugar absorption. Use little oil.' },
  { id: 'f15', name: 'Mackerel (Titus) / Catfish', category: 'Proteins', verdict: 'green', gi: 'low', carbs: 'low', price: 2, portion: '1 palm-sized piece', note: 'Grill, boil or steam rather than fry.' },
  { id: 'f16', name: 'Eggs', category: 'Proteins', verdict: 'green', gi: 'low', carbs: 'low', price: 2, portion: '1-2 boiled', note: 'Cheap, filling protein.' },
  { id: 'f17', name: 'Groundnuts (Unsalted)', localNames: 'Epa / Ẹ̀pà', category: 'Proteins', verdict: 'yellow', gi: 'low', carbs: 'low', price: 1, portion: 'A small handful', note: 'Good snack in small amounts.' },
  { id: 'f18', name: 'Watermelon', category: 'Fruits', verdict: 'red', gi: 'high', carbs: 'medium', price: 1, portion: 'Small slice, rarely', note: 'Sweet and fast acting. Prefer garden fruits like guava or pawpaw.' },
];
import { moreFoods } from './foods2';

const existingNames = new Set(baseFoods.map(f => f.name.toLowerCase()));

export const foods: Food[] = [
  ...baseFoods,
  ...moreFoods.filter(f => !existingNames.has(f.name.toLowerCase())),
];