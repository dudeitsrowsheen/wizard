var email = '';
var password1 = '';
var password2 = '';
var userGroup = '';


const steps = Array.from(document.querySelectorAll("form .step"));
const nextBtn = document.querySelectorAll("form .next-btn");
const prevBtn = document.querySelectorAll("form .previous-btn");
const form = document.querySelector("form");


nextBtn.forEach((button) => {
  button.addEventListener("click", () => {
    let password1 = document.getElementById('password1').value
    let password2 = document.getElementById('password2').value
    let isValid = checkPassword(password1, password2)
    if (isValid) {
      changeStep("next")
    };
  });
});
prevBtn.forEach((button) => {
  button.addEventListener("click", () => {
    changeStep("prev");
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputs = [];
  form.querySelectorAll("input").forEach((input) => {
    const { name, value } = input;
    inputs.push({ name, value });
  });
  console.log(inputs);
  form.reset();
});

function changeStep(btn) {
  let index = 0;
  const active = document.querySelector(".active");
  index = steps.indexOf(active);
  steps[index].classList.remove("active");
  if (btn === "next") {
    index++;
  } else if (btn === "prev") {
    index--;
  }
  steps[index].classList.add("active");
};


// Function for valid password
function checkPassword(password1, password2) {

  //if password1 not entered
  if (password1 === '') {
    alert("enter password")
    return false;
  }

  //if verify password not entered
  if (password2 === '') {
    alert("confirm the password")
    return false;

    //if passwords don't match
  }
  if (password1 !== password2) {
    alert("passwords do not match")
    return false;
  }

  return true

};