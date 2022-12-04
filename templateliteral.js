let user = "Shruti Dhungana"
document.write("Hello " + user + "<br>") //This is concatination 
document.write(`Hello ${user} <br>`) //This is template literal
 
var y = "10"
var x = "20"
let print = `"${y}"<br>${x}<br>`
document.write(print)
let users = "Ram"
let marks = 350;
let result = `Hello ${user} you have obtained ${marks}<br>`
document.write(result)

let firstName = "Shruti"
let lastName = "Dhungana"

function fullName(firstName, lastName) {
    return `${firstName} ${lastName}<br>`
}

let hello = `${fullName(firstName, lastName)}`
document.write(hello)


let surName = "Shruti Dhungana"
let result2 = `Hello ${surName}`
document.write(result2)