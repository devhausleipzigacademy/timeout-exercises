// Exercise 2
// Change the code below, so that when you hit start it will start printing out the current millisecond Timer every second
// When you hit stop this should stop again.
// Remember, you have to call `clearInterval` on the intervalHandle to stop the Timer
// You will have to move the definition of intervalHandle outside of the start function
// into the global scope so that the stop function can get access to it and initialize it to null at first.

function start() {
  console.log(Date.now());
  const intervalHandle = setInterval(() => {
    // This will happen every second
  }, 1000);
}

function stop() {
  // clearInterval(intervalHandle);
}

document.getElementById("start").addEventListener("click", start);
document.getElementById("stop").addEventListener("click", stop);
