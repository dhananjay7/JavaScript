//how to create an array 
//syntax 
let marks = [56, 78, 95, 34, 33];
console.log(marks);

//Another example : 
const Heroes = ["Antman", "Spiderman", "IronMAn", "Hulk"];
console.log(Heroes);

//Array Indices : to get index we use arr[index]
//eg : 

console.log(Heroes[3]);

//we can change the index of an arrays since they are mutable but strings are immutable ;

marks[0]= 45;
console.log(marks[0]);

Heroes[0] = "Hello";
console.log(Heroes);