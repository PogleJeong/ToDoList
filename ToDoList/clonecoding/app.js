const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.getElementById("greeting");

const HIDDEN_CLASS="hidden"; // string 변수는 관행적으로 대문자로 이루어진 변수를 사용
const USERNAME_KEY="username";

function onLoginSubmit(event) {
    event.preventDefault(); //브라우저의 기본동작 멈춤
    loginForm.classList.add(HIDDEN_CLASS); //로그인 후 form 숨김
    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY,userName);
    paintUserName();
}
function paintUserName() {
    const existUser = localStorage.getItem(USERNAME_KEY);
    loginForm.classList.add(HIDDEN_CLASS);
    greeting.innerText = `Hello! ${existUser}`;
    greeting.classList.remove(HIDDEN_CLASS);
}

loginForm.addEventListener("submit",onLoginSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASS);
    loginForm.addEventListener("submit",onLoginSubmit);
} else {
    paintUserName();
}