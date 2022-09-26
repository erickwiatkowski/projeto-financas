let nome = prompt("insira seu nome!!!");
let idade = parseInt(prompt("insira sua idade"));
let desejaCalcular = confirm("deseja proseguir?");
var investimento = parseFloat(prompt("insira o investimento"));
var valorDeAcao = parseFloat(prompt("insira o valor de ação"));


if (desejaCalcular != true){
    adeus();
};

let adeus = function(){
    alert("Até a proxima");
};

if (desejaCalcular != false){
    setTimeout(function(){

    },1000);

    let numeroDeAcoes = function(){
        return investimento/valorDeAcao;
    };
document.write(numeroDeAcoes());
































};