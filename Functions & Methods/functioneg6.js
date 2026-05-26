//take a number from user and create an array from 1 to n;
let n = Number(prompt("Enter your number"));

function oneToN(n){
    let arr = [];
for(let i = 1 ; i <= n ; i ++){
    arr.push(i);
}
return arr ;
}

console.log(oneToN(n));
