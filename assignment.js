// ===============================
// QUESTION 1: Switch + Ternary
// ===============================

let score = 85;

let grade;

switch (true) {
  case (score >= 90 && score <= 100):
    grade = "A";
    break;
  case (score >= 80 && score <= 89):
    grade = "B";
    break;
  case (score >= 70 && score <= 79):
    grade = "C";
    break;
  case (score >= 60 && score <= 69):
    grade = "D";
    break;
  default:
    grade = "F";
}

console.log("Grade:", grade);

let result = (score >= 60) ? "Passed" : "Failed";
console.log("Result:", result);


// ===============================
// QUESTION 2: Type Conversion & Truthy/Falsy
// ===============================

let input = "25";
let convertedNumber = Number(input);

console.log("\nConverted Number:", convertedNumber);

let values = [0, "", "hello", null, undefined, NaN];

values.forEach(value => {
  if (value) {
    console.log(value, "=> Truthy");
  } else {
    console.log(value, "=> Falsy");
  }
});


// ===============================
// QUESTION 3: Functions & Logic
// ===============================

function greetingBot(name, isMorning) {
  return isMorning && name
    ? `Good morning, ${name}!`
    : `Hello, ${name}!`;
}

console.log("\n", greetingBot("Alex", true));
console.log(greetingBot("Alex", false));


// ===============================
// QUESTION 4: Objects & Methods
// ===============================

let post = {
  username: "john_doe",
  caption: "Learning JavaScript!",
  likes: 10,
  comments: ["Nice post!", "Keep going!"],

  addLike: function () {
    this.likes++;
  }
};

// increase likes
post.addLike();
console.log("\nLikes:", post.likes);

// destructuring
let { username, caption } = post;

console.log("Username:", username);
console.log("Caption:", caption);


// ===============================
// QUESTION 5: Arrays, Spread, Loops
// ===============================

// Merge arrays using spread operator
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let merged = [...arr1, ...arr2];

console.log("\nMerged Array:", merged);


// Pattern printing (for loop)
let rows = 5;

console.log("\nPattern:\n");

for (let i = 1; i <= rows; i++) {
  let line = "";

  for (let j = 1; j <= rows - i; j++) {
    line += "   ";
  }

  for (let k = 1; k <= i; k++) {
    line += "*   ";
  }

  console.log(line);
}


// While loop countdown
console.log("\nCountdown:");

let num = 10;

while (num >= 1) {
  console.log(num);
  num--;
}
