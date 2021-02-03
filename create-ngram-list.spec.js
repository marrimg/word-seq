const {createNGramList, formatNGramList, outputNGramList } = require('./create-ngram-list');

// Unit tests

describe('createNGramList', () => {
  test('returns three word sequences', () => {
    const mockText = 'This is a test string';
    const expected = {'this is a': 1, 'is a test': 1, 'a test string': 1};
    expect(createNGramList(mockText)).toEqual(expected);
  });
  test('returns the correct frequency of three word sequences', () => {
    const mockText = "This is a test string a test string"
    const nGrams = createNGramList(mockText);
    expect(nGrams["this is a"]).toBe(1);
    expect(nGrams["a test string"]).toBe(2);
  });
  test('ignores punctuation', () => {
    const mockText = "This is a test. String! A test string!"
    expect(createNGramList(mockText)["a test string"]).toBe(2);
  });
  test('preserves contractions', () => {
    const mockText = "This isn't a test string"
    const expected = {"this isn't a": 1, "isn't a test": 1, "a test string": 1};
    expect(createNGramList(mockText)).toEqual(expected);
  });
  test('ignores line breaks', () => {
    const mockText = "This is a test string.\n A test string."
    expect(createNGramList(mockText)["a test string"]).toBe(2);
  });
  test('is case insensitive', () => {
    const mockText = "This is a test string A TEST STRING"
    expect(createNGramList(mockText)["a test string"]).toBe(2);
  });
});

describe('formatNGramList', () => {
  test('sorts the most frequent sequences to the top', () => {
    const mockText = "This is a test string a test string"
    const nGrams = createNGramList(mockText);
    expect(formatNGramList(nGrams)[0][0]).toEqual("a test string");
  });
  test('returns the top 100 sequences', () => {
    const mockText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur erat eu efficitur condimentum. Integer eu fermentum velit, a luctus sem. Proin laoreet enim nec lacus varius laoreet. Sed porta euismod lectus, non porta enim rhoncus et. Curabitur congue odio nec tortor finibus pharetra. In hac habitasse platea dictumst. Curabitur congue odio donec dapibus ipsum luctus suscipit maximus. Ut vitae sodales nisi, sed placerat neque. Praesent sit amet laoreet felis. Nulla ac aliquam velit, eget laoreet odio. Phasellus dictum, justo at pellentesque commodo, libero libero suscipit orci, ut vehicula nisl lorem at augue. In eu sollicitudin nulla. Vestibulum eget nunc eu augue commodo tristique. Suspendisse facilisis, nunc ac ultricies feugiat, felis sem rutrum.';
    const nGrams = createNGramList(mockText);
    expect(Object.keys(formatNGramList(nGrams)).length).toBe(100);
  });
});

describe(outputNGramList, () => {
  test('outputs a string with the format `sequence - frequency`', () => {
    const mockText = "This is test";
    expect(outputNGramList(mockText)).toEqual("this is test - 1");
  });
});
