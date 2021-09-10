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
 
 function sum(a,b){
    return a+b;
}

test('add 1+2 to get 3', () => {
    expect(sum(1,2)).toBe(3);
    expect(sum(1,2)).not.toBe(null);
    expect(sum(1,2)).not.toBeUndefined(); 
    console.log("1+2="+sum(1,2));
});

test('greater than 2',() => {
    expect(sum(1,2)).toBeGreaterThan(2);
})

test('to be less than 10', () => {
    expect(sum(1,2)).toBeLessThan(10);
})


test('getName', () => {
   const amaUser = new User({firstName:'kevin',lastName:'wan'}); 
   expect(amaUser.name).toBe('kevin wan');
})
