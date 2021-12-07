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

function fullSession(question) {
    let answerArray2 = [];
    const welcomePromise = welcome();
    const goodbyePromise = goodbye();
    
    let sessionPromise = welcomePromise
    .then((welcomeMessage) => {
        answerArray2.push(welcomeMessage);
    })
    .then(() => {
        return getFortune(question);
    })
    .then((fortuneMessage) => {
        answerArray2 = answerArray2.concat(fortuneMessage);
    })
    .then(() => {
        return goodbyePromise;
    })
    .then((goodbyeMessage) => {
        answerArray2.push(goodbyeMessage);
    })
    .then(() => {
        return answerArray2;
    });
    
    return sessionPromise;

}

module.exports = { getFortune, fullSession };
