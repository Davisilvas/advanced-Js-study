/*function ola(){
    console.log("olá");
}

function tchau(){
    console.log("tchau");
}

function saudacao(s, nome){
    s();
    console.log(nome);
}

saudacao(ola, "Davi");
*/

let usuarios = ["Davi", "Maria", "Doly", "Tânia"];

function inserirUser(nome, callback){
    setTimeout(() => {
        usuarios.push(nome);
        callback();
    }, 1000);
}

function listarUsers(){
    console.log(usuarios)
}

inserirUser("Fernando", listarUsers);
