const ingredient = {
    'jollof rice': `
    - pepper
    - onion
    - seasoning
    - rice
    - tomatoes
    - groundnut oil
    - meat stock`,

    'fried rice':`
    - rice
    - groundnut oil
    - green pepper
    - carrot
    - salad cream
    - chilli pepper
    - green beans`,

    'stew': `
    - groundnut oil
    - meat
    - tomatoes
    - pepper
    - onion
    - seasoning`,

    'okro soup':`
    - okro
    - onion
    - meat
    - palm oil
    - seasoning
    - fish`,
    
    'samosa':`
    - green peas
    - flour
    - vegetable oil
    - irish potatoes
    - beaf
    - seasoning`
};

const recipe_steps = {
    'fried rice': `
- Perboil the rice, rinse and keep
- Prepare the ingredients (carrot, green peas etc)
- Heat groundnut oil in a pot over medium heat
- Add the chopped ingredients
- fry for 3 to 5 minutes and keep
- Add the meat stock and water moderately to rice in another pot
- Add seasoning moderately
- leave to boil
- Leave to cook and dry out water
- Add the fried ingredients and Stir
- Heat up for another 2 to 3 minutes
- Enjoy the meal!
`,
    'jollof rice': ` 
- Perboil the rice, rinse and keep
- Prepare the ingredients
- Heat groundnut oil in a pot over medium heat
- Add the chopped onion
- Pour in the blended red bell pepper and tomatoes
- Cook the mixture
- Add the meat stock and water moderately
- Add seasoning moderately
- leave to boil
- Add the rinsed rice
- Leave to cook and dry out water
- Stir rice
- Enjoy the meal!
`,
    'samosa': `
- Boil potatoes until soft, peel, and mash them
- In a pan, heat oil, add chopped onions, green chilies, seasoning
- Add the mashed potatoes to the mixture
- Mix everything thoroughly.
- Prepare the dough :
    - Mix flour, salt, and oil (or ghee) in a bowl
    - Gradually add water and knead until you have a smooth, elastic dough
    - Cover the dough and let it rest for at least 30 minutes
-Assemble and fry
    - Divide the dough into equal portions and roll each portion into a ball
    - Roll each ball into a thin oval or round shape.
    - Cut each rolled-out portion in half to form two semi-circles.
    - Take one semi-circle, wet the straight edge with water, and form a cone shape
    - Fill the cone with the prepared potato filling
    - Seal the open edge carefully, ensuring the filling is enclosed
    - Repeat the process for the remaining dough and filling.
    - Heat oil in a pan for deep frying.
    - Fry samosas in batches until they are golden brown and crispy
    - Serve hot with chutney or sauce.
    - Viola! Enjoy!!
`,
    'okro soup': `
- Clean and cut the meat into bite-sized pieces.
- Finely chop or slice the okra.
- Chop the onions
- In a large pot, cook the oil, meat with onions, salt, and any desired seasonings until tender.
- Add water or broth to the pot to create a flavorful base for the soup.
- Add the flaked smoked fish and shrimp (if using) to the pot
- Add the chopped okra to the pot and stir well. Okra acts as a natural thickener for the soup
- If the soup is too thick, add more water or broth to achieve the desired consistency
- Add the chopped leafy greens (spinach or ugu leaves) to the pot. Allow them to cook for a few more minutes
- Serve with semo, garri, wheat, fufu or any other swallow
- Enjoy your meal!
`,

    'stew': `
- Chop the onion and blend the tomatoes and pepper
- perboil the protein (meat, chicken, etc)
- In a large pot or Dutch oven, heat the vegetable oil over medium heat
- Add the onio
- Sauté the chopped onions until they become translucent
- Pour in the blended or crushed tomatoes and another paste
- Stir well and let it simmer for a few minutes until the tomatoes break down
- Add the meat broth and water moderately
- Add other seasoning
- boil till it tastes cooked
- Serve with white rice, yam, plantain etc
- Enjoy your meal!
`
}

module.exports = { ingredient, recipe_steps }