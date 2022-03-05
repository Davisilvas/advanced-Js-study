/*let dog = {
    sound: "Au Au",
    speak: function(){
        console.log(this.sound);
    }
}

let cat = {
    sound: "Miau",
    speak: function(){
        console.log(this.sound);
    }
}

dog.speak();
cat.speak();*/

/*function genericSpeak(){
    console.log(this.sound);
}

let dog = {
    sound: "Au Au",
    speak: genericSpeak
}

let cat = {
    sound: "Miau",
    speak: genericSpeak
}

dog.speak();
cat.speak();*/

function genericSpeak(){
    console.log(this.sound);
}

let dog = {
    sound: "Au Au",
    speak: genericSpeak
}

let cat = {
    sound: "Miau",
    speak: genericSpeak
}

//let bindedFunction = genericSpeak.bind(cat);
//bindedFunction();
genericSpeak.bind(cat)();
genericSpeak.bind(dog)()