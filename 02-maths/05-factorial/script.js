/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // to get the value of an input: document.getElementById("element-id").value

  document.getElementById("run").addEventListener("click", () => {
    // your code here
    let fascNum = document.getElementById("number").value;

    //this function will run like a loop and multiply the num with (num-1)
    function factor(x) {
      if (x > 0) {
        return x * factor(x - 1);
      }
      return 1;
    }

    let totalnum = factor(parseInt(fascNum));

    alert(`The Factorial of ${fascNum} is = ${totalnum}`);
  });
})();
