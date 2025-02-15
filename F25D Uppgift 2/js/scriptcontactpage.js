const sendEmail = document.querySelector(".sendbutton");
const functionMsg = document.getElementById("function-msg");
sendEmail.addEventListener("click", () => {
  functionMsg.textContent = "Denna funktion är avaktiverad.";
});

const contactText = document.querySelector(".left-container");
window.onload = function () {
  if (contactText) {
    contactText.classList.add("show");
  }
};
