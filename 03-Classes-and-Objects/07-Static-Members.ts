// Static members - Jo bina class ka instance banaye bhi access hojaye

class saksham
{
    static version = 2.8;
    static getRandomNumber()
    {
        return Math.random();
    }
}

console.log(saksham.getRandomNumber());