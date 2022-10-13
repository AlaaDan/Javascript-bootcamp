function biggestNumber(){
    let firstNumber = prompt("Insert a number: ");
    let secondNumber = prompt("Insert another number: ");
    if (firstNumber > secondNumber){
        alert(firstNumber + " is greater than " + secondNumber);
        //console.log(firstNumber + " is greater than " + secondNumber)
    }
    else{
        alert(secondNumber + " is greater than " + firstNumber);
        //console.log(secondNumber + " is greater than " + firstNumber)

    }
}

function evenOdd(){
    let number = prompt("Inssert a number to check wither it's an even of an odd");
    if(number % 2 == 0 ){
        alert(number + " is and even number");}
    else{
        alert( number + " is an odd number");
    }

}

function tallChecker(){
    let heigh = prompt("How tall are you? ");
    if (heigh >= 150){
        alert("Your height is elegibale for the rides, but we need to check your band.");
        let bandCheck = prompt("Which band do you have, small, medium, large or platinum ? ");
        if (bandCheck == "large" || bandCheck == "platimun")
            alert("You can ride Blader");
        else
            alert("You need to buy Large of Platinum ticket");}

    else{
        alert("You need to grow taller");}
    
}

function bodyMassindex(){
    let heigh = prompt("How tall are you? ");
    let weight = prompt("What is your weight? ");
    let bmi = Math.round(weight / heigh**2);
    if(bmi <18.5 ){
        alert("Your BMI is " + bmi + " You are Undereight");
    }else if (bmi <25){
        alert("Your BMI is " + bmi + " You are Normal weight");
    }else if(bmi < 30){
        alert("Your bmi is " +bmi + " You are Overweight");
    }else if (bmi > 30 ){
        alert("Your bmi is " + bmi +" You are clincly Obssesed ");
    }
}

function numToDay(){
    let weekDays = ["Monday", "Tuseday", "Wedensday", "Thursday", "Friday", "Satrarday", "Sunday"];
    let userChoice = prompt("Pick up a number between 1-7 ");
    if (userChoice >= 1 && userChoice <=7){
        alert(weekDays[userChoice -=1]);
    }else{
        alert(false);
    }

}

function numToMonth(){
    let month = ["January", "February", "March", "April","May", "June", "July", "August", "September", "October", "November", "December"];
    let userchoice = prompt("Pick up a number between 1-12 ");
    if (userchoice >= 1 && userchoice <=12){
        alert(month[userchoice -=1]);
    }else{
        alert(false);
    }
}

let appOn = true
while(appOn){
    let appChoice = prompt(`Pick up a number to be dircted to the app you want
    1- Check the biggest number 
    2- Check if a number is Even or Odd
    3- Check if you can ride a Blader in a themepark
    4- Check you body mass index
    5- Turn number into Day
    6- Turn number into Month
    7- If you want to exit the app`);
    if (appChoice === "1"){
        biggestNumber()
    }else if (appChoice === "2"){
        evenOdd()
    }else if ( appChoice === "3"){
        tallChecker()
    }else if (appChoice === "4"){
        bodyMassindex()
    }else if (appChoice === "5"){
        numToDay()
    }else if (appChoice == "6"){
        numToMonth()
    }else if (appChoice === "7"){
        alert("bye bye")
        appOn = false
    }else{
        alert("You have entered an invalid input choose again")
    }
    
}
//numToMonth()
//numToDay()
//bodyMassindex()
//tallChecker()
//tallChecker()
//evenOdd()
//biggestNumber()