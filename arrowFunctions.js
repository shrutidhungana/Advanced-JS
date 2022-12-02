// Normal Function
let welcome = function (name) {
    return `Hello & Welcome ${name}`
}
welcome();

document.write(welcome("Shruti "))

// Arrow Function

let welcome1 = (surname) => {
    return `${surname}<br>`
}

welcome()

document.write(welcome1("Dhungana"))

/*If there is single line of code in arrow function you don't need return keyword and curly brackets. */

let welcome2 = (name, age) => `The name and age is ${name} and ${age}<br>`

welcome2()

document.write(welcome2("Shruti", 22))

// If you have only one argument to pass in the function you don't need parenthesis.

let welcome3 = name => `The name is ${name}<br>`

welcome3()

document.write(welcome3("Shruti"))
