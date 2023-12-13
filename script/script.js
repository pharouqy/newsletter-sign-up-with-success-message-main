const email = document.getElementById("email");
const thanks = document.querySelector("section:nth-child(2)");
const main = document.querySelector("main");
const input = document.querySelector("input[type='email']");

checkEmail(email);

function checkEmail(email) {
  const btn = document.querySelector("input[type='submit']");
  const label = document.querySelector("label");
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (document.querySelector("label > span")) {
      document.querySelector("label > span").remove();
    }
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      main.style.display = "none";
      thanks.style.display = "flex";
    } else {
      label.insertAdjacentHTML(
        "beforeend",
        "<span>Valid Email Required</span>"
      );
      input.classList.add("error");
      input.classList.remove("email");
    }
  });
}

const dismiss = document.querySelector("button");
dismiss.addEventListener("click", (e) => {
  e.preventDefault();
  main.style.display = "flex";
  thanks.style.display = "none";
  input.value = "";
  input.classList.remove("error");
  input.classList.add("email");
});
