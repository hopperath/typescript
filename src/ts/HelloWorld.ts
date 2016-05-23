class HelloWorld
{
    public greeting: string;

    constructor(greet : string)
    {
        this.greeting = greet;
    }


    greet()
    {
        console.log(this.greeting)
    }
}

var greeter = new HelloWorld("Hello World");

greeter.greet();
