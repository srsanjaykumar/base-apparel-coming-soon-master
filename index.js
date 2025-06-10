const regex = /(^[^\s@]+@[^\s@]+\.[^\s@]+$)/i;

const mail = document.querySelector("#email");
const send_btn = document.querySelector("button");
const email_element = document.querySelector(".main");
const error_message = "Please provide a valid email address";

const p = document.createElement("p");
p.classList.add("error");
p.textContent = error_message;

console.log(mail, send_btn);

function validate_email(email) {
  if (regex.test(email)) {
    return true;
  } else {
    return false;
  }
}
send_btn.addEventListener("click", (e) => {
  // e.preventDefault();
  const email = mail.value;
  console.log(email);
  if (validate_email(email)) {
    p.remove();
    console.log("Good email");
  } else {
    email_element.appendChild(p);
  }
});
