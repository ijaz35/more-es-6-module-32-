class teamMember {
    name;
    address = 'bd';
    desgination = 'support web dev';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}
class support extends teamMember {
    groupSupportTime;
    constructor(name, address, time) {
        super(name, address);
        this.groupSupportTime = time;
    }
    startSession() {
        console.log(this.name, 'start a session');
    }
}
class studentcare extends teamMember {
    buildRoutine(student) {
        console.log(this.name, ' build a routine for ', student);
    }
}
class neptuneDev extends teamMember {
    codeEditor;
    constructor(name, address, codeEditor) {
        super(name, address);
        this.codeEditor = codeEditor;
    }
    releaseApp(version) {
        console.log(this.name, 'release app version', version)
    }
}
const amir = new support('amir', 'bd', 11);
const alia = new studentcare('alia', 'bd');
alia.buildRoutine('imran');
// console.log(amir);
// console.log(alia);

const ash = new neptuneDev('ash', 'USA', 'android app');
// ash.releaseApp('1.4.5');
