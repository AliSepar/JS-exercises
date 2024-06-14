/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  let html = document.querySelector("html");
  let colorname = document.getElementById("colorname");
  let runBtn = document.getElementById("run");
  runBtn.addEventListener("click", () => {
    var randomNum = Math.floor(100000 + Math.random() * 900000);
    console.log(randomNum);
    html.style.backgroundColor = `#${randomNum}`;
    colorname.textContent = `Background-Color : #${randomNum}`;
    colorname.style.textAlign = "center";
    colorname.style.fontSize = "25px";
  });
})();
