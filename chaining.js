//destructuring array
const [p, q] = [45, 37];
// console.log(p, q);

const [best, faltu] = ['momotaj', 'porshi'];
// console.log(best, faltu);

const array = [11, 22, 33, 44];
const [x, y] = array;
// console.log(x, y);

// destructuring object
const { name, property } = { name: 'Jobber ali', property: '1cr', gender: 'male' };
console.log(name, property);

//when we use chaining then we can use (?) question mark where necessaray. it is used to stop chaining
const company2 = {
    name: 'GP',
    ceo: {
        id: 1,
        ceoName: 'ajmol',
        food: 'vegetable'
    },
    web: {
        work: 'website development',
        emplyee: 22,
        frameWork: 'react',
        tech: {
            first: 'html',
            second: 'css',
            third: 'js'
        }
    }
};
/* const { second, third } = company2?.web?.tech;

console.log(second, third); */
//if an undefined object property is used like backend and if we use (?.backend) then it stops the chaining if backend is not defined.
// console.log(company2.web?.backend?.tech);

//if we want to find p from the object which is given below then it creats error because p is not defined. So in this case we use ? as optional chaining.
const myObject = { x: 2, y: 3, z: 4 };
// console.log('my object.p', myObject?.p?.q);


//if we use optional chaining(?) then we says that if you find p then execute otherwise not.


