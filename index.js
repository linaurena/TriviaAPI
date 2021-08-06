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
        question: "What is the name of the fictional town where Stranger Things is set?",
        answers: ["Hawkins", "Chatswin", "Happiness", "Eerie"],
        correct: ["Hawkins"]
    },
    {
        id: 7,
        question: "The American crime drama “Narcos” was filmed and set in which city?",
        answers: ["Colombia", "New Mexico", "Cuba", "Greece"],
        correct: ["Colombia"]
    },
    {
        id: 8,
        question: "Which series follows a family of adopted siblings who have superpowers?",
        answers: ["The Defenders", "The Umbrella Academy", "Raising Dion", "Space Force"],
        correct: ["The Umbrella Academy"]
    },
    {
        id: 9,
        question: "Where do Clay and Hannah work together in 13 Reasons Why?",
        answers: ["The Club House", "The Crestmont", "Monet's", "Blue Spot Liquor"],
        correct: ["The Crestmont"]
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
        question: "What is the name of the school in Sex Education?",
        answers: ["St. Jude’s", "Rosewood High", "Dillon High", "Moordale High"],
        correct: ["Moordale High"]
    },
    {
        id: 27,
        question: "Which of these is NOT the name of one of a character on Netflix's Stranger Things?",
        answers: ["Max Mayfield", "Will Biers", "Mike Wheeler", "Joe Lamb"],
        correct: ["Joe Lamb"]
    },
    {
        id: 28,
        question: "What's the surname of the family on the Netflix series, Ozark?",
        answers: ["Byrde", "Snell", "Bluth", "Navarro"],
        correct: ["Byrde"]
    },
    {
        id: 29,
        question: "Which The Office cast member had a regular role on Netflix's The OA?",
        answers: ["Angela Kinsey", "Kate Flannery", "Phyllis Smith", "Leslie David Baker"],
        correct: ["Phyllis Smith"]
    },
    {
        id: 30,
        question: "Christina Applegate and Linda Cardellini starred together in which series?",
        answers: ["Dead to Me", "You", "The Stranger", "Good Girls"],
        correct: ["Dead to Me"]
    },
    {
        id: 31,
        question: "In what U.S. state is Breaking Bad set?",
        answers: ["Texas", "Arizona", "New Mexico", "Utah"],
        correct: ["New Mexico"]
    },
    {
        id: 32,
        question: "Riverdale is based on which famous comics?",
        answers: ["Harris", "Archie", "Harvey", "Charlton"],
        correct: ["Archie"]
    },
    {
        id: 33,
        question: "What is the name of the interactive Black Mirror movie released in 2018?",
        answers: ["Bandersnatch", "Crocodile", "Arkangel", "Striking Vipers"],
        correct: ["Bandersnatch"]
    },
    {
        id: 34,
        question: "Who created Black Mirror?",
        answers: ["Vince Gilligan", "Charlie Brooker", "David Lynch", "Ricky Gervais"],
        correct: ["Charlie Brooker"]
    },
    {
        id: 35,
        question: "Which sauce is Rick famously obsessed with in Rick and Morty?",
        answers: ["Chimichurri", "Tabasco", "Siracha", "Szechaun"],
        correct: ["Szechaun"]
    }
]

let moviesData = [
    {
        id: 1,
        question: "Why is the main character of Tall Girl so upset?",
        answers: ["She's tall", "She's an only child", "She's a nerd girl", "She fell down a staircase"],
        correct: ["She's tall"]
    },
    {
        id: 2,
        question: "Jennifer Aniston and Adam Sandler starred in a murder mystery comedy film in 2019. What was the name of it?",
        answers: ["Who Dun It", "Murder Mystery", "The Bottom of This", "Let's be Detectives"],
        correct: ["Murder Mystery"]
    },
    {
        id: 3,
        question: "Fill in the blank for this movie title: The _____ Booth",
        answers: ["Phone", "Kissing", "Cafe", "Cotton Candy"],
        correct: ["Kissing"]
    },
    {
        id: 4,
        question: "Who is the lead star in Bird Box?",
        answers: ["Joey King", "Sandra Bullock", "Jennifer Aniston", "Jennifer Lopez"],
        correct: ["Sandra Bullock"]
    },
    {
        id: 5,
        question: "What's the name of Netflix's film about two police officers in a world where magic exists?",
        answers: ["Light", "Bright", "Glow", "Shine"],
        correct: ["Bright"]
    },
    {
        id: 6,
        question: "Which of these Netflix originals is not live action?",
        answers: ["Klaus", "Dolemite is my name", "Let it snow", "The Lovebirds"],
        correct: ["Klaus"]
    },
    {
        id: 7,
        question: "What movie doesn't take place in high school?",
        answers: ["To all the Boy's I've loved before", "Reality High", "The Kissing Booth", "A Christmas Prince"],
        correct: ["A Christmas Prince"]
    },
    {
        id: 8,
        question: "What film does Keanu Reeves star in?",
        answers: ["Secret Obsession", "Falling Inn Love", "Always be my Maybe", "Tall Girl"],
        correct: ["Always be my Maybe"]
    },
    {
        id: 9,
        question: "Which movie did Noah Centineo not star in?",
        answers: ["Candy Jar", "Sierra Burgess is a loser", "The perfect date", "To all the Boy's I've loved before"],
        correct: ["Candy Jar"]
    },
    {
        id: 10,
        question: "Which of these is not a Christmas movie?",
        answers: ["The Princess Switch", "Let it snow", "Unicorn Store", "The Holiday Calendar"],
        correct: ["Unicorn Store"]
    },
    {
        id: 11,
        question: "Which of these films is not a rom-com",
        answers: ["Alex Strangelove", "When We First Met", "Cam", "Set It Up"],
        correct: ["Cam"]
    },
    {
        id: 12,
        question: "What genre is the film To all the Boys I've loved before?",
        answers: ["Thriller", "Rom-com", "Mystery", "Crime drama"],
        correct: ["Rom-com"]
    },
    {
        id: 13,
        question: "How many Marvel films were released in 2020?",
        answers: ["None", "One", "Two", "Three"],
        correct: ["None"]
    },
    {
        id: 14,
        question: "Parasite was the 2020's big Oscar winner - what country is the film from?",
        answers: ["Japan", "South Korea", "China", "Philippines"],
        correct: ["South Korea"]
    },
    {
        id: 15,
        question: "What was the full title of the Harley Quinn solo film released in January of 2020?",
        answers: ["Birds of Prey (and the Fantabulous Emancipation of One Harley Quinn)", "Harley Quinn 2", "Harley Quinn Subsequent", "The real Quinn"],
        correct: ["Birds of Prey (and the Fantabulous Emancipation of One Harley Quinn)"]
    },
    {
        id: 16,
        question: "Which former American politician was caught in a compromising position in the new Borat film?",
        answers: ["Bill Clinton", "Dick Cheney", "Jhon F.Kenedy", "Rudy Giuliani"],
        correct: ["Rudy Giuliani"]
    },
    {
        id: 17,
        question: "Who played Neil, The Protagonist's sidekick, in Tenet?",
        answers: ["Tom Holland", "Ronald Klinn", "Robert Pattinson", "Timothee Chalamet"],
        correct: ["Robert Pattinson"]
    },
    {
        id: 18,
        question: "What year is the Wonder Woman sequel set in?",
        answers: ["1972", "1948", "1984", "1995"],
        correct: ["1984"]
    },
    {
        id: 19,
        question: "What is the name of Sherlock Holmes’ younger sister in the Netflix film based on Nancy Springer’s young-adult mystery series?",
        answers: ["Alone", "Enola", "Anne", "Ammie"],
        correct: ["Enola"]
    },
    {
        id: 20,
        question: "“What you can’t see can hurt you” is the tagline to which horror film?",
        answers: ["Hannibal", "Carrie", "Mama", "The Invisible Man"],
        correct: ["The Invisible Man"]
    },
    {
        id: 21,
        question: "Which Marvel star plays black-ops mercenary Tyler Rake in Netflix’s Extraction?",
        answers: ["Chris Hemsworth", "Chris Evans", "Luke Hemsworth", "Robert Downey, Jr."],
        correct: ["Chris Hemsworth"]
    },
    {
        id: 22,
        question: "Who had a UK number 1 single in February with the theme song from the James Bond film No Time To Die?",
        answers: ["Mariah Carey", "Celine Dion", "Billie Eilish", "Rihanna"],
        correct: ["Billie Eilish"]
    },
    {
        id: 23,
        question: "For what movie did Steven Spielberg win his first Oscar for Best Director?",
        answers: ["Schindler’s List", "The Post", "The Adventures of Tintin", "War Horse"],
        correct: ["Schindler’s List"]
    },
    {
        id: 24,
        question: "Mary Poppins is nanny to which family?",
        answers: ["The Flinn family", "The Banks family", "The Brown family", "The Mill family"],
        correct: ["The Banks family"]
    },
    {
        id: 25,
        question: "What was the name of the boat in Jaws?",
        answers: ["Deep", "Magnolia", "Destiny", "Orca"],
        correct: ["Orca"]
    },
    {
        id: 26,
        question: "Who was the first African American to win the Academy Award for best actor?",
        answers: ["Sidney Poitier", "Halle Berry", "Samuel L. Jackson", "Will Smith"],
        correct: ["Sidney Poitier"]
    },
    {
        id: 27,
        question: "Which film written, directed, and produced by James Cameron went on to become the highest-grossing film of its time?",
        answers: ["Lord of Rings", "Inception", "Titanic", "Piranha II"],
        correct: ["Titanic"]
    },
    {
        id: 28,
        question: "Which Disney princess dresses up as a man to save her father?",
        answers: ["Arial", "Merida", "Pocahontas", "Mulan"],
        correct: ["Mulan"]
    },
    {
        id: 29,
        question: "Who played the voice of Dory in the film Finding Dory?",
        answers: ["Kristen Bell", "Ellen DeGeneres", "Jen Taylor", "Ashley Johnson"],
        correct: ["Ellen DeGeneres"]
    },
    {
        id: 30,
        question: "Which actress won an Oscar for her first film role in Mary Poppins?",
        answers: ["Julie Andrews", "Emily Blunt", "Karen Dotrice", "Glynis Johns"],
        correct: ["Julie Andrews"]
    },
    {
        id: 31,
        question: "How old was Indiana Jones when his mother died?",
        answers: ["8", "15", "18", "12"],
        correct: ["12"]
    },
    {
        id: 32,
        question: "What is the name of Repunzal’s chameleon in Disney’s movie Tangled?",
        answers: ["Giugin", "Pascal", "Light", "Paco"],
        correct: ["Pascal"]
    },
    {
        id: 33,
        question: "Where was the entire trilogy of Lord of the Rings filmed?",
        answers: ["Switzerland", "Canada", "Iceland", "New Zealand"],
        correct: ["New Zealand"]
    },
    {
        id: 34,
        question: "How many movies are in the Jurassic Park series?",
        answers: ["5", "6", "2", "8"],
        correct: ["6"]
    },
    {
        id: 35,
        question: "How long did Forrest run in the film, Forrest Gump?",
        answers: ["78 hours", "1 month", "Two weeks", "3 years, 2 months, 14 days & 16 hours"],
        correct: ["3 years, 2 months, 14 days & 16 hours"]
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
