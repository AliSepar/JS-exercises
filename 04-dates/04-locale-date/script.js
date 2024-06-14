/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
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

  const month = date.toLocaleString("fr-FR", { month: "long" });
  const daylong = date.toLocaleDateString("fr-FR", { weekday: "long" });

  const dayNum = date.getDate();
  const year = date.getFullYear();
  const hour = date.getHours();
  const min = date.getMinutes();

  console.log(`${daylong} ${dayNum} ${month} ${year}, ${hour}h ${min}`);

  target.textContent = `${daylong} ${dayNum} ${month} ${year}, ${hour}h${min}`;
  target.style.textTransform = "capitalize";
})();
