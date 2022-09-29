let nome = prompt("insira seu nome!!!");
let idade = parseInt(prompt("insira sua idade"));


    let investimento = 0;
    let valorDeAcao = 0;
    let dividendosPagos = 0;
       function comfirmar(){
        investimento = document.getElementsByName("investimento").value;
        valorDeAcao = document.getElementsByName("valorDeAcao").value;
        dividendosPagos = document.getElementsById("dividendosPagos").value;

    }
    document.querySelector('#comfirmar').onclick = comfirmar;

document.write(investimento);

console.log(investimento);