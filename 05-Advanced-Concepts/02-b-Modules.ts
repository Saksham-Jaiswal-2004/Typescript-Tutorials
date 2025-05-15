// Importing and Exporting functions
import { addPayment, getDetails } from "./02-a-Modules";

addPayment(500);
getDetails("Tiwari");

// Default Import and Export
import Payment from "./02-a-Modules";

let c2 = new Payment(1200);
console.log(c2);