// In rest operator we put argument we don't need in another variable and rest of the argument with rest operator(...)

function sum() {
    let sum = 0;
    for (let i in arguments) {
        sum+= arguments[i]
    }
    let result = `${sum}<br>`
    document.write(result)
}

sum(20, 30, 40)
sum(20, 30)

// Now rest operator comes to action when we have datatype other than the one to be calculated.
let sum1 =(name, ...args) =>{
    document.write(`Hello ${name} :`)
    let sum1 = 0;
    for (let i in args) {
        sum1+= args[i]
    }
    let result1 = `${sum1}<br>`
    document.write(result1)
}

sum1("Shruti", 2, 3)
sum1("Ram",20,30,40)
