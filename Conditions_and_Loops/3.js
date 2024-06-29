// Loops in programming are used to repeatedly execute a block of code as long as a specified condition is true. They are essential for automating repetitive tasks, iterating over data structures, and controlling the flow of a program.

// There are several types of loops in JavaScript, including for, while, and do-while loops.

// 1. for Loop:
// We use for loop to run a piece of code until the set condition turns false. The for loop is used when you know the number of iterations in advance. Its syntax is as follows:
// for (initial Expression; condition; update Expression) {
//   // Code to be executed in each iteration
// }

// example
for (let i = 0; i < 10; i++) {
    console.log(`i in for loop : ${i}`);
  }
  console.log("------------------------");
  
  // 2. while Loop:
  // The while loop is used when the number of iterations is not known in advance, and the loop continues as long as a specified condition is true. Its syntax is:
  
  // while (condition) {
  //   // Code to be executed as long as the condition is true
  // }
  // example
  let i = 1;
  while (i < 5 && i > 0) {
    i++;
    console.log(`i in while loop : ${i}`);
  }
  console.log("------------------------");
  // 3. do while Loop:
  // The do-while loop is similar to the while loop, but it guarantees that the block of code is executed at least once before checking the condition. Its syntax is:
  // do {
  //   // Code to be executed at least once
  // } while (condition);
  // example
  i = 0;
  do {
    i++;
    console.log(`i in do while loop : ${i}`);
  } while (i < 5 && i > 0);
  console.log("------------------------");