/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: promp & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  let userData = prompt("Do you want cake ?  (yes/no)");
  if (userData.toLowerCase() == "yes") {
    alert("congratulation you will get a choclate cake ");
  } else {
    alert("you will not receive cake");
  }
})();
