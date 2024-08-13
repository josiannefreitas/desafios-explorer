const students = [
  {
    name: 'Cláudio',
    firstScore: 8,
    secondScore: 7
  },
  {
    name: 'Jonas',
    firstScore: 3,
    secondScore: 7
  },
  {
    name: 'Luíza',
    firstScore: 6,
    secondScore: 7
  },
  {
    name: 'Sara',
    firstScore: 10,
    secondScore: 6
  }
]

function average(firstScore, secondScore) {
  return ((firstScore + secondScore) / 2).toFixed(1)
}


function printStudentAverage(student) {
  let totalScore = average(student.firstScore, student.secondScore)

  console.log(totalScore)

  if(totalScore >= 7) {
    return `
      ${student.name} sua média é ${totalScore}.
      Parabéns pela aprovação, ${student.name}!
    `
  } else {
    return `
      ${student.name} sua média é ${totalScore}.
      Infelizmente, você não passou. Tente novamente, ${student.name}!
    `
  }
}

for (let student of students) {
  let studentMessage = printStudentAverage(student)
  alert(studentMessage)
}
