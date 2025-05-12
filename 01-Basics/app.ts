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
