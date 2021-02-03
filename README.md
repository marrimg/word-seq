# Browser Agent Code Challenge
Outputs a list of the 100 most common three word sequences in the provided text.

# Dependencies
Uses Jest for testing.
# How to Run
You can pass one or more text files to the program as arguments, or pass text to stdin.

## Running With Arguments
From the root directory of the project, run `./word-seq.js [path to your file here]`.

I provided two .txt files in the project directory as mock data to make it easy to try the project.

You can run `./word-seq.js mock-text-1.txt mock-text-2.txt` to see the output of passing in both files.

## Running With StdIn input
From the root directory of the project, run `[your input here] | ./word-seq.js

I provided two .txt files in the project directory as mock data to make it easy to try the project.

You can run `cat mock-text-1.txt mock-text-2.txt | ./word-seq.js`  to see the output of passing in both files.

# Testing
Run `npm install` to install Jest. To run the tests, run `npm test`.

