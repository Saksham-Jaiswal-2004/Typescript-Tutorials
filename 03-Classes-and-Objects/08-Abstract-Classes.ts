class payment // Essential class
{
    constructor(protected amount: number, protected account: number)
    {}

    isPaymentValid(amount: number)
    {
        return this.amount > 0;
    }
}

class PayTm extends payment
{}