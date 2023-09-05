class car{
    constructor(name,color){
        this.name=name;
        this.color=color;
    }
    displaya(){
        console.log("Name: "+this.name+"\nColor: "+this.color);
        
    }
    
}

class farari extends car{
    constructor(price,name,color){
        super(name,color);
        this.price=price;
    }
    displayb(){
        this.displaya();
        console.log("\nPrice: "+this.price);
    }
}

var obj=new farari(120000,"type-x","green");
obj.displayb();
