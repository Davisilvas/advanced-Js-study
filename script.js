let url ="https://economia.awesomeapi.com.br/last/USD-BRL";

fetch(url)
    .then((res)=>{

        return  res.json()
    })
    .then((data)=>{
        console.log(data)
        // console.log(data.USDBRL.name)
    })

function converter(){
    let input = document.getElementById("valor");
    let valor = input.value;

    fetch(url)
    .then((res)=>{

        return  res.json()
    })
    .then((data)=>{
        let rate = data.USDBRL.low;
        let resultado = valor + " dolares " + " equivalem a " + rate * valor + " reais."
        document.getElementById("resultado").innerHTML = resultado
        
    })
}