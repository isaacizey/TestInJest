class manager {
    constructor (details) {
        const {age, title, name} = details
        this.age = age;
        this.title = title;
        this.age = age; 

    }

    get age()
    {
        return this.age;
    }
    get name(){
        return this.name;
    }
    get title() {
        return this.title;
    }
}