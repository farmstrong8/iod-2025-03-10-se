function printGreeting(name) {
    console.time;
    // simple undecorated function
    console.log("Hello, " + name);
}
printGreeting("Undecorated");

// function loggingTimingDecorator(originalFunction) {
//     // decorator takes a function as parameter
//     return function (name) {
//         // and returns that function with extra bits - timing/logging
//         console.time("Function timer"); // start a timer
//         console.log(`\nExecuting function ...`); // log a message
//         const result = originalFunction(name); // execute the original function and store result
//         console.timeEnd("Function timer"); // stop the timer
//         return result; // return the result of running the original function
//     };
// }

//using forwarding
function loggingTimingDecorator(originalFunction) {
    // same decorator function as before
    return function () {
        // BUT now the returned function doesn't name its arguments from here
        console.time("Function timer");
        console.log(`\nExecuting function ...`);
        //const result = originalFunction(name); // WON'T work as name is now undefined
        //const result = originalFunction.call(this, ...arguments) // WILL work, no matter how many args
        const result = originalFunction.apply(this, arguments); // and so does this - try out both
        console.log(arguments); // [Arguments] { '0': 8 }
        console.timeEnd("Function timer"); // stop the timer
        return result; // return the result of running the original function
    };
}

// returns the original function WITH the timing/logging features included
const decoratedPrintGreeting = loggingTimingDecorator(printGreeting);
decoratedPrintGreeting("Decorated"); // we can still call the decorated version in the same way
