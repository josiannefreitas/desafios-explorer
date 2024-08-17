// 1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
alert('Hello World!')

// 2.Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
let firstNumber1 = 8
let secondNumber1 = 5

let sum = firstNumber1 + secondNumber1

alert(sum)

// 3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
// 💡 Para saber o tipo de dado você pode usar o operador `typeof`
let entry1 = 'Hello World!'
let type1 = typeof entry1
let message1

if (type1 == 'number') {
  message1 = 'É um número'
} else {
  message1 = 'Não é um número'
}

alert(message1)

// 4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
let entry2 = 'Hello World!'
let type2 = typeof entry2
let message2

if (type2 == 'string') {
  message2 = 'É uma string'
} else {
  message2 = 'Não é uma string'
}

alert(message2)

// 5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
let entry3 = "Hello World!"
let type3 = typeof entry3
let message3

if (type3 == 'boolean') {
  message3 = 'É um booleano'
} else {
  message3 = 'Não é um booleano'
}

alert(message3)

// 6.Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
let firstNumber2 = 9
let secondNumber2 = 2
let sub = firstNumber2 - secondNumber2

alert(sub)

// 7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
let firstNumber3 = 8
let secondNumber3 = 4
let mul = firstNumber3 * secondNumber3

alert(mul)

// 8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
let firstNumber4 = 465
let secondNumber4 = 5
let div = firstNumber4 / secondNumber4

alert(div)

// 9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".

let number1 = 58
let message4

if ((number1 % 2) === 0) {
  message4 = 'É um número par'
} else {
  message4 = 'Não é um número par'
}

alert(message4)

// 10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
let number2 = 6
let message5

if ((number2 % 2) !== 0) {
  message5 = 'É um número ímpar'
} else {
  message5 = 'Não é um número ímpar'
}
