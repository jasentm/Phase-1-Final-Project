//global variables
const topRender = document.getElementById('top-render')
const randomQuoteDiv = document.getElementById('quote')


//used quotable api at https://github.com/lukePeavey/quotable?tab=readme-ov-file#get-random-quotes
//fetch and render a random quote upon load
fetch(`https://api.quotable.io/quotes/random`)
.then(response => {
    if(response.ok){
        return response.json()
    }else {
        console.error('Something went wrong...')
    }})
.then(res => {
    //create elements for quote content and author
    const randomQuoteContent = document.createElement('p')
    const randomQuoteAuthor = document.createElement('p')

    randomQuoteContent.textContent = `"${res[0].content}"`

    randomQuoteAuthor.textContent = `- ${res[0].author}` 

    randomQuoteDiv.appendChild(randomQuoteContent)
    randomQuoteDiv.appendChild(randomQuoteAuthor)
    

})