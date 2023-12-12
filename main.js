// Step 1: Write a function getDaysUntilChristmas
// Calculates and returns number of days remaining until chirstmas

function getDaysUntilChristmas() {
  let date = new Date();

  let today = date.toLocaleString("default", { day: "2-digit" });
  let christmasDay = 25;

  let daysRemaining = christmasDay - today;

  return daysRemaining;
}

console.log("Amount of days until Christmas is: " + getDaysUntilChristmas());
