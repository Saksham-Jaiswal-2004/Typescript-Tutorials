// Interface is like object ki shakal
interface user {
    name: string,
    email: string,
    password: string,
    gender?: string, // ? makes this field optional there will be no error even if this field is not given
}

function getUserData(obj: user) {
    console.log(obj);
}

// Extending Interfaces
interface User {
    name: string,
    email: string,
    password: string,
}

// By using extends we are specifying that Admin interface will include all the fields of User interface as well as it's own fields
interface Admin extends User {
    admin: boolean,
}


// When two interfaces are created with the same name then both of them gets merged with all the fields in both of them
interface ABCD {
    name: string;
}

interface ABCD {
    email: string;
}
// This will create a merged interface with both the fields name and email