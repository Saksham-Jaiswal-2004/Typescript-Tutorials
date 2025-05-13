// Public - Kahi bhi naam change kre koi dikkat nhi
class BottleMaker
{
    constructor(public name: string)
    {
        this.name = name;
    }
}

let B1 = new BottleMaker("Milton");

console.log(B1.name);
B1.name = "Thermos"
console.log(B1.name);


// Private - can only be accessed by same class
class BottleMaker2
{
    constructor(private name: string)
    {
        this.name = name;
    }

    changeName()
    {
        this.name = "Thermos"
    }
}

let B2 = new BottleMaker2("Bottle");
B2.changeName();



class BottleMaker3
{
    constructor(public name: string)
    {}
}

class meetBottleMaker extends BottleMaker3
{
    constructor(name: string)
    {
        super(name); // Paasing value to parent class constructor
    }

    getValue()
    {
        console.log(this.name);
    }
}

let B3 = new meetBottleMaker("Plastic");
B3.getValue();


// Protected - Can be accessed by same class as well as all the child classes of that class
