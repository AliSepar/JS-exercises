/* becode/javascript
 *
 * /05-arrays/02-manipulate-array/script.js - 5.2: manipulation de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  const fruits = [
    "pomme",
    "poire",
    "fraise",
    "tomate",
    "orange",
    "mandarine",
    "durian",
    "pêche",
    "raisin",
    "cerise",
  ];

  // your code here
  //   console.log(fruits);
  let runBtn = document.getElementById("run");
  runBtn.addEventListener("click", () => {
    fruits.pop(); // remove item from end
    fruits.shift(); // remove item from start
    console.log(fruits + "\n");

    fruits.unshift("banane");
    fruits.push("kiwi");
    console.log("new array " + fruits);
  });
})();
