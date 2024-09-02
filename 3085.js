/*************Part 1: Thinking Functionally******/
// function addTwo(numberList) {
//     const newList = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
//       { id: "48", name: "Barry", occupation: "Runner", age: "25" },
//       { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
//       { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
//       { id: "7", name: "Bilbo", occupation: "None", age: "111" }]
      
//     for(let i = 0; i < numberList.length; i++) {
//       const currentNumber = numberList[i]
//       const updatedNumber = currentNumber + 2
//       newList.push(updatedNumber)
//     }
//     return newList
//   }



function reverseString(str) {
    const strArray = str.split("");
    const revArray = strArray.reverse();
    const revString = revArray.join("");
    return revString;
  }
  
  function reverseString2(str) {
    return str.split("").reverse().join("");
  }
  
  function reverseString3(str) {
    let revString = "";
    for (let i = str.length - 1; i >= 0; i--) {
      revString += str[i];
    }
    return revString;
  }
  
  function reverseString4(str) {
    if (str === "") return "";
    else return reverseString4(str.substr(1)) + str.charAt(0);
  }
  
  function reverseString5(str) {
    return (str === "") ? "" : reverseString5(str.substr(1)) + str.charAt(0);
  }
  
  console.log(reverseString("!dlroW olleH"))
  console.log(reverseString2("!dlroW olleH"))
  console.log(reverseString3("!dlroW olleH"))
  console.log(reverseString4("!dlroW olleH"))
  console.log(reverseString5("!dlroW olleH"))

// Take an array of numbers and return the sum.

function Sum(a, b) {
  return a + b;
}
console.log("The sum is", Sum(15, 10));


// Take an array of numbers and return the average.
function AverageNum(x, y) {
  return(x + y)/2;
}
console.log("the average is", AverageNum(15, 10));

// Take an array of strings and return the longest string.
let arr = [
  "HTML",
  "javaScript",
  "CSS",
  "React",
];

function longestString() {
  return arr.reduce(function (a, b) {
      return a.length > b.length ? a : b;
  });
}

console.log(longestString());

// Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
let result = longerString([
  "HTML",
  "javaScript",
  "CSS",
  "React",
], 4)

function longerString(array, number) {
  return array.filter(str =>str.length > number);
}

console.log("string is longer than");
console.log(result);



// Take a number, n, and print every number between 1 and n without using loops. Use recursion.
function counter(count) {
  console.log(count);

  if(count > 1) {
      count = count - 1;
      counter(count);
  } else {

      return;
  };
};

counter(5);

/**********************Part 2: Thinking Methodically***********/


let workers = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
  { id: "48", name: "Barry", occupation: "Runner", age: "25" },
  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
  { id: "7", name: "Bilbo", occupation: "None", age: "111" }]

// Sort the array by age.
let age = workers.map(workers => workers.age);
console.log(age);

  
// Filter the array to remove entries with an age greater than 50.
let ageRemove = workers.filter( workers =>{
  return workers.age >= 50
})
console.log(ageRemove);


// Map the array to change the “occupation” key to “job” and increment every age by 1.
let occupation = workers.map(workers => workers.occupation);

console.log(occupation);


// Use the reduce method to calculate the sum of the ages.
let value = 0
let totalAge = age.reduce((a,b) => a + b, value);
console.log(totalAge);


// Then use the result to calculate the average age.

let averAge = totalAge/age.length;
console.log(averAge);

