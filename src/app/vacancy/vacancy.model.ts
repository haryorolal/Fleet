
export interface IUser {
    id: string
    firstname: string
    initials: string
    lastname: string
    dateOfBirth: Date    
    email: string     
    address: string 
    phones: number,
    resume: string,
  imageFront:string,  
  imageBack:string,
  imageName:string
    //phones: Iphone[]
    /*address: {
        line1: string
        line2: string
        city: string
        state: string
        zip: string
    }    */  
    //picture: string
}
/*
export interface Iphone{
    type: string
    number: string
    id: number
}*/

/*export class User implements IUser {
    constructor (
        public id = '',
        public name = { first: '', middle: '', last:''},        
        public dateOfBirth = new Date(),               
        public email = '',        
        public phones = [] as any,
        public address = { line1: '', line2: '', city: '', state: '', zip: ''}, 
        public picture = '',
    ){}

    static BuildUser(user: IUser) {
        return new User(
            user.id,
            user.name,
            user.dateOfBirth,            
            user.email,                
            user.phones,             
            user.address,     
            user.picture,
        )
    }

    get fullName(){
        return `${this.name.first} ${this.name.middle} ${this.name.last}`
    }
}*/

export interface Icontact{
    id: number;
    names: string;
    email: string;
    messages: string;
}