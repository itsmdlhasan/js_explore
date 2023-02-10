const products1 = [
    {id: 1, name: 'xiaomi phone', price: 19000},
    {id: 2, name: 'macbook laptop', price: 390000},
    {id: 3, name: 'vivo Phone', price: 9000},
    {id: 4, name: 'oneplus phone', price: 90000},
    {id: 5, name: 'dell pc', price: 90000},
];

const products2 = [
    {id: 1, name: 'xiaomi phone', price: 19000},
    {id: 2, name: 'macbook laptop', price: 390000},
    {id: 3, name: 'vivo Phone', price: 9000},
    {id: 4, name: 'oneplus phone', price: 90000},
    {id: 5, name: 'dell pc', price: 90000},
];


// // স্বাভাবিক for of loop
// for (const product of products) {
//     console.log(product);
// }
// console.log('আমার উপরে আছে স্বাভাবিক for of লুপ।');


// // কেস সেন্সিটিভ সার্চ function
// function matchedProducts(products, search) {
//     for (const product of products) {
//         console.log(product.name.includes(search));
//     }
// }
// matchedProducts(products, 'phone');


function matchedProducts1(products1, search) {
    const match1 = [];
    for (const product1 of products1) {
        if (product1.name.includes(search)) {
            match1.push(product1);
        }
    }
    return match1;
}
console.log(matchedProducts1(products1, 'phone')); // এখানে রেজাল্টে ছোটো হাতের ফোন লেখা না পাওয়ায় vivo কে স্কিপ করবে। 


function matchedProducts2(products2, search) {
    const match2 = [];
    for (const product2 of products2) {
        if (product2.name.toLowerCase().includes(search.toLowerCase())) { // নামকেউ lowercase এবং search কেউ lowercase করা হয়েছে যে কোনো টাইপ মিস্টেক এড়ানোর জন্য। 
            match2.push(product2);
        }
    }
    return match2;
}
console.log(matchedProducts2(products2, 'phone')); // এখানে রেজাল্টে সবগুলা দেখাবে যেহেতু খোজার সময় ছোটো হাতের অক্ষরে convert করে নিবে সবগুলাকে। এবং Search কেউ lowercase করে ফেলার সুবিধা হচ্ছে সার্চের সময় ভূলে বড় হাতের টা দিয়ে সার্চ করলেও যেন প্রবলেম না হয়। 