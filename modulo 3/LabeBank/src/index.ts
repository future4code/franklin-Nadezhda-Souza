function criarConta (nome: string, cpf: number, dataNascimento: {day: number, month: number, year: number}): any{ //a data de nascimento será um objeto com dia, mes e ano
    //rever a parte da data de nascimento, talvez substituir por uma string e fazer a conversão depois
    const idade: number = 2022 - dataNascimento.year
    if(idade > 18){
        const conta: {
            name: string, 
            cpf: number, 
            birthDate: {day: number, month: number, year: number}, 
            balance: number, 
            statement:[{
                value: number,
                date: {day: number, month: number, year: number},
                description: string
            }] 
        } = {
            name: nome,
            cpf: cpf,
            birthDate: dataNascimento,
            balance: 0, //saldo
            statement: [{ //extrato
                value: 0,
                date: undefined,
                description: ''
            }]
        }

        return(conta);
    } else {
        return(console.log('Erro na criação da conta, idade minima não atingida'));
    }
}

function pegarSaldo(nome: string, cpf: number, contas: any[]): any{
    let saldo: any
    contas.map((conta) => {
        if(nome === conta.name && cpf === conta.cpf){
            saldo = conta.balance;
        } else{
            saldo = 'Conta não encontrada!';
        }
    })
    return(saldo);
    //problemas: se a pessoa estiver cadastrada com o mesmo nome e mesmo cpf mais de uma vez irá retornar somente o ultimo registro
}

const contas: any[] = []; //criando um array que receberá as contas do sistema;

const novaConta = criarConta('Karine', 123456, {day: 15, month: 1, year: 1999}); //criar a conta com os dados fornecidos
contas.push(novaConta);
console.log(contas);
console.log('O saldo é: '+ pegarSaldo('Karine', 123456, contas));