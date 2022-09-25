const fish = {
    name: 'hilsa',
    size: 'medium',
    price: 2000,
    quantity: 20,
    color: 'silver',
    origin: 'Chadpur'
};
/* //normal case
const origin = fish.origin;
const price = fish.price;
const color = fish.color;
console.log(origin, price, color); */

//For destructuring. getting properties value form an object and put that in variable is called destructuring.

// const { origin, price, color } = fish;
// console.log(origin, price, color);

const company = {
    companyName: 'programing web',
    year: 2010,
    work: {
        web: 'design & development',
        software: {
            operating: 'system software',
            gaming: 'kid game',
        },
        design: 'graphic design',
    },
    achivements: 5,
    emplyee: 2000

};
//destructuring the object
/* const { companyName, emplyee, achivements } = company;
console.log(companyName, emplyee, achivements);

const { operating, gaming } = company.work.software;
console.log(operating, gaming); */


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
//normaly getting property value from oject

/* const work = company.web.work;
const frameWork = company.web.framework */;

//getting property value by destructuring
const { work, frameWork } = company2.web;
const { food } = company2.ceo;
console.log(work, frameWork, food);
const { second, third } = company2.web.tech;
console.log(second, third);

