/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  let resultList = document.getElementById("resultlist");
  let resultp = document.getElementById("resultp");

  document.getElementById("run").addEventListener("click", () => {
    // your code here
    let evenSquar = [];

    for (let x = 1; x <= 21; x++) {
      if (x % 2 !== 0) {
        evenSquar.push(x ** 2);
      }
    }
    resultp.innerText = "Results: ";
    evenSquar.forEach((item) => {
      const listItem = document.createElement("li"); // create item
      resultList.appendChild(listItem); // Append the listItem to the resultList
      listItem.textContent = item; // Set the text content of the listItem
    });

    // for (let x = 0; x < evenSquar.length; x++) {
    //   console.log(evenSquar[x]);
    // }
  });
})();
