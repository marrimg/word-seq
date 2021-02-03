#!/usr/bin/env node
const fs = require('fs');
const { outputNGramList } = require('./create-ngram-list');

const arguments = process.argv.slice(2);
let text = '';

arguments.forEach(item => {
  try {
    const data = fs.readFileSync(`${item}`, 'utf8');
    text += data;
  } catch (err) {
    console.error(err)
  }
});

const nGrams = outputNGramList(text);
console.log(nGrams);