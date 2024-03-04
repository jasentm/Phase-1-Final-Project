//global variables
const journalForm = document.getElementById('journal-form')
const journalBoard = document.getElementById('journal-board')

//get and render journal entries from db.json
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
        //makes a div for each entry and give class name for CSS and id based on db id
        const entryDiv = document.createElement('div')

        entryDiv.className = 'entry-box'
        entryDiv.id = journal.id
        entryDiv.style.backgroundColor = journal.moodColor
        journalBoard.appendChild(entryDiv)
        
        //makes entry "link" to go inside of each entry box
        let entryText = document.createElement('a')

        entryText.setAttribute('href','')
        entryText.className = 'entry-text'
        entryText.textContent = journal.date
        entryDiv.appendChild(entryText)
        
        entryText.addEventListener('click', (e) => {
            e.preventDefault()
        })


    })
})
.catch((error => console.error(error)))

journalForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const dateYearFirst = e.target.querySelector('#date').value

    //reformat date
    const dateParts = dateYearFirst.split('-')
    const correctDate = `${dateParts[1]}-${dateParts[2]}-${dateParts[0].slice(-2)}`

    //POST fetch request
    fetch('http://localhost:3000/journals', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        date: correctDate,
        moodColor: e.target.querySelector('#mood-color').value,
        mood: e.target.querySelector('#mood').value,
        entry: e.target.querySelector('#journal').value
    }),
})
    .then(res => {
        if(res.ok){
            return res.json()
        }else {
            console.error('Something went wrong...')
        }
    })
    .then(newJournalEntry => {
        //create and append new entry onto DOM
        const newEntryDiv = document.createElement('div')

        newEntryDiv.className = 'entry-box'
        newEntryDiv.id = newJournalEntry.id
        newEntryDiv.style.backgroundColor = newJournalEntry.moodColor
        journalBoard.appendChild(newEntryDiv)

        const newEntryText = document.createElement('a')

        newEntryText.setAttribute('href','')
        newEntryText.className = 'entry-text'
        newEntryText.textContent = newJournalEntry.date
        newEntryDiv.appendChild(newEntryText)
        
        newEntryText.addEventListener('click', (e) => {
            e.preventDefault()
        })


    })
    .catch((error => console.error(error)))
})
