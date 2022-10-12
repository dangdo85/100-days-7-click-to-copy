const btnCopy = document.querySelector(".btnCopy");
const password = document.querySelector(".passwordBox");
const btnGen = document.querySelector(".btnGen");
const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const generatePassword = (e) => {
  e.preventDefault();
  let passwordStr = "";
  
  for (var i = 0; i < 12; i++) {
  const randomNumber = Math.floor(Math.random() * chars.length);
  passwordStr += chars.substring(randomNumber, randomNumber +1);
  }
  password.value = passwordStr;
}

const copyText = (e) => {
  e.preventDefault();

  navigator.clipboard.writeText(password.value)
    .then(() => {
      btnCopy.textContent = "Copied!!!";
      setTimeout(() => {
        btnCopy.textContent = "Copy";
      }, 3000);
    })
};

btnGen.addEventListener("click", generatePassword);
btnCopy.addEventListener("click", copyText);