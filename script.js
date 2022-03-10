// var {matricula, nome} = aluno; 
// console.log(matricula);
// console.log(nome);

// var {...copia} = aluno;
// copia.matricula = 999999;
// console.log(copia);
// console.log(aluno);

// var {nome,...copia} = aluno;
// copia.matricula = 999999;
// console.log(copia);
// console.log(aluno);
// console.log(nome);

// const {nome, matricula, ...copia} = aluno;
// console.log(copia);
// console.log(nome);
// console.log(matricula);
// console.log(aluno);

var aluno0 = {
    matricula: 2021999,
    nome: "Davi" , 
    telefone: 993287911,
    cidade: "Engenheiro Paulo de Frontin"
};

var aluno1 = {
    matricula: 04011999,
    nome: "Maria", 
    telefone: 8888888,
    cidade: "Mendes"
};

var aluno2 = {
    matricula: 111111111,
    nome: "Doly", 
    telefone: 666666666,
    cidade: "Frontin"
};

var alunos = [aluno0, aluno1, aluno2];

var [Davi, ...outros] = alunos;

console.log(Davi);
console.log(outros);
