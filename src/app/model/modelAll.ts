




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
    date_create?: String,
    _idpreference?:string
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
    customer: Customers,
    service: Service,
    employee: Employee,
    dateAppointment: Date,
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

export interface preferenceService{
    _id?: string,
    customer: Customers,
    service: Service,
}

export interface task {
    _id: string,
    services: Service,
    date_task: Date,
    hours: string,
    state: number,
    employee: Employee
}

export const data = [
    {
        _id:'1452csdeftt586',
        services:{
            _id: "ezf2487878d7q87z87a87z87",
            name: "Haircut",
            delay: "0.5",
            price: "5000",
            commission: "0.2",
            photo: "photo",
            description: "Good work",
            state: 10,
            date_create: "15/02/2024",
            _idpreference:"svsdvs5845212qf1"
        },
        date_task:"21/02/2024",
        hours:"14:00",
        state:10,
        employee:{
            _id:"1458csdthgth0",
            name:"Tanjona",
            first_name:"Rakoto"
        }
    },{
        _id:'1452csdeftt586ddf14',
        services:{
            _id: "ezcsdeff2487878d7q87z87a87z87",
            name: "Mackup",
            delay: "1.5",
            price: "20000",
            commission: "0.25",
            photo: "photo2",
            description: "Good work",
            state: 10,
            date_create: "15/02/2024",
            _idpreference:"ssvfdv25vsdvs5845212qf1"
        },
        date_task:"21/02/2024",
        hours:"15:00",
        state:10,
        employee:{
            _id:"1458csdthgth0",
            name:"Tanjona",
            first_name:"Rakoto"
        }
    }
] 

// tanjonafanirymiaro
//     tuc7UbAH36NR8hii

export interface expenses {
    _id?: string,
    name_expense: string,
    amount: number,
    date: Date
}

export interface Offer{
    _id?:string,
    service:Service,
    start_date :Date,
    end_date :Date,
    reduction:number,
    description ?:string,
    state ?:number// IF 10 CREER and 0 Cancel 
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