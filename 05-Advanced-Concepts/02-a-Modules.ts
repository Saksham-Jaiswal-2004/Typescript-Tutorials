export function addPayment(val: number)
{
    console.log("Payment added:", val);
}

export function getDetails(val: string)
{
    console.log("Details for:", val);
}

addPayment(0);
getDetails("Test");

export default class Payment
{
    constructor(public payment: number)
    {
        console.log("Payment done of:", payment);
    }
}