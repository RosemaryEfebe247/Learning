const readline = require('readline');
const { ingredient, recipe_steps } = require('./recipeSteps');
const { parse } = require('path/win32');

const recipe = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    });
console.log('Welcome to MyRecipe!')

const welcome_display = `
Available recipe include:
Press 1 for Jollof Rice
2 for  fried rice
3 for stew
4 for okro soup
5 for samosa
`

const option_display = `Would you like to know the ingredients or steps:
press 1 for Ingredients
2 for Steps
`

function askUser() {
    console.log(welcome_display);

    recipe.question('Choose a recipe: ', function (recipechoice) {
        const choiceInt = parseInt(recipechoice)
        if (choiceInt > 5 || choiceInt <= 0) {
            console.log('Invalid Option: Choose from Numbers 1 - 5')
            restart();
        } else {
            console.log(option_display);
            recipe.question('Enter option here: ', function (infochoice) {
                handleRecipe(infochoice, recipechoice);
                restart();
            })
        };
    })
}

function restart() {
    recipe.question('Do you want to start again? yes/no: ', function (answer) {
        if (answer === 'yes') {
            askUser();
        } else {
            console.log('Thank you')
            recipe.close()
        };
    });
}

function displayOutput(infochoice, recipechoice) {
    if (infochoice === '1') {
        infochoice = 'ingredients'
        console.log(`Here are the ingredients for ${recipechoice}:` + ingredient[recipechoice]);
    } else if (infochoice === '2') {
        infochoice = 'steps'
        console.log(`Here are the steps to prepare ${recipechoice}:` + recipe_steps[recipechoice]);
    } else {
        console.log('Enter a valid option');
    }
}

function handleRecipe(infochoice, recipechoice) {
    switch (recipechoice) {
        case '1':
            recipechoice = 'jollof rice';
            displayOutput(infochoice, recipechoice);
            break;
        case '2':
            recipechoice = 'fried rice';
            displayOutput(infochoice, recipechoice);
            break;
        case '3':
            recipechoice = 'stew';
            displayOutput(infochoice, recipechoice);
            break;
        case '4':
            recipechoice = 'okro soup';
            displayOutput(infochoice, recipechoice);
            break;
        case '5':
            recipechoice = 'samosa';
            displayOutput(infochoice, recipechoice);
            break;
        default:
            console.log('Invalid Choice');
    }

}

askUser()