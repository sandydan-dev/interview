// ### Write a setTimeout function and explain where it goes in the event loop. Identify if a code block is synchronous or asynchronous.
// 
// console.log(1); // this code will run first because it sychronous code, and it run immediatly

// setTimeout(() => {   // it is asynchrounous operation  it will after the 2 sec. this code will goes in the timer queqe and later moves to callback queqe. and it runs in the background and not blocking the main thread
//   console.log(2);
// }, 2);

// console.log(3); // this will runs after the log(1),  this also synchronous code 



// the log will be print like , 1 , 3, 2