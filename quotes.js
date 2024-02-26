
fetch(`https://api.quotable.io/quotes/random`)
.then(response => response.json())
.then(res => console.log(res))