const passwordInput = document.getElementById("passwordinput");
const validity = document.getElementById("Password-validity");
const displaySteps = document.getElementById("step-check");
const strongPassword = new RegExp(
  "(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?!.*(.)\\1\\1)(?=.{6,20})"
);

passwordInput.addEventListener("input", (e) => {
  //console.log(passwordInput.value);
  let steps;

  let isValid = strongPassword.test(passwordInput.value);
  let text = "";
  let color = "";
  if (isValid) {
    console.log("password strong enough");
    text = "password strong enough";
    color = "green";
    steps = 0;
  } else {
    steps = 0;
    console.log("password not strong enough");
    text = "password not strong enough";
    color = "red";
    if (!/(?=.*[0-9])/.test(passwordInput.value)) steps++;
    if (!/(?=.*[a-z])/.test(passwordInput.value)) steps++;
    if (!/(?=.*[A-Z])/.test(passwordInput.value)) steps++;
    if (!/(?=.*[^A-Za-z0-9])/.test(passwordInput.value)) steps++;
    if (passwordInput.value.length < 6) steps++;
    if (passwordInput.value.length > 6 && /(.)\1\1/.test(passwordInput.value)) {
      text = "Password should not contain 3 consecutive repeating characters";
    }
    if (passwordInput.value.length > 20) {
      text = "Password length should be between 6 to 20 characters";
    }
  }
  //console.log(`steps: ${steps}`);
  validity.innerHTML = text;
  validity.style.color = color;
  displaySteps.innerHTML = `Steps required: ${steps}`;
});
