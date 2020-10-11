// transpilation

import { Address, Department } from "./interface";

// inference
let fname = 'Aakash';

let lname: string;

let age: number;

age = 10;

// undefined
let isValid: boolean;
console.log(isValid);

let dob: Date;

dob = new Date('10-Jan-2019');

console.log(dob);

const pi = 3.14;

let empList: string[];
let deptList: Array<string>;

const enum Color {
    Red,
    Green,
    Blue
}

let color: Color = 1;

let employee: any;

employee = 10;
employee = 'test';
employee = true;

// union types
type addressOrName = Address | string;


type AddressOrDepartment = Address | Department;

let deptAddress: AddressOrDepartment;
const newAddress: Address = {
    addr1: '',
    addr2: '',
    city: '',
    pin: 564,
    empid: 54455,
    name: ''
};
const newAddress: Department = {
    name: 'dgfsdg',
    empid: 54455
};


deptAddress = newAddress;

type intersectionType = Address & Department & {
    deptId: number;
    hod: string;
};

let a: intersectionType = {

}

// let addressList : Array<Address>= [
//     { }
// ]

