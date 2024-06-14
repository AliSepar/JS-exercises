/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // to get the value of an input: document.getElementById("element-id").value
  const performOperation = (operation) => {
    let first = document.getElementById("op-one").value;
    let second = document.getElementById("op-two").value;
    // perform the operation
    switch (operation) {
      case "addition":
        alert(`result : ${parseFloat(first) + parseFloat(second)}`);
        break;
      case "substraction":
        alert(`result : ${parseFloat(first) - parseFloat(second)}`);
        break;
      case "multiplication":
        alert(`result : ${parseFloat(first) * parseFloat(second)}`);
        break;
      case "division":
        alert(`result : ${parseFloat(first) / parseFloat(second)}`);
        break;

      default:
        alert("select a operation");
        break;
    }
  };

  Array.from(document.querySelectorAll("button.operator")).forEach(($btn) =>
    $btn.addEventListener("click", () => (performOperation($btn.id), false))
  );
})();
