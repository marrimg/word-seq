const createNGramList = function(text){
  var unit = 3;
  var allNGrams = {};
  if(!text.length) return allNGrams;

  let wordList = text.toLowerCase().replace(/[^0-9A-Za-z'’.!]+|\r\n+/g, ' ').replace(/[.!]+/g, '').split(' ');
  for(var wordCounter = 0; wordCounter <= (wordList.length - unit); wordCounter++){
      const sequence = [];
      for(var seqLength = 0; seqLength < unit; seqLength++){
        sequence.push(wordList[wordCounter + seqLength]);
      }
      const stringSeq = sequence.join(' ');
      if( !(stringSeq in allNGrams) ){
        allNGrams[stringSeq] = 1;
      } else {
        allNGrams[stringSeq] += 1;
      }
  }
  return allNGrams;
}

const formatNGramList = (nGrams) => Object.entries(nGrams).sort((a, b) => b[1] - a[1]).slice(0, 100);

const convertListToString = (nGrams) => nGrams.map(item => item.join(' - ')).join("\n");

const outputNGramList = (text) => {
  const ngrams = createNGramList(text)
  const sortedNGrams = formatNGramList(ngrams);
  return convertListToString(sortedNGrams);
}

module.exports = {
  createNGramList: createNGramList,
  formatNGramList: formatNGramList,
  outputNGramList: outputNGramList
}