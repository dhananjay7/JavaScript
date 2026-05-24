//1.) For loop :
// syntax : for(initialization ; condition ; updation){}
//eg number 1 :
{
    for (let count = 1; count <= 5 ; count ++){
        console.log("Hello World");
    }
}

//eg number 2 : sum of 1 to n ; 

{
    let n = prompt("Enter the value of n");
    let sum = 0; 
    
    for (let i = 1 ; i <= n ; i ++){
        sum = sum + i;//
    }
    console.log(sum);
}

//eg number 3 ;
{
    for (let i = 1 ; i <= 5; i ++ ){
        console.log("i is = " + i);
    }
}

//2.) While Loop ;
//syntax : while(condition){// do some work}

//eg number 1 :

{
    let i = 1 ;
    while (i <= 5 ){
        console.log("i = " + i);
        i ++;
    }
}

//3.) Do - While Loop : 
// syntax : do {//somework} while(condition);

//eg number 1 : 
{
    let i = 1 ; 
    do {
        console.log("i is = ", i);
        i++;
    }while (i <= 5);
}

//Some special loops 
//*1.) For - of Loop 
//syntax for(let variable of StrArray){...}

//eg number 1 :

{
    let strn = "Dhananjay";
    // iterator ---> charachter
    for(let i of strn){
        console.log("i is ", i);
    }
}

//eg number 2 :
{
    let strn = "Dhananjay";
    let size = 0;
    for(let i of strn){
        console.log("i is ", i);
        size ++;
    }
    console.log("size of string is = ", size);
}

//*2.) For - in loop
//syntax : for(let variable in Obj){...}

//eg number 1 :

{
    const student = {
        name : "Dhananjay Tayade",
        age : 20,
        cgpa : 9.00,
        branch : "Cse",
    }

    for (let key in student){
        console.log("key is = " , key ," " ,"value is = ", student[key]);
    }
}