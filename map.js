const numbers = [2, 4, 6, 8, 10];

//old process
const output = [];
/* for (const number of numbers) {
    const result = number * 2;
    output.push(result);
} */
// console.log(output);

//we can also use a function to double the number
const doubleIt = number => number * 2;
for (const number of numbers) {
    const result = doubleIt(number);
    output.push(result);
}
console.log(output);
//new process 
// Doing the same work by .map()
//we can use .map() function to do three works
/*  1.Loop through each element
    2.For each element call the provided function
    3.Result for each element will be stored in an array.
 */
const result1 = numbers.map(doubleIt);

//we can directly write the function
const result = numbers.map(x => x * 2);
// console.log(result);