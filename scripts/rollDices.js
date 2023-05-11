function randomNumber() {
  var input = document.getElementById("dieNumberInput").value;
  var parts = input.split("d");

  var numberOfDice = parseInt(parts[0]);
  var numberOfFaces = parseInt(parts[1]);

  if (numberOfDice > 50) {
    document.getElementById("resultDice").innerHTML = "Número de dados excede o limite de 50.";
    return;
  }

  var result = "";
  var sum = 0;
  for (var i = 0; i < numberOfDice; i++) {
    var randomDie = Math.floor(Math.random() * numberOfFaces) + 1;
    result += randomDie + " ";
    sum += randomDie;
  }

  result += "(Result: " + sum + ")";
  document.getElementById("resultDice").innerHTML = result;
}
