function NumberClick(Button) {
  document.getElementById("Text").innerText =
    document.getElementById("Text").innerText + Button.innerText;
}
function Clear() {
  document.getElementById("Text").innerText = "";
  Zahl1 = "";
  Ergebnis = "";
  Rechenzeichen = "";
}
let Zahl1;
function Rechnung(Button) {
  if (Rechenzeichen !== "") {
    ErgebnisErrechnen();
  }
  Zahl1 = parseInt(document.getElementById("Text").innerText);
  document.getElementById("Text").innerText = "";

  Rechenzeichen = Button.innerText;
}
let Rechenzeichen = "";
function Gleich() {
  ErgebnisErrechnen();
  Rechenzeichen = "";
}
function ErgebnisErrechnen() {
  let Ergebnis;
  switch (Rechenzeichen) {
    case "+":
      Ergebnis = Zahl1 + parseInt(document.getElementById("Text").innerText);
      break;
    case "-":
      Ergebnis = Zahl1 - parseInt(document.getElementById("Text").innerText);
      break;
    case "*":
      Ergebnis = Zahl1 * parseInt(document.getElementById("Text").innerText);
      break;
    case "/":
      Ergebnis = Zahl1 / parseInt(document.getElementById("Text").innerText);
      break;
    default:
      Ergebnis = "Error";
  }

  document.getElementById("Text").innerText = Ergebnis;
}
function Wurzel() {
  Ergebnis = Math.sqrt(document.getElementById("Text").innerText);
  document.getElementById("Text").innerText = Ergebnis;
}
function Quadrat() {
  Ergebnis = Math.pow(document.getElementById("Text").innerText, 2);
  document.getElementById("Text").innerText = Ergebnis;
}
function VorzeichenÄndern() {
  Zahl1 = document.getElementById("Text").innerText;
  if (Zahl1[0] !== "-") {
    Zahl1= "-" + Zahl1
  }
  else if (Zahl1[0] == "-") {
    Zahl1= Zahl1.replace("-" , "")
  }
  document.getElementById("Text").innerText= Zahl1
}
