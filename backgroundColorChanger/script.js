let btn = document.getElementById('btn')
let array = ['red', 'blue', 'green', 'yellow', 'pink', 'lightblue', 'indigo', 'fuschia']

btn.addEventListener('click', (e) => {
    let randomColor = Math.floor(Math.random() * array.length)
    document.querySelector('body').style.background = array[randomColor]
    console.log(array[randomColor])
})
