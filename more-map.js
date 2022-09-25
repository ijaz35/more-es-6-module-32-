const friends = ['tom hanks', 'tom curise', 'tom brady', 'tom solaiman'];
const flength = friends.map(friend => friend.length);
console.log(flength);

const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 1500, color: 'black' },
    { name: 'smart watch', price: 7000, color: 'black' },
    { name: 'sticky', price: 3000, color: 'black' }
]

const productName = products.map(product => product.name);
const productPrice = products.map(product => product.price);
// console.log(productName);
// console.log(productPrice);
products.map(product => console.log(product));
//if we don't need any return
products.forEach(product => console.log(product));