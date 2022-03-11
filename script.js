let nome = "";

try {

    if(nome==""){
        throw "O nome não pode ser vazio"
    }

    console.log(nome);

}catch(err){

    console.log("houve um erro",err);

}finally{

    console.log("boa noite");
}

