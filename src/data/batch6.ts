import { Recipe } from '../types';

export const batch6: Recipe[] = [
  // ---------- VEGETARIAN ----------
  {
    id: 'b6-01', name: 'Vegetable Egg Muffins', meal: 'Breakfast', time: 25, servings: 4, budget: 2, gi: 'low', carbs: 4, calories: 120,
    ingredients: ['4 eggs', '1 small onion, chopped', '1 tomato, diced', '1 handful ugu or spinach, chopped', '1 small pepper', 'Pinch of salt', '1 tsp oil for greasing'],
    steps: ['Heat oven or a covered pot to medium heat.', 'Beat the eggs and mix in all the vegetables and salt.', 'Lightly grease a muffin tray or small cups and pour in the mixture.', 'Bake or steam for 15 to 20 minutes until firm.'],
    tip: 'Eggs and vegetables give protein with almost no sugar. Make extra for the next day.'
  },
  {
    id: 'b6-02', name: 'Ugwu and Beans Porridge', meal: 'Lunch', time: 60, servings: 4, budget: 1, gi: 'low', carbs: 30, calories: 240,
    ingredients: ['2 cups brown or honey beans', '2 handfuls ugwu, sliced', '1 onion', '1 tbsp palm oil', '1 tbsp ground crayfish', '2 pepper', 'Salt to taste'],
    steps: ['Boil the beans until very soft.', 'Add onion, pepper, crayfish and salt.', 'Stir in the palm oil and simmer for 5 minutes.', 'Add the ugwu, cook for 3 minutes and serve.'],
    tip: 'Beans are slow-release carbs. Keep to one cup serving and skip the added garri.'
  },
  {
    id: 'b6-03', name: 'Garden Egg Sauce with Boiled Egg', meal: 'Lunch', time: 30, servings: 3, budget: 1, gi: 'low', carbs: 10, calories: 170,
    ingredients: ['6 garden eggs, diced', '3 boiled eggs', '1 onion', '2 tomatoes', '1 tsp palm oil', '1 pepper', 'Salt to taste'],
    steps: ['Fry onion lightly in the palm oil.', 'Add blended tomato and pepper and cook for 8 minutes.', 'Add the garden eggs and simmer until soft.', 'Serve with the boiled eggs on top.'],
    tip: 'Garden egg is high in fibre and good for blood sugar control.'
  },
  {
    id: 'b6-04', name: 'Okra and Tomato Stir-fry', meal: 'Side', time: 15, servings: 3, budget: 1, gi: 'low', carbs: 7, calories: 70,
    ingredients: ['15 fresh okra, sliced', '2 tomatoes, diced', '1 onion', '1 tsp oil', '1 pepper', 'Pinch of salt'],
    steps: ['Heat the oil and soften the onion.', 'Add tomato and pepper and cook for 3 minutes.', 'Add okra and stir for 4 to 5 minutes. Do not overcook.'],
    tip: 'Okra slime (soluble fibre) slows how fast sugar enters the blood.'
  },
  {
    id: 'b6-05', name: 'Lentil and Spinach Stew', meal: 'Dinner', time: 40, servings: 4, budget: 2, gi: 'low', carbs: 24, calories: 200,
    ingredients: ['1 cup lentils', '2 handfuls spinach (efo)', '2 tomatoes', '1 onion', '1 tsp palm oil', '2 cups water', 'Pepper and salt'],
    steps: ['Boil the lentils in water for 20 minutes until soft.', 'Add blended tomato, onion and pepper.', 'Add the palm oil and simmer for 8 minutes.', 'Stir in spinach and cook for 2 minutes.'],
    tip: 'Lentils are filling and low GI. Serve with a salad rather than extra starch.'
  },
  {
    id: 'b6-06', name: 'Cabbage and Carrot Stir-fry', meal: 'Side', time: 12, servings: 4, budget: 1, gi: 'low', carbs: 8, calories: 65,
    ingredients: ['1/4 cabbage, shredded', '1 carrot, sliced thin', '1 onion', '1 tsp oil', 'Pinch of salt', '1 small pepper'],
    steps: ['Heat the oil in a pan.', 'Add onion and carrot and stir for 2 minutes.', 'Add cabbage and pepper and cook for 3 minutes, keeping it crunchy.'],
    tip: 'A cheap side that adds fibre and fills the plate so you eat less starch.'
  },
  {
    id: 'b6-07', name: 'Tofu Pepper Saute', meal: 'Dinner', time: 20, servings: 2, budget: 3, gi: 'low', carbs: 8, calories: 190,
    ingredients: ['200 g tofu, cubed', '1 green bell pepper', '1 onion', '1 tomato', '1 tsp oil', 'Salt and pepper'],
    steps: ['Pat the tofu dry and brown it lightly in the oil.', 'Add onion and peppers and cook for 4 minutes.', 'Add tomato and salt and cook for 3 more minutes.'],
    tip: 'Tofu is a low-carb plant protein, useful on days you want no meat.'
  },
  {
    id: 'b6-08', name: 'Chickpea Salad Nigerian Style', meal: 'Lunch', time: 15, servings: 3, budget: 2, gi: 'low', carbs: 25, calories: 210,
    ingredients: ['1 cup cooked chickpeas', '1 cucumber, diced', '2 tomatoes, diced', '1 small onion', '1 tsp oil', 'Juice of 1/2 lime', 'Salt and pepper'],
    steps: ['Mix chickpeas with cucumber, tomato and onion.', 'Add oil, lime juice, salt and pepper.', 'Toss well and serve cold.'],
    tip: 'Cooked chickpeas have a low GI. Use about one cup per person.'
  },
  {
    id: 'b6-09', name: 'Light Ugu Soup', meal: 'Soup', time: 30, servings: 4, budget: 2, gi: 'low', carbs: 6, calories: 130,
    ingredients: ['3 handfuls ugu, sliced', '1 tbsp palm oil', '1 onion', '2 tbsp ground crayfish', '2 pepper', '1 stock cube or salt', '1 cup water'],
    steps: ['Heat the water with onion, pepper and crayfish.', 'Add palm oil and simmer for 5 minutes.', 'Add the ugu and cook for 3 minutes.'],
    tip: 'Use less palm oil than usual. Serve with a measured Side portion.'
  },
  {
    id: 'b6-10', name: 'Beans and Unripe Plantain Porridge', meal: 'Lunch', time: 55, servings: 4, budget: 1, gi: 'medium', carbs: 38, calories: 270,
    ingredients: ['1.5 cups beans', '1 medium unripe plantain, cubed', '1 tbsp palm oil', '1 onion', '1 tbsp crayfish', 'Pepper and salt', 'Handful of ugu'],
    steps: ['Boil beans until half soft.', 'Add plantain, onion, pepper, crayfish and salt.', 'Cook until both are soft, then add the palm oil.', 'Stir in the ugu and serve.'],
    tip: 'Unripe plantain has a lower GI than ripe. Keep portion to one cup.'
  },
  {
    id: 'b6-11', name: 'Cucumber Tomato Salad with Egg', meal: 'Lunch', time: 15, servings: 2, budget: 1, gi: 'low', carbs: 8, calories: 180,
    ingredients: ['2 boiled eggs', '1 cucumber', '2 tomatoes', '1 small onion', 'Lettuce or cabbage', 'Juice of 1/2 lime', 'Salt'],
    steps: ['Chop all vegetables and place in a bowl.', 'Add sliced boiled eggs.', 'Dress with lime juice and a pinch of salt.'],
    tip: 'Skip salad cream or use only a teaspoon, as most contain added sugar.'
  },
  {
    id: 'b6-12', name: 'Stuffed Peppers with Beans', meal: 'Dinner', time: 40, servings: 4, budget: 2, gi: 'low', carbs: 20, calories: 190,
    ingredients: ['4 large bell peppers', '1 cup cooked beans, mashed', '1 onion', '1 tomato', '1 tsp oil', 'Salt and pepper'],
    steps: ['Cut the tops off the peppers and remove seeds.', 'Mix beans with onion, tomato, oil and seasoning.', 'Fill the peppers and place the tops back.', 'Bake or steam for 20 to 25 minutes.'],
    tip: 'A full, colourful plate with fibre and protein.'
  },
  {
    id: 'b6-13', name: 'Zobo Without Sugar', meal: 'Snack', time: 30, servings: 6, budget: 1, gi: 'low', carbs: 2, calories: 10,
    ingredients: ['2 handfuls dried zobo leaves', '1 small piece ginger', '3 cloves', '1.5 litres water', 'Slices of lime or pineapple peel (optional)'],
    steps: ['Boil the leaves with ginger and cloves for 15 minutes.', 'Strain and let it cool.', 'Chill and drink without sugar. Add lime for taste.'],
    tip: 'Never add sugar or sweeteners with sugar. Ginger and cloves give flavour.'
  },
  {
    id: 'b6-14', name: 'Boiled Groundnuts (Small Handful)', meal: 'Snack', time: 40, servings: 4, budget: 1, gi: 'low', carbs: 6, calories: 160,
    ingredients: ['1 cup raw groundnuts in shell', 'Water', 'Pinch of salt'],
    steps: ['Wash the groundnuts and boil with a little salt for 30 minutes.', 'Drain and cool.', 'Eat one small handful (about 25 g) only.'],
    tip: 'Healthy fats, but high in calories. Avoid if allergic to groundnuts.'
  },
  {
    id: 'b6-15', name: 'Egg and Cucumber Snack Plate', meal: 'Snack', time: 10, servings: 1, budget: 1, gi: 'low', carbs: 4, calories: 110,
    ingredients: ['1 boiled egg', '1/2 cucumber, sliced', '1 tomato, sliced', 'Pinch of salt and pepper'],
    steps: ['Boil the egg for 10 minutes and peel.', 'Arrange with cucumber and tomato.', 'Season lightly.'],
    tip: 'A quick snack that will not raise sugar. Good before bedtime.'
  },
  {
    id: 'b6-16', name: 'Onion and Pepper Omelette', meal: 'Breakfast', time: 10, servings: 1, budget: 1, gi: 'low', carbs: 4, calories: 190,
    ingredients: ['2 eggs', '1/2 onion, chopped', '1/2 tomato, diced', '1 small pepper', '1 tsp oil', 'Pinch of salt'],
    steps: ['Beat the eggs with salt.', 'Heat the oil, soften onion and pepper for 1 minute.', 'Pour in the eggs and add tomato.', 'Cook until set, fold and serve.'],
    tip: 'Pair with 1 slice of whole wheat bread or a small boiled yam, not both.'
  },
  {
    id: 'b6-17', name: 'Spinach Moi Moi', meal: 'Snack', time: 60, servings: 6, budget: 1, gi: 'low', carbs: 15, calories: 140,
    ingredients: ['2 cups peeled beans', '1 handful spinach, chopped', '1 onion', '2 pepper', '1 tbsp palm oil', '1 tbsp crayfish', 'Salt', 'Leaves or small containers'],
    steps: ['Blend beans with onion and pepper to a smooth paste.', 'Add oil, crayfish, salt and spinach.', 'Pour into leaves or containers.', 'Steam for 45 minutes until firm.'],
    tip: 'Moi moi is a protein-rich steamed food. Eat one wrap, not three.'
  },
  {
    id: 'b6-18', name: 'Mushroom Pepper Soup', meal: 'Soup', time: 25, servings: 3, budget: 2, gi: 'low', carbs: 7, calories: 90,
    ingredients: ['200 g mushrooms, sliced', '1 tbsp pepper soup spice', '1 onion', 'Scent leaf or basil', '2 cups water', 'Salt'],
    steps: ['Boil water with onion and pepper soup spice.', 'Add mushrooms and cook for 10 minutes.', 'Add scent leaf and salt, simmer for 2 minutes.'],
    tip: 'Very low carb and warming. Good for evenings or when you feel unwell.'
  },
  {
    id: 'b6-19', name: 'Mushroom Stir-fry', meal: 'Side', time: 12, servings: 2, budget: 2, gi: 'low', carbs: 5, calories: 80,
    ingredients: ['250 g mushrooms', '1 onion', '1 clove garlic', '1 tsp oil', 'Pinch of salt and pepper'],
    steps: ['Heat the oil and fry onion and garlic for 1 minute.', 'Add mushrooms and cook for 6 to 8 minutes.', 'Season and serve hot.'],
    tip: 'A tasty low-carb side for any protein dish.'
  },
  {
    id: 'b6-20', name: 'Waterleaf and Egg Sauce', meal: 'Dinner', time: 20, servings: 3, budget: 1, gi: 'low', carbs: 6, calories: 160,
    ingredients: ['3 handfuls waterleaf, chopped', '3 eggs', '2 tomatoes', '1 onion', '1 tsp palm oil', 'Pepper and salt'],
    steps: ['Squeeze excess water from the waterleaf.', 'Fry onion, tomato and pepper in the oil for 5 minutes.', 'Add waterleaf and cook for 3 minutes.', 'Break in the eggs and scramble gently.'],
    tip: 'Low in calories and carbs, good for dinner.'
  },

  // ---------- BUDGET ----------
  {
    id: 'b6-21', name: 'Budget Beans Pottage with Ugwu', meal: 'Dinner', time: 60, servings: 5, budget: 1, gi: 'low', carbs: 28, calories: 230,
    ingredients: ['2 cups beans', '2 handfuls ugwu', '1 onion', '1 tbsp palm oil', '1 tbsp crayfish', 'Salt and pepper'],
    steps: ['Boil beans until soft.', 'Add onion, pepper, salt and crayfish.', 'Add palm oil and cook for 5 minutes.', 'Add ugwu and cook for 2 minutes.'],
    tip: 'One of the cheapest balanced meals. Cook a pot for 2 days and keep it refrigerated or covered cool.'
  },
  {
    id: 'b6-22', name: 'Tomato Egg Sauce with Small Yam', meal: 'Breakfast', time: 30, servings: 2, budget: 1, gi: 'medium', carbs: 32, calories: 270,
    ingredients: ['2 eggs', '3 tomatoes', '1 onion', '1 tsp oil', '2 slices (100 g) yam', 'Pepper and salt'],
    steps: ['Boil the yam slices until soft.', 'Fry onion, blended tomato and pepper for 6 minutes.', 'Add beaten eggs and stir until cooked.', 'Serve with the yam.'],
    tip: 'Measure the yam to 2 small slices. More than that raises sugar quickly.'
  },
  {
    id: 'b6-23', name: 'Plain Oat Pap', meal: 'Breakfast', time: 10, servings: 1, budget: 2, gi: 'low', carbs: 28, calories: 180,
    ingredients: ['4 tbsp rolled oats', '1 cup water', 'Pinch of cinnamon or ginger', '1 tbsp milk powder (optional)'],
    steps: ['Boil water and stir in the oats.', 'Cook for 5 minutes, stirring.', 'Add spice and milk powder, then serve without sugar.'],
    tip: 'Oats are slow-digesting. Add a boiled egg for lasting energy.'
  },
  {
    id: 'b6-24', name: 'Baked Akara Balls', meal: 'Snack', time: 40, servings: 4, budget: 1, gi: 'low', carbs: 14, calories: 130,
    ingredients: ['1 cup peeled beans', '1 small onion', '1 pepper', '1 tsp oil', 'Salt', 'Water as needed'],
    steps: ['Blend beans, onion and pepper into a thick paste.', 'Whisk well with salt.', 'Scoop small balls onto an oiled tray.', 'Bake for 20 to 25 minutes, turning once.'],
    tip: 'Baking uses far less oil than deep frying. Eat 3 small balls.'
  },
  {
    id: 'b6-25', name: 'Sardine and Vegetable Sauce', meal: 'Dinner', time: 20, servings: 3, budget: 1, gi: 'low', carbs: 6, calories: 170,
    ingredients: ['1 tin sardines in tomato (drain sauce)', '2 tomatoes', '1 onion', '1 pepper', '1 handful spinach', '1 tsp oil'],
    steps: ['Fry onion, tomato and pepper in the oil.', 'Add the sardines and break lightly.', 'Add spinach and cook for 2 minutes.'],
    tip: 'Budget omega-3 source. Rinse off excess sauce to reduce salt.'
  },
  {
    id: 'b6-26', name: 'Titus Fish Stew (Light)', meal: 'Dinner', time: 30, servings: 3, budget: 1, gi: 'low', carbs: 6, calories: 190,
    ingredients: ['3 pieces titus fish', '3 tomatoes', '2 pepper', '1 onion', '1 tbsp palm oil', 'Salt and seasoning'],
    steps: ['Blend tomato and pepper and cook down for 10 minutes.', 'Add onion, palm oil and seasoning.', 'Add the fish and simmer for 8 minutes.'],
    tip: 'Eat with a measured Side or a small portion of beans.'
  },
  {
    id: 'b6-27', name: 'Boiled Eggs in Pepper Sauce', meal: 'Lunch', time: 25, servings: 3, budget: 1, gi: 'low', carbs: 6, calories: 180,
    ingredients: ['4 boiled eggs', '3 tomatoes', '1 onion', '2 pepper', '1 tsp oil', 'Salt'],
    steps: ['Fry blended tomato, pepper and onion in oil for 10 minutes.', 'Add salt.', 'Add the peeled boiled eggs and warm through.'],
    tip: 'Limit to 1 to 2 eggs per person per meal.'
  },
  {
    id: 'b6-28', name: 'Crayfish and Ugu Stir-fry', meal: 'Side', time: 12, servings: 3, budget: 1, gi: 'low', carbs: 4, calories: 80,
    ingredients: ['3 handfuls ugu', '2 tbsp ground crayfish', '1 onion', '1 tsp palm oil', 'Pepper and salt'],
    steps: ['Fry onion in the palm oil.', 'Add crayfish and pepper.', 'Add ugu and stir for 2 minutes.'],
    tip: 'Dark green leaves are among the best foods for diabetes.'
  },
  {
    id: 'b6-29', name: 'Cabbage Vegetable Soup', meal: 'Soup', time: 25, servings: 4, budget: 1, gi: 'low', carbs: 8, calories: 70,
    ingredients: ['1/4 cabbage', '1 carrot', '1 onion', '1 tomato', '3 cups water', 'Salt and pepper', '1 small fish or egg (optional)'],
    steps: ['Boil water with onion, carrot and tomato.', 'Add cabbage and seasoning.', 'Cook for 10 minutes and serve.'],
    tip: 'Very cheap and filling. Add protein for a complete meal.'
  },
  {
    id: 'b6-30', name: 'Beans and Vegetable Salad', meal: 'Lunch', time: 20, servings: 3, budget: 1, gi: 'low', carbs: 24, calories: 190,
    ingredients: ['1 cup cooked beans', '1 cucumber', '2 tomatoes', '1 small onion', '1 tsp oil', 'Lime juice', 'Salt'],
    steps: ['Cool the cooked beans.', 'Mix with the chopped vegetables.', 'Add oil, lime and salt.'],
    tip: 'Cooked-and-cooled beans digest even more slowly.'
  },

  // ---------- FESTIVE ----------
  {
    id: 'b6-31', name: 'Light Jollof with Cauliflower Rice', meal: 'Lunch', time: 40, servings: 4, budget: 3, gi: 'medium', carbs: 28, calories: 230,
    ingredients: ['1/2 cup parboiled rice', '2 cups grated cauliflower', '3 tomatoes', '2 pepper', '1 onion', '1 tsp oil', 'Thyme, curry, salt'],
    steps: ['Fry blended tomato, pepper and onion in the oil until thick.', 'Add the rice, seasoning and a little water. Cook half done.', 'Add the cauliflower and cook until the rice is soft.'],
    tip: 'Half the rice, double the fibre. Great for parties when you want jollof.'
  },
  {
    id: 'b6-32', name: 'Party Grilled Chicken and Salad', meal: 'Dinner', time: 50, servings: 4, budget: 3, gi: 'low', carbs: 6, calories: 280,
    ingredients: ['4 chicken pieces, skin removed', '1 onion', 'Ginger and garlic', 'Thyme, curry, salt', '1 tsp oil', 'Cabbage, cucumber and tomato for salad'],
    steps: ['Season chicken with ginger, garlic, onion and spices.', 'Rub with the oil.', 'Grill or bake for 35 to 40 minutes, turning.', 'Serve with fresh salad.'],
    tip: 'Remove the skin to cut fat. Grilled chicken suits celebrations.'
  },
  {
    id: 'b6-33', name: 'Suya-Style Grilled Beef with Onion Salad', meal: 'Dinner', time: 40, servings: 3, budget: 3, gi: 'low', carbs: 5, calories: 260,
    ingredients: ['300 g lean beef, thin strips', '2 tbsp suya spice (yaji)', '1 tsp oil', 'Sliced onion and tomato', 'Cabbage'],
    steps: ['Coat the beef with yaji and oil.', 'Grill on both sides until cooked through.', 'Serve with onion, tomato and cabbage.'],
    tip: 'Check that your yaji has no added sugar. Keep portion to a palm-sized serving.'
  },
  {
    id: 'b6-34', name: 'Light Coleslaw', meal: 'Side', time: 15, servings: 4, budget: 2, gi: 'low', carbs: 7, calories: 90,
    ingredients: ['1/4 cabbage, shredded', '1 carrot, grated', '3 tbsp plain yoghurt', '1 tsp lime juice', 'Pinch of salt and pepper'],
    steps: ['Mix cabbage and carrot.', 'Stir yoghurt, lime, salt and pepper together.', 'Combine and chill.'],
    tip: 'Plain yoghurt replaces sugary salad cream. Use unsweetened only.'
  },
  {
    id: 'b6-35', name: 'Baked Fish with Peppers', meal: 'Dinner', time: 45, servings: 3, budget: 3, gi: 'low', carbs: 6, calories: 230,
    ingredients: ['1 medium tilapia or croaker, cleaned', '2 bell peppers', '1 onion', '2 tomatoes', 'Ginger, garlic, thyme, salt', '1 tsp oil'],
    steps: ['Season the fish and rub with oil.', 'Top with sliced peppers, onion and tomato.', 'Wrap in foil and bake for 30 minutes.'],
    tip: 'Fish twice a week supports heart health, which matters with diabetes.'
  },
  {
    id: 'b6-36', name: 'Small Jollof with Grilled Fish', meal: 'Lunch', time: 45, servings: 3, budget: 3, gi: 'medium', carbs: 38, calories: 330,
    ingredients: ['1 cup parboiled rice', '3 tomatoes', '2 pepper', '1 onion', '1 tsp oil', 'Grilled fish (3 pieces)', 'Salad vegetables', 'Thyme, curry, salt'],
    steps: ['Fry blended tomato mix in the oil.', 'Add rice, seasoning and water, cook covered until soft.', 'Serve 3/4 cup rice per person with fish and plenty of salad.'],
    tip: 'Fill half your plate with salad and eat the salad first.'
  },
  {
    id: 'b6-37', name: 'Light Vegetable Fried Rice', meal: 'Lunch', time: 40, servings: 4, budget: 3, gi: 'medium', carbs: 34, calories: 260,
    ingredients: ['1 cup parboiled rice, cooked and cooled', '1 carrot, diced', '1/2 cup green beans', '1 bell pepper', '1 onion', '1 tsp oil', 'Curry and thyme, salt'],
    steps: ['Stir-fry the vegetables in the oil for 3 minutes.', 'Add the cooked rice and seasoning.', 'Toss for 3 minutes. Serve with grilled protein.'],
    tip: 'Use lots of vegetables compared with rice. Eat 3/4 cup rice only.'
  },
  {
    id: 'b6-38', name: 'Grilled Peppered Gizzard', meal: 'Snack', time: 45, servings: 4, budget: 2, gi: 'low', carbs: 2, calories: 150,
    ingredients: ['300 g gizzard', '1 onion', '2 pepper', 'Ginger and garlic', 'Salt', '1 tsp oil'],
    steps: ['Boil gizzard with onion, ginger, garlic and salt until tender.', 'Toss in blended pepper and oil.', 'Grill for 5 to 8 minutes.'],
    tip: 'Rich in protein with no carbs. Keep to a small cup, as it is high in cholesterol.'
  },
  {
    id: 'b6-39', name: 'Fruit and Nut Plate', meal: 'Snack', time: 5, servings: 1, budget: 2, gi: 'low', carbs: 15, calories: 170,
    ingredients: ['1 slice pawpaw', '1 small slice watermelon', '10 roasted cashew or groundnuts'],
    steps: ['Cut the fruit.', 'Serve with the nuts.', 'Eat slowly.'],
    tip: 'Nuts slow the rise in sugar from fruit. Avoid fruit juice.'
  },
  {
    id: 'b6-40', name: 'Festive Chicken Pepper Soup', meal: 'Soup', time: 50, servings: 4, budget: 3, gi: 'low', carbs: 5, calories: 190,
    ingredients: ['500 g chicken pieces, skin off', '2 tbsp pepper soup spice', '1 onion', 'Ginger and garlic', 'Scent leaf', '1.5 litres water', 'Salt'],
    steps: ['Boil the chicken with onion, ginger and garlic for 20 minutes.', 'Add pepper soup spice and salt.', 'Simmer for 15 minutes, add scent leaf and serve.'],
    tip: 'A hearty low-carb dish that suits any celebration.'
  },
];