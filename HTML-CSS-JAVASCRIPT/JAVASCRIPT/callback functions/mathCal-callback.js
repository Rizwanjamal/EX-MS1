// USING REGULAR FUNCTION
//////////////////
function calc (val1, val2, action) {
    if (action == 'add') {
        return val1 + val2;
    }
    else if (action == 'multiply') {
        return val1 * val2
    }
}
calc (2,5,'add');
/////////////////


// USING CALLBACK FUNCTION
/////////////////
function calc (val1, val2, callback) {
	return callback(val1, val2)
}

function add(input1, input2) {
	return input1 + input2;
}


function multiply(input1, input2) {
	return input1 * input2;
}

calc(2, 5, multiply);
//////////////////