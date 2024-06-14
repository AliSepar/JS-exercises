/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // to get the value of an input: document.getElementById("element-id").value
  //   let numbers = [2, 4, 14, 10, 90, 23, 16];

  document.getElementById("run").addEventListener("click", () => {
    // your code here
    let inputs = document.getElementById("numbers").value;
    let result = document.getElementById("result");

    let numbers = inputs.match(/\d+/g); // will select all the numbers in the string
    let sortNum = numbers.sort(
      //will sort form small to biggest number
      function (a, b) {
        return a - b;
      }
    );

    result.style.fontSize = "20px";
    result.innerText = "Result : " + sortNum;
  });
})();
