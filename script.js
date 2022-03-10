function newStudent (name, age){
    return {name, age};

}

let students = [
    newStudent("Davi", 21),
    newStudent("Maria", 23),
    newStudent("Doly", 12),
    newStudent("Thor", 5),
];
console.log(students)

// for (let student of students){
//     if (student.age >= 15){
//         console.log(student.name)
//     }
// }

function over15(students){
    return students.age >= 15;
}

let studentsOver15 = students.filter(over15);
console.log(studentsOver15);
// console.log(students.filter(over15));

function filtro(callback){

    let alunosFiltrados = [];
    for (let aluno of this){
        if (callback(aluno)){
            alunosFiltrados.push(aluno)
        }
    }

    return alunosFiltrados;
}

students.filtro = filtro;

console.log(students.filtro(over15))