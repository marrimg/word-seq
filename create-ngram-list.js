const createNGramList = function(text){
  var unit = 3;
  var allNGrams = {};
  if(!text.length) return allNGrams;
  text = text.toLowerCase();

  let wordList = text.replace(/[^0-9A-Za-z'’]+/g, ' ').replace(/[\r\n]/, ' ').split(' ');
  wordList = wordList.slice(0, wordList.length - 1);
  for(var wordCounter = 0; wordCounter < wordList.length - (unit - 1); wordCounter++){
      var sequence = '';

      for(var seqLength = 0; seqLength < unit; seqLength++){
        if(seqLength === unit - 1) {
          sequence += wordList[wordCounter + seqLength];
        } else {
          sequence += wordList[wordCounter + seqLength] + ' ';
        }
      }
      if( !(sequence in allNGrams) ){
        allNGrams[sequence] = 1;
      } else {
        allNGrams[sequence] += 1;
      }
  }
  sortedNGrams = {};
  const sortNGrams = Object.entries(allNGrams).sort((a, b) => b[1] - a[1]);
  const topHundredNGrams = sortNGrams.slice(0, 100).map(item => item.join(' - ')).join("\n");
  return topHundredNGrams;
}

module.exports = {
  createNGramList: createNGramList,
}