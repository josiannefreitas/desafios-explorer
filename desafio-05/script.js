let firstNumber, secondNumber;

firstNumber = Number(prompt('Digite o primeiro número:'))
secondNumber = Number(prompt('Digite o segundo número:'))

// somar os números
let sum = firstNumber + secondNumber
alert(`A soma de ${firstNumber} e ${secondNumber} é ${sum}`)

// subtrair os números
let sub = firstNumber - secondNumber
alert(`A diferença entre ${firstNumber} e ${secondNumber} é ${sub}`)

// multiplicar os números
let mul = firstNumber * secondNumber
alert(`A multiplicação entre ${firstNumber} e ${secondNumber} é ${mul}`)

// dividir os números
let div = firstNumber / secondNumber
alert(`A divisão entre ${firstNumber} e ${secondNumber} é ${div}`)

// resto da divisão dos números
let res = firstNumber % secondNumber
alert(`O resto da divisão entre ${firstNumber} e ${secondNumber} é ${res}`)

// verificar se a soma dos números é par - even
let even;
if(sum % 2 === 0) {
  even = alert('A soma dos dois números é par!')
} else {
  even = alert('A soma dos dois números é impar!')
}

// verificar se os números são iguais - equals
let equals;
if(firstNumber == secondNumber) {
  equals = alert('Os dois números são iguais!')
} else {
  equals = alert('Os dois números são diferentes!')
}
