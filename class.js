class support {
    name;
    address = 'bd';
    desgination = 'support web dev';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    startSession() {
        console.log(this.name, 'start a session');
    }
}
const amir = new support('amir khan', 'dubai');
const salman = new support('salman khan', 'UK');
const akshay = new support('akshay kumar', 'India');
salman.startSession();
console.log(amir);
// console.log(salman);
