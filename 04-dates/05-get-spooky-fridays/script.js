/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  // set selected year to date()
  //     loop months of that year
  //         loop day of month
  //          check if 13 is frieday with  date.toLocaleDateString("fr-FR", { weekday: "long" });

  let runBtn = document.getElementById("run");

  runBtn.addEventListener("click", () => {
    let inputYear = document.getElementById("year");

    let inputYearValue = inputYear.value;

    let fridays = findFridayThe13ths(inputYearValue);
    // console.log(friday);
    if (fridays.length > 0) {
      let output = document.getElementById("result");
      output.textContent = `This year has Friday the 13th on: ${fridays.join(
        ", "
      )}`;
      output.style.fontSize = "20px";
    } else {
      document.getElementById("result").textContent =
        "No Friday the 13th this year.";
    }

    function findFridayThe13ths(year) {
      let fridays = [];
      for (let month = 0; month < 12; month++) {
        let date = new Date(year, month, 13);
        if (date.getDay() === 5) {
          // 5 corresponds to Friday
          let monthName = date.toLocaleString("default", { month: "long" });
          fridays.push(monthName);
        }
      }
      return fridays;

      //findFridayThe13ths Function:
      // Initialize an empty array fridays to store the months with a Friday the 13th.
      // Loop through all 12 months (0 to 11 because JavaScript months are 0-indexed).
      // Create a Date object for the 13th day of each month.
      // Check if the getDay() method returns 5 (Friday).
      // If it is a Friday, get the month name and add it to the fridays array.
    }

    // orignal code
    // let date = new Date();
    // date.setFullYear(inputYearValue);
    // let monthsday = date.getDate();

    // function monthsdays(year, month) {
    //   //give me the number of days in that month
    //   return new Date(year, month, 0).getDate();
    // }

    // for (let month = 0; month <= 11; month++) {
    //   const daysInMonth = monthsdays(inputYearValue, month);
    //   // console.log(daysInMonth);
    //   for (let days = 1; days <= daysInMonth; days++) {
    //     let fdate = new Date(inputYearValue, month, days);
    //     let options = { weekday: "long" };

    //     let longFormatDate = fdate.toLocaleDateString("en-US", options);
    //     // console.log(days);
    //     if (days == 13 && longFormatDate == "Friday") {
    //       console.log(`this year has friday in 13th on month :  ${month}`);
    //     }
    //   }
    // }
  });
})();
