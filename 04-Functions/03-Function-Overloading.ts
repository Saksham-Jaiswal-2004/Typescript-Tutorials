// Function Overloading as we know is using the same function with different parameters

function song(title: string): void;
function song(title: string, year: number): number;
function song(title: string, year: number, singer: string): string;

function song(title: any, year?: any, singer?: any): void | number | string
{
    if(typeof title === "string" && year === undefined && singer === undefined)
    {
        console.log("Nothing Returned");
    }
    else if(typeof title === "string" && typeof year === "number" && singer === undefined)
    {
        console.log(year);
        return 1;
    }
    else if(typeof title === "string" && typeof year === "number" && typeof singer === "string")
    {
        console.log(singer);
        return "Singer";
    }
    else
    {
        throw new Error("Wrong way to call function!");
    }
}

song("Enchanted")
song("Enchanted", 2000)
song("Enchanted", 2000, "Taylor Swift")