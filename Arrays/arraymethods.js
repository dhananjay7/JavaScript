//push - to add
//pop - to remove/delete

//1.) Ex of Push : 
let veggies = ["Tomato", "Potato", "Brinjal"];

veggies.push("Cabbage", "Onion"); 

//2.)now pop - it removes from the end only.

veggies.pop();

//3.) toString() - it converts array to string 

console.log(veggies.toString());

//4.) Concat() - it adds to arrays like combines them.

let marvel_heroes = ["Spiderman", "Ironman", "Hulk"];
let anime_heroes = ["Naruto", "Ninja_Hattori"];

let combined = marvel_heroes.concat(anime_heroes);
//if i want to add multiple array then just use ',' after every array mentioned.
console.log(combined);

//5.) Unshift() - it is used to add in front its just like push but parallel in working ways.

let marks = [90 , 67, 69, 47];

marks.unshift(98);

//6.) Shift() - it is used to remove just like pop but now it removes from the front of the array.

marks.shift();

//all the methods from arrays & strings start with small letters.

//7.) Slice - returns the piece of array.

let slice = marvel_heroes.slice(1,3); //the ending slice index is non exclusive
console.log(slice);

//8.) Splice - it is used to add del rem from an array.

let numbers = [1,2,3,4,5,6,7];
console.log(numbers.splice(1,2,101,44));
console.log(numbers); // it changes the entire array