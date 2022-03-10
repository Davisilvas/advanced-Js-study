var pessoa = {
    name: "Davi Santos" ,
    idade: 21
};

var contato = {
    tel: 993287911,
    email:"morg.daviss@gmail.com"
};

// var copia = {...pessoa, 
//     cidade: "Engenheiro Paulo de Frontin",
//     telefone: contato.tel}

var copia = {...pessoa, 
    cidade: "Engenheiro Paulo de Frontin",
    ...contato};

    copia.idade = 33;

var notasT1 = [1, 2, 3, 4];
var notasT2 = [5, 6, 7, 8];

var todasNotas = [...notasT1, ...notasT2];
console.log(todasNotas);