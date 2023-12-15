const passwordInput = document.getElementById("passwordinput");
const validity = document.getElementById("Password-validity");

const strongPassword = new RegExp(
  "(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?!.*(.)\\1\\1)(?=.{6,20})"
);

passwordInput.addEventListener("input", (e) => {
  console.log(passwordInput.value);
  let steps;

  let isValid = strongPassword.test(passwordInput.value);
  let text = "";
  if (isValid) {
    console.log("password strong enough");
    text = "password strong enough";
    validity.innerHTML = text;
    validity.style.color = "green"
    steps = 0;
  } else {
    steps = 1;
    console.log("password not strong enough");
    text = "password not strong enough";
    validity.innerHTML = text;
    validity.style.color = "red";
    if (!/(?=.*[0-9])/.test(passwordInput.value)) steps++;
    if (!/(?=.*[a-z])/.test(passwordInput.value)) steps++;
    if (!/(?=.*[A-Z])/.test(passwordInput.value)) steps++;
    if (!/(?=.*[^A-Za-z0-9])/.test(passwordInput.value)) steps++;
    if (passwordInput.value.length < 6 ) steps++;
  }
  console.log(`steps: ${steps}`);
});
