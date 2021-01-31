import { it } from '@jest/globals';
import createNGramList from 'create-ngram-list';
import { describe } from 'yargs';

// Unit tests

// The program outputs three word sequences.
describe('createNGramList', () => {
  it.skip('returns three word sequences', () => {});
  it.skip('does not return sequences that are not three words long', () => {});
  // The program ignores punctuation, line endings, and is case insensitive (e.g. “I love\nsandwiches.” should be treated the same as "(I LOVE SANDWICHES!!)"). Watch out that contractions aren't changed into 2 words (eg. shouldn't should not become shouldn t).
  it.skip('ignores punctuation', () => {});
  it.skip('preserves contractions', () => {});
  it.skip('ignores line endings', () => {});
  it.skip('is case insensitive', () => {});
});

// Acceptance tests

// The program outputs a list of the 100 most common three word sequences.

