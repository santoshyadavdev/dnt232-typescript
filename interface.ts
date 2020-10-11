export interface Address {
    empid: number
    addr1: string;
    addr2: string;
    city: string;
    pin: number
}

export interface Department {
    empid: number;
    name: string
}

export interface Emp {
    getName() : string;

    getEmployeeDetails() : any;
}