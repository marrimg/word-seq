# Browser Agent Code Challenge
Outputs a list of the 100 most common three word sequences in the provided text, sorted from most to least common.

For example, the string "This is a test string a test string" returns:

---

a test string - 2
this is a - 1
is a test - 1
test string a - 1
string a test - 1

---

# Dependencies
Uses Jest for testing.

# How to Run
You can pass one or more text files to the program as arguments, or pass text to stdin.

### Running With Arguments
From the root directory of the project, run `./word-seq.js path/to/your-file.txt`. This can accept multiple files.

### Running With Stdin input
From the root directory of the project, run `[your input here] | ./word-seq.js.` For example, you can run `cat path/to/your-file.txt | ./word-seq.js` or `cat <<< "This is some text" | ./word-seq.js`

# Testing
Run `npm install` to install the Jest dependency. To run the tests, run `npm run test`.

# What would I do next, given more time?
- Use streams instead of `readFileSync`
- Try processing the sequences in chunks instead of all at once
- Implement more thorough error handling

# Extra Credit
Unicode characters are included. For example, `cat <<< "Sie aßen süßen Kuchen"` returns:
---
sie aßen süßen - 1
aßen süßen kuchen - 1
---
