//global variables
const journalForm = document.getElementById('journal-form')
const journalBoard = document.getElementById('journal-board')
const pastEntry = document.getElementById('past-entry')
const previousMood = document.getElementById('previous-mood')
const previousJournal = document.getElementById('previous-journal')
const previousInspo = document.getElementById('previous-inspo')

//get and render journal entries from db.json to journal-board
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

            const para1 = document.getElementById('prior-date');
            const colorBox = document.getElementById("prior-color");
            const para2 = document.getElementById('prior-mood');
            const para3 = document.getElementById('priorj-entry');
            const para4 = document.getElementById('prior-inspir');

            para1.textContent = journal.date;
            colorBox.style.width = '250px';
            colorBox.style.height = '20px';
            colorBox.style.backgroundColor = journal.moodColor;
            colorBox.style.border = "1px solid black";
            colorBox.style.margin = "5px";
            colorBox.textContent = "";
            para2.textContent = journal.mood;
            para3.textContent = journal.entry;
            para4.textContent = journal.futureInspo;

            /*pastEntry.style.display = 'block'

            previousMood.textContent = journal.mood
            previousJournal.textContent = journal.entry
            previousInspo.textContent = journal.futureInspo*/

            let backgroundMoodColor = entryDiv.style.backgroundColor;
        
            // Select the body element
            let body = document.body;
          
            // Set the background color dynamically
            body.style.backgroundImage = 'linear-gradient(45deg, ' + backgroundMoodColor + ',  rgba(93, 83, 83, 0.813),  rgba(93, 83, 83, 0.813),  rgba(93, 83, 83, 0.813)';
        })
        // const changeBackground = () => {

        //     let backgroundMoodColor = entryDiv.style.backgroundColor;
        
        //     // Select the body element
        //     let body = document.body;
          
        //     // Set the background color dynamically
        //     body.style.backgroundImage = 'linear-gradient(45deg, ' + backgroundMoodColor + ', grey, black, black, black, black)';
        //   }
        
        //   changeBackground();

    })
})
.catch((error => console.error(error)))


//makes journal form work, POST to db.json, and render on DOM
journalForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const dateYearFirst = e.target.querySelector('#date').value

    //reformat date from YYYY-MM-DD to MM-DD-YY
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
        entry: e.target.querySelector('#journal').value,
        futureInspo: e.target.querySelector('#futureInspo').value
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
        
        //Creates clickable link to journal entry
        const newEntryText = document.createElement('a')

        newEntryText.setAttribute('href','')
        newEntryText.className = 'entry-text'
        newEntryText.textContent = newJournalEntry.date
        newEntryDiv.appendChild(newEntryText)
        
        //clear fields on submit 
        e.target.querySelector('#date').value = ''
        //e.target.querySelector('#mood-color').value = '#b91313'
        e.target.querySelector('#mood').value = ''
        e.target.querySelector('#journal').value = ''
        e.target.querySelector('#futureInspo').value = ''

        newEntryText.addEventListener('click', (e) => {
            e.preventDefault()

            const para1 = document.getElementById('prior-date');
            const colorBox = document.getElementById("prior-color");
            const para2 = document.getElementById('prior-mood');
            const para3 = document.getElementById('priorj-entry');
            const para4 = document.getElementById('prior-inspir');

            para1.textContent = newJournalEntry.date;
            colorBox.style.width = '250px';
            colorBox.style.height = '20px';
            colorBox.style.backgroundColor = newJournalEntry.moodColor;
            colorBox.style.border = "1px solid black";
            colorBox.style.margin = "5px";
            colorBox.textContent = "";
            para2.textContent = newJournalEntry.mood;
            para3.textContent = newJournalEntry.entry;
            para4.textContent = newJournalEntry.futureInspo;

         })
    //.catch((error => console.error(error)))
    })
})

//fetch and append quote from past self to DOM
fetch('http://localhost:3000/journals')
.then(res => {
    if (res.ok){
        return res.json()
    }else {
        console.error("Something went wrong...")
    }
})
.then((data) => {
    //gets array of futureInspo quotes
    const futureInspoQuotes = data.map(journal => journal.futureInspo)

    //generates a random index to select a quote
    const randomIndex = Math.floor(Math.random() * futureInspoQuotes.length)
    
    //selects a random futureInspo quote using the random index
    const randomFutureInspo = futureInspoQuotes[randomIndex]
    
    //renders the randomFutureInspo quote to the DOM
    const quoteContainer = document.getElementById('quote-container')
    console.log(quoteContainer)
    quoteContainer.textContent = `"${randomFutureInspo}"`;
  })
 .catch(error => console.error('Error loading data:', error));

  