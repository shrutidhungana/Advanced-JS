// If in function you have taken your argument with rest operator and send an array in the argument it takes all the array as single argument. So,for it to be a multiple argument you need to call the function while providing argument using spread operator. Spread Operator is used in the time of calling and rest operator at the time of function declaration.

const sum2 = (name, ...args) => {
    
    document.write(`Hello ${name} :`)
    let sum2 = 0;
    for (let i in args) {
        sum2+= args[i]
    }
    let result2 = `${sum2}<br>`
    document.write(result2)
}
var arr = [10, 20, 30, 40]
var arr1 = [2,3,4,5,6,7,8]
sum2("Shruti", ...arr1)
sum2("Ram", ...arr)

// Spread operator can also be used in concatination such as if we have two array we can use them for concatination. with array

var arr4 = [10, 20, 30, 40];
var arr5 = [50, 60];
var arr6 = [...arr4, ...arr5, 45]
document.write(`${arr6}<br>`)

// Spread Operator can also be used with objects.

var obj1 = {
    name: "Shruti Dhungana"
}

var obj2 = {
    age: 22

}

var obj3 = { ...obj1, ...obj2 }

console.log(obj3)