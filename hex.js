const hex = [0,1,2,3,4,5,6,7,8,9, "A", "B", "C", "D", "E", "F"]

const color = document.querySelector('#color_Body')
const btn = document.querySelector('#btn')

btn.addEventListener('click', () => {
    let hexe = "#"
    
    for(let i = 0; i < 6; i++) {
        let hexColor = getRandomBgc()
        hexe += hex[hexColor]
    }

    document.body.style.backgroundColor = hexe
    color.textContent = '"'+hexe+'"'
})

function getRandomBgc() {
    return Math.floor(Math.random() * hex.length)
}