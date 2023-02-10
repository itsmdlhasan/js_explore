// // normal increase
// let sum = 0;
// for (let i = 1; i <= 5; i++) {
//     sum += i;
// }
// console.log(sum);



// // normal decrease
// let add = 0;
// for (let i = 5; i >= 1; i--) {
//     add += i;
// }
// console.log(add);



// ফাংশনের ভিতর থেকে কোনো ফাংশন কে কল করাকে বলা হয় recursion, আর যেই ফাংশনের দ্বারা এমন করা হয় তাকে বলে recursive function...

function sum(i) {
    if (i == 1) {
        return 1; // এখানে লুপ টাকে স্টপ করে দেয়া হয়েছে।
    }
    return i + sum(i-1); // এখানে sum ফাংশন টাকে কল করা হয়েছে i এর মানের উপর ভিত্তি করে।  
}
const result = sum(5);
console.log(result);
// প্রথমবার যখন i এর মান ৫, তখন ৫ + sum(৫-১);
// দ্বিতীয়বার যখন i এর মান ৪, তখন ৫ + ৪ + sum(৪-১);
// তৃতীয়বার যখন i এর মান ৩, তখন ৫ + ৪ + ৩ + sum(৩-১);
// চতুর্থবার যখন i এর মান ২, তখন ৫ + ৪ + ৩ + ২ + sum(২-১);
// পঞ্চমবার যখন i এর মান ১, তখন ৫ + ৪ + ৩ + ২ + ১ + sum(১-১); এখানে থেমে যাবে যেহেতু উপরে শর্তে বলা আছে i == ১ হলে ১ রিটার্ন করবে result (৫+৪+৩+২+১)=১৫ দেখিয়ে। আর নয়ত ঋণাত্বক সংখ্যা গণনা শুরু হয়ে যেত যেহেতু এটা একটা লুপ।। 



// factorial recursion এর ক্ষেত্রে recursive function নিম্মরুপঃ
function factorial(i) {
    if (i == 1) {
        return 1;
    }
    return i * factorial (i - 1);
}
console.log(factorial(5)); // ৫*৪*৩*২*১=১২০,,