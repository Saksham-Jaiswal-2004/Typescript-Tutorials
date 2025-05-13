class ABCD
{
    name = "Saksham";

    constructor(public age: number)
    {
        // this.age = age;
    }

    changeName()
    {
        this.name = "Saksham Jaiswl";
    }

    printName()
    {
        console.log(this.name);
    }
}

let A = new ABCD(20);
A.changeName();
A.printName();

console.log(A);