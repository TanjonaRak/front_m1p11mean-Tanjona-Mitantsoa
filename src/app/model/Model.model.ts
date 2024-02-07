
export interface Service{
    _id : string,
    name :string,
    delay :string,
    price : number,
    commission : number,
    photo : string
}

export interface Employee {
    _id : string,
    name : string,
    first_name :string,
    email : string,
    password :string,
    etat :number,
    photo :string
}

export interface Client{
    _id :string,
    name : string,
    first_name:string,
    password : string,
    email : string,
    photo : string,
    appointments : object[]
}