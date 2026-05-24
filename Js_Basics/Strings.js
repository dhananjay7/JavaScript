let stru = "Dhananjay Tayade";
stru.length;
console.log(stru[13]);


//Template Literal ${expression}
//they are also called string interpolation

const obj = {
 item : "pen",
 cost : 50,
};

let output = `The cost of one ${obj.item} is\n${obj.cost} rupees`;
console.log(output);

// \t used to give tab space 
// \n used to give next line

// some string methods used to manipulate strings 
//1.) str.toUpperCase()

let Anime = "Dragon Ball";
console.log(Anime.toUpperCase());

//2.) str.toLowerCase()

let Gadget = "HERO SWORD";
console.log(Gadget.toLowerCase());

//3.) str.trim()
//removes whitespaces from the beginning and from the end but does not affect middle

let name = "     Dhananjay Tayade     "
console.log(name.trim());

//4.) str.slice(start,end?)
// the end does not get the ending value 

let index = "01234567";
let save = index.slice(2,6);
console.log(save);

//5.) str1.concat(str2);
// str1 + str2 is also a concat 

let food = "Pizza ";
let price = "50$";
let saved = food.concat(price);
console.log(saved);

//6.) str.replace("searchValue", "NewValue");

let word = "Hello";
console.log(word.replace("H","y"));

//7.) str.charAt(indx);

let indx = "Japan";
console.log(indx.charAt(2));