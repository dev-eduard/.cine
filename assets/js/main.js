class Dados {
  username;
  password;
  
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
}
let user = [];
user.push(new Dados('Eduardo', 'admin'));

////////////////////////////////////////

const messageLogin = document.getElementById("message-login");
const btnLogin = document.getElementById("login");
const username = document.getElementById("username");
const senha = document.getElementById("password");

////////////////////////////////////////

for (let i = 0; i < user.length; i++) {
  btnLogin.addEventListener("click", () => {
    if (senha.value == "" || username.value == "" || senha.value == null || username.value == null)
      {
        messageLogin.innerHTML = `Preencha coretamente!`;
        messageLogin.style.visibility = "visible";
        messageLogin.style.color = "red";
      }
    else if (username.value != user[i].username)
    {
      messageLogin.innerHTML = `Usuário inexistente!`;
      messageLogin.style.visibility = "visible";
      messageLogin.style.color = "red";
    }
    else if (senha.value != user[i].password)
    {
      messageLogin.innerHTML = `Senha incorreta!`;
      messageLogin.style.visibility = "visible";
      messageLogin.style.color = "red";
    }
    else if (username.value == user[i].username && senha.value == user[i].password)
    {

      messageLogin.innerHTML = `Conectado com sucesso!`;
      messageLogin.style.visibility = "visible";
      messageLogin.style.color = "lime";
      setInterval(() => {
        window.location.href = "home.html";
      }, 3500);
    }
  });
}