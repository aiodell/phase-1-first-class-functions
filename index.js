// create function that takes callback function as an argument
// what it returns does not matter
function receivesAFunction(callbackFunction){
    callbackFunction();
    return console.log("This uses the callback function feature");
}

function callbackFunction(){
    console.log("this is the callback function.");
}

// create a function that returns a named function
function returnsANamedFunction(){
    return fn;
}
// the named function
function fn(){
    return 'I am a named function.';
}

// create a function that returns an anonymous function
function returnsAnAnonymousFunction(){
    return function(){
        console.log('I am returning an anonymous function');
    }
}