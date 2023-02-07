var myFriends = ['Shahin', 'Asad', 'Imran', 'Sabbir', 'Monir'];
var friendsAge = [33, 33, 26, 26, 27];

console.log(myFriends); // array এর সকল elements কে দেখার জন্য। 
console.log(friendsAge);
console.log(myFriends.length); // মোট কয়টি উপাদান আছে তা জানার জন্য। 






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