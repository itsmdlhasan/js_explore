const result = Math.pow(3, 8); // 3 to the power 8
console.log(result); 

const num1 = 25;
const num2 = 45;
let ageGap = num1 - num2;

if(ageGap < 5) {
    console.log('you guys can be friend');
}
else {
    console.log('you guys cant be friend');
}
// এখানে ঋণাত্নক নিবেনা। তাই নিম্মোক্তভাবে সমাধান করতে হবে। 


let gap = Math.abs(num1 - num2); // ঋণাত্মক মান গ্রহন করবেনা। 

if(gap < 5) {
    console.log('you guys can be friend');
}
else {
    console.log('you guys cant be friend');
}






let number = 2.451245;
let number2 = -7;
console.log(Math.abs(number2)); // ঋণাত্নক মান কে ধণাত্নক হিসেবে দেখাবে। 
console.log(Math.round(number)); // 2.451245 ke 2 hisebe count kore nibe
console.log(Math.floor(number)); // nicher doshomik e niye jabe
console.log(Math.ceil(number)); // uporer doshomik e niye jabe
console.log(Math.random(number)); // random number ber korar jonno
console.log(Math.random()*100); // 100 porjonto random number ber korar jonno