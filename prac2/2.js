const numbers = [4,8,15,16,23,42];
const b10 = [];
let s =0;
let b =0;


for(let i=0 ;i < numbers.length;i++){
    s += numbers[i];
    if(numbers[i] > b){
        b = numbers[i];
    }
    if(numbers[i] > 10){
        b10.push(numbers[i]);
    }
}
console.log(s,b,b10);

let s1 = numbers.reduce((a,c) => a + c,0);
let b1 = Math.max(...numbers)
let b11 = numbers.filter(item => item > 10);

console.log(s1,b1,b11);