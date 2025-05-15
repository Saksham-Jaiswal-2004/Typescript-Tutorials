// Generics me ek function me koi bhi value pass krwa skte hai and usko waise hi treat krwa skte hai

// #1
function check<T>(a: T)
{
    console.log(a , typeof a);
}

check<string>("Saksham");
check<number>(84208);
check<boolean>(true);

check("Saksham");
check(84208);
check(true);


// #2
interface body<T>
{
    name: string;
    age: number;
    key: T;
}

function bodyCalling(obj: body<string>)
{
    console.log(obj);
}

bodyCalling({name: "Saksham", age: 1234, key: "Key hai yeh"})


// #3
class bigBottleMaker<T>
{
    constructor(public key: T)
    {
        console.log(key, typeof key);
    }
}

let c1 = new bigBottleMaker<string>("Saksham");
let c2 = new bigBottleMaker<number>(1423);


// #4
function newString<T>(a: T, b: T): T
{
    //return "Hello"; // Wrong
    return "Hello" as T; // Right
}

// Here,
// <T> = String
// "Hello" = String Literal
// That's why the error occurs