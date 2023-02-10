const products = [
    {id: 1, name: 'xiaomi phone', price: 19000},
    {id: 2, name: 'oppo', price: 39000},
    {id: 3, name: 'vivo Phone', price: 9000},
    {id: 3, name: 'oneplus phone', price: 90000},
];

for (let i = 0; i < products.length; i++) {
    const element = products[i];
    console.log(element);
}

for (const element of products) { // এটা হচ্ছে for of যা উপরোক্ত for এর শর্ট ভার্সন এবং বহুল ব্যবহৃত বর্তমানে। 
    console.log(element);
}