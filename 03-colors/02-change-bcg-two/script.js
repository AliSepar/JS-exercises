/* becode/javascript
 *
 * /03-colors/02-change-bcg-two/script.js - 3.2: couleur de fond (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  let htmlTag = document.querySelector("html");
  let colorInput = document.getElementById("color");
  let runBtn = document.getElementById("run");

  runBtn.addEventListener("click", () => {
    console.log(colorInput.value);
    htmlTag.style.backgroundColor = colorInput.value;
  });
})();
