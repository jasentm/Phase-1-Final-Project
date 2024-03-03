//global variables
fetch('http://localhost:3000/journals')
.then(res => {
    if (res.ok){
        return res.json()
    }else {
        console.error("Something went wrong...")
    }
})
.then((journalData) => {
    journalData.forEach((journal) => {
        let entry = document.createElement('div')
        let journalBoard = document.getElementById('journal-board')

        entry.className = 'entry-box'
        entry.textContent = journal.date

        journalBoard.appendChild(entry)


    })
})
.catch((error => console.error(error)))