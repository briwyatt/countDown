//Recursion: a function that calls itself until it doesn't

// JavaScript ES6
// script dependencies: babel-cli
// run this script with: $ babel-node example.js


let countDownFrom = (num) => {
    if (num === 0) return;
     // the stop condition- once the num is 1-1=0,
     //  this condition sets it up to break out of 
     //  the function because it has counted down
    // without a stop condition the loop loop will run forever
    console.log(num)
    // console.dir(num, {colors: true}) // just a more colorful alternative to console.log()
    countDownFrom(num - 1)
}

countDownFrom(10)



// ES6 is interesting because it removes one
// of the main limitations to doing functional programming with JS
// TERM: "tail call optimization" because its a big tail of function calls 
