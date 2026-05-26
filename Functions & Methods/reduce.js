//The reduce function is also an imp function for array it reduces the array into one single value after performing some operation.

let arr = [4,5,6,7,1];

let NewArr = arr.reduce((res, curr) => {
    return res + curr;
})

//another example for this is :

let greaterAmongst = arr.reduce((res,curr) => {
    return res > curr ? res : curr; // i have used a ternanry operator here..
});