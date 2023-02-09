let first = 5;
let second = 7;
console.log(first, second);


// Approach - 1 (by temp)
const temp = first;
first = second;
console.log(first, second); // temp দ্বারা স্টোর করে নিয়ে তারপর second এর মান first কে দেয়া হয়েছে। 
second = temp; 
console.log(first, second); // এইবার temp এ স্টোর করে রাখা first এর মান second কে দেয়া হয়েছে। 



// Approach - 2 (be destructing)
[first, second] = [second, first]; // temp use করা ছাড়া এভাবেও করা যায়। 
console.log(first, second);