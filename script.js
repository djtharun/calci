const digits = document.querySelector('#digits')
const screen = document.querySelector('#screen')
screen.textContent = 0
screen.style.justifyContent = 'flex-end'
screen.style.alignItems = 'flex-end'
digits.addEventListener('click',(event) => {
    screen.textContent = event.target.textContent
})