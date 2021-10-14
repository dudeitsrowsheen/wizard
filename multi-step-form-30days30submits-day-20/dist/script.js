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
    changeStep("next");
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
 function checkPassword(form) {
    password1 = form.password1.value;
    password2 = form.password2.value;
  
    //if password1 not entered
    if (password1 == '')
      alert("Please enter Password");
  
      //if verify password not entered
    else if (password2 == '')
      alert("Please enter confirm password");
  
      //if passwords don't match
      else if (password1 != password2) {
        alert ("Password do not match")
        return false;
    }
  
  };