const nameInput = document.querySelector("#nameInput");
const courseInput = document.querySelector("#courseInput");
const studentForm = document.querySelector("#studentForm");
const welcomeMessage = document.querySelector("#welcomeMessage");
const toggleTheme = document.querySelector("#toggleTheme");
const myBody = document.querySelector("body");

nameInput.addEventListener("input", () => {
  welcomeMessage.textContent = "Hello, " + nameInput.value + "!";
});

studentForm.addEventListener("submit", (event) => {
  event.preventDefault();
  welcomeMessage.textContent = "Welcome, " + nameInput.value + "!"; 
});

toggleTheme.addEventListener("click", () => {

  myBody.classList.toggle("dark");
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
welcomeMessage.textContent = "";
}
});
