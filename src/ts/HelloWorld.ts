class HelloWorld
{
    constructor(public greeting: string)
    {

    }

    greet()
    {
        console.log("Hello World")
    }
}

var greeter = new HelloWorld("Hello World");
var greeter2 = new HelloWorld();

greeter.greet();
