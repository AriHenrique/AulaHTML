document.write("<h1>Estamos executando o script.js</h1>");
document.write("Este script está sendo chamado no HEAD");
console.log("Primeiro");
console.log("Segundo");

// Comentario de uma linha
// ctrl + ;
/* alt+shift+a */

// tipagem fraca

var teste = 1;
document.write("<hr>O Valor da variável teste é " + teste + "</hr>");
teste = 'joao';
document.write("<hr>O valor da variável teste agora é " + teste + "</hr>")

// Variavel global - cria sem necessidade de declaracao

nome = 'joao';
console.log(nome.ToUpperCase())

// Formas de declaracao de variaveis 
var v1 = 5.25;
let v2 = null;
const v3 = "teste";

console.log(typeof(v1));
console.log(typeof(v2));
console.log(typeof(v3));
console.log(typeof NaN); // tipo number
console.log(typeof null); // tipo number
console.log(typeof +Infinity);
const numero = "1";
// Operadores de comparacao

console.log(numero == 1 );
console.log(numero === 1 );