// console.log('JS externo funcionou!');
// console.log(window);

// alert('Seja bem vinde!');// mensagem par ao usuário

// let adulto = confirm('Você tem mais de 18 anos?'); // retorna booleano

let nomeUsuario = prompt('Qual o seu nome?'); //retorna texto inserido pelo usuário
console.log(nomeUsuario);

let elementHeader = document.querySelector('.olaUsuario');
console.log(elementHeader);

//elementHeader.innerText = `Olá, ${nomeUsuario}`;

elementHeader.innerHTML += `<strong> Olá, ${nomeUsuario} </strong>`;

let logo = document.getElementById('ola');
console.log(ola);

logo.style.color = "orange";

function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }

//   const toggleMode = () => {
//       document.body.classList.toggle("dark-mode");
//   }

setTimeout(() =>{
    document.querySelector('.modal').style.display = "flex";
}, 5000)

const btnClose = () =>{
    document.querySelector('.modal').style.display = "none";
}

// document.querySelector("#btn-submit-contact").addEventListener("click", (evento) =>{
//     evento.preventDefault(); //cancelando o envio temporariamente

//     let nomeValue = document.querySelector("#input_nome").value;
//     let emailValue = document.querySelector("#input_email").value;

//     console.log(nomeValue);
//     console.log(emailValue);

//     //validação dos campos
//     //exibição de mensagem de erros
//     //envio do formulário
// });

let formContact = document.querySelector("#form_contact");

formContact.addEventListener("submit", (evento) =>{
    //interrompo o envio do formulário
    evento.preventDefault();

    let nomeValue = document.querySelector("#input_nome").value;
    let emailValue = document.querySelector("#input_email").value;
    let telefoneValue = document.querySelector("#input_telefone").value;
    let mensagemValue = document.querySelector("#mensagem").value;

    // if (nomeValue && emailValue && telefoneValue && mensagemValue) {
    //     alert('O campo não pode ficar vazio!');
    // };

    if (!nomeValue || !emailValue || !telefoneValue) {
        alert("Campo não preenchido");
        nomeValue.focus();
        emailValue.focus();
    }


    // validar se nome tem 2 ou mais caracteres
    if(nomeValue.length >= 2){
        console.log("Nome contém 2 ou mais caracteres");
    }
   
    // validar se telefone tem no minimo 8 caracteres
    if(telefoneValue.length >= 8){
        console.log("Telefone tem no mínimo 8 caracteres");
    }else{
        console.log("Telefone contém menos que 8 caracteres");
    }

    const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    console.log(re.test(emailValue));

    if (re.test(emailValue) == false) {
        alert("Email não existe");
    }



    // form.onsubmit = function(){
    //     if(nome.value == ""){
    //       alert('O campo não pode ficar vazio!');
    //       return false;
    //     }else{
    //       alert('Ok!');
    //     }	
    // };

    //validar se todos os campos estão preenchidos
    //validar se nome tem 2 ou mais caracteres
    // validar se telefone tem no mínimo 8 caracteres
    // validar de o campo email tem arroba (Google - validação email com regex)
});