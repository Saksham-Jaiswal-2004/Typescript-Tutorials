type value = string | number | null;

let h: value; // Here we are declaring a variable with data type value which include data types string, number and null

function abcd(obj: value) {} // This function excepts variables of data type either string, number or null only
abcd("Saksham")
abcd(54)
abcd(null)