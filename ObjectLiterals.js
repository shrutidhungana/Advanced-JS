let name = "Shruti Dhungana"
let course = "BTech";

var obj = {
    name: name,
    course: course,
}

console.log(obj)

// In object literals this can be declared only once as is no data is assigned.So, the above code becomes:

var obj1 = {
    name,
    course,
}

console.log(obj1)

//We can also use a variable as a property by the help of object literals.

let n = "Student";
let co = "course"

var obj2 = {
    [n + "name"]: "Shruti Dhungana",
    [co]: "cs",
    'detail show'() {
        return `${this.Studentname} ${this.course}`
    }
}

console.log(obj2['detail show']())

let name1 = "Shruti Dhungana"
let course1 = "CS"

function student() {
    return { name1, course1 } 
}

console.log(student(name, course))

let fName = "Shruti";
let lName = "Dhungana"
let course2 = "CS"

function student1(fName, lName, course2) {
    let fullName = fName + "" + lName;
    return (fullName, course2)
}

console.log(student1(fName,lName, course2))

