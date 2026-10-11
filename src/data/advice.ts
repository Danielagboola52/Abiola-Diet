import { Ionicons } from '@expo/vector-icons';

export type Tip = { t: 'do' | 'dont' | 'info'; text: string };

export interface Section {
  id: string;
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
  intro?: string;
  items: Tip[];
}

export const emergency = {
  low: {
    title: 'Low blood sugar (below 70 mg/dL / 3.9 mmol/L)',
    signs: 'Shaking, sweating, sudden hunger, dizziness, fast heartbeat, headache, blurred vision, irritability or confusion.',
    steps: [
      'Take 15g of fast sugar right away: 3 teaspoons of sugar in water, or half a cup (about 120ml) of juice or soft drink, or 3 glucose tablets.',
      'Wait 15 minutes, then check your sugar again.',
      'If it is still below 70 mg/dL, repeat the 15g again.',
      'Once it rises, eat a small snack or your next meal (for example bread with egg or a few biscuits with groundnuts).',
    ],
    danger:
      'If the person is unconscious, having a seizure or cannot swallow: do NOT put food or drink in their mouth. Lay them on their side and take them to the nearest hospital or call emergency services immediately.',
  },
  high: {
    title: 'High blood sugar (above 250 mg/dL / 13.9 mmol/L)',
    signs: 'Very strong thirst, passing urine often, tiredness, blurred vision, dry mouth, headache.',
    steps: [
      'Drink water steadily. Do not take sugary drinks.',
      'Take your medication as prescribed. Do not take extra doses unless your doctor told you to.',
      'Avoid hard exercise while the sugar is very high and you feel unwell.',
      'Recheck in 2 to 4 hours and call your doctor or clinic if it stays high.',
    ],
    danger:
      'Go to hospital urgently if there is vomiting, stomach pain, fast or deep breathing, fruity smelling breath, extreme drowsiness or confusion. These can be signs of a dangerous condition called diabetic ketoacidosis.',
  },
};

export const plateTips = [
  'Fill half of your plate with non-starchy vegetables: ugwu, efo, okra, garden egg, bitter leaf, cabbage, green beans.',
  'Fill one quarter with protein: fish, egg, beans, chicken or lean meat.',
  'Fill one quarter with a starch, measured: brown rice, oat swallow, unripe plantain, yam or sweet potato.',
  'Eat vegetables and protein first, then the starch. This slows the sugar rise.',
];

export const sections: Section[] = [
  {
    id: 'glucometer',
    title: 'Using a glucometer',
    icon: 'pulse',
    intro:
      'The numbers in the Sugar Log come from a glucometer, not from food. A glucometer is a small device that reads a drop of blood on a test strip.',
    items: [
      { t: 'do', text: 'Wash your hands with soap and water and dry them well before testing. Sugary residue on the skin gives a false high reading.' },
      { t: 'do', text: 'Prick the side of a fingertip, not the pad, and use a different finger each time.' },
      { t: 'do', text: 'Check the strip expiry date. Close the strip container tightly and keep it away from heat and moisture.' },
      { t: 'do', text: 'Buy meters and strips from a licensed pharmacy or hospital. Fake or expired strips give wrong readings.' },
      { t: 'do', text: 'Use only the strips made for your meter brand.' },
      { t: 'info', text: 'No glucometer yet? Hospitals, clinics, medical laboratories and many pharmacies can test your blood sugar for a fee.' },
      { t: 'info', text: 'Ask your doctor how often to test. It depends on your type of diabetes and treatment. Testing before a meal and 2 hours after shows what that meal did to you.' },
      { t: 'dont', text: 'Do not use a strip twice or share a lancet or meter with another person.' },
    ],
  },
  {
    id: 'dos',
    title: "Daily do's",
    icon: 'checkmark-circle',
    items: [
      { t: 'do', text: 'Eat at regular times. Do not leave long gaps between meals.' },
      { t: 'do', text: 'Use the plate method for every main meal.' },
      { t: 'do', text: 'Choose beans, vegetables, whole grains, fish and eggs as your main foods.' },
      { t: 'do', text: 'Measure starch portions. Use a small cup, derica or ladle until you know your portion by eye.' },
      { t: 'do', text: 'Drink plenty of water through the day.' },
      { t: 'do', text: 'Walk for at least 30 minutes on most days of the week.' },
      { t: 'do', text: 'Take your medication at the same time each day, exactly as prescribed.' },
      { t: 'do', text: 'Sleep 7 to 8 hours. Poor sleep and stress raise blood sugar.' },
      { t: 'do', text: 'Carry a small sugar source (sweets or sugar sachets) in case of low sugar, especially if you take insulin or sulfonylurea tablets.' },
      { t: 'do', text: 'Keep a diabetes ID or a note in your wallet or phone saying you are diabetic and what you take.' },
    ],
  },
  {
    id: 'donts',
    title: "Daily don'ts",
    icon: 'close-circle',
    items: [
      { t: 'dont', text: 'Do not drink soft drinks, malt drinks, packaged juice, sweetened zobo, kunu or pap with sugar. They raise sugar fast.' },
      { t: 'dont', text: 'Do not eat large portions of eba, fufu, amala, pounded yam, white rice or white bread.' },
      { t: 'dont', text: 'Do not eat sugary snacks regularly: cakes, doughnuts, biscuits, chin chin, meat pie, ice cream.' },
      { t: 'dont', text: 'Do not eat a lot of fried food or soup swimming in palm oil. Use small amounts of oil.' },
      { t: 'dont', text: 'Do not skip meals, especially if you take diabetes medicine or insulin.' },
      { t: 'dont', text: 'Do not eat a heavy meal late at night and go straight to bed.' },
      { t: 'dont', text: 'Do not stop or reduce your medicine because your sugar looks normal. It is normal because the medicine is working.' },
      { t: 'dont', text: 'Do not smoke. Smoking increases the risk of heart disease and foot problems in diabetes.' },
      { t: 'dont', text: 'Do not walk barefoot, even at home.' },
    ],
  },
  {
    id: 'eating',
    title: 'Eating well on a budget',
    icon: 'restaurant',
    items: [
      { t: 'do', text: 'Beans, ugwu, efo, okra, garden egg, eggs and mackerel are cheap, filling and diabetes-friendly.' },
      { t: 'do', text: 'Choose unripe plantain over ripe plantain, and boil or steam rather than fry.' },
      { t: 'do', text: 'Fruits are healthy but count as carbohydrate. Eat one small portion at a time (a small orange, a few slices of pawpaw, a small guava or one small apple) and not on top of a big meal.' },
      { t: 'do', text: 'Add vegetables to every soup and stew to bulk up the meal with fibre.' },
      { t: 'do', text: 'Grill, boil or steam fish and meat. Remove chicken skin.' },
      { t: 'do', text: 'Read labels on packaged food. Look at sugar and carbohydrate per serving.' },
      { t: 'info', text: 'Good drinks: water, unsweetened zobo, plain tea, green tea, and fresh coconut water in small amounts.' },
      { t: 'info', text: 'Snack ideas: boiled egg, small handful of unsalted groundnuts, garden egg with a little pepper sauce, cucumber, boiled beans.' },
    ],
  },
  {
    id: 'exercise',
    title: 'Exercise and activity',
    icon: 'walk',
    intro: 'Activity helps your body use sugar and improves how well medicine works.',
    items: [
      { t: 'do', text: 'Aim for about 150 minutes a week, for example 30 minutes of brisk walking on 5 days.' },
      { t: 'do', text: 'Walking, dancing, cycling, swimming, light farm or house work all count.' },
      { t: 'do', text: 'Wear closed, comfortable shoes and socks when exercising.' },
      { t: 'do', text: 'Check your sugar before exercise if you can. If it is below 100 mg/dL (5.6 mmol/L) and you use insulin or sulfonylureas, have a small snack first.' },
      { t: 'do', text: 'A 10 to 15 minute walk after meals helps reduce the after-meal rise.' },
      { t: 'dont', text: 'Do not exercise hard when your sugar is very high and you feel unwell, or when it is low.' },
      { t: 'dont', text: 'Stop and treat immediately if you feel shaky, dizzy or sweaty.' },
      { t: 'info', text: 'Talk to your doctor before starting a new vigorous exercise routine, especially if you have heart, eye or foot problems.' },
    ],
  },
  {
    id: 'feet',
    title: 'Foot care',
    icon: 'footsteps',
    intro: 'Diabetes can reduce feeling in the feet and slow wound healing. Small cuts can become serious infections.',
    items: [
      { t: 'do', text: 'Check both feet every day, including the soles and between the toes. Use a mirror or ask someone to help.' },
      { t: 'do', text: 'Wash your feet daily with mild soap and lukewarm water, and dry well, especially between toes.' },
      { t: 'do', text: 'Moisturise the top and bottom of the feet, but not between the toes.' },
      { t: 'do', text: 'Wear well-fitting shoes and clean, dry cotton socks.' },
      { t: 'do', text: 'Shake out your shoes before wearing them.' },
      { t: 'do', text: 'Cut toenails straight across and file the edges.' },
      { t: 'dont', text: 'Do not walk barefoot, even on the compound or at home. Avoid very tight shoes and thin slippers on rough ground.' },
      { t: 'dont', text: 'Do not cut corns or calluses yourself, and do not use medicated corn plasters or sharp blades.' },
      { t: 'dont', text: 'Do not soak your feet in hot water or place them near a heater. You may not feel a burn.' },
      { t: 'info', text: 'See a doctor quickly for any cut, blister, swelling, redness, discharge, colour change or wound that is not healing.' },
    ],
  },
  {
    id: 'medication',
    title: 'Medication and insulin',
    icon: 'medkit',
    items: [
      { t: 'do', text: 'Take medicine exactly as your doctor or pharmacist told you. Ask if you are unsure about timing relative to food.' },
      { t: 'do', text: 'Keep a list of all your medicines, including supplements and herbal products, and show it at every clinic visit.' },
      { t: 'do', text: 'If you use insulin, keep unopened insulin in a refrigerator. In power cuts you can keep it in a clean pot of cool water or a pot-in-pot cooler. Never freeze it and never leave it in a hot car or in the sun.' },
      { t: 'do', text: 'Rotate insulin injection sites (tummy, thighs, upper arms) to avoid lumps.' },
      { t: 'do', text: 'Dispose of needles safely in a hard container. Do not reuse needles.' },
      { t: 'dont', text: 'Do not take drugs or herbal mixtures advertised as a "cure" for diabetes. There is no cure, only control.' },
      { t: 'dont', text: 'Do not replace your prescribed medicine with herbs, teas, or bitter leaf water. Some herbs may interact with medication or cause very low sugar.' },
      { t: 'dont', text: 'Do not share your medicine or take someone else\'s.' },
    ],
  },
  {
    id: 'sick',
    title: 'Sick days',
    icon: 'thermometer',
    intro: 'Malaria, typhoid, infections and fever can push blood sugar up even when you eat less.',
    items: [
      { t: 'do', text: 'Keep taking your diabetes medicine unless your doctor tells you to change it. Insulin users should never stop insulin without advice.' },
      { t: 'do', text: 'Check your blood sugar at least every 4 hours while ill.' },
      { t: 'do', text: 'Drink water or other sugar-free fluids often, about a cup every hour while awake.' },
      { t: 'do', text: 'If you cannot eat normally, take small amounts of easy foods like pap without sugar, soup, or plain biscuits.' },
      { t: 'do', text: 'Contact your doctor early. Do not wait for it to get worse.' },
      { t: 'dont', text: 'Do not buy drugs over the counter for fever or cough without checking with a pharmacist that they are safe for diabetes. Some syrups contain sugar.' },
      { t: 'info', text: 'Go to hospital if you vomit more than once, cannot keep fluids down, have stomach pain, fast breathing, or sugar stays high.' },
    ],
  },
  {
    id: 'special',
    title: 'Fasting, parties and alcohol',
    icon: 'calendar',
    items: [
      { t: 'do', text: 'If you plan to fast for religious reasons (Ramadan, Lent, or others), speak to your doctor first. Medicine doses and timing often need to change, and some people are advised not to fast.' },
      { t: 'do', text: 'Break a fast with water and a balanced meal, not a large portion of sweets or starch.' },
      { t: 'do', text: 'At parties and owambe, eat a healthy meal or snack beforehand, take small portions, choose protein and vegetables first, and drink water instead of soft drinks.' },
      { t: 'do', text: 'Have a plan for celebrations: one small portion of the special food rather than many.' },
      { t: 'dont', text: 'Do not drink alcohol on an empty stomach. Alcohol can cause dangerously low sugar, even hours later.' },
      { t: 'info', text: 'If you drink at all, keep it small and with food. Sweet drinks, palm wine and beer can affect your sugar and weight. Ask your doctor what is safe for you.' },
    ],
  },
  {
    id: 'checkups',
    title: 'Regular check-ups',
    icon: 'calendar-outline',
    intro: 'Good control protects your eyes, kidneys, nerves and heart. Ask your doctor about this schedule.',
    items: [
      { t: 'do', text: 'HbA1c test (average sugar over about 3 months): usually every 3 to 6 months. Many adults aim for under 7%, but your doctor will set your target.' },
      { t: 'do', text: 'Blood pressure: at every visit. Aim for what your doctor recommends, often below 130/80.' },
      { t: 'do', text: 'Eye examination: at least once a year.' },
      { t: 'do', text: 'Kidney tests (urine and blood): at least once a year.' },
      { t: 'do', text: 'Cholesterol: at least once a year.' },
      { t: 'do', text: 'Foot examination by a health worker: at least once a year, and at every visit if you have numbness.' },
      { t: 'do', text: 'Dental check-up twice a year. Gum disease is more common in diabetes.' },
      { t: 'do', text: 'Ask your doctor about vaccines such as flu and pneumonia.' },
    ],
  },
  {
    id: 'urgent',
    title: 'See a doctor urgently if...',
    icon: 'alert-circle',
    items: [
      { t: 'dont', text: 'Your sugar is below 54 mg/dL (3.0 mmol/L) or you have low sugar that keeps coming back.' },
      { t: 'dont', text: 'Your sugar stays above 300 mg/dL (16.7 mmol/L).' },
      { t: 'dont', text: 'You are vomiting, have stomach pain, fast breathing, or are very drowsy or confused.' },
      { t: 'dont', text: 'You have a foot wound, blister, swelling or redness that is not healing.' },
      { t: 'dont', text: 'You have sudden blurred vision or loss of vision.' },
      { t: 'dont', text: 'You have chest pain, shortness of breath, weakness on one side of the body, or difficulty speaking.' },
      { t: 'dont', text: 'You are pregnant or planning pregnancy. Diabetes needs close care in pregnancy.' },
    ],
  },
  {
    id: 'myths',
    title: 'Common myths',
    icon: 'help-circle',
    items: [
      { t: 'info', text: 'Myth: Diabetes is caused by eating too much sugar alone. Fact: Weight, family history, inactivity and age all play a part. Sugar is only one part.' },
      { t: 'info', text: 'Myth: Diabetes can be cured with herbs or a special drink. Fact: There is no known cure. It can be controlled with food, activity and the right treatment.' },
      { t: 'info', text: 'Myth: Once my sugar is normal I can stop my medicine. Fact: Normal sugar means the treatment is working. Stopping can cause it to rise again.' },
      { t: 'info', text: 'Myth: A diabetic person must never eat carbohydrates. Fact: Carbohydrates are fine in measured portions with vegetables and protein.' },
      { t: 'info', text: 'Myth: Diabetes is a spiritual attack or a curse. Fact: Diabetes is a medical condition. Getting proper care early prevents complications.' },
      { t: 'info', text: 'Myth: Bitter food like bitter leaf or bitter kola replaces medicine. Fact: Bitter leaf is a healthy vegetable but is not a replacement for prescribed treatment.' },
    ],
  },
];