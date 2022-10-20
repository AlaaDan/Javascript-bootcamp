let fruits = ["Apple", "Banan", "Watermellon", "Peach", "Orange", ];
let dataTypes = [true, 10, "string", ];

let  animals  =  [ 'cat' ,  'hamster' ,  'parrot' ,  'funky chihuahua' ];
console.log(animals.length);
let cat = animals[0];
console.log(cat);
let lastitem = animals[-1];
animals[1] = "tiger"
console.log(animals);

let  a  =  [ 1 , 2 , 3 ] ; 
let  b  =  [ 4 , 5 , 6 ] ;
let c = a.concat(b);
console.log(c);

let  numbersA  =  [ 1 , 2 , 3 , 7 , 8 , 9 ] ; 
let  numbersB  =  [ 4 , 5 , 6 ] ;
numbersA = numbersA.concat(numbersB);
numbersA.sort();
console.log(numbersA);

let arr = ['a', 'b', 'c'];
let arrCopy = arr.copyWithin();

console.log(arrCopy);

fruits.push("Pinapple");
console.log(fruits);
fruits.unshift("Dragon Fruit");
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.shift();
console.log(fruits);
fruits.splice(1, 0, "Kiwi");
console.log(fruits);
fruits.splice(2, 0, "fruit1", "fruit2", "fruit3");
console.log(fruits);
let  names  =  [ 'David' ,  'Christoffer' ,  'Johan' ,  'Maja' ];
names.splice(1, 2)
console.log(names)

let str = 'Supercalifragilisticexpialidocious';
console.log(str.includes("n"))
console.log(str.includes("x"))
console.log(str.indexOf("p"))

let newV = str.slice(0, 5)
console.log(newV)
let newB = str.slice(-7)
console.log(newB)



