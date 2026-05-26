let n = Number(prompt("Enter your number"));

function oneToN(n){
    let arr = [];
for(let i = 1 ; i <= n ; i ++){
    arr.push(i);
}
return arr ;
}
let Finalarr = (oneToN(n));
console.log(Finalarr);

//create the product for the array elements.

let SumofArray = Finalarr.reduce((ress,curr) => {
   return ress * curr ;
 
});

console.log(SumofArray);