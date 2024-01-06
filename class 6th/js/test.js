
const randomNumber = Math.floor(Math.random() * 10) + 1;


function checkGuess(guess) {
  if (guess === randomNumber) {
    return "Congratulations! Your guess is correct.";
  } else if(guess<randomNumber){
    return `Please Increase`;
  }
  else
     return `Please Increase`;
  
}

// Example usage:
const yourGuess = document.getElementById('userNumber').value;
const result = checkGuess(yourGuess);
console.log(result);
