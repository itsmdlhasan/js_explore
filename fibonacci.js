// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 

/* 
    fibo[3] = fibo[2] + fibo[1]
    fibo[4] = fibo[3] + fibo[2]
    fibo[n] = fibo[n-1] + fibo[n-2]
    fibo[i] = fibo[i-1] + fibo[i-2] etc......
*/

const fibo = [0, 1]; // যেহেতু 0 এবং 1 ইনডেক্স এর আগে দুইটা সংখ্যা নেই, তাই। এমনকি i এর মান ও ২ থেকে শুরু হবে। 
for (let i = 2; i <= 44; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo);