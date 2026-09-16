/** Write a for loop that loops 1 thru 20
 * If the number is divisible by 3 print "Frontend"
 * If the number is divisible by 5 print "Simplified"
 * If the number is divisible by both 3 and 5 print "Frontend Simplified"
 * If the number is not divisible by either 3 or 5 print the number
 * example
 * 1-->1
 * 2-->2
 * 3-->Frontend
 * 4-->4
 * 5-->Simplified
 * 6-->Frontend
 * 7-->7
 * 8-->8
 * 9-->Frontend
 * 10-->Simplified
 * 11-->11
 * 12-->Frontend
 * 13-->13
 * 14-->14
 * 15-->Frontend Simplified
 * 16-->16
 * 17-->17
 * 18-->Frontend
 * 19-->19
 * 20-->Simplified
 */
for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`${i} --> Frontend Simplified`);
  } else if (i % 3 === 0) {
    console.log(`${i} --> Frontend`);
  } else if (i % 5 === 0) {
    console.log(`${i} --> Simplified`);
  } else {
    console.log(`${i} --> ${i}`);
  }
}

/*
 * Print out every character from the string:
 * "Frontend Simplified"
 *
 * Example:
 * F
 * r
 * o
 * n
 * t
 * ...
 * e
 * n
 * d
 */
const str = "Frontend Simplified";

for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}

/**
 * Create a function that converts Celsius to Fahrenheit
 * 
 * Celsius to Fahrenheit formula:
 * (Celsius × 1.8) + 32 = Fahrenheit
 */
function celsiusToFahrenheit(celsius) {
  return (celsius * 1.8) + 32;
}
console.log(celsiusToFahrenheit(0))

// DRY - Don't repeat yourself
//Function definition
function welcomePersonToFES(firstName , lastName) {
    console.log(`Welcome to FES, ${firstName} ${lastName}`);
}
// Call the function
welcomePersonToFES("Jason", "Jones");


function fn() {
    return 5
console.log("my function")
}

console.log(5);

function WelcomeToPersonFES(firstName , lastName) {
    console.log(`Welcome to FES, ${firstName} ${lastName}`);
}
WelcomeToPersonFES('Jason' , 'Jones');

function fn() {
    return 10
    console.log('my function')
} 
    console.log(10);

    function sumOfTwoNumbers(num1, num2) {
        return num1 / num2
    }
console.log(sumOfTwoNumbers(10, 10));

    
