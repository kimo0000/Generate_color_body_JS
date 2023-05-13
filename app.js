const colors = ["red", "green", "yellow", "blue", "purple", "brown"]

const color = document.querySelector('#color_Body')
const btn = document.querySelector('#btn')

btn.addEventListener('click', () => {
    randomColor = getRandomBgc()
    document.body.style.backgroundColor = colors[randomColor]
    color.textContent = '"'+colors[randomColor]+'"'
})

function getRandomBgc() {
    return Math.floor(Math.random() * colors.length)
}