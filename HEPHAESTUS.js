// global variables//
const click = document.getElementsByClassName('answer')
const collection = document.querySelector('.questions')
const btn = document.querySelector('.trivia-form')
const newScore = document.querySelector('.score')
const things = document.querySelectorAll('.questions')
const option = document.querySelectorAll('.options')
const correct = document.querySelector('.correct')
const incorrect = document.querySelector('.incorrect')
let scoredCorrectly = 1
let scoredIncorrectly = 1
const dropdown = document.getElementById('dropdown')

//fetching the api data//
function fetchApis(level) {
    fetch(`https://opentdb.com/api.php?amount=10&category=20&difficulty=${level}&type=multiple`)
        .then(resp => resp.json())
        .then(data => renderTrivia(data))
        .catch(error => console.error(error))
    //render data from API
    function renderTrivia(data) {
        data.results.forEach((dataArr, index) => {
            renderTriviaQnA(dataArr, index)
        })

    }
}
function renderTriviaQnA(data, index) {
    // console.log(index)
    const newElement = document.createElement("ol")
    let options = [...data.incorrect_answers, data.correct_answer]
    options = shuffle(options)
    const answers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    newElement.innerHTML = `
    <div class="question border-white fab m-4 p-3 card bg-dark bg-gradient rounded-pill " style="width: 80rem" id="1">
    <p class="lead qTitle card-title fs-4" id="q">${data.question}</p>  
    
    <div class="answer form-check my-3 " id="c1">
    <ul type="block" name='answer${answers[index]}'>
    <label class="options "> ${options[2]} </label></ul>
    </div>
    <div class="answer form-check my-3 ">
    <ul type="block" name='answer${answers[index]}'>
    <label class="options "> ${options[0]} </label></ul>
    </div>
    <div class="answer form-check my-3 ">
    <ul type="block" name='answer${answers[index]}'>
    <label class="options "> ${options[3]} </label></ul>
    </div>
    <div class="answer form-check my-3 ">
    <ul type="block" name='answer${answers[index]}'>
    <label class="options "> ${options[1]} </label></ul>
    </div>
    </div>
    `
    collection.appendChild(newElement);
    // options.reverse()
    eventAnswers(data)
}

//shuffle correct answers(Special thanks to the creators of the Fisher-Yates (aka Knuth) Shuffle.)//
function shuffle(answers) {
    var currentIndex = answers.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = answers[currentIndex];
        answers[currentIndex] = answers[randomIndex];
        answers[randomIndex] = temporaryValue;
    }

    return answers;
}

//dropdown for selecting difficulty//
dropdown.addEventListener('change', (e) => {
    const level = e.target.value
    fetchApis(level)
    collection.innerHTML = " "
})

//event listeners//
function eventAnswers(data) {

    things.forEach(question => {
        question.addEventListener('click', (e) => {
            const value = e.target.innerText
            const nope = data.incorrect_answers

            if (value == data.correct_answer) {
                correct.innerHTML = `
                Correct Answers  <i class="far fa-thumbs-up"></i> <h2 class='correct'>${scoredCorrectly++}</h2>
                `
                e.target.style.color = 'lime'
            }
            else {
                incorrect.innerHTML = `
                Incorrect Answers  <i class="far fa-thumbs-down"></i> <p>Do exist</p>
                `
            }

            let animamation = 0
            const stopWatch = setInterval(() => {
                newScore.innerHTML = `
    <span class='display-3 text-primary'>${animamation}% GOD!!!</span>
    `
                if (animamation === (scoredCorrectly - 1) * 10) {
                    clearInterval(stopWatch)
                } else {
                    animamation++
                }
            }, 50)
        })
    })
}




