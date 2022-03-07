let usuarios = ["Davi", "Maria", "Doly"];

function addUser(nome){
    let promise = new Promise(function(resolve, reject){
        setTimeout (()=>{
            usuarios.push(nome);
            let error = false;
            //let error = true;
            
            if(!error){
                resolve();
            }else{
                reject({msg : "Erro qualquer"})
            }

        },1000)   
    })
    return promise; 
}

function listUsers(){
    console.log(usuarios);
}

addUser("Tânia")
        .then(listUsers)
        .catch((error) => {
            console.log(error.msg)
        });