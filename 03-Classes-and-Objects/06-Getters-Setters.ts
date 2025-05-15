class employee
{
    constructor(public name: string, public age: number)
    {}

    getName()
    {
        return this.name;
    }

    setName(value: string)
    {
        this.name = value;
    }
}

let Emp1 = new employee("Emp1", 36);

console.log(Emp1.getName());
Emp1.setName("Rajat");
console.log(Emp1.getName());

// For Typescript
class user
{
    constructor(public _name: string, public age: number)
    {}

    get Name()
    {
        return this._name;
    }

    set Name(value: string)
    {
        this._name = value;
    }
}

let person = new user("Emp1", 36);