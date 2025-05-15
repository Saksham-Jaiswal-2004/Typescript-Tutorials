function args(...args: number[]) // Rest parameter - when passing unknown large parameters of same type we can pass like this
{
    console.log(args);
    for(let i in args)
    {
        console.log(args[i]);
    }
}

args(83,76,23,90,12,54,28,64,19,96,23,74)