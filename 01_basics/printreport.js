function printReports(intro, body, outro) {
  // Intro → 2x length
  printCostReport(
    function (msg) {
    return msg.length * 2;
  }, intro);

  // Body → 3x length
  printCostReport(function (msg) {
    return msg.length * 3;
  }, body);

  // Outro → 4x length
  printCostReport(function (msg) {
    return msg.length * 4;
  }, outro);
}
 


// don't touch below this line

function printCostReport(costCalculator, message) {
  const cost = costCalculator(message);
  console.log(`Message: "${message}" Cost: ${cost} cents`);
}

printReports(
  "Welcome to the Hotel California",
  "Such a lovely place",
  "Plenty of room at the Hotel California",
);
