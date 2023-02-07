var a = 10;
console.log(a);  // Output: 10

a = 20;
console.log(a);  // Output: 20

// var is hoisted to the top of the function scope

// let and const are block scoped and not hoisted

if (true) {
  let b = 30;
  console.log(b);  // Output: 30

  b = 40;
  console.log(b);  // Output: 40
}

// let is reassignable

if (true) {
  const c = 50;
  console.log(c);  // Output: 50

  c = 60;  // TypeError: Assignment to constant variable
}

// const is not reassignable
