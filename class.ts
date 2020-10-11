import { Address, Emp } from './interface';

class Employee implements Emp {
    private id: number;
    address: Address;
    name: string;
    dob: Date;
    age: number;
    email: string;

    set empId(id: number ) {
        this.id = id;
    }

    get empId() {
        return this.id;
    }

    constructor(id: number) {}
    getEmployeeDetails() {
        throw new Error('Method not implemented.');
    }

    returnName() {
        return this.getName();
    }

    private getName() {
        // let result = this.name;
        return this.name;
    }

}

let lewis = new Employee(10);
lewis.name = 'Lewis';
lewis.age = 20;
lewis.empId = 10;
lewis.dob = new Date('10-Jan-2000');

console.log(lewis)


class Manager extends Employee {
    constructor(managerid: number) {
        super(managerid);
    }

    returnName() {
        // super.returnName()
        return 'manager class';
    }
}

let manager = new Manager(20);

manager.returnName();
