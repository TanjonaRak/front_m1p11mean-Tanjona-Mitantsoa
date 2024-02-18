




export interface Customers {
    _id: string,
    name: string,
    first_name: string,
    password: string,
    email: string,
    photo: string
}


export interface Service {
    _id?: string,
    name: string,
    delay: string,
    price: number,
    commission: number,
    photo?: string,
    description?: string,
    state?: number,
    date_create?: String
}


export interface Employee {
    _id?: string,
    name: string,
    first_name: string,
    email: string,
    password: string,
    etat?: number,
    photo?: string,
    service?: Service[],
    login: string,
    time_between?: string,
    end_time?: string,
    date_create?: string,
    working_hours?:working_hours,
    picture?:string,
    state?:number,
    _idpreference?:string
}


export interface working_hours {
    _id?: string,
    employee?: Employee,
    time_between: string,
    end_time: string,
    date_choice?: Date
}


/* MIALA ITO */
export interface Employee_Service {
    _id: string,
    employee: Employee,
    services: Service[]
}

export interface appointment {
    _id: string,
    client: Customers,
    service: Service,
    employee: Employee,
    dateAppoitment: Date,
    hours: string,
    etat: number,
    date_create: Date
}


export interface Employee_appointment {
    _id: string,
    employee: Employee,
    appointments: appointment[]
}


export interface manager {
    _id: string,
    name: string,
    first_name: string,
    email: string,
    password: string
}


export interface service_employee {
    _id: string,
    service: Service,
    employee: Employee
}


/*  CHOICE V1 or V2 */
export interface preference {
    _id: string,
    client: Customers,
    service: Service[],
    employee: Employee[],
    service_employee: service_employee[],
}

export interface preference {
    _id: string,
    customer: Customers,
    services: Service,
    employees: Employee,
    service_employees: service_employee,
}

export interface preferenceEmployee{
    _id?: string,
    customer: Customers,
    employee: Employee,
}

export interface task {
    _id: string,
    services: Service,
    date_task: Date,
    hours: string,
    etat: number,
    employee: Employee
}

// tanjonafanirymiaro
//     tuc7UbAH36NR8hii

export interface expenses {
    _id: string,
    name_expense: string,
    amount: number,
    date: Date
}

// mongodb+srv:
//tanjonafanirymiaro:tuc7UbAH36NR8hii@cluster0.tpdaafn.mongodb.net/

// export function getProfilEmployee(){
    
//         let profil_local = localStorage.getItem("user");
//         if (profil_local) {
//             let profil = JSON.parse(profil_local) as Employee;
            
//             return profil;
//         }

// }