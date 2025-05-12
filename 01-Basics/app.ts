// Data Types - Primitives and Reference

// Number
let a = 12
let b = a;
b += 6

// Array
let arr = [1, 2, 3]

// We can also have an array with more than one data types
let arr2 = [1, 2, "Saksham", 3, {Marks: 50}]

// But to have an array of single data type
let arr3: number[] = [1, 2, 3, 4]

// Tuples
// It is an array of fixed size and in tuples we can specify that at which index what data type will be present
let arr4: [string, number] = ["Saksham", 49]; // We cannot change the order of data types

// Enums - i.e. Enumerations
// It is used when we have to store data with key value pairs
enum UserRoles {
    ADMIN = "admin",
    GUEST = "guest",
    SUPER_ADMIN = "super_admin"
}

UserRoles.ADMIN // We can access them like this

// Any - when we declare a variable but we don't give it any type or variable
let c; // Any
let d: number; // By this we can declare a variable with data type

// Unknown - it is exactly like Any but for unknown type data we have to first check its data type before performing that data type related operations
let e: unknown;
e = 9;
e = "Saksham";

if( typeof e === "string")
    e.toUpperCase();

// Void - A function with no return type
// void type function
function abcd(): void {
    console.log("Hello")
}

// A function with string return type
function userName(): string {
    return "Saksham";
}

// NULL - it is basically nothing, we get this when required data is missing

// Never
// A function with a return type of never when called then code after that call statement is not executed as the control never returns from within the function