const topRender = document.getElementById('top-render')
const randomQuoteDiv = document.getElementById('id-ph2')

fetch(`https://api.quotable.io/quotes/random`)
.then(response => {
    if(response.ok){
        return response.json()
    }else {
        console.error('Something went wrong...')
    }})
.then(res => {
    const randomQuoteContent = document.createElement('p')
    const randomQuoteAuthor = document.createElement('p')

    randomQuoteContent.textContent = `"${res[0].content}"`

    randomQuoteAuthor.textContent = `- ${res[0].author}` 

    randomQuoteDiv.appendChild(randomQuoteContent)
    randomQuoteDiv.appendChild(randomQuoteAuthor)
    

})