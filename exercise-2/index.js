// Exercise 2
// Change the code below, so that it will print a next character from the string every second.

function start() {
  const msg = "Hey!";
  setTimeout(() => {
    console.log(msg.charAt(0)); // "H"
    setTimeout(() => {
      console.log(msg.charAt(1)); // "e"
      // YOUR CODE GOES HERE:

      // **********************
    }, 1000);
  }, 1000);
}

document.getElementById("start").addEventListener("click", start);
