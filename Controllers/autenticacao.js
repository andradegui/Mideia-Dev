let labelNome = document.querySelector("#labelNome");
let nome = document.querySelector("#nome");

let labelEmail = document.getElementById("labelEmail").value;
let email = document.getElementById("email").value;

let labelSenha = document.getElementById("labelSenha").value;
let senha = document.getElementById("senha").value;

let labelCpf = document.getElementById("labelCpf").value;
let cpf = document.getElementById("cpf").value;

let labelTelefone = document.getElementById("labelTelefone").value;
let telefone = document.getElementById("telefone").value;

//Validação de nome
nome.addEventListener("keyup", () => {
  if (nome.value.length <= 2) {
    labelNome.setAttribute("style", "color: red");
    labelNome.innerHTML = "Nome *Minímo 3 caracteres";
    nome.setAttribute("style", "background-color: red");
  } else if (nome.value.length >= 50) {
    labelNome.setAttribute("style", "color: red;");
    labelNome.innerHTML = "Nome *Máximo 50 caracteres";
    nome.setAttribute("style", "background-color: red");
  } else {
    labelNome.setAttribute("style", "color:#4ae94a");
    labelNome.innerHTML = "Nome";
    nome.setAttribute("style", "background-color: #4ae94a");
  }
});

function cadastraUser() {}

// function cadastrarUser() {

//     let nome = document.getElementById("nome").value;
//     let email = document.getElementById("email").value;
//     let senha = document.getElementById("senha").value;
//     let cpf = document.getElementById("cpf").value;
//     let telefone = document.getElementById("telefone").value;

//     let user = {
//         nome: nome,
//         email: email,
//         senha: senha,
//         cpf: cpf,
//         telefone: telefone
//     };

//     var json = JSON.stringify(user);
//     localStorage.setItem(user, json);
//     console.log("user add")
// }

// function login() {
//     event.preventDefault();

//     let userEmail = document.getElementById("userEmail").value;
//     let userPass = document.getElementById("userPass").value;
//     let result = document.getElementById("result").value;

//     var userAutenticado = localStorage.getItem(user);
//     var dadosUser = JSON.parse(user);
//     console.log(data);

//     if (userAutenticado == null) {
//         result.innerHTML = 'Credenciais Erradas';
//     }
//     else if (userEmail == dadosUser.email && userPass == dadosUser.senha) {
//         window.location.href = '/Views/feed.html';
//     }
//     else {
//         result.innerHTML = 'Credenciais Erradas';
//     }

// }
