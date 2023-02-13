const btnInsert = document.querySelectorAll("#btnInsert");
const btnClear = document.querySelector("#btnClear");
const btnBack = document.querySelector("#btnBack");
const btnCalculate = document.querySelector("#btnCalculate");
var result = document.querySelector("#result");

btnInsert.forEach((el) => {
  el.addEventListener("click", () => {
    if (result.innerHTML == "erro" || result.innerHTML == "undefined") {
      result.innerHTML = "";
    }
    result.innerHTML += el.value;
  });
});

btnClear.addEventListener("click", () => {
  result.innerHTML = "";
});

btnBack.addEventListener("click", () => {
  result.innerHTML = result.innerHTML.substring(0, result.innerHTML.length - 1);
});

btnCalculate.addEventListener("click", () => {
  try {
    result.innerHTML = eval(result.innerHTML);

    if (result.innerHTML == "undefined") {
      error = "error";
      result.innerHTML = error;
    }
    result.innerHTML;
  } catch (error) {
    error = "error";
    result.innerHTML = error;
  }
});
