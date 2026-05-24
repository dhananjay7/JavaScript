{
    let gameNumber = 7;
    let userNumber = prompt("Enter the gamble");

   
    while (userNumber != gameNumber) {
        console.log("The number does not match try again");
        userNumber = prompt("Wrong! Enter the gamble again:");
    }

    console.log("Congratulations you won the gamble");
}