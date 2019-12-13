function calc() {
  var a = parseInt(document.querySelector("#Value1").value);
  var b = parseInt(document.querySelector("#Value2").value);
  var op = document.querySelector("#Operator").value;
  var calculate;


  if (op == "add") {
    calculate = a + b;
}else if (op == "sub"){
  calculate = a - b;
}else if (op == "div"){
  calculate = a / b;
}else if (op == "mul"){
  calculate = a * b;
}

document.querySelector(".result").innerHTML = "Result: " +calculate;

}
