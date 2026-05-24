//we going to learn javascript operators

//1.) Arithmatic Operator.
{
    let a = 6;
    let b = 9;

    let c = a + b;
    console.log(c)
}
{
    let a = 4;
    let b = 3;

    let c = a - b;
    console.log(c)
}
{
    let a = 2;
    let b = 3;

    let c = a * b;
    console.log(c)
}
{
    let a = 18;
    let b = 9;

    let c = a / b;
    console.log(c)
}

//some special operators :
//Modulus : it carries out arithmatic operation and gives a remainder 

{
    let a = 5;
    let b = 2 ;

    let c = a % b;
    console.log(c)
}

//Exponentiation : It calculates power like a^b

{
    let a = 5;
    let b = 2;

    let c = a ** b;
    console.log(c)
}

//2.)Unary operators : works for single operator it has two operators 
// a.) Increment
// a++(post increment)
// ++a(pre increment)

{
 let a = 6;
 a ++;
 console.log(a);

}

// b.) Decrement
// a--(post decrement)
// --a(pre decrement)

{
 let a = 6;
 a --;
 console.log(a);

}

//3.) Assignment Operator

// left = right : values goes from right to left

{
    a = 7;
    a += 5;
    console.log(a);
}
{
    a = 7;
    a -= 5;
    console.log(a);
}
{
    a = 7;
    a *= 5;
    console.log(a);
}
{
    a = 7;
    a /= 5;
    console.log(a);
}
{
    a = 7;
    a %= 5;
    console.log(a);
}
{
    a = 7;
    a **= 5;
    console.log(a);
}

//4.) Comparison Operator 
//they are used to compare two values,variables etc..
//the comparisi=on operator answers in boolean like only true and false.
// (= , == , != , ===, !==, >, < , >= , <= )
{
    a = 6;
    b = "6";
// for string there is a stricter version of epqual to which is ===
    console.log("6 === 6", a === b);

}

//5.) Logical Operator 
//a.) Logical And (&&)
//  cond 1 = true && cond 2 = true == TRUE in &&
{
    a = 7 ;
    b = 8 ;

    let cond1 = a < b ; 
    let cond2 = b > a ; 

    console.log(cond1 && cond2);
}
//b.) Logical OR (||)
// cond 1 = false && cond 2 = false == FALSE in ||
{
    a = 5 ;
    b = 10 ;

    let cond1 = a > b ; 
    let cond2 = b < a ; 

    console.log(cond1 || cond2);
}
//c.) Logical Not (!)

{
    a = 2;
    b = 3;

    console.log(!(a<b));
}
