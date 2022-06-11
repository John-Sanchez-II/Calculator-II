// allows buttons to be pressed and shows up in display box
// selects all my elements under the string 'num-button'
let btns = document.querySelectorAll(".num-button");
let allBtns = document.querySelectorAll(".button");
// selects first element that matches my selector inside () 
let resultBox = document.querySelector("#result-box");
let clearBtn = document.querySelector('#clear');

let total = document.querySelector("#total");
// rest parameters 
let btnIcon = [...btns];
let allBtnSpread = [...allBtns];
// for number inputs, when a button is clicked, the clicked symbol on the button is displayed
btnIcon.forEach((button, i) => {
  button.addEventListener("click", () => {
    // inner values for calculator
    if (resultBox.innerHTML == " ") {
      resultBox.innerHTML = " ";
    }
    let value = btns[i].innerHTML;
    resultBox.innerHTML += value;
  });
});
// calculates my input
// Function to evalute Strings ()
function evaluate(fn) {
  return new Function('return ' + fn)();
}
// when equals icon is clicked all inputs in display box will be calculated
total.addEventListener('click', () => {
  let allInputs = resultBox.innerHTML;

  resultBox.innerHTML = evaluate(allInputs);

  console.log(evaluate(allInputs));
})
// Clear all inputs on display, when AC button is clicked the result in the display box will be blank
clearBtn.addEventListener('click', () => {
  resultBox.innerHTML = "";
})
