const x = parseInt(process.argv[2], 10);

if (!process.argv[2]) {
    console.log("Missing number of occurrences");
} else if (x > 0) {
    let output = "";
    for (let i = 0; i < x; i++) {
        output += "C is fun\n";
    }
    console.log(output.slice(0, -1)); // removes last extra newline
} else {
    // Do nothing for zero or negative numbers
}


