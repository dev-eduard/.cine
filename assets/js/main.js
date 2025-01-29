class Usuario {
  constructor(user, password, connected) {
    this.usuario = user;
    this.senha = password;
    this.conectado = connected;
  }
}

let user = JSON.parse(localStorage.getItem("usuario")) || new Usuario("", "", 0);

function updateUser() {
  localStorage.setItem("usuario", JSON.stringify(user));
}

// Redirecionar para home se já estiver logado
// if (user.usuario && user.senha && user.conectado === 1) {
//   window.location.href = "home.html";
// }


const messageLogin = document.getElementById("message-login");
const messageRegistro = document.getElementById("message-registro");

const areaLogin = document.getElementById("area-login");
const areaRegistro = document.getElementById("area-registro");

const btnRegistrar = document.getElementById("registrar");
const btnLogar = document.getElementById("logar");

const btnEntrar = document.getElementById("login");
const btnCadastrar = document.getElementById("registro");

const inputUserLogin = document.getElementById("username");
const inputPasswordLogin = document.getElementById("password");

const inputUserRegistro = document.getElementById("criar_username");
const inputPasswordRegistro = document.getElementById("criar_password");

btnRegistrar.addEventListener("click", () => {
  areaLogin.style.display = "none";
  areaRegistro.style.display = "grid";
});

btnLogar.addEventListener("click", () => {
  areaLogin.style.display = "grid";
  areaRegistro.style.display = "none";
});

inputPasswordRegistro.addEventListener("input", () => {
  if (inputPasswordRegistro.value.length < 8) {
    messageRegistro.innerHTML = "A senha deve ter pelo menos 8 caracteres!";
  } else {
    messageRegistro.innerHTML = "";
  }
});

btnCadastrar.addEventListener("click", () => {
  const username = inputUserRegistro.value.trim();
  const password = inputPasswordRegistro.value.trim();

  if (!username || password.length < 8) {
    messageRegistro.innerHTML = "Preencha todos os campos corretamente.";
    return;
  }

  user = new Usuario(username, password, 0);
  updateUser();

  alert("Usuário registrado com sucesso!");
  areaRegistro.style.display = "none";
  areaLogin.style.display = "grid";
  messageRegistro.innerHTML = "";
});

btnEntrar.addEventListener("click", () => {
  const username = inputUserLogin.value.trim();
  const password = inputPasswordLogin.value.trim();

  if (username === user.usuario && password === user.senha) {
    user.conectado = 1;
    updateUser();
    window.location.href = "home.html";
  } else {
    messageLogin.innerHTML = "Usuário ou senha incorretos!";
  }
});
