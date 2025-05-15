function abcdef(name: string, age: number, cb: (user: string) => void) // A function with a string, number and another function (with void return type and takes string as parameter) as parameters
{
    cb(name);
}

abcdef("Saksham", 20, (user: string) => {
    console.log("Hello", user);
})


// Here in the student function the marks parameter is optional that means it's not necesary to give marks while calling this function
function student(name: string, roll: number, marks?: number)
{
    console.log("Student Details:");
    console.log("Name:", name);
    console.log("Roll-No.:", roll);
    console.log("Marks:", marks);
}

student("Yuval", 15, 98)
student("Saksham", 12);

// Here in the student function the marks parameter is optional that means it's not necesary to give marks while calling this function
// Also in this version we have given marks a default value which will be taken if no input is provided
function student2(name: string, roll: number, marks: number = 0)
{
    console.log("Student Details:");
    console.log("Name:", name);
    console.log("Roll-No.:", roll);
    console.log("Marks:", marks);
}

student2("Yuval", 15, 98)
student2("Saksham", 12);