class Subject{
    constructor(){
        this.sname="English";
    }
    displayp(){
        console.log("\nThe Subject is: "+this.sname);
    }
};

class Student extends Subject{
    constructor(){
        super();
        this.name=""
        this.age=0
    }
    display(){
        this.displayp();
        console.log("\nThe name is: "+this.name);
        console.log("\nThe age is : "+this.age);
    }
}


var x=new Student();
x.display();
