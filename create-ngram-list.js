const createNGramList = function(text){
  var unit = 3;
  var allNGrams = {};
  if(!text.length) return allNGrams;

  // Remove punctuation and special characters, trim whitespace, and split the string into an array of words.
  let wordList = text.toLowerCase().replace(/[^\u00BF-\u1FFF\u2C00-\uD7FF\w'’".!]+|[\r\n]+/g, ' ').replace(/[.!"]+/g, '').trim().split(' ');

  // Loop through the arrray of words. For each word, build a three word sequence, starting with that word.
  for(var wordCounter = 0; wordCounter <= (wordList.length - unit); wordCounter++){
      const sequence = [];
      for(var seqLength = 0; seqLength < unit; seqLength++){
        sequence.push(wordList[wordCounter + seqLength]);
      }
      const stringSeq = sequence.join(' ');
      if( !(stringSeq in allNGrams) ){
        // If the allNGrams object does not contain the sequence,
        // add the sequence to the object with a tally of '1'.
        allNGrams[stringSeq] = 1;
      } else {
        // If the allNGrams object does contain the sequence,
        // increment the tally number for that sequence in the object.
        allNGrams[stringSeq] += 1;
      }
  }
  return allNGrams;
}

// Sort the sequences by tally count and return the top 100.
const formatNGramList = (nGrams) => Object.entries(nGrams).sort((a, b) => b[1] - a[1]).slice(0, 100);

// Convert the sequences to the format `sequence - frequency`
const convertListToString = (nGrams) => nGrams.map(item => item.join(' - ')).join("\n");

const outputNGramList = (text) => {
  const ngrams = createNGramList(text)
  const sortedNGrams = formatNGramList(ngrams);
  return convertListToString(sortedNGrams);
}

module.exports = {
  createNGramList: createNGramList,
  formatNGramList: formatNGramList,
  convertListToString: convertListToString,
  outputNGramList: outputNGramList
}