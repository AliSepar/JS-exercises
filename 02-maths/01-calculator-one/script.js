/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // to get the value of an input: document.getElementById("element-id").value
  let first = document.getElementById("op-one");
  let second = document.getElementById("op-two");
  document.getElementById("addition").addEventListener("click", () => {
    // perform an addition

    alert("result:  " + (parseInt(first.value) + parseInt(second.value)));
  });

  document.getElementById("substraction").addEventListener("click", () => {
    // perform an substraction
    alert("result:  " + (parseInt(first.value) - parseInt(second.value)));
  });

  document.getElementById("multiplication").addEventListener("click", () => {
    // perform an multiplication
    alert("result:  " + parseInt(first.value) * parseInt(second.value));
  });

  document.getElementById("division").addEventListener("click", () => {
    // perform an division
    alert("result:  " + parseInt(first.value) / parseInt(second.value));
  });
})();
