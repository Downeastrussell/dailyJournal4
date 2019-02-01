// const allEntries = [];

// const journalEntry1 = {
//     date:"1/7/19" ,
//     subjectsCovered:["curriculum", "HTML & CSS review"],
//     text:"Today was the first day of class, it was a good day", 
//     mood: "entergetic"
// }

// const journalEntry2 = {
//     date: "1/8/19" ,
//     subjectsCovered:["loops", "conditionals"],
//     text:"It was the second day of class, it was even better" ,
//     mood:"happy" 
// }


// const journalEntry3 = {
//     date: "1/9/19" ,
//     subjectsCovered:["functions", "components"],
//     text: "It was the third day of class, where am i?!" ,
//     mood: "sad"
// }

// const journalEntry4 = {
//     date: "1/10/19",
//     subjectsCovered:["The DOM?!?!"],
//     text: "it was the 4th day of class, what have i gotten myself into", 
//     mood:"i feel like a lama" 
// }


// allEntries.push(journalEntry1)
// allEntries.push(journalEntry2)
// allEntries.push(journalEntry3)
// allEntries.push(journalEntry4)

// console.log(allEntries);


// document.querySelector("#submitButton").addEventListener("click", (event) => {
//     const printTextArea = document.querySelector("#journalEntry").value
//     console.log(printTextArea);

//     const printDate = document.querySelector("#journalDate").value
//     console.log(printDate)

//     const printSubjectsCovered = document.querySelector("#journalSubjects").value
//     console.log(printSubjectsCovered)

//     const printJournalValue = document.querySelector("#journalValue").value
//     console.log(printJournalValue)

//    const print = `<h1>Date:${printDate}</h1><h2>Entry: ${printTextArea}</h2><h2>Subjects Covered: ${printSubjectsCovered}</h2><h2>Mood: ${printJournalValue}`
//     console.log(print)

//     document.querySelector("#outputArea").innerHTML = print

// })

function makeJournalEntryComponent (arrayOfObjects){
    for(i=0; i<arrayOfObjects.length; i++){
    print = `<h1>Date:${arrayOfObjects[i].date}</h1><h2>Entry: ${arrayOfObjects[i].text}</h2><h2>Subjects Covered: ${arrayOfObjects[i].subjectsCovered}</h2><h2>Mood: ${arrayOfObjects[i].mood}`

    document.querySelector("#outputArea").innerHTML += print
    console.log(print)
    }
}

// makeJournalEntryComponent(allEntries);



fetch('http://localhost:3000/journalEntries')
    .then(entries => entries.json())
    .then(parsedEntries => {

        console.log(parsedEntries)
        makeJournalEntryComponent(parsedEntries);
        
    })

    













