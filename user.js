 class User {
     constructor(details)
     {
         const {firstName,lastName} = details
         this.lastName = lastName;
         this.firstName = firstName;
     }
 

 get name() {
return `${this.firstName} ${this.lastName}`;
 }
}
 
 export function sum(a,b){
    return a+b;
}

export  {
    User as User
    
}