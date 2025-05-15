class User
{
    constructor(public readonly userName: string) // By setting readonly typescript will give error when changing value for that vriable
    {}

    changeName()
    {
        // this.userName = "Anubhav";
    }
}

let u1 = new User("Saksham");

u1.changeName();
console.log(u1.userName);