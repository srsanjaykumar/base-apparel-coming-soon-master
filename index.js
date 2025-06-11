const regex = /(^[^\s@]+@[^\s@]+\.[^\s@]+$)/i;

const mail = document.querySelector("#email");
const send_btn = document.querySelector("button");
const email_element = document.querySelector(".main");
const error_message = "Please provide a valid email address";
const mail_box = document.querySelector(".email");
const p = document.createElement("p");
p.classList.add("error");
p.textContent = error_message;

const error_img = document.createElement('img');
error_img.src = "images/icon-error.svg";
error_img.classList.add("error-icon");




function validate_email(email) {
  if (regex.test(email)) {
    return true;
  } else {
    return false;
  }
}


// email error message
send_btn.addEventListener("click", (e) => {
  e.preventDefault();
  const email = mail.value;
  console.log(email);
  if (validate_email(email)) {
    mail_box.style.border ="1px solid var(--desaturated-red)";
    p.remove();
    error_img.remove();
    console.log("Good email");

  } else {

    mail_box.style.border = "2px solid hsl(0, 93%, 68%)";
    mail.insertAdjacentElement("afterend", error_img);
    email_element.appendChild(p);
  }
});



