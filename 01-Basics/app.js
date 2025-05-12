// Data Types - Primitives and Reference
// Number
var a = 12;
var b = a;
b += 6;
// Array
var arr = [1, 2, 3];
// We can also have an array with more than one data types
var arr2 = [1, 2, "Saksham", 3, { Marks: 50 }];
// But to have an array of single data type
var arr3 = [1, 2, 3, 4];
// Tuples
// It is an array of fixed size and in tuples we can specify that at which index what data type will be present
var arr4 = ["Saksham", 49]; // We cannot change the order of data types
// Enums - i.e. Enumerations
// It is used when we have to store data with key value pairs
var UserRoles;
(function (UserRoles) {
    UserRoles["ADMIN"] = "admin";
    UserRoles["GUEST"] = "guest";
    UserRoles["SUPER_ADMIN"] = "super_admin";
})(UserRoles || (UserRoles = {}));
UserRoles.ADMIN; // We can access them like this
