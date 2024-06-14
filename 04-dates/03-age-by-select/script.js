/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  let dateOut = document.getElementById("newDate");

  let dayInput = document.getElementById("dob-day");
  let monthInput = document.getElementById("dob-month");
  let yearInput = document.getElementById("dob-year");
  let runBtn = document.getElementById("run");

  runBtn.addEventListener("click", () => {
    console.log(
      calculateAge(dayInput.value, monthInput.value, yearInput.value)
    );
    let dateResult = calculateAge(
      dayInput.value,
      monthInput.value,
      yearInput.value
    );

    // alert(
    //   `You are ${dateResult.years} years , ${dateResult.months} months , ${dateResult.days} days old`
    // );
    dateOut.textContent = `You are ${dateResult.years} years , ${dateResult.months} months , ${dateResult.days} days old`;
    dateOut.style.fontSize = "20px";
    dateOut.style.textAlign = "center";
  });

  function calculateAge(day, month, year) {
    const today = new Date();
    const birthDate = new Date(year, month - 1, day); // Month is 0-indexed, so subtract 1
    const ageInMilliseconds = today - birthDate;
    const ageInYears = ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000); // Considering leap years

    // Extract years, months, and days
    const years = Math.floor(ageInYears);
    const remainingDays = (ageInYears - years) * 365.25; // Convert remaining years to days
    const months = Math.floor(remainingDays / 30.44); // Average days in a month
    const days = Math.floor(remainingDays % 30.44);

    return { years, months, days };
  }
})();
