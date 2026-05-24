{
    let marks = prompt("ENTER YOUR MARKS")
    console.log("The entered marks by user is = "+ marks);

    if(marks >= 90 && marks<= 100){
        console.log("The Student has A grade");
    }
    else if(marks >= 70 && marks < 89){
        console.log("The Student has B grade");
    }
    else if (marks >=60 && marks <69 ){
        console.log("The Student has C grade");
    }
     else if (marks >=50 && marks <59 ){
        console.log("The Student has D grade");
    } 
    else if (marks > 0 && marks <= 49 ){
        console.log("The Student has failed");
    }
}