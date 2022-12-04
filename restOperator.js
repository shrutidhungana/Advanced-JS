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
let product1 =(name, ...args) =>{
    document.write(`Hello ${name} :`)
    let product1 = 1;
    for (let i in args) {
        product1*= args[i]
    }
    let result1 = `${product1}<br>`
    document.write(result1)
}

product1("Shruti", 2, 3)
product1("Ram", 20, 30, 40)
 
const difference1 = (name, ...args) => {
    document.write(`Hello${name}:`)
    let difference1 = [...args];
    for (let i in args) {
        difference1-= args[i]
    }
    let result2 = `${difference1}<br>`
    document.write(result2) 
}

difference1("Shruti", 3 , 2)

