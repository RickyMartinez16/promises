const { welcome, goodbye, tell } = require("../utils/fortune-teller");

function getFortune(question) {
    let answerArray = [];
    let tellPromise = tell(question);
    return tellPromise
    .then((fortune) => {
        answerArray.push("Your question was: " + question);
        answerArray.push("Your fortune is: " + fortune);

        return answerArray;
    })
    .catch((error) => {
        return "There was an error: " + error; 
    });
}

function fullSession(question) {}

module.exports = { getFortune, fullSession };
