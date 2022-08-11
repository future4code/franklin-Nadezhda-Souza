//////////////////////// EXERCÍCIO 2 //////////////////////////////////////////////////////////////
// Crie uma aplicação Node que recebe uma string representando uma operação matemática e dois valores
// numéricos. O retorno deverá ser o resultado da operação selecionada utilizando os 2 valores fornecidos.

const calculadora = (operação, number1, number2) => {
    switch (operação) {
        case 'add':
            console.log(number1 + number2);
            break;
        case 'sub':
            console.log(number1 - number2);
            break;
        case 'mult':
            console.log(number1 * number2);
            break;
        case 'div':
            console.log(number1 / number2);
            break;
        default:
            console.log('Deu ruim');
    }
}

const operação = process.argv[2];
const number1 = Number(process.argv[3]);
const number2 = Number(process.argv[4]);

calculadora(operação, number1, number2);