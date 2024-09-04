let formData = {
  email: '',
  message: '',
};

const form = document.querySelector(".feedback-form");
const mail = form.elements.email;
const textarea = form.elements.message;
const localStorageKey = "feedback-form-state";

const savedSettings = localStorage.getItem(localStorageKey) ?? "";
if (savedSettings != ""){
    const parsedSettings = JSON.parse(savedSettings);
    textarea.value = parsedSettings.message;
    mail.value = parsedSettings.email;
}

form.addEventListener("input", () => {
    formData.message = textarea.value.trim()
    formData.email = mail.value.trim()
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener("submit", (event) => {
  if(formData.email.trim() != "" && formData.message.trim() != ""){
    console.log(formData)
    event.preventDefault();
    localStorage.removeItem(localStorageKey);
    form.reset();
    formData.email = ''
    formData.message = ''
  }
  else{
    alert("Fill please all fields")
  }
});