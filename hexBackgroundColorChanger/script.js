let btn = document.getElementById('btn')
let hexValue = document.getElementById('hex-value')
let array = ['a', 'b', 'c', 'd', 'e', 'f', 1, 2, 3, 4, 5, 6, 7, 8, 9]
let randomValues = Math.random() * 6
console.log(randomValues)

btn.addEventListener('click', () => {
    let random = ""
    for (let i = 0; i < 6; i++) {
        let randomNumber = Math.floor(Math.random() * array.length)
        // console.log(randomNumber)
        random += array[randomNumber]
    }
    let hexValues = "#" + random
    document.querySelector('body').style.background = hexValues
    hexValue.textContent = hexValues
})