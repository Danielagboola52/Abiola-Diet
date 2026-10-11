import { Recipe } from '../types';

export const batch8: Recipe[] = [
  // ---------- DRINKS ----------
  {
    id: 'b8-01', name: 'Ginger Lime Water', meal: 'Snack', time: 10, servings: 4, budget: 1, gi: 'low', carbs: 1, calories: 5,
    ingredients: ['1 thumb fresh ginger, sliced', 'Juice of 1 lime', '1 litre water'],
    steps: ['Boil the ginger in a little water for 5 minutes.', 'Cool, add the lime juice and the rest of the water.', 'Serve chilled, with no sugar.'],
    tip: 'A refreshing zero-sugar drink to replace soft drinks.'
  },
  {
    id: 'b8-02', name: 'Cucumber and Mint Water', meal: 'Snack', time: 5, servings: 4, budget: 1, gi: 'low', carbs: 1, calories: 5,
    ingredients: ['1 cucumber, sliced', 'Handful of mint or scent leaf', '1 litre cold water'],
    steps: ['Place cucumber and leaves in a jug.', 'Add water and chill for 1 hour.', 'Drink through the day.'],
    tip: 'Staying hydrated helps your body flush out extra sugar.'
  },
  {
    id: 'b8-03', name: 'Cinnamon Tea', meal: 'Snack', time: 10, servings: 2, budget: 1, gi: 'low', carbs: 0, calories: 5,
    ingredients: ['1 cinnamon stick', '2 cups water'],
    steps: ['Boil the cinnamon in water for 8 minutes.', 'Pour and drink warm without sugar.'],
    tip: 'Cinnamon adds sweet flavour without sugar. It does not replace your medication.'
  },
  {
    id: 'b8-04', name: 'Green Tea with Lime', meal: 'Snack', time: 5, servings: 1, budget: 1, gi: 'low', carbs: 0, calories: 2,
    ingredients: ['1 green tea bag', '1 cup hot water', 'Squeeze of lime'],
    steps: ['Steep the tea bag for 3 minutes.', 'Add lime and drink unsweetened.'],
    tip: 'Avoid sugar, honey and condensed milk.'
  },
  {
    id: 'b8-05', name: 'Lemongrass Tea', meal: 'Snack', time: 15, servings: 3, budget: 1, gi: 'low', carbs: 0, calories: 3,
    ingredients: ['A handful of fresh lemongrass leaves (tea grass)', '3 cups water'],
    steps: ['Wash and cut the leaves.', 'Boil for 10 minutes and strain.', 'Serve hot without sugar.'],
    tip: 'A common local tea that is naturally calorie-free.'
  },
  {
    id: 'b8-06', name: 'Ginger and Clove Tea', meal: 'Snack', time: 12, servings: 2, budget: 1, gi: 'low', carbs: 1, calories: 5,
    ingredients: ['1 small piece ginger', '4 cloves', '2 cups water'],
    steps: ['Crush the ginger.', 'Boil with the cloves for 10 minutes.', 'Strain and drink warm.'],
    tip: 'A warm evening drink that replaces sweet tea.'
  },
  {
    id: 'b8-07', name: 'Plain Yoghurt Cucumber Drink', meal: 'Snack', time: 5, servings: 2, budget: 2, gi: 'low', carbs: 8, calories: 80,
    ingredients: ['1 cup plain unsweetened yoghurt', '1/2 cucumber, grated', '1/2 cup cold water', 'Pinch of salt'],
    steps: ['Blend all the ingredients together.', 'Serve cold.'],
    tip: 'Always choose plain yoghurt. Flavoured types are full of sugar.'
  },
  {
    id: 'b8-08', name: 'Pineapple Peel Drink (No Sugar)', meal: 'Snack', time: 30, servings: 4, budget: 1, gi: 'low', carbs: 3, calories: 12,
    ingredients: ['Peel of 1 clean pineapple', '1 small piece ginger', '1.5 litres water'],
    steps: ['Wash the peels well.', 'Boil with ginger for 20 minutes.', 'Strain, cool and drink without sugar.'],
    tip: 'Uses what is normally thrown away. Do not add sugar.'
  },
  {
    id: 'b8-09', name: 'Unsweetened Soy Milk', meal: 'Snack', time: 40, servings: 4, budget: 2, gi: 'low', carbs: 4, calories: 90,
    ingredients: ['1 cup soybeans, soaked overnight', '4 cups water', 'Pinch of salt'],
    steps: ['Drain and blend the soybeans with water.', 'Sieve with a clean cloth.', 'Boil for 15 minutes, stirring to avoid burning.', 'Cool and drink.'],
    tip: 'Never drink raw soy milk. It must be boiled well.'
  },
  {
    id: 'b8-10', name: 'Moringa Leaf Tea', meal: 'Snack', time: 10, servings: 2, budget: 1, gi: 'low', carbs: 1, calories: 5,
    ingredients: ['1 small handful fresh moringa leaves (or 1 tsp dried)', '2 cups water', 'Squeeze of lime (optional)'],
    steps: ['Boil water and add the leaves.', 'Steep for 5 minutes.', 'Strain and drink warm without sugar.'],
    tip: 'Moringa is nutritious, but check with your doctor if you take diabetes tablets.'
  },

  // ---------- SUGAR-FREE SNACKS AND DESSERTS ----------
  {
    id: 'b8-11', name: 'Pawpaw with Plain Yoghurt', meal: 'Snack', time: 5, servings: 1, budget: 2, gi: 'medium', carbs: 18, calories: 130,
    ingredients: ['1 slice pawpaw (about 100 g)', '3 tbsp plain unsweetened yoghurt'],
    steps: ['Cube the pawpaw.', 'Top with yoghurt and eat slowly.'],
    tip: 'One slice only. Yoghurt helps slow sugar absorption.'
  },
  {
    id: 'b8-12', name: 'Baked Apple with Cinnamon', meal: 'Snack', time: 30, servings: 2, budget: 2, gi: 'low', carbs: 20, calories: 90,
    ingredients: ['2 small apples, cored', '1/2 tsp cinnamon', '2 tbsp water'],
    steps: ['Place the apples in a dish with water.', 'Sprinkle with cinnamon.', 'Bake or steam for 20 minutes until soft.'],
    tip: 'Eat the skin for extra fibre. One apple per person.'
  },
  {
    id: 'b8-13', name: 'Roasted Corn (Small Cob)', meal: 'Snack', time: 20, servings: 1, budget: 1, gi: 'medium', carbs: 25, calories: 120,
    ingredients: ['1 small cob of corn', 'Pinch of salt'],
    steps: ['Roast the corn over a gentle fire or oven.', 'Salt lightly.'],
    tip: 'Eat only one small cob and have it with protein such as boiled egg.'
  },
  {
    id: 'b8-14', name: 'Fresh Coconut Pieces', meal: 'Snack', time: 5, servings: 2, budget: 1, gi: 'low', carbs: 4, calories: 110,
    ingredients: ['4 small pieces fresh coconut (about 40 g)'],
    steps: ['Break the coconut and cut into small pieces.', 'Eat slowly.'],
    tip: 'Low in sugar but high in fat. Limit to one small handful.'
  },
  {
    id: 'b8-15', name: 'Avocado Slices with Lime', meal: 'Snack', time: 5, servings: 2, budget: 2, gi: 'low', carbs: 5, calories: 120,
    ingredients: ['1 small avocado', 'Juice of 1/2 lime', 'Pinch of salt and pepper'],
    steps: ['Slice the avocado.', 'Sprinkle with lime, salt and pepper.'],
    tip: 'Healthy fat with fibre. Half an avocado is enough.'
  },
  {
    id: 'b8-16', name: 'Sugar-Free Oat Cookies', meal: 'Snack', time: 30, servings: 8, budget: 2, gi: 'low', carbs: 8, calories: 70,
    ingredients: ['1 cup rolled oats', '1 egg', '1/2 tsp cinnamon', '1 tbsp crushed groundnut or coconut', '1 tsp oil'],
    steps: ['Mix everything into a thick dough.', 'Scoop 8 small cookies onto a greased tray.', 'Bake for 15 to 18 minutes.'],
    tip: 'Eat 1 or 2 cookies. Avoid if allergic to eggs or groundnuts.'
  },
  {
    id: 'b8-17', name: 'Watermelon and Cucumber Bowl', meal: 'Snack', time: 5, servings: 2, budget: 1, gi: 'medium', carbs: 12, calories: 55,
    ingredients: ['1 thin slice watermelon', '1/2 cucumber', 'Few mint or scent leaves'],
    steps: ['Cube the watermelon and cucumber.', 'Mix and chill.'],
    tip: 'Watermelon is sweet and can spike sugar. Keep it to a small bowl and mix with cucumber.'
  },
  {
    id: 'b8-18', name: 'Baked Unripe Plantain Chips', meal: 'Snack', time: 30, servings: 4, budget: 1, gi: 'medium', carbs: 15, calories: 100,
    ingredients: ['1 unripe plantain', '1 tsp oil', 'Pinch of salt'],
    steps: ['Slice the plantain very thin.', 'Toss with oil and salt.', 'Bake at medium heat for 15 to 20 minutes, turning once.'],
    tip: 'Eat a small handful (10 chips). Avoid shop-bought fried chips.'
  },
  {
    id: 'b8-19', name: 'Yoghurt with Cinnamon and Nuts', meal: 'Snack', time: 3, servings: 1, budget: 2, gi: 'low', carbs: 8, calories: 140,
    ingredients: ['1/2 cup plain unsweetened yoghurt', 'Pinch of cinnamon', '5 cashew nuts or groundnuts'],
    steps: ['Spoon the yoghurt into a bowl.', 'Add the cinnamon and nuts.'],
    tip: 'A good bedtime snack that keeps sugar steady overnight.'
  },
  {
    id: 'b8-20', name: 'Guava and Cucumber Plate', meal: 'Snack', time: 5, servings: 1, budget: 1, gi: 'low', carbs: 14, calories: 75,
    ingredients: ['1 medium guava', '1/2 cucumber, sliced'],
    steps: ['Wash the guava and slice.', 'Serve with cucumber.'],
    tip: 'Guava has a lot of fibre and vitamin C. Eat the whole fruit with the skin.'
  },

  // ---------- SOUPS ----------
  {
    id: 'b8-21', name: 'Light Afang Soup', meal: 'Soup', time: 50, servings: 4, budget: 3, gi: 'low', carbs: 7, calories: 220,
    ingredients: ['2 handfuls afang leaves, shredded', '2 handfuls waterleaf', '300 g fish', '1 tbsp palm oil', '2 tbsp crayfish', 'Pepper, onion, salt'],
    steps: ['Boil the fish with onion and pepper.', 'Add waterleaf and palm oil and cook for 8 minutes.', 'Add afang leaves and crayfish and simmer for 5 minutes.'],
    tip: 'Use less palm oil than the traditional recipe. Serve with a small Side portion.'
  },
  {
    id: 'b8-22', name: 'Light Edikang Ikong', meal: 'Soup', time: 45, servings: 4, budget: 3, gi: 'low', carbs: 6, calories: 210,
    ingredients: ['3 handfuls ugu', '2 handfuls waterleaf', '300 g lean beef or fish', '1 tbsp palm oil', '2 tbsp crayfish', 'Onion, pepper, salt'],
    steps: ['Cook the meat or fish until tender.', 'Add waterleaf and palm oil and cook for 6 minutes.', 'Add ugu and crayfish and simmer for 3 minutes.'],
    tip: 'A vegetable-rich soup that is low in carbs.'
  },
  {
    id: 'b8-23', name: 'Light Bitterleaf Soup', meal: 'Soup', time: 50, servings: 4, budget: 2, gi: 'low', carbs: 8, calories: 210,
    ingredients: ['2 handfuls washed bitterleaf', '1 tbsp palm oil', '2 tbsp ground egusi or cocoyam to thicken (small)', '300 g fish or lean meat', '1 tbsp crayfish', 'Pepper, salt'],
    steps: ['Cook the fish with pepper and onion.', 'Add the thickener and palm oil.', 'Add bitterleaf and crayfish and simmer for 10 minutes.'],
    tip: 'Wash the leaves well. Bitterleaf is traditionally eaten by many people with diabetes, but still follow your doctor.'
  },
  {
    id: 'b8-24', name: 'Light Fisherman Soup', meal: 'Soup', time: 45, servings: 4, budget: 3, gi: 'low', carbs: 5, calories: 230,
    ingredients: ['400 g mixed fish and prawns', '1 tbsp palm oil', '2 handfuls waterleaf or spinach', '2 pepper', '1 onion', 'Uziza seeds, salt'],
    steps: ['Boil pepper and onion with a little water.', 'Add the palm oil, fish and prawns.', 'Add uziza and vegetables and simmer for 8 minutes.'],
    tip: 'Seafood is low in carbs but can be salty, so go easy on seasoning.'
  },
  {
    id: 'b8-25', name: 'Light Oha Soup', meal: 'Soup', time: 55, servings: 4, budget: 3, gi: 'low', carbs: 8, calories: 230,
    ingredients: ['2 handfuls oha leaves', '300 g fish or lean beef', '1 tbsp palm oil', '2 tbsp ofor or cocoyam paste (small)', '1 tbsp crayfish', 'Pepper, salt'],
    steps: ['Cook the protein with pepper and onion.', 'Add the thickener and palm oil.', 'Add oha leaves and crayfish and cook for 5 minutes.'],
    tip: 'Keep the thickener small. Serve with a measured Side.'
  },
  {
    id: 'b8-26', name: 'Ewedu Soup', meal: 'Soup', time: 20, servings: 4, budget: 1, gi: 'low', carbs: 4, calories: 60,
    ingredients: ['2 handfuls fresh ewedu leaves', '1/2 tsp potash or pinch of baking soda (optional)', 'Salt', '1 tbsp iru (optional)'],
    steps: ['Boil water and add the cleaned leaves.', 'Cook for 8 minutes.', 'Blend or whisk with an ewedu broom, add salt and iru.'],
    tip: 'A very low-calorie soup. Pair with gbegiri and a small swallow portion.'
  },
  {
    id: 'b8-27', name: 'Gbegiri-Style Bean Soup', meal: 'Soup', time: 60, servings: 5, budget: 1, gi: 'low', carbs: 20, calories: 180,
    ingredients: ['1.5 cups peeled brown beans', '1 tbsp palm oil', '1 onion', 'Pepper and salt', 'Crayfish'],
    steps: ['Boil the beans until very soft.', 'Blend or mash to a smooth soup.', 'Add palm oil, onion, pepper and salt and simmer for 5 minutes.'],
    tip: 'Rich in fibre and protein. Measure your swallow to a fist size.'
  },
  {
    id: 'b8-28', name: 'Tomato and Fish Pepper Soup', meal: 'Soup', time: 30, servings: 3, budget: 2, gi: 'low', carbs: 6, calories: 140,
    ingredients: ['3 pieces fish', '2 tomatoes', '1 onion', '1 tbsp pepper soup spice', 'Scent leaf', '2 cups water', 'Salt'],
    steps: ['Boil water with blended tomato, onion and spice.', 'Add fish and cook for 10 minutes.', 'Add scent leaf and salt.'],
    tip: 'A light, spicy soup with no starch.'
  },
  {
    id: 'b8-29', name: 'Catfish Pepper Soup', meal: 'Soup', time: 35, servings: 3, budget: 3, gi: 'low', carbs: 4, calories: 190,
    ingredients: ['400 g catfish steaks', '1 tbsp pepper soup spice', '1 onion', 'Ginger and garlic', 'Scent leaf', '3 cups water', 'Salt'],
    steps: ['Clean the catfish well with lime and salt.', 'Boil water with onion, ginger, garlic and spice.', 'Add the fish and simmer for 12 minutes.', 'Add scent leaf and serve.'],
    tip: 'No carbs in this dish, so it will not raise your sugar.'
  },
  {
    id: 'b8-30', name: 'Lean Goat Meat Pepper Soup', meal: 'Soup', time: 70, servings: 4, budget: 3, gi: 'low', carbs: 4, calories: 220,
    ingredients: ['400 g lean goat meat (trim fat)', '2 tbsp pepper soup spice', '1 onion', 'Ginger and garlic', 'Scent leaf', '1.5 litres water', 'Salt'],
    steps: ['Boil the goat meat with onion, ginger and garlic until tender.', 'Add pepper soup spice and salt.', 'Simmer for 15 minutes, add scent leaf and serve.'],
    tip: 'Trim visible fat and skip the skin to keep it heart-friendly.'
  },
];