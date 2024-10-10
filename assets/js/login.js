const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const formin = document.querySelector("#greeting-box")
const span = document.querySelector(".ment");
const btn = document.querySelector(".login-out-btn")
const loadingBox = document.querySelector("#loading-box")


function logOut() {
  localStorage.clear("username");
  location.reload(true);
}
btn.addEventListener("click", logOut)

function logIn(e) {
  e.preventDefault();
  const username = loginInput.value;
  localStorage.setItem("username", username);
  paintGreetings(username);
  loginForm.classList.add("hidden");
  loadingBox.classList.add("hidden")
  formin.classList.remove("hidden");
}


function paintGreetings(username) {
  let mention = `사용자 `;
  span.innerText = `${mention}: ${username}`;
  greeting.classList.remove("hidden");
}


const saveUserName = localStorage.getItem ("username");
  
if(saveUserName === null) {
  loginForm.classList.remove("hidden");
  loadingBox.classList.remove("hidden");
  formin.classList.add("hidden");
  loginForm.addEventListener("submit", logIn);
} else {
  paintGreetings(saveUserName);
}


