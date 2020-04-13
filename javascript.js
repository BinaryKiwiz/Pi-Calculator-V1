var CurrentPi = 0;
var CurrentFractionPi = 1;
var Iteration = 0;
var Denominator = 1;

function DefinePi(){
  CurrentPi = 4 * CurrentFractionPi;
  CurrentPi = CurrentPi.toPrecision(50);
}

function RefreshPi(){
  document.getElementById("Pi").innerHTML = CurrentPi;
}

function RefreshIteration(){
  document.getElementById("Iteration").innerHTML = Iteration;
}

function Iterate(){
  Denominator += 2
  CurrentFractionPi -= 1 / Denominator;
  Iteration += 1;
  DefinePi();
  
  Denominator += 2
  CurrentFractionPi += 1 / Denominator;
  Iteration += 1;
  DefinePi();
}

setTimeout(console.log("Begin"), 4000);

while(Iteration < 1000000){
  Iterate();
  RefreshPi();
  RefreshIteration();
}
