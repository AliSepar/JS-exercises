/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  getUserData();
  // your code here
  function getUserData() {
    let userAge = prompt("Please insert your Age");
    if (!userAge) {
      alert("Age is required! Please enter your Age");
      return getUserData();
    }

    let userGender = prompt("Please insert Gender");
    if (!userGender) {
      alert("Gender is required! Please enter your Gender");
      return getUserData();
    }
    let userCity = prompt("Please insert City");
    if (!userCity) {
      alert("City is required! Please enter your City");
      return getUserData();
    }

    let confirmation = confirm(
      `please confirm your age ${userAge} , your Gender ${userGender}, your City ${userCity}`
    );
    if (confirmation) {
      alert("Thank you, Your Information has been saved");
    } else {
      alert("let's try Again!");
      getUserData();
    }
  }
})();
