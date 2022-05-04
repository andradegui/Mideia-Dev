// function cadastrarUser() {
//     event.preventDefault();

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
