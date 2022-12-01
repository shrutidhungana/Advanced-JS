// Var
var a = 10;
var a = 20; //can be redeclared
a = 30; //can be reassigned
document.write(a)

//let 
let b = "Hello"
// let b = "World" cannot redeclare in let
 b = "wow" //can be reassign
document.write(b)

//const
const c = 20;
// const c = 30; cannot be redeclared 
// c = 40; cannot be reassign
document.write(20)

if (1 == 1) {
    let d = "Hello"
    document.write(d)
}
//Let has block level scope i.e. it cannot be accessed outside the block like if or any loop or switch case

for (var e= 0; e < 5; e++){
    document.write(e + "<br>")
}

document.write(e)
// var has global level scope i.e. it can be accessed outside the block