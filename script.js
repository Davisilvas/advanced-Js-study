/*function dobro(x){
 console.log(2*x)
}
FUNÇÃO NORMAL
dobro(598);

let dobro = function(x){
    console.log(2*x)
}
FUNÇÃO ANONIMA
dobro(8);*/

/*let dobro = (x) => {
    console.log(2*x)
};

dobro(987);

let dobro = x => (2*x);

console.log(dobro(67))*/


let dobro = function(){
    return 2 * this.x;
}

let numero = {
    x: 8,
    d: dobro
}

console.log(numero.d())
