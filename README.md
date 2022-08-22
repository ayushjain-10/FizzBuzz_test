# Fizz Buzz Unit Tests

The goal of this project is to write unit tests for Fizz Buzz using Jest.

## Background

The contents of this repo contain an implementation of the Fizz Buzz program. You may have heard of Fizz Buzz before. This program counts to any value. Along the way it counts values that are multiples of 3 as `fizz` and values that are multiples of 5 as `buzz`. When a number is a multiple of 3 and 5 it counts this as a `fizzbuzz`. 

Call `fizzbuzz(count)` function inlcude a count and the function returns an object with the the counts of fizz, buzz, and fizzbuzz. 

Typical output might look like:  

`{ count: 100, fizz: 27, buzz: 14, fizzBuzz: 6 }`

The program has been broken down into several functions and a couple constants. 

You can test the code with node by running: 

`node index.js`

`index.js` contains a simple program that uses fizzbuzz functions.

## Getting started 

- Download or Clone this repo
- Navigate the terminal to the project directory
- `npm init -y`
- `npm install --save-dev jest`
- `mkdir tests`
- `touch tests/test.js`

Edit `package.json`: 

```json
"scripts": {
  "test": "jest"
}
```

Write your tests in `tests/test.js`. 

Run your tests with: 

`npm run test`

## Challenges 

**Challenge 1** - Write a test for each of the constants. These should test be equal to the their string namesakes. 

**Challenge 2** - Test the `isFizzy(n)` function. This takes a number and returns true if the number is divisible by 3. Prove this with a unit test!

**Challenge 3** - Test the `isBuzzy(n)` function. This function takes n as a parameter and returns true if the number is divisible by 5. Prove this with a unit test. 

**Challenge 4** - Test the `fizzyBuzzy(n)` function. This function takes the parameter n and returns a string, 'fizz' if `n` is divisble by 3, 'buzz' if `n` is divisble by 5, and `fizzbuzz` if divisible by both 3 and 5. 

Note! in this case the string values should match the constant values `FIZZ`, `BUZZ` and `FIZZBUZZ`.

**Challenge 5** - Test the `fizzBuzz(count)` function. This function takes a Number `count` and returns an Object with details about the fizzy and buzziness of the `count`. 

You should test all of the properties in returned object. 

**Stretch Challenge 6** - Refactor the fizz buzz code. Take a look at make any changes you think would make the code more effiecient. Use your unit tests to make sure the code still works as expected. 

**Stretch Challenge 7** - Parameterize the `fizzbuzz()` function. Currently the function looks for multiples of 3 and 5. The code here would be more useful if we could look for multiples of any two values. Imagine fizz for multiples of 2 and buzz for multiples of 7. 

The fizzbuzz functio might look like this: 

`fizzBuzz(count, fizzOn = 3, buzzOn = 5)`
