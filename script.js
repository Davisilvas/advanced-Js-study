function newStudent (name, age){
    return {name, age};

}

let students = [
    newStudent("Davi", 21),
    newStudent("Maria", 23),
    newStudent("Doly", 12),
    newStudent("Thor", 5),
];

function nameAndAge(student){
    return student.name + " is " + student.age + " years old";
}

console.log(students.map(nameAndAge));


console.log(students);