// Type Guards and Typescript Utility Types
// Using typeof and instanceof
// Partial, Required and Readonly

// Type Guards -> Type Narrowing

function newGuard(args: string | number | any)
{
    if(typeof args === "number")
        return "number";
    else if(typeof args === "string")
        return "string";
    else
        throw new Error("Warnign: Wrong Implementation!");
}

// console.log(newGuard(56));
// console.log(newGuard("Hi There"));
// console.log(newGuard(true));


// Basically instanceof is used to get know that an object is of which class
class tvKaRemote
{
    switchOff()
    {
        console.log("Switching off TV.");
    }
}

class carKaRemote
{
    switchOff()
    {
        console.log("Switching off Car.");
    }
}

const tv = new tvKaRemote();
const car = new carKaRemote();

function switchItOff(device: tvKaRemote | carKaRemote)
{
    if(device instanceof tvKaRemote)
        device.switchOff();
    if(device instanceof carKaRemote)
        device.switchOff();
}

switchItOff(tv);
switchItOff(car);