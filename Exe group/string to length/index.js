function stringToLen (word) {
    let wordlength = word.length
    return wordlength
}

console.log(`The length of the string you inserted is ${stringToLen("Alaa")}`)


function dateToYear(date) {
    result = date.substring(0, 4)

    return console.log(`the year is ${result}`)
}

dateToYear("2001-10-11")

function calculator(firstNumber, secondNumber, operator){
    if (typeof firstNumber === "number" && typeof secondNumber === "number"){
    }if (operator === "+"){
        console.log(sum(firstNumber,secondNumber));
    }else if(operator === "-"){
        console.log(substract(firstNumber, secondNumber));
    }else if(operator === "*"){
        console.log(multiply(firstNumber, secondNumber));
    }else if(operator === "/"){
        console.log(division(firstNumber, secondNumber));
    }
}

calculator(5, 5, "/")

function sum(number1, number2){
    let total = number1 + number2 
    return total

}

function substract(number1, number2){
    let total = number1 - number2 
    return total

}

function multiply(number1, number2){
    let total = number1 * number2 
    return total

}

function division(number1, number2){
    let total = number1 / number2 
    return total
}

