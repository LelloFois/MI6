const button = document.querySelector('.nav-control button')
const navPanel = document.querySelector('.nav-panel')

button.addEventListener('click', () => {
    navPanel.classList.toggle('hidden')
    button.textContent = button.textContent == '>' ? '<' : '>'
})