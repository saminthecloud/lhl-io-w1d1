const names = (process.argv.slice(2));

let firstName = returnTheFirstName(names);
printName(firstName);


// console.log(returnTheFirstName(names));

function returnTheFirstName(names) {
    return names[0];
}



function printName(name){
    console.log("My name is " + name);
}

// let printName = (name) =>{
//     console.log("My name is " + name);
// }

// printName(names[0])