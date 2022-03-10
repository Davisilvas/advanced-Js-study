function novoAluno(nome, idade){
    return {nome, idade}
}

let alunos = [
    novoAluno("Davi", 21),
    novoAluno("Maria", 23),
    novoAluno("Doly", 12),
    novoAluno("Thor", 5)
]

function somaIdade(total, aluno){
    return total + aluno.idade; 
}

console.log(alunos.reduce(somaIdade, 0))