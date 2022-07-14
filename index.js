function fivePercent() {
  var x = document.getElementById("dollar-el").value;
  var y = document.getElementById("person-el").value;
  var amount = x  * (5 / 100) / y ;
  var total = (x  / y) + amount;
  document.getElementById("amount-el").innerHTML = "$"+amount.toFixed(2);
  document.getElementById("total-el").innerHTML = "$"+total.toFixed(2);
}

function tenPercent() {
  var x = document.getElementById("dollar-el").value;
  var y = document.getElementById("person-el").value;
  var amount = x  * (10 / 100) / y ;
  var total = (x  / y) + amount;
  document.getElementById("amount-el").innerHTML = "$"+amount.toFixed(2);
  document.getElementById("total-el").innerHTML = "$"+total.toFixed(2);
}


function fifteenPercent() {
  var x = document.getElementById("dollar-el").value;
  var y = document.getElementById("person-el").value;
  var amount = x  * (15 / 100) / y ;
  var total = (x  / y) + amount;
  document.getElementById("amount-el").innerHTML = "$"+amount.toFixed(2);
  document.getElementById("total-el").innerHTML = "$"+total.toFixed(2);
}

function twentyFivePercent() {
  var x = document.getElementById("dollar-el").value;
  var y = document.getElementById("person-el").value;
  var amount = x  * (25 / 100) / y ;
  var total = (x  / y) + amount;
  document.getElementById("amount-el").innerHTML = "$"+amount.toFixed(2);
  document.getElementById("total-el").innerHTML = "$"+total.toFixed(2);
}

function fiftyPercent() {
  var x = document.getElementById("dollar-el").value;
  var y = document.getElementById("person-el").value;
  var amount = x  * (50 / 100) / y ;
  var total = (x  / y) + amount;
  document.getElementById("amount-el").innerHTML = "$"+amount.toFixed(2);
  document.getElementById("total-el").innerHTML = "$"+total.toFixed(2);
}

function costumPercent() {
  var x = document.getElementById("dollar-el").value;
  var y = document.getElementById("person-el").value;
  var z = document.getElementById("costum-el").value;
  var amount = x  * (z / 100) / y ;
  var total = (x  / y) + amount;
  document.getElementById("amount-el").innerHTML = "$"+amount.toFixed(2);
  document.getElementById("total-el").innerHTML = "$"+total.toFixed(2);
}
