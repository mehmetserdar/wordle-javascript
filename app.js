const tileDisplay = document.querySelector('.tile-container')
const keyboard = document.querySelector('.key-container')
const messageDisplay = document.querySelector('.message-container')
const darkDisplay = document.querySelector('#dark')

const dict = new Map([
    ['Little Mix', 'Wings'],
    ['Kenny Chesney', 'Young'],
    ['Pearl Jam', 'Alive'],
    ['Avril Lavigne', 'Alice'],
    ['Salt-N-Pepa', 'Shoop'],
    ['The Rolling Stones', 'Angie'],
    ['Pitbull', 'Pause'],
    ['Simply Red', 'Stars'],
    ['Will Smith', 'Miami'],
    ['Iggy Azalea', 'Fancy'],
    ['Jennifer Paige', 'Crush'],
    ['Frankie Goes To Hollywood', 'Relax'],
    ['Papa Roach', 'Scars'],
    ['R.E.M.', 'Stand'],
    ['Barry Manilow', 'Mandy'],
    ['Alan Walker', 'Faded'],
    ['Ashford & Simpson', 'Solid'],
    ['Demi Lovato', 'Games'],
    ['Sam Cooke', 'Shake'],
    ['Shinedown', 'Unity'],
    ['Janet Jackson', 'Nasty'],
    ['Talking Heads', 'Blind'],
    ['Stabbing Westward', 'Shame'],
    ['Meghan Trainor', 'Title'],
    ['Desiigner', 'Panda'],
    ['Mariah Carey', 'Honey'],
    ['Godsmack', 'Awake'],
    ['The Notorious B.I.G.', 'Juicy'],
    ['Kid Ink', 'Hotel'],
    ['Paul Revere & The Raiders', 'Kicks'],
    ['Calvin Harris', 'Blame'],
    ['Taylor Swift', 'Ronan'],
    ['Future', 'Three'],
    ['The Guess Who', 'Undun'],
    ['Everything But The Girl', 'Wrong'],
    ['Mumford & Sons', 'Babel'],
    ['Future', 'Draco'],
    ['Rag n Bone Man', 'Human'],
    ['Blondie', 'Maria'],
    ['George Michael', 'Faith'],
    ['Jennifer Lopez', 'Booty'],
    ['Sara Bareilles', 'Brave'],
    ['Adam Ant', 'Strip'],
    ['Cashmere Cat', 'Adore'],
    ['Ella Henderson', 'Ghost'],
    ['Kenny Chesney', 'Noise'],
    ['Deltron 3030', 'Virus'],
    ['Paul Anka', 'Diana'],
    ['Three Days Grace', 'Break'],
    ['Miguel', 'Adorn'],
    ['Wolfmother', 'Woman'],
    ['Amy Winehouse', 'Rehab'],
    ['Daddy Yankee', 'Rompe'],
    ['Disclosure', 'Latch'],
    ['JAY-Z', 'Crown'],
    ['Steely Dan', 'Josie'],
    ['Primal Scream', 'Rocks'],
    ['Stacie Orrico', 'Stuck'],
    ['Next', 'Wifey'],
    ['Lionel Richie', 'Hello'],
    ['Fleetwood Mac', 'Gypsy'],
    ['Otis Redding', 'Tramp'],
    ['Imagine Dragons', 'Roots'],
    ['Maroon 5', 'Sugar'],
    ['The Smashing Pumpkins', 'Today'],
    ['In This Moment', 'Blood'],
    ['Slipknot', 'Snuff'],
    ['Don Omar', 'Taboo'],
    ['Shawn Mendes', 'Mercy'],
    ['A Thousand Horses', 'Smoke'],
    ['Calvin Harris', 'Feels'],
    ['Lizzo', 'Juice'],
    ['Lenny Kravitz', 'Again'],
    ['Marques Houston', 'Naked'],
    ['Britney Spears', 'Toxic'],
    ['Aretha Franklin', 'Think'],
    ['Def Leppard', 'Women'],
    ['Collective Soul', 'Shine'],
    ['Gwen Stefani', 'Crash'],
    ['Sublime With Rome', 'Panic'],
    ['Carly Simon', 'Jesse'],
    ['LMFAO', 'Shots'],
    ['Missing Persons', 'Words'],
    ['Gnarls Barkley', 'Crazy'],
    ['Chris Brown', 'Party'],
    ['Stone Temple Pilots', 'Plush'],
    ['Heart', 'Never'],
    ['Megadeth', 'Trust'],
    ['Ritchie Valens', 'Donna'],
    ['Derek & The Dominos', 'Layla'],
    ['The Chantels', 'Maybe'],
    ['Big Sean', 'Moves'],
    ['Troye Sivan', 'YOUTH'],
    ['Linkin Park', 'Faint'],
    ['Trace Adkins', 'Swing'],
    ['Big Sean', 'Light'],
    ['Olivia Newton John', 'Magic'],
    ['P!nk', 'Sober'],
    ['The Weeknd', 'Often'],
    ['Son Volt', 'Drown'],
    ['Vitamin C', 'Smile'],
    ['Erick Sermon', 'Music'],
    ['Lady Gaga', 'Judas'],
    ['Jars Of Clay', 'Flood'],
    ['Ratt', 'Dance'],
    ['Frankie Valli & The Four Seasons', 'Idaho'],
    ['Paperboy', 'Ditty'],
    ['Santana', 'Jingo'],
    ['Outkast', 'Roses'],
    ['The Beach Boys', 'Wendy'],
    ['Alestorm', 'Drink'],
    ['The Cars', 'Drive'],
    ['Lionel Richie', 'Truly'],
    ['Peggy Lee', 'Fever'],
    ['TLC', 'Creep'],
    ['Blitzen Trapper', 'Rebel'],
    ['YC Worldwide', 'Racks'],
    ['Gilbert O Sullivan', 'Clair'],
    ['Bananarama', 'Venus'],
    ['The Chainsmokers', 'Paris'],
    ['Another Bad Creation', 'Iesha'],
    ['Justin Bieber', 'Sorry'],
    ['Taylor Swift', 'Style'],
    ['BTS', 'Begin'],
    ['Elton John', 'Levon'],
    ['Russell Dickerson', 'Yours'],
    ['Commodores', 'Still'],
    ['Atlanta Rhythm Section', 'Alien'],
    ['Living Colour', 'Pride'],
    ['Alicia Keys', 'Diary'],
    ['Pearl Jam', 'Black'],
    ['Darius Rucker', 'Radio'],
    ['Kanye West', 'Power'],
    ['Neil Diamond', 'Shilo'],
    ['Kelly Rowland', 'Stole'],
    ['the bird and the bee', 'Witch'],
    ['LunchMoney Lewis', 'Bills'],
    ['Britney Spears', 'Radar'],
    ['112', 'Cupid'],
    ['Aerosmith', 'Jaded'],
    ['Ty Dolla $ign', 'Saved'],
    ['Meredith Brooks', 'Bitch'],
    ['Tears For Fears', 'Shout'],
    ['Shinedown', 'Bully'],
    ['Thompson Square', 'Glass'],
    ['Gloria Estefan', 'Conga'],
    ['Sarah McLachlan', 'Angel'],
    ['Ayo & Teo', 'Rolex'],
    ['Bow Wow', 'Sweat'],
    ['Meek Mill', 'Froze'],
    ['The Goo Goo Dolls', 'Slide'],
    ['Tommy Roe', 'Dizzy'],
    ['Drake', 'Views'],
    ['Nick Jonas', 'Close'],
    ['Five Man Electrical Band', 'Signs'],
    ['Mr. Mister', 'Kyrie'],
    ['Chris Brown', 'Loyal'],
    ['Kool & The Gang', 'Fresh'],
    ['Bobby Hebb', 'Sunny'],
    ['Rascal Flatts', 'Banjo'],
    ['Cream', 'Badge'],
    ['Bush', 'Mouth'],
    ['Heart', 'Alone'],
    ['Beck', 'Loser'],
    ['Ariana Grande', 'Focus'],
    ['Linkin Park', 'Heavy'],
    ['Skrillex', 'Kyoto'],
    ['Young Guns', 'Bones'],
    ['Silverchair', 'Freak'],
    ['The Association', 'Windy'],
    ['Rae Sremmurd', 'Swang'],
    ['Days Of The New', 'Enemy'],
    ['Britney Spears', 'Lucky'],
    ['Meek Mill', 'Litty'],
    ['Cameo', 'Candy'],
    ['Chuck Berry', 'Carol'],
    ['Alice In Chains', 'Grind'],
    ['Brick', 'Dusic'],
    ['Gloria Estefan', 'Reach'],
    ['Flyleaf', 'Chasm'],
    ['Brooks', 'Limbo'],
    ['Lords Of Acid', 'Pussy'],
    ['J-Kwon', 'Tipsy'],
    ['J Balvin', 'Ginza'],
    ['Coldplay', 'Atlas'],
    ['Cedric Gervais', 'Molly'],
    ['Mr. Probz', 'Waves'],
    ['N.E.R.D', 'Lemon'],
    ['Maejor', 'Lolly'],
    ['Pharrell Williams', 'Happy'],

])
const checkwords = ['Wings', 'Young', 'Alive', 'Alice', 'Shoop', 'Angie', 'Pause', 'Stars',
    'Miami', 'Fancy', 'Crush', 'Relax', 'Scars', 'Stand', 'Mandy', 'Faded', 'Solid', 'Games',
    'Shake', 'Unity', 'Nasty', 'Blind', 'Shame', 'Title', 'Panda', 'Honey', 'Awake', 'Juicy',
    'Hotel', 'Kicks', 'Blame', 'Ronan', 'Three', 'Undun', 'Wrong', 'Babel', 'Draco', 'Human',
    'Maria', 'Faith', 'Booty', 'Brave', 'Strip', 'Adore', 'Ghost', 'Noise', 'Virus', 'Diana',
    'Break', 'Adorn', 'Woman', 'Rehab', 'Rompe', 'Latch', 'Crown', 'Josie', 'Rocks', 'Stuck',
    'Wifey', 'Hello', 'Gypsy', 'Tramp', 'Roots', 'Sugar', 'Today', 'Blood', 'Snuff', 'Taboo',
    'Mercy', 'Smoke', 'Feels', 'Juice', 'Again', 'Naked', 'Toxic', 'Think', 'Women', 'Shine',
    'Crash', 'Panic', 'Jesse', 'Shots', 'Words', 'Crazy', 'Party', 'Plush', 'Never', 'Trust',
    'Donna', 'Layla', 'Maybe', 'Moves', 'Youth', 'Faint', 'Swing', 'Light', 'Magic', 'Sober',
    'Often', 'Drown', 'Smile', 'Music', 'Judas', 'Flood', 'Dance', 'Idaho', 'Ditty', 'Jingo',
    'Roses', 'Wendy', 'Drink', 'Drive', 'Truly', 'Fever', 'Creep', 'Rebel', 'Racks', 'Clair',
    'Venus', 'Paris', 'Iesha', 'Sorry', 'Style', 'Begin', 'Levon', 'Yours', 'Still', 'Alien',
    'Pride', 'Diary', 'Black', 'Radio', 'Power', 'Shilo', 'Stole', 'Witch', 'Bills', 'Radar',
    'Cupid', 'Jaded', 'Saved', 'Bitch', 'Shout', 'Bully', 'Glass', 'Conga', 'Angel', 'Rolex',
    'Sweat', 'Froze', 'Slide', 'Dizzy', 'Views', 'Close', 'Signs', 'Kyrie', 'Loyal', 'Fresh',
    'Sunny', 'Banjo', 'Badge', 'Mouth', 'Alone', 'Loser', 'Focus', 'Heavy', 'Kyoto', 'Bones',
    'Freak', 'Windy', 'Swang', 'Enemy', 'Lucky', 'Litty', 'Candy', 'Carol', 'Grind', 'Dusic',
    'Reach', 'Chasm', 'Limbo', 'Pussy', 'Tipsy', 'Ginza', 'Atlas', 'Molly', 'Waves', 'Lemon',
    'Lolly', 'Happy', 'Happy', 'party', 'peace', 'peter', 'phase', 'phone', 'photo', 'piece',
    'pilot', 'pitch', 'place', 'plain', 'plane', 'plant', 'plate', 'point', 'pound', 'power',
    'press', 'price', 'pride', 'prime', 'print', 'prior', 'prize', 'proof', 'proud', 'prove',
    'queen', 'quick', 'quiet', 'quite', 'radio', 'raise', 'range', 'rapid', 'ratio', 'reach',
    'ready', 'refer', 'right', 'rival', 'river', 'robin', 'roger', 'roman', 'rough', 'round',
    'route', 'royal', 'rural', 'scale', 'scene', 'scope', 'score', 'sense', 'serve', 'seven',
    'shall', 'shape', 'share', 'sharp', 'sheet', 'shelf', 'shell', 'shift', 'shirt', 'shock',
    'shoot', 'short', 'shown', 'sight', 'since', 'sixth', 'sixty', 'sized', 'skill', 'sleep',
    'slide', 'small', 'smart', 'smile', 'smith', 'smoke', 'solid', 'solve', 'sorry', 'sound',
    'south', 'space', 'spare', 'speak', 'speed', 'spend', 'spent', 'split', 'spoke', 'sport',
    'staff', 'stage', 'stake', 'stand', 'start', 'state', 'steam', 'steel', 'stick', 'still',
    'stock', 'stone', 'stood', 'store', 'storm', 'story', 'strip', 'stuck', 'study', 'stuff',
    'style', 'sugar', 'suite', 'super', 'sweet', 'table', 'taken', 'taste', 'taxes', 'teach',
    'teeth', 'terry', 'texas', 'thank', 'theft', 'their', 'theme', 'there', 'these', 'thick',
    'thing', 'think', 'third', 'those', 'three', 'threw', 'throw', 'tight', 'times', 'tired',
    'title', 'today', 'topic', 'total', 'touch', 'tough', 'tower', 'track', 'trade', 'train',
    'treat', 'trend', 'trial', 'tried', 'tries', 'truck', 'truly', 'trust', 'truth', 'twice',
    'under', 'undue', 'union', 'unity', 'until', 'upper', 'upset', 'urban', 'usage', 'usual',
    'valid', 'value', 'video', 'virus', 'visit', 'vital', 'voice', 'waste', 'watch', 'water',
    'wheel', 'where', 'which', 'while', 'white', 'whole', 'whose', 'woman', 'women', 'world',
    'worry', 'worse', 'worst', 'worth', 'would', 'wound', 'write', 'wrong', 'wrote', 'yield',
    'young', 'youth', 'about', 'above', 'abuse', 'actor', 'acute', 'admit', 'adopt', 'adult',
    'after', 'again', 'agent', 'agree', 'ahead', 'alarm', 'album', 'alert', 'alike', 'alive',
    'allow', 'alone', 'along', 'alter', 'among', 'anger', 'angle', 'angry', 'apart', 'apple',
    'apply', 'arena', 'argue', 'arise', 'array', 'aside', 'asset', 'audio', 'audit', 'avoid',
    'award', 'aware', 'badly', 'baker', 'bases', 'basic', 'basis', 'beach', 'began', 'begin',
    'begun', 'being', 'below', 'bench', 'billy', 'birth', 'black', 'blame', 'blind', 'block',
    'blood', 'board', 'boost', 'booth', 'bound', 'brain', 'brand', 'bread', 'break', 'breed',
    'brief', 'bring', 'broad', 'broke', 'brown', 'build', 'built', 'buyer', 'cable', 'calif',
    'carry', 'catch', 'cause', 'chain', 'chair', 'chart', 'chase', 'cheap', 'check', 'chest',
    'chief', 'child', 'china', 'chose', 'civil', 'claim', 'class', 'clean', 'clear', 'click',
    'clock', 'close', 'coach', 'coast', 'could', 'count', 'court', 'cover', 'craft', 'crash',
    'cream', 'crime', 'cross', 'crowd', 'crown', 'curve', 'cycle', 'daily', 'dance', 'dated',
    'dealt', 'death', 'debut', 'delay', 'depth', 'doing', 'doubt', 'dozen', 'draft', 'drama',
    'drawn', 'dream', 'dress', 'drill', 'drink', 'drive', 'drove', 'dying', 'eager', 'early',
    'earth', 'eight', 'elite', 'empty', 'enemy', 'enjoy', 'enter', 'entry', 'equal', 'error',
    'event', 'every', 'exact', 'exist', 'extra', 'faith', 'false', 'fault', 'fiber', 'field',
    'fifth', 'fifty', 'fight', 'final', 'first', 'fixed', 'flash', 'fleet', 'floor', 'fluid',
    'focus', 'force', 'forth', 'forty', 'forum', 'found', 'frame', 'frank', 'fraud', 'fresh',
    'front', 'fruit', 'fully', 'funny', 'giant', 'given', 'glass', 'globe', 'going', 'grace',
    'grade', 'grand', 'grant', 'grass', 'great', 'green', 'gross', 'group', 'grown', 'guard',
    'guess', 'guest', 'guide', 'happy', 'harry', 'heart', 'heavy', 'hence', 'henry', 'horse',
    'hotel', 'house', 'human', 'ideal', 'image', 'index', 'inner', 'input', 'issue', 'japan',
    'jimmy', 'joint', 'jones', 'judge', 'known', 'label', 'large', 'laser', 'later', 'laugh',
    'layer', 'learn', 'lease', 'least', 'leave', 'legal', 'level', 'lewis', 'light', 'limit',
    'links', 'lives', 'local', 'logic', 'loose', 'lower', 'lucky', 'lunch', 'lying', 'magic',
    'major', 'maker', 'march', 'maria', 'match', 'maybe', 'mayor', 'meant', 'media', 'metal',
    'might', 'minor', 'minus', 'mixed', 'model', 'money', 'month', 'moral', 'motor', 'mount',
    'mouse', 'mouth', 'movie', 'music', 'needs', 'never', 'newly', 'night', 'noise', 'north',
    'noted', 'novel', 'nurse', 'occur', 'ocean', 'offer', 'often', 'order', 'other', 'ought',
    'paint', 'panel', 'paper', 'panic', 'samba'
]



const upWordle = Array.from(dict.values()).map(word => word.toUpperCase());
const upArtist = Array.from(dict.keys()).map(word => word.toUpperCase());
const upCheckwords = checkwords.map(word => word.toUpperCase());
let random_number = Math.floor(Math.random() * upWordle.length);
let artist = upArtist[random_number]
let wordle = upWordle[random_number]

console.log(wordle)
const keys = [
    'Q',
    'W',
    'E',
    'R',
    'T',
    'Y',
    'U',
    'I',
    'O',
    'P',
    'A',
    'S',
    'D',
    'F',
    'G',
    'H',
    'J',
    'K',
    'L',
    'ENTER',
    'Z',
    'X',
    'C',
    'V',
    'B',
    'N',
    'M',
    '«',
]
const guessRows = [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', '']
]
let currentRow = 0
let currentTile = 0
let isGameOver = false
let shareMsg = "CONGRATULATIONS\n" +
"\n" +
wordle + " is the song by " + artist
let link = "https://www.youtube.com/results?search_query=" + wordle + "+" + artist
let shareString = ""
let info =

guessRows.forEach((guessRow, guessRowIndex) => {
    const rowElement = document.createElement('div')
    rowElement.setAttribute('id', 'guessRow-' + guessRowIndex)
    guessRow.forEach((_guess, guessIndex) => {
        const tileElement = document.createElement('div')
        tileElement.setAttribute('id', 'guessRow-' + guessRowIndex + '-tile-' + guessIndex)
        tileElement.classList.add('tile')
        rowElement.append(tileElement)
    })
    tileDisplay.append(rowElement)
})

keys.forEach(key => {
    const buttonElement = document.createElement('button')
    buttonElement.textContent = key
    buttonElement.setAttribute('id', key)
    buttonElement.addEventListener('click', () => handleClick(key))
    keyboard.append(buttonElement)
})

const handleClick = (letter) => {
    if (!isGameOver) {
        if (letter === '«') {
            deleteLetter()
            return
        }
        if (letter === 'ENTER') {
            checkRow()
            return
        }
        addLetter(letter)
    }
}

const addLetter = (letter) => {
    if (currentTile < 5 && currentRow < 6) {
        const tile = document.getElementById('guessRow-' + currentRow + '-tile-' + currentTile)
        tile.textContent = letter
        tile.style.backgroundColor = "grey"
        guessRows[currentRow][currentTile] = letter
        tile.setAttribute('data', letter)
        currentTile++
    }
}

const deleteLetter = () => {
    if (currentTile > 0) {
        currentTile--
        const tile = document.getElementById('guessRow-' + currentRow + '-tile-' + currentTile)
        tile.textContent = ''
        tile.style.backgroundColor = ""
        guessRows[currentRow][currentTile] = ''
        tile.setAttribute('data', '')
    }
}

const checkRow = () => {
    const guess = guessRows[currentRow].join('')
    if (currentTile > 4) {
        if (!upCheckwords.includes(guess.toUpperCase())) {
            showMessage('WORD NOT IN LIST')
            return
        } else {
            flipTile();
            shareString = shareString.concat("\n");
            if (wordle == guess) {
                isGameOver = true
                setTimeout(() => {
                    document.getElementById('results').textContent = shareMsg + shareString;
                    document.getElementById('resultLogo').href = link;
                    var box = document.getElementById('endContainer');
                    box.style.display = 'block';

                }, 3000)
                return
            } else {
                if (currentRow >= 5) {
                    isGameOver = true
                    setTimeout(() => {
                        document.getElementById('results').textContent = shareString;
                        var box = document.getElementById('endContainer');
                        box.style.display = 'block';

                    }, 3000)
                    return
                }
                if (currentRow < 5) {
                    currentRow++
                    currentTile = 0
                }
            }
        }
    }
}

const showMessage = (message) => {
    const messageElement = document.createElement('p')
    messageElement.textContent = message
    messageDisplay.append(messageElement)
    setTimeout(() => messageDisplay.removeChild(messageElement), 2000)
}

const addColorToKey = (keyLetter, color) => {
    const key = document.getElementById(keyLetter)
    key.classList.add(color)
}

const flipTile = () => {
    const rowTiles = document.querySelector('#guessRow-' + currentRow).childNodes
    let checkWordle = wordle
    const guess = []

    rowTiles.forEach(tile => {
        guess.push({
            letter: tile.getAttribute('data'),
            color: 'grey-overlay'
        })
    })

    guess.forEach((guess, index) => {
        if (guess.letter == wordle[index]) {
            guess.color = 'green-overlay'
            checkWordle = checkWordle.replace(guess.letter, '')

        }
    })

    guess.forEach(guess => {
        if (checkWordle.includes(guess.letter)) {
            guess.color = 'yellow-overlay'
            checkWordle = checkWordle.replace(guess.letter, '')
        }
    })

    rowTiles.forEach((tile, index) => {
        setTimeout(() => {
            tile.classList.add('flip')
            tile.classList.add(guess[index].color)
            addColorToKey(guess[index].letter, guess[index].color)
            if (guess[index].color == 'yellow-overlay') {
                shareString = shareString.concat('\u{1F7E8}');
            }
            if (guess[index].color == 'grey-overlay') {
                shareString = shareString.concat('\u{2B1C}');
            }
            if (guess[index].color == 'green-overlay') {
                shareString = shareString.concat('\u{1F7E9}');
            }
        }, 500 * index)
    })
}

const darkMode = () => {
    var element = document.body;
    var g = document.querySelector(".tile-container")
    var t = document.querySelector("h1")
    var f = document.querySelector("footer")
    var r = document.querySelector(".container")
    var y = document.querySelector("#ytlogo")
    element.classList.toggle("dark-mode")
    g.classList.toggle("dark-mode")
    t.classList.toggle("dark-mode")
    f.classList.toggle("dark-mode")
    r.classList.toggle("dark-mode")
    y.classList.toggle("dark-mode")
}


const infoPopup = () => {
    document.getElementById('results').textContent = 
    "INSTRUCTIONS"+
    "\n"+
    "\nGuess the SONGLE in six tries." +
    "\nEach guess must be a valid five-letter word. Hit the enter button to submit. " +  
    "\nAfter each guess, the color of the tiles will change to show how close your guess was to the word. " +
    "\n\u{1F7E9} means letter is in the word and in the correct spot."+
    "\n\u{2B1B} means letter is not in the word in any spot. "+
    "\n\u{1F7E8} means letter is in the word but in the wrong spot. "
    document.getElementById('resultLogo').classList.add("hidden")
    var box = document.getElementById('endContainer');
    box.style.display = 'block';
}

const closePopup = () => {
    var box = document.getElementById('endContainer');
    box.style.display = 'none';
}