// 1. Gör en array som innehåller 5 st olika frukter av datatypen string.

let fruitArr = ['Apple', 'Orange', 'Peach', 'Plum', 'Pear']

// 2. gör en array som innehåller 3 olika datatyper, ex. string, number, array.

let datatypesArr = ['String', 10, ['A string in an array in an array!', 42]]

/* 3. 
    let animals = ['cat', 'hamster', 'parrot', 'funky chihuahua']
console.log() hur många objekt arrayen ovan innehåller.
 */

let animals = ['cat', 'hamster', 'parrot', 'funky chihuahua']

console.log(animals.length)

// 4. I arrayen ovan, hämta cat.

let catIndex = animals.indexOf('cat')
let cat = animals[catIndex]


// 5. I arrayen ovan, hämta funky chihuahua.

let chihuahuaIndex = animals.indexOf('funky chihuahua')
let chihuahua = animals[chihuahuaIndex]


// 6. I arrayen ovan, byt ut hamster mot tiger.

let hamsterIndex = animals.indexOf('hamster')
animals.splice(hamsterIndex, 1, 'tiger')

console.log(animals)

/* 7. 
    let a = [1,2,3];
    let b = [4,5,6];
Lägg ihop ovanstående arrayer. */

let a = [1,2,3];
let b = [4,5,6];

let ab = a.concat(b)
console.log(ab)

/* 8.
    let a = [1,2,3,7,8,9];
    let b = [4,5,6];
Merga ner array b på index 3 array a. */

let a2 = [1,2,3,7,8,9];
let b2 = [4,5,6];

a2.splice(b2[0] - 1, 0, ...b2)

console.log(a2)

/* 9. 
    let arr = ['a', 'b', 'c'];
Klona ovanstående array. */

let arr = ['a', 'b', 'c'];

let arrClone = [...arr]