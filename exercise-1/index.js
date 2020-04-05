// Exercise 1
// Look at the code below. Right now a timeout is set, but nothing happens when the timeout is getting executed
// Change the code, so it will console.log "Hello from Timeout"
// Open the website in the browser and see if everything is working as expected.
// Try changing the delay so it will take 5 seconds before the timeout is run.
// What happens if you set the timeout to 0?

function start() {
  console.log("Start is executing...");
  setTimeout(() => {}, 200);
  console.log("Start has finished executing...");
}

document.getElementById("start").addEventListener("click", start);
