
class Student{
    constructor(){
        this.name=" ";
        this.age=0;
        this.roll=0;
    }
    
    display(){
        console.log("The Name is : "+this.name);
        console.log("Age: "+this.age+"\nRoll No: "+this.roll);
    }
    
};

var a = new Student();//this is how we create the new object
a.display();
