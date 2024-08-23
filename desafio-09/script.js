const fortuneCookie = document.querySelector('#fortune-cookie')
const btnGoBack = document.querySelector('#go-back')
const closedCookie = document.querySelector('.cookie')
const openedCookie = document.querySelector('.opened')

function toggleScreen() {
  closedCookie.classList.toggle('hidden')
  openedCookie.classList.toggle('hidden')
}

fortuneCookie.addEventListener('click', toggleScreen)
btnGoBack.addEventListener('click', toggleScreen)
