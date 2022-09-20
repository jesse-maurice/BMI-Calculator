const weightEl = document.getElementById("weight");
const heightEl = document.getElementById("height");
const textEl = document.querySelector(".text");
const bmiBtnEl = document.querySelector(".bmi-btn");

const getBmi = () => {
  const w = weightEl.value;
  const h = heightEl.value;
  const bmi = Math.trunc(w / h ** 2);

  if (bmi < 18.5) {
    textEl.textContent = `Your BMI is ${bmi}, you are underweight.`;
  } else if (bmi > 18.5 && bmi < 25) {
    textEl.textContent = `Your BMI is ${bmi}, you have a normal weight.`;
  } else if (bmi > 25 && bmi < 30) {
    textEl.textContent = `Your BMI is ${bmi}, you are slightly overweight.`;
  } else if (bmi > 30 && bmi < 35) {
    textEl.textContent = `Your BMI is ${bmi}, you are obese.`;
  } else if (bmi > 35) {
    textEl.textContent = `Your BMI is ${bmi}, you are clinically obese.`;
  }
};

bmiBtnEl.addEventListener("click", getBmi);
