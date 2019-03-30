function testingLet () {
    let name = 'Rizwan';
    let fullName;
    console.log('name : ', name);
    if (true) {
        let name = 'Salman';
        console.log('name: ', name);
        let lastName = 'Jamal';
        console.log('lastName :', lastName);
        console.log('name :', name);
        // Normal String Concatenation
        console.log('fullName :', name + ' ' + lastName);
        // String Literals
        console.log('fullName :', `${name} ${lastName}`);
    }
    console.log('name: ', name);
}

function testingConstArray () {
    const names = ['mueed', 'moiz', 'talha'];
    names.push('sylvester', 'abrar');
    console.log('names :', names)
}

function testingStringLiterals() {
    let text = "This is my first paragraph \n This is second paragraph";
    console.log('text using Normal String Concatenation:', text);
    let text2 = `This is my first paragraph
    This is second paragraph`
    console.log('text2 using String Literals:', text2);
}


// let fullName = function (firstName, lastName) {
//     let fullName = `${firstName} ${lastName}`;
//     console.log('fullName :', fullName);
// }
let fullName = (firstName, lastName) => {
    let fullName = `${firstName} ${lastName}`;
    console.log('fullName :', fullName);
}

let showNames = (names) => {
    console.log('names :',  names);
    names.forEach((name) => {
        console.log('name :', name);
    })
};

// Single Paramater-> No need to add paranthesis
// Single Statement in body-> No need to add body brackets as well as return keyword
let name = name => name;

//In case of more than 1 parameters-> We need to add paranthesis
let fullName = (firstName,lastName) => {return `${firstName} ${lastName}`}

let names = ['mueed', 'moiz', 'talha'];

// Using Arrow Function
names.map(
    (name) => { 
        return `Student name is ${name}`
    })
// Using Arrow Function, but in a more consice code approach
names.map( name => `Student name is ${name}`)

///////////////Shallow Copy v/s Deep Copy/////////////////////
a = {name: "Talha", lastName: "Jamal"}
b = {name: "Talha", lastName: "Jamal"}
c = Object.assign({},a)
//c = {name: "Talha", lastName: "Jamal"}

c.name = 'Rizwan'
//c = {name: "Rizwan", lastName: "Jamal"}
//a = {name: "Talha", lastName: "Jamal"}
//b = {name: "Talha", lastName: "Jamal"}
a.lastName = 'Rehman'
//a = {name: "Talha", lastName: "Rehman"}
//b = {name: "Talha", lastName: "Rehman"}

//Using ES6 Spread Operator For Deep Copy//
a = {...b}
///////////////Shallow Copy v/s Deep Copy/////////////////////


///Spread Operator///
a = [1,2,3,4,5,6,7];
b = [...a, 8,9,10];

//Destructuring
var car = {
	name: 'Mira',
	model: 2019,
	color: 'Black'
}

let details = car => {
	//let name = car.name;
	//let model = car.model;
	//let color = car.color;
	let {name, model, color} = car
	console.log(name);
}

var showName = user => {
    // 	let name = firstName;
    // 	let lastname = lastName;
    
    let {name, lastName} = user; 
        console.log(name);
        console.log(lastName);
    }
    showName({name: 'Rizwan', lastName: 'Jamal'})

//Arrays 
var cars = ['Mira', 'Honda', 'BMW'];
[favouriteCar, secondFavourite, thirdFavourite] = cars

// testingLet();
// testingArray();
// testingStringLiterals();
// fullName('Rizwan', 'Jamal');
// showNames(['Mueed', 'Talha', 'Abrar'])
console.log(name('Rizwan'));