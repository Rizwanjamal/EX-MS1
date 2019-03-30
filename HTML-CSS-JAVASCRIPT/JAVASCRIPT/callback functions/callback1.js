function displayGreeting(firstName, lastName, callback){
	var fullName = firstName +' '+ lastName;
	callback(fullName)
}

function showMessage(name) {
	console.log('Hello ', name);
}

displayGreeting("Rizwan", "Jamal", showMessage);