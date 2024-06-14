/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
  // your code here
  let target = document.getElementById("target");
  let date = new Date();
  let hour = date.getHours();
  let minit = date.getMinutes();

  if (hour < 18 && minit <= 30) {
    console.log("Bonjour");
    target.textContent = "Bonjour";
  } else {
    console.log("Bonsoir");
    target.textContent = "Bonsoir";
  }
})();
