const wordArray = [
    "Abstemious",
    "Accolade",
    "Adjudicate",
    "Adulate",
    "Agglutinate",
    "Alleluia",
    "Allochthonous",
    "Amorphous",
    "Anachronism",
    "Anathema",
    "Anodyne",
    "Antecedent",
    "Antithesis",
    "Apocryphal",
    "Arduous",
    "Asperity",
    "Ataraxy",
    "Auspicious",
    "Benign",
    "Beguile",
    "Beleaguer",
    "Bemuse",
    "Benevolent",
    "Blandishment",
    "Bombastic",
    "Bombinate",
    "Brevity",
    "Brouhaha",
    "Bucolic",
    "Cadence",
    "Capricious",
    "Carouse",
    "Castigate",
    "Cauterize",
    "Cerebral",
    "Chicanery",
    "Churlish",
    "Coalesce",
    "Complaisant",
    "Conflagration",
    "Congruous",
    "Consanguinity",
    "Contemplate",
    "Contrite",
    "Contumacious",
    "Convivial",
    "Corpulent",
    "Covetous",
    "Credulity",
    "Dearth",
    "Debacle",
    "Defenestrate",
    "Demagogue",
    "Demur",
    "Denouement",
    "Deride",
    "Desiccate",
    "Desuetude",
    "Diaphanous",
    "Diffidence",
    "Dilate",
    "Dilatory",
    "Disabuse",
    "Discomfit",
    "Disparate",
    "Dissension",
    "Dissonance",
    "Diversion",
    "Dour",
    "Dubious",
    "Ebullient",
    "Effervescent",
    "Egocentric",
    "Emanate",
    "Emollient",
    "Emulate",
    "Enervate",
    "Engender",
    "Enigma",
    "Ephemeral",
    "Equanimity",
    "Erudite",
    "Esoteric",
    "Eudaimonia",
    "Ethereal",
    "Exacerbate",
    "Exculpate",
    "Exigent",
    "Expiate",
    "Extemporaneous",
    "Extirpate",
    "Fervent",
    "Fervid",
    "Fervor",
    "Flaccid",
    "Flout",
    "Forbearance",
    "Frivolous",
    "Froward",
    "Fugacious"
  ];
  
let numWords = 12;
let wordList = generateWordList(wordArray, numWords);

// select the word list and add it to the DOM
const wordListElement = document.querySelector('.wordList');

// select the word list and add it to the DOM




  function generateWordList(words, numWords) {

    // Create an empty list to store the word list
    let wordList = [];
  
    // Create a copy of the words array
    let remainingWords = [...words];
  
    // Loop until we have generated the desired number of words
    while (wordList.length < numWords) {
      // Check if we have run out of words
      if (remainingWords.length === 0) {
        // If so, reset the remainingWords array to the original words array
        remainingWords = [...words];
      }
  
      // Generate a random index to pick a word from the list
      let index = Math.floor(Math.random() * remainingWords.length);
  
      // Add the word to the list
      wordList.push(remainingWords[index]);
  
      // Remove the word from the remainingWords array so it can't be chosen again
      remainingWords.splice(index, 1);
    }

    // Return the final list of words
    return console.log('this is the new 👉', wordList);
    // return wordListElement.innerHTML = wordList;
    // return wordList;

    
  }

// output wordlist to the page using innerHTML\
// wordListElement.innerHTML = wordList;






  
  