// it is a callback function which means an function can be passed as an argument to another function.
//syntax arr.forEach(Callback function) used strictly for arrays only 

let arr = ['pune', 'mumbai', 'delhi'];

arr.forEach(function MyFunction(val){ // value at each index 
    console.log(val.toUpperCase());
});


//creating arrow function for the same forEach method.
let ar = [1,2,3,4,5,6,7];
ar.forEach( (val)  => {
 console.log(val);
});

// the forEach() method has like 3 parameters reserved which are ;
/*
Whatever name you put in the 1st slot will always grab the Value.

Whatever name you put in the 2nd slot will always grab the Index.

Whatever name you put in the 3rd slot will always grab the Entire Array.
*/

let fruits = ['pineapple', 'mango', 'orange'];

fruits.forEach((val,idx,arr) => {
   console.log(val,idx,arr);
});

//also an imp thing the callback funtions such as forEach() are higher order function or higher order method which takes another function as a parameter or returns another function.