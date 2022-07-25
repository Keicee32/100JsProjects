let Quotes = [
    {
        Quote: 'He that is down needs fear no fall',
        Author: 'Egekenze Kelechi'
    }, 
    {
        Quote: 'Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance',
        Author: "Charles Lindbergh"
    },
    {
        Quote: 'When you\'re doing something that is right, you just do it and take care... Someone has to do this',
        Author: 'Alice Nkom'
    }
]

let btn = document.getElementById('btn') 

btn.addEventListener('click', () => {
    let randomQuotes = Math.floor(Math.random() * Quotes.length)
    document.getElementById('quote').textContent = Quotes[randomQuotes].Quote
    document.querySelector('.author').textContent = Quotes[randomQuotes].Author
})