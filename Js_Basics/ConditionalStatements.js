//1.) If statement
//eg number 1 :
{
    let age = 1;

    if (age >= 18){
        console.log("You can vote")
    }
     if (age < 18){
        console.log("You cannot vote")
    }
}

//eg number 2 :
{
    let mode = "light";
    let color;

    if (mode === "black"){
        color = "dark";
    }
    if (mode === "light"){
        color = "white";
    }

    console.log(color);
}

//2.) if - else Statement :
//eg number 1 : 
{
    let age = 17 ;

    if (age >= 18){
        console.log("You can vote");
    } else {
        console.log("You CANNOT vote");
    }
}

//eg number 2 : even - odd 

{
    let number = 29 ; 
    if(number % 2 == 0){
        console.log("The numeber is even");
    } else {
        console.log("The number is odd");
    }
}

//3.)else - if Statement :
//eg number 1 
{
 let mode = "Blue" ;
  let color;

  if (mode === "Black"){
    color ="Dark";
  } else if (mode === "Light"){
    color = "White";
  } else if (mode === "Blue"){
    color = "Sky blue";
  } else {
    color = "Green";
  }

  console.log(color);
}

//4.) Ternary Operator :
//this operator works for 3 operands 
//syntax : condition ? "true Output" : "False Ouput";

// eg number 1 : 
{
    let age = 22;
    age > 18 ? console.log("Can Vote") : console.log("Cannot Vote");
}

//eg number 2 :
{
    const age = 22;
    const bevarages = age >= 18 ? "Beer" : "Juice";
    console.log(bevarages);
}