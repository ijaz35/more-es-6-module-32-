//.filter() method is used to find items from an array with a condition . it returns an array of items which matches that condition.

const numbers = [5, 13, 7, 41, 30, 5, 2, 19];
const bigNumbers = numbers.filter(number => number > 20);
const smallNumbers = numbers.filter(number => number < 10);
// console.log(bigNumbers);
// console.log(smallNumbers);

const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 1500, color: 'black' },
    { name: 'smart watch', price: 7000, color: 'black' },
    { name: 'sticky', price: 3000, color: 'pink' }
]

const expensive = products.filter(product => product.price > 100);
// console.log(expensive);

const black = products.filter(product => product.color == 'black');
const pink = products.filter(product => product.color == 'pink');

// console.log(black);
// console.log(pink);

//.find() method is used to find any specific items in an array. It returns only that item weather .map() and .filter() returns an array 
const findPink = products.find(product => product.color == 'pink');

const findStiky = products.find(product => product.name == 'sticky');
// console.log(findPink);
console.log(findStiky);