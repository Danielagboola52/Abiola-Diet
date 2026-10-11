import { Recipe } from '../types';

export const batch7: Recipe[] = [
  // ---------- RICE ----------
  {
    id: 'b7-01', name: 'Ofada Rice (Small) with Light Ayamase Sauce', meal: 'Lunch', time: 50, servings: 4, budget: 3, gi: 'medium', carbs: 35, calories: 320,
    ingredients: ['1 cup ofada rice', '4 green bell peppers', '2 scotch bonnets', '1 onion', '1 tbsp palm oil', '2 boiled eggs', 'Iru (locust beans), salt'],
    steps: ['Cook the ofada rice until soft and drain.', 'Blend peppers and onion, cook off the water.', 'Add the palm oil, iru and salt and simmer for 10 minutes.', 'Serve 3/4 cup rice with sauce and an egg.'],
    tip: 'Ofada has more fibre than polished rice. Keep the palm oil to 1 tbsp for the whole pot.'
  },
  {
    id: 'b7-02', name: 'Brown Rice and Beans', meal: 'Lunch', time: 60, servings: 4, budget: 2, gi: 'low', carbs: 38, calories: 290,
    ingredients: ['1/2 cup brown rice', '1/2 cup beans', '1 onion', '1 tbsp palm oil', 'Pepper and salt', '1 tbsp crayfish'],
    steps: ['Boil beans until half soft.', 'Add brown rice and enough water.', 'Add onion, pepper, crayfish and salt, then cook until soft.', 'Stir in the palm oil and serve.'],
    tip: 'Mixing rice with beans lowers the blood sugar rise compared with rice alone.'
  },
  {
    id: 'b7-03', name: 'White Rice with Vegetable Stew', meal: 'Dinner', time: 45, servings: 4, budget: 2, gi: 'high', carbs: 40, calories: 290,
    ingredients: ['3/4 cup parboiled rice', '3 tomatoes', '2 pepper', '1 onion', '1 handful spinach', '1 tsp oil', 'Fish or egg for protein'],
    steps: ['Boil the rice and drain.', 'Fry tomato, pepper and onion in the oil.', 'Add spinach and protein and cook for 5 minutes.', 'Serve 3/4 cup of rice with lots of stew.'],
    tip: 'Choose parboiled over soft white rice and cool it before reheating for a slower effect.'
  },
  {
    id: 'b7-04', name: 'Rice and Ugu Stew', meal: 'Lunch', time: 40, servings: 4, budget: 2, gi: 'medium', carbs: 36, calories: 280,
    ingredients: ['3/4 cup parboiled rice', '3 handfuls ugu', '2 tomatoes', '1 onion', '1 tbsp palm oil', '1 tbsp crayfish', 'Pepper and salt'],
    steps: ['Boil and drain the rice.', 'Cook tomato, onion and pepper in palm oil for 8 minutes.', 'Add crayfish and ugu and cook for 3 minutes.', 'Serve over measured rice.'],
    tip: 'The leafy stew should fill at least half of your plate.'
  },
  {
    id: 'b7-05', name: 'Jollof and Beans Mix', meal: 'Lunch', time: 55, servings: 4, budget: 2, gi: 'medium', carbs: 36, calories: 290,
    ingredients: ['1/2 cup parboiled rice', '1/2 cup cooked beans', '3 tomatoes', '2 pepper', '1 onion', '1 tsp oil', 'Thyme, curry, salt'],
    steps: ['Fry blended tomato mix in oil until thick.', 'Add rice, beans and seasoning with water.', 'Cook covered until soft.'],
    tip: 'Beans replace some rice. You feel full on less sugar.'
  },
  {
    id: 'b7-06', name: 'Native Jollof (Low Oil)', meal: 'Lunch', time: 50, servings: 4, budget: 2, gi: 'medium', carbs: 38, calories: 300,
    ingredients: ['3/4 cup rice', '3 tomatoes', '2 pepper', '1 onion', '1 tbsp palm oil', '1 tbsp crayfish', '1 handful ugu', 'Smoked fish'],
    steps: ['Heat the palm oil and fry onion.', 'Add blended tomato and pepper, cook down.', 'Add the rice, crayfish, fish and water, cook covered.', 'Fold in ugu at the end.'],
    tip: 'Smoked fish adds protein but also salt, so skip extra seasoning cubes.'
  },
  {
    id: 'b7-07', name: 'Rice and Egg Stew', meal: 'Dinner', time: 35, servings: 3, budget: 1, gi: 'medium', carbs: 38, calories: 300,
    ingredients: ['3/4 cup rice', '3 eggs', '3 tomatoes', '1 onion', '1 pepper', '1 tsp oil', 'Salt'],
    steps: ['Cook and drain the rice.', 'Fry tomato, pepper and onion in oil for 8 minutes.', 'Break in eggs and stir to scramble.', 'Serve with 3/4 cup rice each.'],
    tip: 'Eat the stew and egg first and rice after.'
  },
  {
    id: 'b7-08', name: 'Rice with Grilled Chicken and Cabbage', meal: 'Dinner', time: 50, servings: 3, budget: 3, gi: 'medium', carbs: 36, calories: 340,
    ingredients: ['3/4 cup rice', '3 pieces chicken, skin off', 'Seasoning and spices', '1/4 cabbage', '1 carrot', '1 tsp oil'],
    steps: ['Season and grill the chicken.', 'Boil the rice.', 'Stir-fry cabbage and carrot lightly.', 'Plate 1/2 vegetables, 1/4 chicken, 1/4 rice.'],
    tip: 'This follows the plate method from the Advice tab.'
  },
  {
    id: 'b7-09', name: 'Rice with Fish Stew and Spinach', meal: 'Lunch', time: 40, servings: 3, budget: 2, gi: 'medium', carbs: 36, calories: 300,
    ingredients: ['3/4 cup rice', '3 pieces fish', '3 tomatoes', '1 onion', '2 handfuls spinach', '1 tsp palm oil', 'Pepper and salt'],
    steps: ['Cook and drain the rice.', 'Prepare the stew with tomato, onion, pepper and oil.', 'Add fish and cook for 8 minutes, then add spinach.', 'Serve with measured rice.'],
    tip: 'Spinach adds fibre that slows sugar absorption.'
  },
  {
    id: 'b7-10', name: 'Rice and Vegetable Salad', meal: 'Lunch', time: 30, servings: 4, budget: 2, gi: 'medium', carbs: 28, calories: 210,
    ingredients: ['1 cup cooked and cooled rice', '1 carrot', '1/2 cup green beans', '1 cucumber', '1 tomato', '1 boiled egg', 'Lime juice, salt'],
    steps: ['Chop the vegetables.', 'Mix with the cooled rice.', 'Add lime juice, salt and sliced egg.'],
    tip: 'Cooled rice contains resistant starch, which raises sugar less.'
  },
  {
    id: 'b7-11', name: 'Small Rice with Moi Moi', meal: 'Lunch', time: 70, servings: 4, budget: 2, gi: 'medium', carbs: 38, calories: 300,
    ingredients: ['3/4 cup rice', '1 wrap moi moi per person', 'Tomato stew (light)', 'Sliced cucumber'],
    steps: ['Cook the rice and prepare moi moi.', 'Heat the light stew.', 'Serve 1/2 cup rice with 1 moi moi and the stew.'],
    tip: 'Rice and moi moi both give starch. Keep each portion modest.'
  },
  {
    id: 'b7-12', name: 'Brown Rice Vegetable Pottage', meal: 'Dinner', time: 45, servings: 4, budget: 2, gi: 'low', carbs: 30, calories: 240,
    ingredients: ['3/4 cup brown rice', '1 carrot', '1/2 cup green beans', '1 onion', '2 tomatoes', '1 tsp palm oil', 'Pepper and salt'],
    steps: ['Cook the brown rice with water until half soft.', 'Add all vegetables and seasoning.', 'Cook until soft and thick.'],
    tip: 'Brown rice has more fibre and a lower GI than white.'
  },
  {
    id: 'b7-13', name: 'Rice with Okra Stew', meal: 'Lunch', time: 40, servings: 3, budget: 2, gi: 'medium', carbs: 36, calories: 280,
    ingredients: ['3/4 cup rice', '15 okra, chopped', '2 tomatoes', '1 onion', '1 tbsp crayfish', '1 tsp palm oil', 'Fish or chicken'],
    steps: ['Boil and drain the rice.', 'Cook onion, tomato and pepper in the oil.', 'Add protein, crayfish and okra and simmer for 6 minutes.'],
    tip: 'Okra adds soluble fibre, which helps keep sugar steady.'
  },
  {
    id: 'b7-14', name: 'Rice with Efo Riro (Light)', meal: 'Dinner', time: 40, servings: 4, budget: 2, gi: 'medium', carbs: 34, calories: 290,
    ingredients: ['3/4 cup rice', '4 handfuls spinach', '2 tomatoes', '1 onion', '1 tbsp palm oil', 'Smoked fish', '1 tbsp iru'],
    steps: ['Cook the rice.', 'Fry tomato and pepper in palm oil.', 'Add fish and iru then spinach and cook for 4 minutes.'],
    tip: 'Use more efo and less rice than usual.'
  },

  // ---------- BEANS ----------
  {
    id: 'b7-15', name: 'Light Ewa Agoyin', meal: 'Lunch', time: 90, servings: 5, budget: 1, gi: 'low', carbs: 28, calories: 260,
    ingredients: ['2 cups brown beans', '1/4 cup palm oil (use 2 tbsp)', '3 dried pepper', '1 onion', 'Salt'],
    steps: ['Boil beans until very soft, then lightly mash.', 'Heat the palm oil, add blended dried pepper and onion.', 'Cook for 10 minutes until dark.', 'Serve 1 cup beans with 1 tbsp sauce.'],
    tip: 'The sauce is oil-heavy. Use a spoon, not a ladle.'
  },
  {
    id: 'b7-16', name: 'Beans with Small Ripe Plantain', meal: 'Lunch', time: 65, servings: 4, budget: 1, gi: 'medium', carbs: 40, calories: 290,
    ingredients: ['1.5 cups beans', '1 small, firm-ripe plantain, baked or boiled', '1 tbsp palm oil', 'Onion, pepper, salt'],
    steps: ['Boil beans with onion and pepper until soft.', 'Add salt and palm oil.', 'Bake or boil the plantain and cut into 4 slices.', 'Serve 1 cup beans with 2 slices plantain.'],
    tip: 'Choose a firm, slightly ripe plantain. Very ripe plantain raises sugar fast.'
  },
  {
    id: 'b7-17', name: 'Beans Porridge with Fish', meal: 'Dinner', time: 60, servings: 4, budget: 2, gi: 'low', carbs: 30, calories: 280,
    ingredients: ['2 cups beans', '3 pieces fish', '1 onion', '1 tbsp palm oil', '1 tbsp crayfish', 'Pepper and salt'],
    steps: ['Cook beans until soft.', 'Add onion, pepper and crayfish.', 'Add fish and palm oil and simmer for 8 minutes.'],
    tip: 'Fish and beans together give plenty of protein.'
  },
  {
    id: 'b7-18', name: 'Beans and Brown Rice Plate', meal: 'Lunch', time: 60, servings: 4, budget: 2, gi: 'low', carbs: 38, calories: 290,
    ingredients: ['1 cup cooked beans', '1/2 cup cooked brown rice', 'Light tomato stew', 'Cucumber and tomato salad'],
    steps: ['Cook beans and rice separately.', 'Heat the stew.', 'Plate the rice and beans with stew and salad.'],
    tip: 'Keep rice to half a cup and fill the rest of the plate with vegetables.'
  },
  {
    id: 'b7-19', name: 'Boiled Beans with Tomato Stew', meal: 'Lunch', time: 70, servings: 4, budget: 1, gi: 'low', carbs: 30, calories: 250,
    ingredients: ['2 cups beans', '3 tomatoes', '1 onion', '2 pepper', '1 tsp palm oil', 'Salt'],
    steps: ['Boil beans plain until soft.', 'Cook the stew down with a little palm oil.', 'Serve 1 cup beans with 2 tbsp stew.'],
    tip: 'Plain boiled beans are the healthiest way to eat them.'
  },
  {
    id: 'b7-20', name: 'Beans and Spinach Pottage', meal: 'Dinner', time: 60, servings: 4, budget: 1, gi: 'low', carbs: 28, calories: 240,
    ingredients: ['2 cups beans', '3 handfuls spinach', '1 onion', '1 tbsp palm oil', '1 tbsp crayfish', 'Pepper and salt'],
    steps: ['Cook beans until soft.', 'Add seasoning, crayfish and palm oil.', 'Add spinach and cook for 2 minutes.'],
    tip: 'Add more spinach if you want a bigger meal without extra carbs.'
  },
  {
    id: 'b7-21', name: 'Adalu Light (Beans and Corn)', meal: 'Lunch', time: 70, servings: 5, budget: 1, gi: 'medium', carbs: 34, calories: 270,
    ingredients: ['1.5 cups beans', '1/2 cup dry corn', '1 tbsp palm oil', '1 onion', 'Pepper and salt', 'Crayfish'],
    steps: ['Boil corn and beans together until soft.', 'Add onion, pepper, crayfish and salt.', 'Stir in the palm oil and simmer for 5 minutes.'],
    tip: 'Use more beans than corn.'
  },
  {
    id: 'b7-22', name: 'Beans with Smoked Fish', meal: 'Dinner', time: 65, servings: 4, budget: 2, gi: 'low', carbs: 28, calories: 270,
    ingredients: ['2 cups beans', '2 pieces smoked fish, deboned', '1 onion', '1 tbsp palm oil', 'Pepper'],
    steps: ['Boil the beans until soft.', 'Add fish, onion and pepper.', 'Add the palm oil and simmer for 5 minutes.'],
    tip: 'Smoked fish is salty, so do not add seasoning cubes.'
  },
  {
    id: 'b7-23', name: 'Beans and Crayfish Ugu', meal: 'Lunch', time: 60, servings: 4, budget: 1, gi: 'low', carbs: 28, calories: 250,
    ingredients: ['2 cups beans', '3 handfuls ugu', '2 tbsp crayfish', '1 onion', '1 tbsp palm oil', 'Salt'],
    steps: ['Cook the beans until soft.', 'Add crayfish, onion and salt.', 'Add palm oil and ugu and cook for 3 minutes.'],
    tip: 'Beans with greens is a low-cost, balanced meal.'
  },
  {
    id: 'b7-24', name: 'Pigeon Pea (Fio Fio) Pottage', meal: 'Lunch', time: 60, servings: 4, budget: 1, gi: 'low', carbs: 26, calories: 240,
    ingredients: ['2 cups pigeon peas', '1 onion', '1 tbsp palm oil', '1 tbsp crayfish', 'Pepper and salt', '1 handful ugu'],
    steps: ['Boil the pigeon peas until soft.', 'Add onion, pepper, crayfish and salt.', 'Stir in the palm oil and ugu.'],
    tip: 'Pigeon peas are high in fibre and protein.'
  },
  {
    id: 'b7-25', name: 'Black-eyed Pea Salad', meal: 'Lunch', time: 20, servings: 3, budget: 1, gi: 'low', carbs: 24, calories: 190,
    ingredients: ['1 cup boiled black-eyed peas', '1 cucumber', '2 tomatoes', '1 small onion', 'Lime juice, salt, 1 tsp oil'],
    steps: ['Cool the cooked beans.', 'Chop vegetables and mix with the beans.', 'Dress with lime, oil and salt.'],
    tip: 'A cold bean salad is easy to carry to work.'
  },
  {
    id: 'b7-26', name: 'Moi Moi with Fish', meal: 'Dinner', time: 65, servings: 6, budget: 2, gi: 'low', carbs: 15, calories: 170,
    ingredients: ['2 cups peeled beans', '1 onion', '2 pepper', '1 tbsp palm oil', '1 tbsp crayfish', 'Flaked cooked fish', 'Salt'],
    steps: ['Blend beans with onion and pepper.', 'Add oil, crayfish, fish and salt.', 'Pour into leaves or containers and steam for 45 minutes.'],
    tip: 'One wrap with salad makes a light dinner.'
  },
  {
    id: 'b7-27', name: 'Moi Moi with Egg', meal: 'Breakfast', time: 65, servings: 6, budget: 2, gi: 'low', carbs: 15, calories: 180,
    ingredients: ['2 cups peeled beans', '3 boiled eggs, quartered', '1 onion', '2 pepper', '1 tbsp palm oil', 'Salt'],
    steps: ['Blend and season the beans.', 'Fill containers halfway, add a piece of egg.', 'Top with more mix and steam for 45 minutes.'],
    tip: 'Eat 1 wrap for breakfast. Avoid pairing with pap that has sugar.'
  },

  // ---------- TUBERS ----------
  {
    id: 'b7-28', name: 'Boiled Yam with Egg Sauce (Small)', meal: 'Breakfast', time: 30, servings: 2, budget: 1, gi: 'medium', carbs: 32, calories: 270,
    ingredients: ['2 slices (100 g) yam', '2 eggs', '2 tomatoes', '1 onion', '1 tsp oil', 'Pepper and salt'],
    steps: ['Boil the yam slices.', 'Fry onion, tomato and pepper in oil.', 'Add beaten eggs and cook.', 'Serve with the yam.'],
    tip: 'Do not exceed 2 small slices of yam per meal.'
  },
  {
    id: 'b7-29', name: 'Boiled Yam with Vegetable Sauce', meal: 'Lunch', time: 30, servings: 2, budget: 1, gi: 'medium', carbs: 34, calories: 240,
    ingredients: ['2 slices (100 g) yam', '2 handfuls spinach', '2 tomatoes', '1 onion', '1 tsp palm oil', 'Pepper and salt'],
    steps: ['Boil the yam.', 'Fry onion, tomato and pepper in the oil.', 'Add spinach and cook for 3 minutes.'],
    tip: 'Eat the vegetable sauce first to slow sugar absorption.'
  },
  {
    id: 'b7-30', name: 'Small Sweet Potato with Egg', meal: 'Breakfast', time: 30, servings: 2, budget: 1, gi: 'medium', carbs: 28, calories: 230,
    ingredients: ['1 small sweet potato (about 120 g)', '2 eggs', '1 tomato', '1 onion', '1 tsp oil', 'Salt'],
    steps: ['Boil the sweet potato with skin on.', 'Scramble the eggs with onion and tomato.', 'Serve together.'],
    tip: 'Sweet potato with skin has more fibre. Keep to a small one.'
  },
  {
    id: 'b7-31', name: 'Boiled Unripe Plantain and Fish Stew', meal: 'Lunch', time: 35, servings: 3, budget: 2, gi: 'medium', carbs: 30, calories: 260,
    ingredients: ['1 medium unripe plantain', '3 pieces fish', '3 tomatoes', '1 onion', '1 tsp palm oil', 'Pepper and salt'],
    steps: ['Boil the plantain with skin on, then peel and slice.', 'Make fish stew with tomato, onion, pepper and oil.', 'Serve 1/3 plantain with fish stew each.'],
    tip: 'Unripe plantain is gentler on blood sugar than ripe plantain.'
  },
  {
    id: 'b7-32', name: 'Unripe Plantain Porridge with Ugu', meal: 'Dinner', time: 40, servings: 4, budget: 1, gi: 'medium', carbs: 30, calories: 250,
    ingredients: ['1 large unripe plantain, cubed', '1 tbsp palm oil', '1 onion', '1 tbsp crayfish', '2 handfuls ugu', 'Pepper and salt'],
    steps: ['Boil the plantain with onion, pepper, crayfish and salt.', 'Add the palm oil and cook until soft.', 'Add ugu and stir.'],
    tip: 'Add fish or egg for protein to balance the meal.'
  },
  {
    id: 'b7-33', name: 'Light Yam Porridge (Asaro)', meal: 'Dinner', time: 40, servings: 4, budget: 1, gi: 'medium', carbs: 34, calories: 260,
    ingredients: ['300 g yam, cubed', '2 tomatoes', '1 onion', '1 tbsp palm oil', '2 handfuls spinach', 'Fish or crayfish', 'Pepper and salt'],
    steps: ['Boil yam with onion, tomato and pepper.', 'Mash a few pieces to thicken lightly.', 'Add palm oil, protein and spinach and simmer.'],
    tip: 'Use more spinach and protein than yam.'
  },
  {
    id: 'b7-34', name: 'Boiled Cocoyam with Garden Egg Sauce', meal: 'Lunch', time: 40, servings: 3, budget: 2, gi: 'medium', carbs: 30, calories: 240,
    ingredients: ['2 medium cocoyam', '5 garden eggs, diced', '1 onion', '1 tomato', '1 tsp palm oil', '1 boiled egg'],
    steps: ['Boil, peel and slice the cocoyam.', 'Cook the garden eggs with onion, tomato and oil.', 'Serve 1/3 of cocoyam with sauce and egg.'],
    tip: 'Cocoyam has more fibre than white yam.'
  },
  {
    id: 'b7-35', name: 'Roasted Unripe Plantain with Pepper Sauce', meal: 'Snack', time: 30, servings: 2, budget: 1, gi: 'medium', carbs: 28, calories: 200,
    ingredients: ['1 unripe plantain, roasted', '2 tomatoes', '1 pepper', '1 onion', '1 tsp oil'],
    steps: ['Roast the plantain over fire or in an oven.', 'Fry blended tomato, pepper and onion in oil.', 'Serve half a plantain per person with sauce.'],
    tip: 'Eat half a plantain, not a whole one.'
  },
  {
    id: 'b7-36', name: 'Sweet Potato and Bean Mash', meal: 'Lunch', time: 45, servings: 4, budget: 1, gi: 'low', carbs: 30, calories: 240,
    ingredients: ['1 small sweet potato', '1 cup cooked beans', '1 onion', '1 tbsp palm oil', 'Pepper and salt'],
    steps: ['Boil sweet potato and peel.', 'Mash with the cooked beans.', 'Fry onion and pepper in the palm oil and stir in.'],
    tip: 'Beans slow the sugar rise from the sweet potato.'
  },
  {
    id: 'b7-37', name: 'Irish Potato and Vegetable Stew', meal: 'Dinner', time: 35, servings: 3, budget: 2, gi: 'medium', carbs: 30, calories: 230,
    ingredients: ['2 small Irish potatoes', '1 carrot', '1/2 cup green beans', '2 tomatoes', '1 onion', '1 tsp oil', 'Pepper and salt'],
    steps: ['Cube the potatoes and carrot.', 'Fry onion, tomato and pepper in oil.', 'Add all vegetables and a little water and cook until soft.'],
    tip: 'Keep the potato cubes to about a fist of potato in total per person.'
  },
  {
    id: 'b7-38', name: 'Boiled Yam with Grilled Fish', meal: 'Dinner', time: 40, servings: 2, budget: 2, gi: 'medium', carbs: 32, calories: 300,
    ingredients: ['2 slices (100 g) yam', '2 pieces fish', 'Ginger, garlic, salt', '1 tsp oil', 'Cucumber and tomato salad'],
    steps: ['Boil the yam.', 'Season fish and grill it.', 'Serve with fresh salad.'],
    tip: 'Fish and salad balance the starch in the yam.'
  },
  {
    id: 'b7-39', name: 'Unripe Plantain Pottage', meal: 'Lunch', time: 40, servings: 4, budget: 1, gi: 'medium', carbs: 32, calories: 260,
    ingredients: ['1 large unripe plantain', '2 tomatoes', '1 onion', '1 tbsp palm oil', '1 tbsp crayfish', '1 handful ugu', 'Pepper and salt'],
    steps: ['Cube the plantain and boil in a little water.', 'Add tomato, onion, pepper and crayfish.', 'Add palm oil and cook until soft, then add ugu.'],
    tip: 'Serve 1 cup with extra vegetables on the side.'
  },
  {
    id: 'b7-40', name: 'Sweet Potato and Spinach Porridge', meal: 'Dinner', time: 35, servings: 3, budget: 1, gi: 'medium', carbs: 30, calories: 240,
    ingredients: ['1 medium sweet potato, cubed', '2 handfuls spinach', '2 tomatoes', '1 onion', '1 tbsp palm oil', '1 tbsp crayfish', 'Pepper and salt'],
    steps: ['Boil the sweet potato with onion, tomato and pepper.', 'Add crayfish and palm oil.', 'Add spinach and cook for 3 minutes.'],
    tip: 'Keep portion to one cup and add a boiled egg or fish.'
  },
];