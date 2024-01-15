const readline = require('readline');
const apiKey = '95e8e96759204a1597f7ea0f6e1e9b4b';

// The prompt for the command line interface
const display = readline.createInterface(
  {
    input: process.stdin,
    output: process.stdout
  });

console.log("Welcome to askAnything.com")

// The asynchronous function that makes that fetches the response
async function getAnswer(question) {
  const apiUrl = `https://api.spoonacular.com/recipes/quickAnswer?apiKey=${apiKey}&q=${question}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('An error occured. There is no response');
    }

    const data = await response.json();
    const answer = data.answer;
    return answer;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}
// Function to get the user's input
function askQuestion() {
  display.question('Ask a nutrition question (Type No to exit): ', function (answer) {
    if (answer.toLowerCase() === 'no') {
      console.log('Goodbye!');
      display.close()
    }
    else if (answer) {
      getAnswer(answer)
        .then(reply => {
          if (reply) {
            console.log('Response:', reply);
            askQuestion()
          } else {
            console.log('No response. Ask another question');
            askQuestion()
          }
        });
    } else {
      console.log('No question provided.');
      askQuestion()
    }
  })
}
askQuestion()



