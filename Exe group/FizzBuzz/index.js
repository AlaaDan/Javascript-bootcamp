let number = 100;

function bootels(){
    while (number!== 0){
        number--;
        if(number === 0){
            console.log(`No bottle of beer on the wall`);}
        else if (number === 1){
            console.log(`${number} bottle of beer on the wall`);}
        else{
            console.log(`${number} bottles of beer on the wall`);}
        }
}


function fibonacciGenerator (n) {
    let numberSequence = [];
    let userNumber = n;
    if(userNumber === 1){
        numberSequence.push(0);
        console.log(numberSequence);
    }
    else if (userNumber === 2){
        numberSequence.push(0);
        numberSequence.push(1);
        console.log(numberSequence)
    }
    else{
        numberSequence.push(0);
        numberSequence.push(1);
        while(userNumber !== numberSequence.length ){
            let newNumber = numberSequence[numberSequence.length -1] + numberSequence[numberSequence.length -2]
            numberSequence.push(newNumber)
    }
    console.log(numberSequence)
}
}


fibonacciGenerator(10)