let i: string | null; // '|' is union

type appUser = {
    name: string,
    email: string,
}

// This type contains the data types of appUser, '&' implies that it also contains the mentioned functions or data types
type appAdmin = appUser & {
    getDetails(user: string): void
}