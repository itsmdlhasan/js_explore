let myName = 'Mahmudul Hasan';
let userName = 'Ragi';
let userInput = 'raGi';
let lyrics = 'Tumi bondhu kala pakhi ami jeno ki. bosonto kale tomay bolte pari ni.';
let gaan = ['matha kharap', 'amar'];




console.log(myName.length); // string এ মোট কতগুলো ক্যারেক্টার আছে তা জানার জন্য। 
console.log(myName[2]); // string এ ২ নাম্বার index এ কোন ক্যারেক্টার আছে তা জানার জন্য।
myName = myName + 'Mahmud'; // string এর ভিতরে কিছু এড করার জন্য। 
console.log(myName);
console.log(lyrics.indexOf('ami')); // string এর মধ্যকার ক্যারেক্টারের index number জানার জন্য। 
console.log(lyrics.startsWith('Tumi')); // Tumi দিয়ে শুরু হওয়া string জানার জন্য। 
console.log(lyrics.endsWith('.pdf')); // .pdf বা অন্য যে কোনো কিছু দিয়ে শেষ হওয়া string জানার জন্য। 
console.log(lyrics.split(' ')); // গ্যাপে থাকা প্রত্যেক ওয়ার্ড কে আলাদা করে দেয়া।
console.log(lyrics.split('')); // প্রত্যেকটা অক্ষর কে আলাদা করে দেয়া। 
console.log(lyrics.slice(5, 8)); // ৫ থেকে শুরু করে ৮ index এর আগ পর্যন্ত কেটে ফেলা। 
console.log(lyrics.substring(4, 9)); // ৫ থেকে ৮ পর্যন্ত index বিশিষ্ট অক্ষরগুলোকে কেটে ফেলার জন্য।  
console.log(gaan.concat(':')); // নতুন স্ট্রিং ভ্যালু যোগ করার জন্য। 
console.log(gaan.join('_')); // দুইটা string বিশিষ্ট array value কে জয়েন করার জন্য। 


var doesExist = lyrics.includes('bondhu'); // কোনো কিছু string এ আছে কিনা তা খুজে দেখার জন্য। মনে রাখতে হবে এটাও কেস সেন্সিটিভ। 
console.log(doesExist);



if (userName === userInput) {
    console.log('valid');
}
else {
    console.log('invalid');
}
// এটা invalid দেখাবে কারন কেস সেন্সিটিভ। 



if (userName.toLocaleLowerCase() === userInput.toLocaleLowerCase()) {
    console.log('valid');
}
else {
    console.log('invalid');
}
// এটা ঠিক দেখাবে কারন পুরোটা কে স্মল কেসে কনভার্ট করে নেয়া হয়েছে। 