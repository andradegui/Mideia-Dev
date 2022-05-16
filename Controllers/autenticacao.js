let labelNome = document.querySelector("#labelNome");
let nome = document.querySelector("#nome");

let labelEmail = document.querySelector("#labelEmail");
let email = document.querySelector("#email");

let labelSenha = document.querySelector("#labelSenha");
let senha = document.querySelector("#senha");

let labelCpf = document.querySelector("#labelCpf");
let cpf = document.querySelector("#cpf");

let labelTelefone = document.querySelector("#labelTelefone");
let telefone = document.querySelector("#telefone");

//Validação de nome
nome.addEventListener("keyup", () => {
    if (nome.value.length <= 2 || nome.value.length == 0) {
        labelNome.setAttribute("style", "color: #EA5A5A;");
        labelNome.innerHTML = "Nome *Minímo 3 caracteres";
        nome.setAttribute("style", "background-color: #EA5A5A;");
    } else if (nome.value.length > 50) {
        labelNome.setAttribute("style", "color: #EA5A5A;");
        labelNome.innerHTML = "Nome *Máximo 50 caracteres";
        nome.setAttribute("style", "background-color: #EA5A5A;");
    } else {
        labelNome.setAttribute("style", "color:#4ae94a;");
        labelNome.innerHTML = "Nome";
        nome.setAttribute("style", "background-color: #4ae94a;");
    }
});


//Validação email
email.addEventListener("keyup", () => {
    if (email.value.length > 30 || email.value.length == 0) {
        labelEmail.setAttribute("style", "color: #EA5A5A;");
        labelEmail.innerHTML = "Email *Máximo 30 caracteres";
        email.setAttribute("style", "background-color: #EA5A5A;");
    } else {
        labelEmail.setAttribute("style", "color:#4ae94a;");
        labelEmail.innerHTML = "Email";
        email.setAttribute("style", "background-color: #4ae94a;");
    }
});

senha.addEventListener("keyup", () => {
    if (senha.value.length > 6 || senha.value.length ==0) {
        labelSenha.setAttribute("style", "color: #EA5A5A;");
        labelSenha.innerHTML = "Senha *Máximo 6 caracteres";
        senha.setAttribute("style", "background-color: #EA5A5A;");
    } else {
        labelSenha.setAttribute("style", "color:#4ae94a;");
        labelSenha.innerHTML = "Senha";
        senha.setAttribute("style", "background-color: #4ae94a;");
    }
});

cpf.addEventListener("keyup", () => {
    if (cpf.value.length > 11 || cpf.value.length == 0) {
        labelCpf.setAttribute("style", "color: #EA5A5A;");
        labelCpf.innerHTML = "Cpf *Máximo 11 números";
        cpf.setAttribute("style", "background-color: #EA5A5A;");
    } else {
        labelCpf.setAttribute("style", "color:#4ae94a;");
        labelCpf.innerHTML = "Cpf";
        cpf.setAttribute("style", "background-color: #4ae94a;");
    }
});

telefone.addEventListener("keyup", () => {
    if (telefone.value.length > 13 || telefone.value.length == 0) {
        labelTelefone.setAttribute("style", "color: #EA5A5A;");
        labelTelefone.innerHTML = "Telefone *Máximo 13 números";
        telefone.setAttribute("style", "background-color: #EA5A5A;");
    } else {
        labelTelefone.setAttribute("style", "color:#4ae94a;");
        labelTelefone.innerHTML = "Telefone";
        telefone.setAttribute("style", "background-color: #4ae94a;");
    }
});

function cadastraUser() { }

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
