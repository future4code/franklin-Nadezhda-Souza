//////////////////////// EXERCÍCIO 1 //////////////////////////////////////////////////////////////
// a) Como fazemos para acessar os parâmetros passados na linha de comando para o Node?
//para acessar os parâmetros passados na linha de comando para o Node utiliza-se o process.argv[]
//que consiste em um array de strings que são os argumentos para que o processo seja executado. 
//Os dois primeiros argumentos são fixos, e a partir do process.argv[2] pode-se atribuir valores.

//b) Crie um programa que receba seu nome e sua idade. Após receber estes valores, imprima no 
//console uma mensagem que siga a seguinte estrutura: "Olá, (Nome)! Você tem (sua idade) anos."
const nome = process.argv[2];
const idade = process.argv[3];
console.log(`Olá, ${nome}! Você tem ${idade} anos.`);
//no console: npm start Karine 23
//exibição: Olá, Karine! Você tem 23 anos.

//c) Altere o programa acima para que mostre também a sua idade daqui a sete anos.
const novaIdade = Number(idade) + 7;
console.log(`Em sete anos você terá ${novaIdade} anos.`);
//saída: Em sete anos você terá 30 anos.