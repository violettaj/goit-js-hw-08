import throttle from "lodash.throttle";
const form = document.querySelector(".feedback-form");
const btn = document.querySelectorAll("button")

const data = {};
const inputHandler = event => {
  const {
    elements: { email, message },
  } = event.currentTarget;
  data.email = email.value;
  data.message = message.value;
};

const saveData = () => {
  if (data.email !== null || data.message !== null) {
    localStorage.setItem("feedback-form-state", JSON.stringify(data));
  }
};

form.addEventListener("input", inputHandler);
form.addEventListener("input", throttle(saveData, 500));

const availableData = localStorage.getItem("feedback-form-state");

if (availableData) {
  const dataParsed = JSON.parse(availableData);
  form.elements.email.value = dataParsed.email;
  form.elements.message.value = dataParsed.message;
}

const submitHandler = event => {
  event.preventDefault();
  const {
    elements: { email, message },
  } = event.currentTarget;
  if(email.value === "" && message.value === "") {
    btn.removeAttribute("disabled", "");
  }
  if (email.value === "" || message.value === "") {
    return alert("Please fill in the missing gaps");
  }
   else {
    data.email = email.value;
    data.message = message.value;
    console.log(`Email: ${data.email}, Message: ${data.message}`);
    event.currentTarget.reset();
    localStorage.removeItem("feedback-form-state");
  }
};

form.addEventListener("submit", submitHandler);