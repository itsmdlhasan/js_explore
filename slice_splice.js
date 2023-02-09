const friends = [12, 45, 32, 22, 44, 62, 29, 69, 87];
console.log(friends);
const partial = friends.slice(2, 5); // 2 index theke 5 index number er ag porjonto kete notun variable niye newa
console.log(partial);
// উল্লেখ্য যে slice দ্বারা এই কেটে নেয়া দ্বারা অরিজিনাল variable নষ্ট হয়না।  
const memorial = friends.splice(2, 5); // 2 index theke sorbomot 5 ta ke kete niye notun variable banano
console.log(memorial);
// উল্লেখ্য যে splice দ্বারা এই কেটে নেয়া দ্বারা অরিজিনাল variable নষ্ট হয়।   
console.log(friends); 