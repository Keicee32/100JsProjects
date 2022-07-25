let btn = document.getElementById('btn')
let input = document.getElementById('input')


btn.addEventListener('click', () => {
    let inputValue = input.value.trim() 

    if (inputValue !== "") {
        document.getElementById('message-el').textContent = inputValue
        document.getElementById('error').textContent = ''
    } else {
        document.getElementById('error').textContent = 'This cannot be empty'
        document.getElementById('error').style.fontSize = '10px'
        // document.getElementById('error').textContent = ''
    }
    console.log(inputValue)
})