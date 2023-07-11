'use strict'

// QUESTIONS

const questions = {

    question1: {
        question: "This character wears a signature red cap and blue overalls and is known for his heroic adventures in the Mushroom Kingdom.",
        answer: "Mario",
        type: "nintendo"
    },
    question2: {
        question: "This character is a green-clad hero who wields a sword and fights against evil to protect the land of Hyrule.",
        answer: "Link",
        type: "nintendo"
    },
    question3: {
        question: "This pink puffball has a voracious appetite and can inhale enemies to gain their powers.",
        answer: "Kirby",
        type: "nintendo"
    },
    question4: {
        question: "This yellow, electric mouse-like creature is the mascot of the Pokémon franchise and has the ability to evolve into different forms.",
        answer: "Pikachu",
        type: "pokemon"
    },
    question5: {
        question: "This character is a skilled bounty hunter who travels the galaxy in her sleek armor, known for her agility and resourcefulness.",
        answer: "Samus",
        type: "nintendo"
    },
    question6: {
        question: "A bounty hunter equipped with advanced armor, this character travels the galaxy and takes down intergalactic threats.",
        answer: "Samus",
        type: "nintendo"
    },
    question7: {
        question: "This courageous gorilla with a tie embarks on adventures and battles against the villainous King K. Rool.",
        answer: "Donkey Kong",
        type: "nintendo"
    },
    question8: {
        question: "With a green cap and a talent for gardening, this character protects the land from invading forces.",
        answer: "Pikmin",
        type: "nintendo"
    },
    question9: {
        question: "This adorable dog is the mayor's assistant in a town full of anthropomorphic animals.",
        answer: "Isabelle",
        type: "nintendo"
    },
    question10: {
        question: "A mischievous and playful ghost, known for haunting a mansion and capturing Mario's brother.",
        answer: "King Boo",
        type: "nintendo"
    },
    question11: {
        question: "A skilled racer with a red cap and a mustache, always ready to hit the tracks in his iconic kart.",
        answer: "Mario",
        type: "nintendo"
    },
    question12: {
        question: "A charming princess from the Mushroom Kingdom, often finding herself in need of rescuing.",
        answer: "Princess Peach",
        type: "nintendo"
    },
    question13: {
        question: "This dinosaur-like creature with a long tongue and egg-spitting ability is a helpful ally to Mario on his adventures.",
        answer: "Yoshi",
        type: "nintendo"
    },
    question14: {
        question: "A mischievous and quick-witted raccoon known for his ability to fly with his magical tail.",
        answer: "Tanooki Mario",
        type: "nintendo"
    },
    question15: {
        question: "The guardian of the cosmos and a powerful ally in the Super Mario Galaxy games.",
        answer: "Rosalina",
        type: "nintendo"
    },
    question16: {
        question: "The electric-type Pokémon and mascot of the Pokémon franchise, known for its lightning attacks.",
        answer: "Pikachu",
        type: "pokemon"
    },
    question17: {
        question: "The cute and round Pokémon with a lullaby that puts opponents to sleep in the Super Smash Bros. series.",
        answer: "Jigglypuff",
        type: "pokemon"
    },
    question18: {
        question: "A powerful aura-wielding Pokémon with incredible fighting abilities.",
        answer: "Lucario",
        type: "pokemon"
    },
    question19: {
        question: "The leader of the Star Fox team, an ace pilot skilled in aerial combat.",
        answer: "Fox McCloud",
        type: "nintendo"
    },
    question20: {
        question: "A legendary F-Zero racer and bounty hunter, known for his signature move, the Falcon Punch.",
        answer: "Captain Falcon",
        type: "nintendo"
    },
    question21: {
        question: "The adorable pink puffball who can inhale enemies and copy their abilities, saving Dream Land from evil.",
        answer: "Kirby",
        type: "nintendo"
    },
    question22: {
        question: "A masked swordsman and rival to Kirby, known for his swift and powerful sword techniques.",
        answer: "Meta Knight",
        type: "nintendo"
    },
    question23: {
        question: "The self-proclaimed king of Dream Land, often causing trouble for Kirby but sometimes aiding him.",
        answer: "King Dedede",
        type: "nintendo"
    },
    question24: {
        question: "The courageous angel and captain of Palutena's army, fighting against the forces of darkness in Kid Icarus.",
        answer: "Pit",
        type: "nintendo"
    },
    question25: {
        question: "The goddess of light and ruler of Angel Land, providing guidance and aid to Pit.",
        answer: "Palutena",
        type: "nintendo"
    },
    question26: {
        question: "The young psychic boy from EarthBound, embarking on a journey to save the world from evil.",
        answer: "Ness",
        type: "nintendo"
    },
    question27: {
        question: "The friendly and hardworking assistant in the Animal Crossing series, helping you manage your town.",
        answer: "Isabelle",
        type: "nintendo"
    },
    question28: {
        question: "The customizable character in Animal Crossing, living a peaceful life and interacting with animal neighbors.",
        answer: "Villager",
        type: "nintendo"
    },
    question29: {
        question: "The humanoid squid characters, engaging in colorful ink-based battles.",
        answer: "Inkling",
        type: "nintendo"
    },
    question30: {
        question: "The intrepid space explorer from the Pikmin series, commanding a group of plant-like creatures to solve puzzles and overcome obstacles.",
        answer: "Olimar",
        type: "nintendo"
    },
    question31: {
        question: "Wario's lanky and devious partner, causing mayhem alongside him in various games.",
        answer: "Waluigi",
        type: "nintendo"
    },
    question32: {
        question: "Bowser's mischievous son, eager to prove himself and follow in his father's footsteps.",
        answer: "Bowser Jr.",
        type: "nintendo"
    },
    question33: {
        question: "Mario's greedy and mischievous rival, always up to no good and seeking treasure.",
        answer: "Wario",
        type: "nintendo"
    },
    question34: {
        question: "Ruler of Sarasaland, known for her spunky and athletic nature.",
        answer: "Princess Daisy",
        type: "nintendo"
    },
    question35: {
        question: "The loyal mushroom-headed attendant of Princess Peach, known for his speedy assistance.",
        answer: "Toad",
        type: "nintendo"
    },
    question36: {
        question: "This character from Persona 5 is the protagonist and leader of the Phantom Thieves, known for his code name and his persona, Arsene.",
        answer: "Joker",
        type: "persona"
    },
    question37: {
        question: "A faithful and intelligent companion in Persona 5, this character is a talking cat-like creature who guides the protagonist and transforms into a bus.",
        answer: "Morgana",
        type: "persona"
    },
    question38: {
        question: "This character from Persona 5 is a skilled hacker and member of the Phantom Thieves, known for her code name and her persona, Necronomicon.",
        answer: "Futaba Sakura",
        type: "persona"
    },
    question39: {
        question: "A diligent and intelligent student from Persona 5, this character is the student council president and a member of the Phantom Thieves with the code name and persona, Queen.",
        answer: "Makoto Nijima",
        type: "persona"
    },
    question40: {
        question: "This character from Persona 5 is a talented artist and a quiet introvert, known for his eccentricities and his persona, Goemon.",
        answer: "Yusuke Kitagawa",
        type: "persona"
    },
    question41: {
        question: "This character from Persona 5 was formerly the star runner on Shujin Academy's track and field team.",
        answer: "Ryuji Sakamoto",
        type: "persona"
    },
    question42: {
        question: "A confident and stylish student in Persona 5, this character is a model and a member of the Phantom Thieves with the code name and persona, Noir.",
        answer: "Haru Okumura",
        type: "persona"
    },
    question43: {
        question: "This character from Persona 5 is a caring and dedicated doctor, known for her medical expertise.",
        answer: "Tae Takemi",
        type: "persona"
    },
    question44: {
        question: "She is a prehistoric dinosaur, identified in some early sources as a bird, with a funnel-shaped mouth from which she can spit eggs.",
        answer: "Birdo",
        type: "nintendo"
    },
    question45: {
        question: "This character from Persona 5 is a charming and mysterious fortune teller who aids the Phantom Thieves and has a persona associated with the Fortune Arcana.",
        answer: "Chihaya Mifune",
        type: "persona"
    },
    question46: {
        question: "A caring and supportive caregiver in Persona 5, this character runs a café and mentors the protagonist in the ways of the Phantom Thieves.",
        answer: "Sojiro Sakura",
        type: "persona"
    },
    question47: {
        question: "This fighter from ARMS is known for his stretchy arms and his fiery personality.",
        answer: "Spring Man",
        type: "arms"
    },
    question48: {
        question: "This character from ARMS is a bubbly and energetic fighter who can create shockwaves with her punches.",
        answer: "Ribbon Girl",
        type: "arms"
    },
    question49: {
        question: "This character from ARMS is a ninja fighter who can disappear during his dash move.",
        answer: "Ninjara",
        type: "arms"
    },
    question50: {
        question: "A versatile fighter in ARMS who can stretch and bend her arms to curve her punches around obstacles, and stay in the air during her dash move.",
        answer: "Twintelle",
        type: "arms"
    },
    question51: {
        question: "This fighter in ARMS is a happy go-lucky man who always puts training first. He is known for his unbreakable determination.",
        answer: "Spring Man",
        type: "arms"
    },
    question52: {
        question: "This fighter in ARMS is wrapped up in mystery and bandages, and is the so called 'grim creeper'.",
        answer: "Master Mummy",
        type: "arms"
    },
    question53: {
        question: "This character from Persona 5 is a one-quarter-American girl in Joker's class who recently returned to Japan. She speaks English fluently, and is a model.",
        answer: "Ann Takamaki",
        type: "persona"
    },
    question54: {
        question: "This character from Persona 5 is a popular teenaged detective who has been given the title of 'The Second Coming of the Detective Prince' by the media.",
        answer: "Goro Akechi",
        type: "persona"
    },
    question55: {
        question: "This character from Persona 5 is a prosecutor for the Tokyo District Special Investigation Department and legal guardian of her sister, Makoto.",
        answer: "Sae Nijima",
        type: "persona"
    },
    question56: {
        question: "This character from Persona 5 is the prison master of the Velvet Room. As a Confidant he represents the Fool Arcana, allowing Joker to have multiple personas simultaneously.",
        answer: "Igor",
        type: 'persona'
    },
    question57: {
        question: "This fighter in ARMS is a professional Snakeboarder and livestreamer who joined the tournament to increase the number of views of his videos.",
        answer: "Kid Cobra",
        type: "arms"
    },
    question58: {
        question: "This fighter in ARMS is different from her fellow fighters in that she fights from inside of a robotic suit and is one of the few fighters to have normal arms.",
        answer: "Mechanica",
        type: "arms"
    },
    question59: {
        question: "This fighter in ARMS is made up of a beach patrol cop duo.",
        answer: "Byte and Barq",
        type: "arms"
    },
    question60: {
        question: "This fighter in ARMS is an expert in fighting and can use both her arms and her feet to fight her opponents",
        answer: "Min Min",
        type: "arms"
    },
    question61: {
        question: "These are a species resembling caterpillars that first appear in Super Mario World, where they are yellow and slowly moving when calm, but turn red and run angrily when jumped on.",
        answer: "Wiggler",
        type: "nintendo"
    },
    question62: {
        question: "An arrogant and proud swordsman at first, he introduces himself to Avalanche as a former member of an elite warrior unit called SOLDIER",
        answer: "Cloud",
        type: "nintendo"
    },
    question64: {
        question: "This character can roll up into a concussive ball, primarily to attack enemies.",
        answer: "Sonic",
        type: "sonic"
    },
    question65: {
        question: "An anthropomorphic hedgehog born with the ability to run faster than the speed of sound, hence his name.",
        answer: "Sonic",
        type: "sonic"
    },
    question66: {
        question: 'This character is also know as "Miles Prower".',
        answer: "Tails",
        type: "sonic"
    },
    question67: {
        question: "This character can use his tails to propel himself into the air like a helicopter for a limited time.",
        answer: "Tails",
        type: "sonic"
    },
    question68: {
        question: "This character spends much of her time following Sonic to get his attention.",
        answer: "Amy",
        type: "sonic"
    },
    question69: {
        question: "This character lives on Angel Island, which hovers in the sky due to the power of the Master Emerald.",
        answer: "Knuckles",
        type: "sonic"
    },
    question70: {
        question: "This character's duty is to guard the Master Emerald.",
        answer: "Knuckles",
        type: "sonic"
    },
    question71: {
        question: "A kind raccoon with a heart of gold, he helps you get started when you first move to town by loaning you a home to live in.",
        answer: "Tom Nook",
        type: "nintendo"
    },
    question72: {
        question: "Introduced in Generation I. It's well known for being the Pokémon with the highest number of evolution possibilities.",
        answer: "Eevee",
        type: "pokemon"
    },
    question73: {
        question: "Along with Bulbasaur and Squirtle, He is one of three starter Pokémon of Kanto available at the beginning of Pokémon Red, Green, Blue, FireRed, and LeafGreen.",
        answer: "Charmander",
        type: "pokemon"
    },
    question74: {
        question: "He is the mascot for Pokémon Red and its remake, Pokémon FireRed.",
        answer: "Charizard",
        type: "pokemon"
    },
    question75: {
        question: "With its aerodynamic shape and grooved surface, this pokemo's shell helps it wade through the water very quickly.",
        answer: "Squirtle",
        type: "pokemon"
    },
    question76: {
        question: "This character is friendly and docile, and loves being around with children. If anyone protects or makes it happy, it will return the favor by sharing its own joy.",
        answer: "Togepi",
        type: "pokemon"
    },
    question77: {
        question: "This type of Pokemon is rarely ever seen alone, as it is almost always accompanied by it's elder counterparts.",
        answer: "Nidoran",
        type: "pokemon"
    },
    question78: {
        question: "This Pokemon is very timid and rarely appears in front of humans. But it is very clever, and there are awareness among social and religious groups.",
        answer: "Clefairy",
        type: "pokemon"
    },
    question79: {
        question: "This Pokemon is Jigglypuff's counterpart.",
        answer: "Clefairy",
        type: "pokemon"
    },
    question79: {
        question: "This Pokémon usually preys on other weaker Pokémon, showing that it is carnivorous. However, it sometimes takes in fruits, so it is more accurate to call it an omnivore.",
        answer: "Meowth",
        type: "pokemon"
    },
    question80: {
        question: "This Pokemon prefer clean freshwater lakes. They have developed gills to become better suited to an aquatic lifestyle.",
        answer: "Vaporeon",
        type: "pokemon"
    },
    question81: {
        question: "These Pokemon are docile, preferring to sunbathe so that the plants on their backs can photosynthesize rather than fight.",
        answer: "Venusaur",
        type: "pokemon"
    },
    question82: {
        question: "They are most active during full moons, creeping out in the dead of night and disguising themselves as shadows.",
        answer: "Gengar",
        type: "pokemon"
    },
    question83: {
        question: "They are typically mean-spirited and enjoy tormenting people, hurting them and overtaking them.",
        answer: "Gengar",
        type: "pokemon"
    },
    question84: {
        question: "This character is the main protagonist in the Punch-Out!! franchise. His signature move is the Star Punch.",
        answer: "Little Mac",
        type: "nintendo"
    },
    question84: {
        question: "This character is arrogant and selfish, being boastful when he is successful and focuses only on self-preservation when he fails.",
        answer: "Bowser",
        type: "nintendo"
    },
    question85: {
        question: "This character was inspired by a childhood experience of Super Mario creator Shigeru Miyamoto, where a dog tried to attack him.",
        answer: "Chain Chomp",
        type: "nintendo"
    },
}

let scoreSelector = document.querySelector('.score')
let score = 0
let roundStatus = 'start'
let roundCounter = 0;
const roundCounterText = document.querySelector('.round-counter')

const question = document.querySelector('.question')

const option1 = document.querySelector('.option0')
const option2 = document.querySelector('.option1')
const option3 = document.querySelector('.option2')

const optionText = document.querySelector('.optTxt')

const optionBox1 = document.querySelector('.option-box0')
const optionBox2 = document.querySelector('.option-box1')
const optionBox3 = document.querySelector('.option-box2')

const timer = document.querySelector('.question-timer')
const questionContainer = document.querySelector('.question-container')


const questionEntries = Object.entries(questions)
const optionBoxes = [optionBox1, optionBox2, optionBox3];


let questionRandom;
let phrases;

const connectingContainer = document.querySelector('.connecting-scene')
const connectingText= document.querySelector('.connecting-text')

const connectingScene = function() {
    connectingContainer.style.display = 'flex'

    switch (roundStatus) {
        case 'start':
          phrases = ['Be on your toes', 'Watch out!', 'The question is...', 'The round is about to start', 'Pay attention'];
          break;
        case 'won':
          phrases = ['Good job!', 'You seem to know this very well', 'It could have been harder', "Don't get lazy!"];
          break;
        default:
          phrases = [];
          break;
    }

    let randomPhrase = Math.trunc(Math.random() * phrases.length)

    connectingText.innerText = phrases[randomPhrase]

    setTimeout(() => {
        screenTransitionAudioFront.play()
        connectingText.style.opacity = '1'
        connectingText.style.transform = 'scale(1)'
    }, 500);
    setTimeout(() => {
        connectingText.style.transform = 'scale(1.2)'
    }, 1500);
    setTimeout(() => {
        connectingText.style.opacity = '0'
    }, 1550);
    setTimeout(() => {
        connectingText.style.transform = 'scale(0.4)'
        connectingText.innerText = '3'
    }, 1720);
    setTimeout(() => {
        roundCounterMainSound3.play()
        connectingText.style.opacity = '1'
        connectingText.style.transform = 'scale(1)'
    }, 1750);
    setTimeout(() => {
        roundCounterMainSound2.play()
        connectingText.innerText = '2'
    }, 2700);
    setTimeout(() => {
        roundCounterMainSound1.play()
        connectingText.innerText = '1'
    }, 3700);
    setTimeout(() => {
        roundCounterGoSound.play()
        screenTransitionAudioBack.play()
        connectingText.innerText = 'GO!'
        connectingText.style.transform = 'scale(1.5)'
    }, 4470);
    setTimeout(() => {
        connectingText.style.transform = 'scale(3)'
        connectingText.style.opacity = '0'
    }, 5000);
    setTimeout(() => {
        connectingContainer.style.display = 'none'
        GameRound()
    }, 5200);

}

const connectingSceneFaster10 = function() {
    connectingContainer.style.display = 'flex'
    phrases = ['Good job!', 'You seem to know this very well', 'It could have been harder', "Don't get lazy!"];

    let randomPhrase = Math.trunc(Math.random() * phrases.length)

    
    if (roundCounter == 7) {
        connectingText.innerText = 'FASTER!'
    } else {
        connectingText.innerText = phrases[randomPhrase]
    }
    
    setTimeout(() => {
        if (roundCounter == 7) fasterSound.play()
        screenTransitionAudioFront.play()
        connectingText.style.opacity = '1'
        connectingText.style.transform = 'scale(1)'
    }, 500);
    setTimeout(() => {
        connectingText.style.transform = 'scale(1.2)'
    }, 1200);
    setTimeout(() => {
        connectingText.style.opacity = '0'
    }, 1250);
    setTimeout(() => {
        connectingText.style.transform = 'scale(0.4)'
        connectingText.innerText = '3'
    }, 1520);
    setTimeout(() => {
        roundCounterMainSound3.play()
        connectingText.style.opacity = '1'
        connectingText.style.transform = 'scale(1)'
    }, 1550);
    setTimeout(() => {
        roundCounterMainSound2.play()
        connectingText.innerText = '2'
    }, 2000);
    setTimeout(() => {
        roundCounterMainSound1.play()
        connectingText.innerText = '1'
    }, 2500);
    setTimeout(() => {
        roundCounterGoSound.play()
        screenTransitionAudioBack.play()
        connectingText.innerText = 'GO!'
        connectingText.style.transform = 'scale(1.5)'
    }, 3000);
    setTimeout(() => {
        connectingText.style.transform = 'scale(3)'
        connectingText.style.opacity = '0'
    }, 3400);
    setTimeout(() => {
        connectingContainer.style.display = 'none'
        GameRound()
    }, 3500);

}

const connectingSceneFaster5 = function() {
    connectingContainer.style.display = 'flex'
    phrases = ['Good job!', 'You seem to know this very well', 'It could have been harder', "Don't get lazy!"];

    let randomPhrase = Math.trunc(Math.random() * phrases.length)

    
    if (roundCounter == 15) {
        connectingText.innerText = 'FASTER!!!'
    } else {
        connectingText.innerText = phrases[randomPhrase]
    }

    setTimeout(() => {
        if (roundCounter == 15) fasterSound.play()
        screenTransitionAudioFront.play()
        connectingText.style.opacity = '1'
        connectingText.style.transform = 'scale(1)'
    }, 500);
    setTimeout(() => {
        connectingText.style.transform = 'scale(1.2)'
    }, 1200);
    setTimeout(() => {
        connectingText.style.opacity = '0'
    }, 1250);
    setTimeout(() => {
        connectingText.style.transform = 'scale(0.4)'
        connectingText.innerText = '3'
    }, 1520);
    setTimeout(() => {
        roundCounterMainSound3.play()
        connectingText.style.opacity = '1'
        connectingText.style.transform = 'scale(1)'
    }, 1550);
    setTimeout(() => {
        roundCounterMainSound2.play()
        connectingText.innerText = '2'
    }, 1850);
    setTimeout(() => {
        roundCounterMainSound1.play()
        connectingText.innerText = '1'
    }, 2250);
    setTimeout(() => {
        roundCounterGoSound.play()
        screenTransitionAudioBack.play()
        connectingText.innerText = 'GO!'
        connectingText.style.transform = 'scale(1.5)'
    }, 2650);
    setTimeout(() => {
        connectingText.style.transform = 'scale(3)'
        connectingText.style.opacity = '0'
    }, 3000);
    setTimeout(() => {
        connectingContainer.style.display = 'none'
        GameRound()
    }, 3200);

}


const roundReset = function() {
    optionBoxes.forEach((box) => {
        box.style.opacity = '1'
        box.style.borderColor = '#eb0000'
        box.style.pointerEvents = 'auto'
        box.style.color = '#000'
    })
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

let pastQuestions = []
let shuffledCharacters;
let optionCharacters
const questionSelector = function() {
    if (pastQuestions.length == questionEntries.length) pastQuestions = []

    let optionRandom = Math.trunc(Math.random() * 3) 
    let option = document.querySelector(`.option${optionRandom}`);
    do {
        questionRandom = Math.trunc(Math.random() * questionEntries.length);
    } while (pastQuestions.includes(questionRandom) && roundCounter >= 2);
    
    pastQuestions.push(questionRandom);

    let topicCharacters = []

    for (let i = 0 ; i < questionEntries.length; i++) {
        if(questionEntries[questionRandom][1].type == questionEntries[i][1].type && !topicCharacters.includes(questionEntries[i][1].answer)) {
            topicCharacters.push(questionEntries[i][1].answer)
        }
    }
    console.log(topicCharacters)

    do {
        shuffledCharacters = shuffleArray(topicCharacters);
        optionCharacters = shuffledCharacters.slice(0, 3)
    } while (optionCharacters.includes(questionEntries[questionRandom][1].answer))

    for (let i=0;i < 3;i++) {
        let pickedCharacter = optionCharacters[i];
        document.querySelector(`.option${i}`).innerText = pickedCharacter;
        document.querySelector(`.option-box${i}`).style.background = `url(src/character/${pickedCharacter.replaceAll(" ","").replaceAll(".","")}.png)`    
    }

    document.querySelector(`.option-box${optionRandom}`).style.background = `url(src/character/${questionEntries[questionRandom][1].answer.replaceAll(" ","").replaceAll(".","").replaceAll("&","")}.png)`
    question.innerText = questionEntries[questionRandom][1].question
    option.innerText = questionEntries[questionRandom][1].answer
}



const GameRound = function() {
    questionSelector();
    roundCounter++
    roundCounterText.innerText = `ROUND ${roundCounter} OF 30`

    if (roundCounter < 8) {
        timer.innerText = '20'
    } else if (roundCounter >= 8 && roundCounter <= 15) {
        timer.innerText = '10'
    } else {
        timer.innerText = '7'
    }
    questionContainer.style.display = 'flex'
    startTimer()

    setTimeout(() => {
        questionContainer.style.opacity = '1'
    }, 130);
}

// TIMER LOGIC

let bgm = new Audio('src/sounds/bgm.mp3')
let roundCounterMainSound1 = new Audio('src/sounds/roundCounterMain.mp3')
let roundCounterMainSound2 = new Audio('src/sounds/roundCounterMain.mp3')
let roundCounterMainSound3 = new Audio('src/sounds/roundCounterMain.mp3')
let roundCounterGoSound = new Audio('src/sounds/roundCounterGo.mp3')
let optionDashSound = new Audio('src/sounds/optionDash.mp3')
let fasterSound = new Audio('src/sounds/faster.mp3')
let congratsSound = new Audio('src/sounds/congratulations.mp3')
let highscoreSound = new Audio('src/sounds/highscore.mp3')
let toobadSound = new Audio('src/sounds/toobad.mp3')
let welcomeClickSound = new Audio('src/sounds/welcome.mp3')
let menuMusic = new Audio('src/sounds/menumusic.mp3')
let toadGuide = new Audio('src/sounds/toad.mp3')
let clickSound = new Audio('src/sounds/click.mp3')
bgm.volume = 0.01
roundCounterMainSound3.volume = 0.1
roundCounterMainSound2.volume = 0.1
roundCounterMainSound1.volume = 0.1
roundCounterGoSound.volume = 0.1
optionDashSound.volume = 0.1
fasterSound.volume = 0.05
congratsSound.volume = 0.1
highscoreSound.volume = 0.1
toobadSound.volume = 0.1
welcomeClickSound.volume = 0.1
menuMusic.volume = 0.04
toadGuide.volume = 0.05
clickSound.volume = 0.20

let screenTransitionAudioFront = new Audio('src/sounds/transitionFront.mp3')
let screenTransitionAudioBack= new Audio('src/sounds/transitionBack.mp3')
screenTransitionAudioFront.volume = 0.1
screenTransitionAudioBack.volume = 0.1
let timerAudio = new Audio('src/sounds/countdown.mp3')
let time;
let timerFunction;
const startTimer = function() {
    timerAudio = new Audio('src/sounds/countdown.mp3')
    timerAudio.volume = 0.004
    timerAudio.play()


    if (roundCounter < 8) {
        time = 20
    } else if (roundCounter >= 8 && roundCounter <= 15) {
        time = 10
    } else {
        time = 7
    }

    timerFunction = setInterval(() => {
        time--;
        timer.innerText = time;
        
        if (time == 0) {
            clearInterval(timerFunction)
            timerAudio.pause()
            optionBoxes.forEach((optionBox) => {
                optionBox.style.pointerEvents = 'none';
                optionBox.style.opacity = '0.5';
            })
            setTimeout(() => {
                questionContainer.style.opacity = '0'
            }, 1000);
            setTimeout(() => {
                showResults()
            }, 1100);
        };
    }, 1000);
}



// GAME ANSWER BUTTON LOGIC

optionBoxes.forEach((optionBox, index) => {
    optionBox.addEventListener('click', function() {
    clearInterval(timerFunction)
    timerAudio.pause()
      optionBoxes.forEach((box, i) => {
        if (i !== index) {
          box.style.pointerEvents = 'none';
          box.style.opacity = '0.5';
        }
      });
  
      optionBox.style.pointerEvents = 'none'
      optionBox.style.borderColor = 'white';
      var characterAudio = new Audio(`src/sounds/${optionBox.innerText.replaceAll(' ','').replaceAll('.','')}.mp3`)
      console.log(optionBox.innerText)
      characterAudio.volume = 0.05
      characterAudio.play()            
  
      setTimeout(() => {
        optionDashSound.play()
        optionBox.style.transform = 'translateX(3px)';
      }, 500);
      setTimeout(() => {
        optionBox.style.transform = 'translateX(-3px)';
      }, 600);
      setTimeout(() => {
        optionBox.style.transform = 'translateX(3px)';
      }, 700);
      setTimeout(() => {
        optionBox.style.transform = 'translateX(0)';
      }, 800);
  
      setTimeout(() => {
        optionDashSound.play()
        optionBox.style.transform = 'translateX(3px)';
      }, 1700);
      setTimeout(() => {
        optionBox.style.transform = 'translateX(-3px)';
      }, 1900);
      setTimeout(() => {
        optionBox.style.transform = 'translateX(3px)';
      }, 2100);
      setTimeout(() => {
        optionBox.style.transform = 'translateX(0)';
      }, 2300);
  
      setTimeout(() => {
        if (optionBox.innerText == questionEntries[questionRandom][1].answer) {
            let correctAudio = new Audio('src/sounds/correct.mp3')
            correctAudio.volume = 0.07
            correctAudio.play()
          optionBox.style.borderColor = '#1b8600';
          optionBox.style.color = '#1b8600'

          if (roundCounter < 7) {
              if (time > 10) {
                score += 50
              } else if (time >= 5 && time <= 10) {
                score += 30
              } else {
                score += 10
              }
          } else if (roundCounter >= 7 && roundCounter < 16) {
            if (time > 7) {
                score += 50
              } else if (time >= 3 && time <= 7) {
                score += 30
              } else {
                score += 10
              }
          } else {
            if (time > 3) {
                score += 50
              } else if (time >= 2 && time <= 3) {
                score += 30
              } else {
                score += 10
              }
          }
        scoreSelector.innerText = score
          setTimeout(() => {
            questionContainer.style.opacity = '0'
            roundStatus = 'won'
          }, 1000);
          setTimeout(() => {
            questionContainer.style.display = 'none'
            if (roundCounter == 30) {
                showResults();
            } else if (roundCounter >= 7 && roundCounter < 15) {
                roundReset()
                connectingSceneFaster10()
            } else if (roundCounter >= 15) {
                roundReset()
                connectingSceneFaster5()
            } else {
                roundReset()
                connectingScene()
            }
          }, 1300);
        } else {
          optionBox.style.borderColor = '#8b0000';
          optionBox.style.color = '#640000'
          setTimeout(() => {
            questionContainer.style.opacity = '0'
        }, 1000);
        setTimeout(() => {
            showResults()
        }, 1300);
        }
      }, 2700);
    });
});

// SCREENS

const greetingScreen = document.querySelector('.greeting-text-starter')
const guideScreen = document.querySelector('.game-guide')

// BUTTONS

const startBtn = document.querySelector('.startBtn')
const understoodBtn = document.querySelector('.understoodBtn')




startBtn.addEventListener('click', () => {
    clickSound.play()
    greetingScreen.style.transform = 'translateX(-2300px)'
    setTimeout(() => {
        greetingScreen.style.display = 'none'
    }, 600);

    setTimeout(() => {
        guideScreen.style.display = 'flex'
    }, 600);

    setTimeout(() => {
        guideScreen.style.transform = 'translateX(0px)'
    }, 650);
    setTimeout(() => {
        toadGuide.play()
    }, 1000);
})

understoodBtn.addEventListener('click',function() {
    clickSound.play()
    const volumeStep = menuMusic.volume / 10;
        
    for (let i = 0; i < 10; i++) {
    setTimeout(() => {
        menuMusic.volume -= volumeStep;
    }, i * 100);
    }

    setTimeout(() => {
    menuMusic.volume = 0;
    menuMusic.pause();
    }, 1000);

    guideScreen.style.opacity = '0'
    guideScreen.style.transition = 'all 0.5s'


    setTimeout(() => {
       guideScreen.style.display = 'none' 
    }, 700);

    setTimeout(() => {
        connectingScene()
        bgm.play() 
    }, 750);
})


const resultScreen = document.querySelector('.result-screen')
const congratText = document.querySelector('.result-header')
const failedText = document.querySelector('.failed-header')
const resultTable = document.querySelector('.results-table-wrapper')
const endScoreSel = document.querySelector('.current-score')
const highScoreSel = document.querySelector('.high-score')
const endRoundCount = document.querySelector('.score-desc')
const gameBackground = document.querySelector('.game-bgc')
let highscore = 0;

const showResults = function() {
    const volumeStep = bgm.volume / 10;
        
    for (let i = 0; i < 10; i++) {
    setTimeout(() => {
        bgm.volume -= volumeStep;
    }, i * 100);
    }

    setTimeout(() => {
    bgm.volume = 0;
    bgm.pause();
    bgm.load()
    }, 1000);

    resultTable.style.transform = 'translateY(250px)'
    resultTable.style.opacity = '0'
    congratText.style.transform = 'translateY(0px)'
    congratText.style.transform = 'scale(0.7)'
    congratText.style.transition = 'all 0.3s'
    failedText.style.transform = 'translateY(0px)'
    failedText.style.transform = 'scale(0.7)'
    failedText.style.transition = 'all 0.3s'

    if (roundCounter <= 5) score = 0

    highScoreSel.innerText = highscore
    endScoreSel.innerText = score
    roundCounter <= 5 ? endRoundCount.innerText = `You didn't answer enough questions to get a score this time...` : endRoundCount.innerText = `You got ${roundCounter} questions right!`

    
    console.log(score)
    console.log(highscore)

    questionContainer.style.display = 'none'


    resultScreen.style.opacity = '1' 

    setTimeout(() => {
        if (roundCounter <= 5) gameBackground.style.opacity = '0' 
    }, 100);
    setTimeout(() => {
        if (roundCounter <= 5) {
            failedText.style.display = 'block'
        } else {
            congratText.style.display = 'block'
        }
        resultScreen.style.display = 'flex' 
    }, 200);
    setTimeout(() => {
        if (roundCounter <= 5) {
            failedText.style.opacity = '1' 
        } else {
            congratText.style.opacity = '1' 
        }
    }, 500);
    setTimeout(() => {
        if (roundCounter <= 5) {
            toobadSound.play()
            failedText.style.transform = 'scale(1.2)'
        } else {
            congratsSound.play()
            congratText.style.transform = 'scale(1.2)'
        }
    }, 600);
    setTimeout(() => {
        if (roundCounter <= 5) {
            failedText.style.transform = 'scale(1)'
            failedText.style.transition = 'all 0.7s'
        } else {
            congratText.style.transform = 'scale(1)'
            congratText.style.transition = 'all 0.7s'
        }
    }, 900);
    setTimeout(() => {
        if (roundCounter <= 5) { 
            failedText.style.transform = 'translateY(-250px)'
        } else {
            congratText.style.transform = 'translateY(-250px)'
        }
    }, 3000);
    setTimeout(() => {

        if (roundCounter <= 5) {
            failedText.style.opacity = '0'
        } else {
            congratText.style.opacity = '0'
        }
    }, 3010);
    setTimeout(() => {
        if (endScoreSel.innerText > highscore) {
            highscore = endScoreSel.innerText
            highScoreSel.innerText = highscore
            highscoreSound.play()
        } 

        if (roundCounter <= 5) {
            failedText.style.display = 'none'
        } else {
            congratText.style.display = 'none'
        }
        resultTable.style.display = 'flex'
    }, 3400);
    setTimeout(() => {
        resultTable.style.opacity = '1'
    }, 3500);
    setTimeout(() => {
        resultTable.style.transform = 'translateY(0px)'
    }, 3550);
}

const restartBtn = document.querySelector('.restartBtn')

restartBtn.addEventListener('click', function() {
    clickSound.play()
    bgm.volume = 0.01
    bgm.play()
    score = 0
    scoreSelector.innerText = 0
    roundStatus = 'start'
    roundCounter = 0

    resultScreen.style.opacity = '0' 

    setTimeout(() => {
        gameBackground.style.opacity = '1' 
        resultScreen.style.display = 'none'
        resultTable.style.display = 'none'
    }, 100);
    setTimeout(() => {
       connectingScene()
       roundReset()
    }, 150);

})

const walkingMario = document.querySelector('.walking-mario')
setInterval(() => {
    walkingMario.style.left = '-10rem'
    walkingMario.style.transition = 'all 10s linear'

    setTimeout(() => {
        walkingMario.style.left = '200rem'
    }, 500);
    setTimeout(() => {
        walkingMario.style.transition = 'none'
        walkingMario.style.left = '-10rem'
    }, 10500);

}, 90000);

const welcomeScreen = document.querySelector('.welcome-text')
const gameContainer = document.querySelector('.game-container')
const titleScreen = document.querySelector('.greeting-text-starter')

const welcomeBtn = document.querySelector('.welcomeBtn').addEventListener('click',() => {
    welcomeClickSound.play()
    welcomeScreen.style.animation = 'none'

    startBtn.disabled = true;
  
    setTimeout(() => {
        welcomeScreen.style.opacity = '0'
    }, 100);
    setTimeout(() => {
        welcomeScreen.style.display = 'none'
    }, 300);
    setTimeout(() => {
        gameBackground.style.opacity = '1'
    }, 400);
    setTimeout(() => {
        titleScreen.style.display = 'flex'
        menuMusic.play()
    }, 450);

    setTimeout(function() {
        startBtn.disabled = false;
      }, 2500); 

})

