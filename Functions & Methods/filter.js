//filter is also an js array method which creates a new array for elements that gives true for a condition.

let arr = [2,4,5,7,9,8];

let FilteredArr = arr.filter((val) => {
    return val % 2 === 0 ; 
});
