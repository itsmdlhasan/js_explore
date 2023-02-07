var myPrice = 45000;
var iphonePrice = 90000;

if (myPrice > iphonePrice) {
    console.log('Iphone kinbo');
}
else if (myPrice >= 20000) {
    console.log('Xiaomi kinbo');
}
else {
    console.log('Symphony kinbo');
}







var isGraduated = true;
var mySalary = 20000;
var myCar = 3;

if (isGraduated == false) {
    console.log('murkho cheler kache biye dibona');
}
else if (isGraduated == true && mySalary >= 50000 || myCar >= 2) {
    console.log('biye korte parbe');
}
else {
    console.log('tomar kache biye dibona');
}






var myMoney = 40;
var danishPrice = 45;
var butterBread = 35;
var toastBiscuit = 20;

if (danishPrice < myMoney) {
    console.log('amake danish den');
}
else if (butterBread < myMoney) {
    console.log('amake butter bon den');
}
else if (toastBiscuit < myMoney) {
    console.log('amake toast biscuit den');
}
else {
    console.log('shingara kheye basay jai');
}






var math = false;
var geometry = true;

if (math == true) {
    if (geometry == false) {
        console.log('geometry thik koro');
    }
    else {
        console.log('tumi poralekhay valo')
    }
}
else if (geometry == true) {
    if (math == false) {
        console.log('math thik koro');
    }
}
else {
    console.log('dummies kothakar');
}






/* You and your friends Tom, Jane, Peter and John got their final exam results. Your total
score is 85, Tom’s total score is 66, Jane’s total score is 95, Peter’s total score is 56
and John’s total score is 40. The grading chart is
80 or above A grade
60 or above B grade
50 or above C grade
40 or above D grade
39 or less => F grade

Write a program to find your and your friends’ grades using if-else. */

let scoreYou = 85;
let scoreTom = 66;
let scoreJane = 95;
let scorePeter = 56;
let scoreJohn = 40;

if (scoreYou >= 80) {
  console.log("Your grade is A");
} else if (scoreYou >= 60) {
  console.log("Your grade is B");
} else if (scoreYou >= 50) {
  console.log("Your grade is C");
} else if (scoreYou >= 40) {
  console.log("Your grade is D");
} else {
  console.log("Your grade is F");
}

if (scoreTom >= 80) {
  console.log("Tom's grade is A");
} else if (scoreTom >= 60) {
  console.log("Tom's grade is B");
} else if (scoreTom >= 50) {
  console.log("Tom's grade is C");
} else if (scoreTom >= 40) {
  console.log("Tom's grade is D");
} else {
  console.log("Tom's grade is F");
}

if (scoreJane >= 80) {
  console.log("Jane's grade is A");
} else if (scoreJane >= 60) {
  console.log("Jane's grade is B");
} else if (scoreJane >= 50) {
  console.log("Jane's grade is C");
} else if (scoreJane >= 40) {
  console.log("Jane's grade is D");
} else {
  console.log("Jane's grade is F");
}

if (scorePeter >= 80) {
  console.log("Peter's grade is A");
} else if (scorePeter >= 60) {
  console.log("Peter's grade is B");
} else if (scorePeter >= 50) {
  console.log("Peter's grade is C");
} else if (scorePeter >= 40) {
  console.log("Peter's grade is D");
} else {
  console.log("Peter's grade is F");
}

if (scoreJohn >= 80) {
  console.log("John's grade is A");
} else if (scoreJohn >= 60) {
  console.log("John's grade is B");
} else if (scoreJohn >= 50) {
  console.log("John's grade is C");
} else if (scoreJohn >= 40) {
  console.log("John's grade is D");
} else {
  console.log("John's grade is F");
}




/* You are given three numbers 13, 79, and 45. Write a program that will print the
largest number using if-else. */

let num1 = 13;
let num2 = 79;
let num3 = 45;

if (num1 >= num2 && num1 >= num3) {
    console.log(num1);
} else if (num2 >= num1 && num2 >= num3) {
    console.log(num2);
} else {
    console.log(num3);
}




/* You are given a triangle with the sides 9, 8, 9. Write a program to check whether a
triangle is Isosceles or not using if-else.

Isosceles => two sides are equal */

let side1 = 9;
let side2 = 8;
let side3 = 9;

if (side1 === side2 || side2 === side3 || side1 === side3) {
    console.log("Isosceles");
} else {
    console.log("Not Isosceles");
}