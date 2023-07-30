

const repeatString = function(string, number) {
let finalString = "";
    while (number > 0) {
        finalString += string
        number--
    }
    return finalString;
};

// Do not edit below this line
module.exports = repeatString;