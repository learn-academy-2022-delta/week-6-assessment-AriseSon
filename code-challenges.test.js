// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

describe ("whoAreU", () => {
  it ("Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized", () => {

const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

expect (whoAreU(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])

  })
})

// b) Create the function that makes the test pass.

// Create a function name whoAreU
// Create a variable name capthat, capThat will return the updated values of the names in people 
// Use .map to iterate through people 
// Use .toLowerCase to lower case all the letters in name: 
// Use .split to separate string in name:
// Use .map to iterate the words in name:, .chartAt index [0] .toUpperCase the letter in each string in name:
// Use .substring index [1] to stop the .toUpperCase from capitalizing the whole word, then use the .join to bring the string together 
// Return capThat with `is ${value.occupation} to add the occupation:

function whoAreU (array) {
  return array.map(value => {
    var capThat = (value.name).toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(' ')
    return capThat + " " + `is ${value.occupation}.`
  })
}
console.log(whoAreU(people))
// console.log([
//   'Ford Prefect is a hitchhiker.',
//   'Zaphod Beeblebrox is president of the galaxy.',
//   'Arthur Dent is a radio employee.'
//])



// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

describe ("byThree", () => {
  it ("Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.", () => {
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    // Expected output: [ 2, 0, -1, 0 ]
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
    // Expected output: [ 2, 1, -1 ]

    expect (byThree(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect (byThree(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})

// b) Create the function that makes the test pass.

// Create a function name byThree
// Create a variable name numberMe that contains the numbers of hodgepodge1
// Use .filter to return the numbers in hodgepodge1
// Create a variable name valueMe that contains only numbers that have the remainder of three from numberMe
// Use .map to iterate numberMe to return only numbers that have the remainder of three

function byThree (array) {
 numberMe = array.filter((element) => typeof element === "number")
 valueMe = numberMe.map(value => value % 3)
  return valueMe
}   
console.log(byThree(hodgepodge1))
//console.log(byThree([ 2, 0, -1, 0 ]))
console.log(byThree(hodgepodge2))
//console.log(byThree([ 2, 1, -1 ]))



// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

describe ("iceCube", () => {
  it ("Create a function that takes in an array of numbers and returns the sum of all the numbers cubed", () => {

    const cubeAndSum1 = [2, 3, 4]
    // Expected output: 99
    const cubeAndSum2 = [0, 5, 10]
    // Expected output: 1125

    expect (iceCube(cubeAndSum1)).toEqual(99)
    expect (iceCube(cubeAndSum2)).toEqual(1125)
  })
})

// b) Create the function that makes the test pass.

// Create a function name iceCube
// Create a variable name ice that will contain the values of cubeAndSum1 multiply by itself twice
// Use .map to multiple each value in cubeAndSum1 by itself twice
// Create a variable name cube to reduce the array to a single value

function iceCube (array) {
  ice = array.map(value => value * value * value)
  cube = ice.reduce((x, y) => x + y)
  return cube
}
console.log(iceCube(cubeAndSum1))
//console.log(iceCube(99))
console.log(iceCube(cubeAndSum2))
//console.log(iceCube(1125))

