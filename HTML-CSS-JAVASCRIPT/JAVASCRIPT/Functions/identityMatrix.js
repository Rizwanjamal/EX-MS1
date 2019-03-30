function identity_matrix(input) {

    // this will be our output string
    var output = "";

    // lets use for loop inside for loop
    // in this way, outer loop will add new line as much as input number
    for (var i = 0; i < input; i++) {
        // inner loop fills the rows
        for (var j = 0; j < input; j++) {
            // if column number is equal to j, then create a "1",
            // else, create "0"
            if (i == j) {
                output += "1 ";
            } else {
                output += "0 ";
            }
				}
        output += '\n'
    }
    return output;
}