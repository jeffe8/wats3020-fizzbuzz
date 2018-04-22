/* Code for WATS 3020 FizzBuzz Assignment */

let isInteger,
    maxNumber,
    fbResults,
    fbText;

isInteger = false
// Note - Initialize this intiger to false.  

while(!isInteger) {
//Note - 'While Not is Integer' is the logic used for this code. Not-false is going to be true,
//this will execute so long as isInteger remains false.  The momenet isInteger changes to true
//the code stops.
  
  //In order for the maxNumber to be valid, we need to know the following:
  //It is an integer
  //It is more than Zero
maxNumber = prompt('Enter a number greater than Zero (must be an integer):', 20);
//This number tells the code how many integers we want processed through FizzBuzz algorithim.
maxNumber = parseInt(maxNumber);
  if (Number.isSafeInteger(maxNumber) && maxNumber > 0){
    isInteger = true 
  }
//This conditional will check to see if the integer will work for the code.  If the number
//entered does not work, then this will convert the entry into one that will.
//Once an integer is chosen that is suitable for code, isInteger is changed to 'true' and the
//while loop stops.  
}
 
fbResults = [];
//Note - this will initialize the fbResults into an empty array.  

for (let i=1; i <= maxNumber; i++) {
if (i % 15 == 0) {
  fbResults.push('FizzBuzz');
  //Being divisible by 3 and 5 together, we start with this number. Use the 'remainder' symbol.
  //Logic= if the integer is divisible by the numbers indicated, use the remainder command to assign logic to follow-on numbers.
} else if (i % 3 == 0) {
  fbResults.push('Fizz');
  //Logic= being divisible by 3 will set the result to 0, therefore any remaining number that is divisible by 3 will show command 
} else if (i % 5 == 0) {
  fbResults.push('Buzz');
  //Logic= being divisible by 5 will set the result to 0, therefore any remaining number that is divisible by 5 will show command
} else {
  fbResults.push(i);
  //This command tells the code to show the number if it is not divisible by 3 OR 5.
}
}  

fbText = '';

for (let result of fbResults) {
    fbText = fbText + result + "\n"; 
}



///////////////////////////////////////////////////////////////////////
// Do not edit below this line unless you are doing something fancy!
//////////////////////////////////////////////////////////////////////
let numDisplay = document.querySelector("#max-number");
numDisplay.innerHTML = maxNumber;
let output = document.querySelector("#output");
output.innerHTML = fbText;
