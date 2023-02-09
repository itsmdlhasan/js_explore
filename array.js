var myFriends = ['Shahin', 'Asad', 'Imran', 'Sabbir', 'Monir'];
var friendsAge = [33, 33, 26, 26, 27];

console.log(myFriends); // array এর সকল elements কে দেখার জন্য। 
console.log(friendsAge);
console.log(myFriends.length); // মোট কয়টি উপাদান আছে তা জানার জন্য। 






console.log(Array.isArray(myFriends)); // array কে typeof দিয়ে detect করা যায়না বলে এভাবে জানতে হয়। 
var bestFriend = myFriends[0]; // get element value by index
myFriends[2] = 'Masud'; // set element value by index 
myFriends.push('Kolija'); // add last element
friendsAge.pop(); // remove last element
myFriends.unshift('mon'); // add first element
friendsAge.shift(); // remove first element

console.log(bestFriend); 
console.log(friendsAge.indexOf(26)); // কোনো একটি উপাদানের index নাম্বার জানার জন্য। 
console.log(friendsAge[2]); // যেহেতু 0 থেকে index গণনা শুরু হয়। 
console.log(friendsAge.indexOf(89)); 
console.log(myFriends); 

console.log(myFriends.includes('Shahin')); // includes দ্বারা জানা যায় যে ঐ ভ্যালু টা ওখানে আছে কিনা। 
var newArray = myFriends.concat(myFriends); // দুইটা এড়ে কে একসাথে যোগ করে একটা এড়ে তে রুপান্তর করবে। 
console.log(newArray); 



const friends = [12, 45, 32, 22, 44, 62, 29, 69, 87];
console.log(friends);
const partial = friends.slice(2, 5); // 2 index theke 5 index number er ag porjonto kete notun variable niye newa
console.log(partial);
// উল্লেখ্য যে slice দ্বারা এই কেটে নেয়া দ্বারা অরিজিনাল variable নষ্ট হয়না।  
const memorial = friends.splice(2, 5); // 2 index theke sorbomot 5 ta ke kete niye notun variable banano
console.log(memorial);
// উল্লেখ্য যে splice দ্বারা এই কেটে নেয়া দ্বারা অরিজিনাল variable নষ্ট হয়।   
console.log(friends); 
const pusher = friends.splice(1, 2, 64); // splice দিয়ে কেটে নেয়া জায়গায় ৬৪ যোগ করা হয়েছে। চাইলে আরো যত ইচ্ছা করা যাবে। 
console.log(friends);