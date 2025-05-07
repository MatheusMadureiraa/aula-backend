// Exercícios de JavaScript - Revisão

// 1. Declare uma variável usando "let" com o nome "nome" e atribua a ela seu nome.  
let nome = "Matheus Madureira";

// 2. Declare uma variável "idade" com valor 25 usando "var".  
var idade = 25;

// 3. Tente redeclarar a variável "idade" usando "var" com outro valor.  
var idade = 30;

// 4. Tente redeclarar uma variável "nome" com "let" no mesmo escopo. O que acontece?  
// let nome = "Outro Nome"; isso causará um erro, pois "let" não permite redeclaração no mesmo escopo.

// 5. Escreva um código que exiba "Olá, mundo!" usando alert().  
alert("Olá, mundo!");

// 6. Crie um script que exiba seu nome no console usando console.log().  
console.log("Matheus Madureira\n");

// 7. Escreva uma estrutura condicional que verifique se uma variável "nota" é maior ou igual a 7.  
var nota = 8;
if(nota >= 7) console.log("Aprovado\n");

else console.log("Reprovado\n"); 

// 8. Crie uma estrutura if/else que exiba "Par" se o número for par e "Ímpar" caso contrário. 
var num = 8;
if(num % 2 === 0) console.log("Par\n");

else console.log("Ímpar\n");

// 9. Declare duas variáveis e some seus valores, exibindo o resultado com console.log().
let num1 = 5;
let num2 = 10;
let resultado = num1 + num2;
console.log(resultado);

// 10. Crie uma função que receba dois números e retorne a multiplicação deles.
function multiplicação(num1, num2) {
    return num1 * num2;
}

// 11. Implemente uma função que use async/await e aguarde 1 segundo antes de mostrar "Pronto".
async function mostrarPronto() {
    console.log("Aguardando...\n");
    await setTimeout(() => {}, 1000);
    console.log("Pronto\n");
}

// 12. Declare uma variável "x" com valor 10 e incremente seu valor em 5.
var x = 10;
x += 5;

// 13. Escreva um código que exiba "Acesso permitido" se a idade for maior ou igual a 18.
let idade = 20;
function verificarIdade(idade) {
    idade >= 18 ? console.log("Acesso permitido\n") : console.log("Acesso negado\n");
}

// 14. Utilize o operador ternário para verificar se um número é positivo ou negativo.
num1 = 1;
num1 > 0 ? console.log("Positivo\n") : console.log("Negativo\n");

// 15. Crie um array com 3 nomes e exiba o segundo nome.
var array = ["Matheus", "Kauan", "Lucas"];
console.log(array[1]);  

// 16. Adicione um nome ao final de um array usando push().
array.push("Joaozinho");

// 17. Remova o primeiro elemento de um array usando shift().
array.shift();

// 18. Declare um objeto com as propriedades nome e idade.
var objeto = {
    nome: "Matheus",
    idade: "19"
}

// 19. Acesse a propriedade "idade" de um objeto e exiba no console.
console.log(objeto.idade);

// 20. Crie um loop for que conte de 1 a 5 e exiba os números.
for (var i=1; i < 6; i++) {
    console.log(i);
}

// 21. Crie uma função que exiba "Olá, [nome]" no console.  
function exibirOlaNome(array){
    console.log(`Olá, ${array[0]}`);
}

// 22. Implemente uma Promise que resolve com "Sucesso" após 2 segundos.  
await new Promise(resolve => setTimeout(() => resolve("Sucesso"), 2000))

// 23. Utilize setTimeout para exibir "Tempo esgotado" após 3 segundos.  
setTimeout(() => {
    console.log("Tempo esgotado\n");
}, 3000);

// 24. Crie um script que exiba "Bem-vindo!" somente se uma variável "logado" for true.  
var logado = true;
logado === true ? console.log("Bem-vindo!\n") : console.log("Acesso negado\n");

// 25. Use typeof para verificar o tipo de uma variável "nome".  
console.log(typeof(nome));

// 26. Crie um script que pergunte ao usuário o nome com prompt() e exiba com alert(). 
nome = prompt("Qual seu nome?");
alert(`Olá, ${nome}`);

// 27. Use template string para exibir "Meu nome é [nome] e tenho [idade] anos".  
console.log(`Meu nome é ${nome} e tenho ${idade} anos\n`);

// 28. Declare uma constante com valor 100 e tente alterá-la.  
const value = 100;
// value = 1; Deu erro, pois constantes não podem ser alteradas.

// 29. Crie um código que simule login: se usuário for "admin" e senha "123", exiba "Acesso liberado".  
var usuario = "admin";
var senha = "123";

if(usuario === "admin" && senha === "123") {
    console.log("Acesso liberado\n");
}

// 30. Crie uma função que receba idade e retorne "maior de idade" ou "menor de idade".
function verificarMaiorIdade(idade) {
    return idade >= 18 ? "Maior de idade" : "Menor de idade";
}