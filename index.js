const express = require('express')
const app = express()
// const http = require('http') // CommonJS - Way to charge modules
// import http from 'http'      // ECMAScript Modules - This type has less documentation but also is used

let seriesData = [
    {
        id: 1,
        question: "Where did the show “The Wire” take place?",
        answers: ["Alabama", "Louisiana", "Baltimore", "North Carolina"],
        correct: ["Baltimore"]
    },
    {
        id: 2,
        question: "What show involved Cylons as evil robots?",
        answers: ["Battlestar Galactica", "Another Life", "Travelers", "The 100"],
        correct: ["Battlestar Galactica"]
    },
    {
        id: 3,
        question: "Family guy took place in which state?",
        answers: ["Georgia", "Rhode Island", "Whashington", "Virginia"],
        correct: ["Rhode Island"]
    },
    {
        id: 4,
        question: "Which American drama first reacted to 9/11?",
        answers: ["Rescue Me", "Third Watch", "The Looming Tower", "The West Wing"],
        correct: ["The West Wing"]
    },
    {
        id: 5,
        question: "Who was the youngest male winner of American Idol?",
        answers: ["Phillip Phillips", "Scott McCreery", "Caleb Johnson", "Kris Allen"],
        correct: ["Scott McCreery"]
    },
    {
        id: 6,
        question: "What sports game featured the first TV advertisement?",
        answers: ["Lakers and Troyans", "Clippers and Kings", "Dodgers and Phillies", "Cobras and Portland"],
        correct: ["Dodgers and Phillies"]
    },
    {
        id: 7,
        question: "The American crime drama “Narcos” was filmed and set in which city?",
        answers: ["Colombia", "New Mexico", "Cuba", "Greece"],
        correct: ["Colombia"]
    },
    {
        id: 8,
        question: "Who won Jeopardy in 2004 and took home 2.5 million dollars?",
        answers: ["Joy Forrester", "Todd Wilson", "Ken Jennings", "Lorraine Stalberg"],
        correct: ["Ken Jennings"]
    },
    {
        id: 9,
        question: "What was the subject of the first-ever advertisement on TV?",
        answers: ["Bulova Watches", "FedEx", "M & M", "Pizza Hut"],
        correct: ["Bulova Watches"]
    },
    {
        id: 10,
        question: "What character was the President of the USA in “The West Wing”?",
        answers: ["Leo MacGarry", "Matt Santos", "Josh Lyman", "Josiah Bartlet"],
        correct: ["Josiah Bartlet"]
    },
    {
        id: 11,
        question: "What famous 1968 Star Trek episode included a kiss between Captain Kirk and Uhura?",
        answers: ["A Taste of Armageddon", "Obsession", "Plato’s Stepchildren", "Day of the Dove"],
        correct: ["Plato’s Stepchildren"]
    },
    {
        id: 12,
        question: "Which famous TV series featured a reference or picture of Superman in every episode?",
        answers: ["The Umbrella Academy", "Heroes", "Utopía", "Seinfeld"],
        correct: ["Seinfeld"]
    },
    {
        id: 13,
        question: "What actor portrayed Chandler’s father on Friends?",
        answers: ["Kathleen Turner", "David Schwimmer", "Courteney Cox", "Paul Rudd"],
        correct: ["Kathleen Turner"]
    },
    {
        id: 14,
        question: "What series was the first television drama in American history?",
        answers: ["The Wonder Years", "The Queen’s Messenger", "The Love Boat", "Alf"],
        correct: ["The Queen’s Messenger"]
    },
    {
        id: 15,
        question: "Samantha twitched her nose for magic practice in which TV drama?",
        answers: ["Peter Pan", "Witches", "Bewitched", "Merlin"],
        correct: ["Bewitched"]
    },
    {
        id: 16,
        question: "What is the name of the monkey who belongs to Marcel in “Friends”?",
        answers: ["Katie", "Mandy", "Billie", "Frank"],
        correct: ["Katie"]
    },
    {
        id: 17,
        question: "What is the last name of the leading family characters in The Cosby Show?",
        answers: ["Cosby", "Huxtable", "Brown", "Duff"],
        correct: ["Huxtable"]
    },
    {
        id: 18,
        question: "Which TV series uses the song Second Time Around as their theme song?",
        answers: ["The Ranch", "Fuller House", "Step by Step", "Smart Guy"],
        correct: ["Step by Step"]
    },
    {
        id: 19,
        question: "In the first episodes of Friends, Monica and Rachel live in what apartment number?",
        answers: ["7", "5", "8", "24"],
        correct: ["5"]
    },
    {
        id: 20,
        question: "Where did the Simpson family live?",
        answers: ["Sprintfiel", "Sbringfelt", "Springfield", "Sprindfild"],
        correct: ["Springfield"]
    },
    {
        id: 21,
        question: "What class of planet is earth in the Star Trek universe?",
        answers: ["M Class", "L Class", "D Class", "J Class"],
        correct: ["M Class"]
    },
    {
        id: 22,
        question: "What actor in The Big Bang Theory has a real-life neuroscience Ph.D.?",
        answers: ["Laurie Metcalf", "Jim Parsons", "Mayim Bialik", "Brian George"],
        correct: ["Mayim Bialik"]
    },
    {
        id: 23,
        question: "What actor plays Frank Reynolds in It’s Always Sunny in Philadelphia?",
        answers: ["Danny Devito", "Charlie Day", "Jimmi Simpson", "Rob McElhenney"],
        correct: ["Danny Devito"]
    },
    {
        id: 24,
        question: "What are adult fans of the My Little Pony tv series called?",
        answers: ["Horsies", "Blossomies", "Littlenies", "Bronies"],
        correct: ["Bronies"]
    },
    {
        id: 25,
        question: "Who played The Penguin in the original Batman TV series?",
        answers: ["Cesar Romero", "Alan Napier", "Burt Ward", "Burgess Meredith"],
        correct: ["Burgess Meredith"]
    },
    {
        id: 26,
        question: "Who played The Penguin in the original Batman TV series?",
        answers: ["Cesar Romero", "Alan Napier", "Burt Ward", "Burgess Meredith"],
        correct: ["Burgess Meredith"]
    }
]

let moviesData = [
    {
        id: 1,
        question: "Waiting",
        answers: ["Abc", "Def", "Ghi", "Jkl"],
        correct: ["Def"]
    }
]

// const app = http.createServer((request, response) => {
//     response.writeHead(200, { 'Content-Type': 'application/json'})
//     response.end(JSON.stringify(triviaData))
// })

app.get('/', (request, response) => {
    response.send('<h1>Trivia API</h1>')
})
app.get('/seriesData', (request, response) => {
    response.json(seriesData)
})
app.get('/moviesData', (request, response) => {
    response.json(moviesData)
})

app.get('/seriesData/:id', (request, response) => {
    const id = Number(request.params.id)
    const seriesQuestion = seriesData.find(seriesData => seriesData.id === id)
    response.json(seriesQuestion)

    if (seriesQuestion) {
        response.json(seriesQuestion)
    } else {
        response.status(404).end()
    }
})

app.get('/moviesData/:id', (request, response) => {
    const id = Number(request.params.id)
    const moviesQuestion = moviesData.find(moviesData => moviesData.id === id)
    response.json(moviesQuestion)

    if (moviesQuestion) {
        response.json(moviesQuestion)
    } else {
        response.status(404).end()
    }
})

const PORT = 3001
app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`)
})
