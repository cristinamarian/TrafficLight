// gmd lcm

// Greatest common divisor

function greatestComonDivisor() {
  let gcd = 1;
  let num1 = document.querySelector("#firstNumber").value;
  let num2 = document.querySelector("#secondNumber").value;
  let result = document.querySelector("#result");

  for (let i = 1; i <= num1 && i <= num2; i++) {
    if (num1 % i == 0 && num2 % i == 0) {
      gcd = i;
    }
  }
  result.innerHTML = "G.C.D. of " + num1 + " and " + num2 + " = " + gcd;
}

// Least common multiple

function leastCommonMultiple() {
  let gcd = 1;
  let num1 = document.querySelector("#firstNumber").value;
  let num2 = document.querySelector("#secondNumber").value;
  let result = document.querySelector("#result");

  for (let i = 1; i <= num1 && i <= num2; i++) {
    if (num1 % i == 0 && num2 % i == 0) {
      gcd = i;
    }
  }
  let lcm = (num1 * num2) / gcd;
  result.innerHTML = "L.C.M of " + num1 + " and " + num2 + " = " + lcm;
}

// Traffic Light

let nightRegimen = null;
let dayRegimen = null;
let colors = ["red", "yellow", "green"];
let currentState = 0;

const day = document.querySelector("#day");
const night = document.querySelector("#night");

day.addEventListener("click", dayTrafficLight);
night.addEventListener("click", nightTrafficLight);

//Night

function reset() {
  clearInterval(nightRegimen);
  clearTimeout(dayRegimen);
}
function nightTrafficLight() {
  reset();
  document.querySelector(".red").classList.add("inactive");
  document.querySelector(".green").classList.add("inactive");
  nightRegimen = setInterval(nightMode, 1000);
}

function nightMode() {
  document.querySelector(".yellow").classList.toggle("inactive");
}

//Day

function dayTrafficLight() {
  reset();

  colors.forEach(function (color) {
    //forEach it is more generally valid, especially if we have more colors
    document.querySelector(`.${color}`).classList.add("inactive");
  });
  currentState = 0;

  dayMode();
}

function dayMode() {
  let sequence = [
    //red  y  g  /delay
    [1, 0, 0, 1200],
    [1, 1, 0, 7000],
    [0, 0, 1, 1200],
    [0, 1, 0, 7000],
  ];
  setTimeout(function changeColor() {
    for (let i = 0; i <= 2; i++) {
      if (sequence[currentState][i] == 1)
        document.querySelector(`.${colors[i]}`).classList.remove("inactive");
      else document.querySelector(`.${colors[i]}`).classList.add("inactive");
    }
    currentState++;
    if (currentState == 4) currentState = 0; //take it from the beginning
    dayRegimen = setTimeout(changeColor, sequence[currentState][3]);
  }, 0);
}
