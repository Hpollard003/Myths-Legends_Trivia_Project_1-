// global variables//
document.addEventListener('DOMContentLoaded' , () => {

const collection = document.querySelector('.questions')
let scoredCorrectly = 1
let scoredIncorrectly = 1

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
    const option = document.querySelectorAll('.options')
    const newElement = document.createElement("ol")
    let options = [...data.incorrect_answers, data.correct_answer]
    options = shuffle(options)
    const answers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    newElement.innerHTML = `
    <div class="question border-white fab m-4 p-3 card bg-dark bg-gradient rounded-pill " style="width: 90rem" id="1">
    <p class="lead qTitle card-title fs-4 " id="q">${data.question}</p>  
    
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
    gallery.innerText = ' '
    collection.appendChild(newElement);
    // options.reverse()
    eventAnswers(data)
}

//shuffle correct answers(Special thanks to the creators of the Fisher-Yates (aka Knuth) Shuffle.)//
function shuffle(answers) {
    let currentIndex = answers.length, temporaryValue, randomIndex;

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
    const dropdown = document.getElementById('dropdown')
    const level = e.target.value
    fetchApis(level)
    collection.innerHTML = " "
})

//event listeners//
function eventAnswers(data) {
    const things = document.querySelectorAll('.questions')
    things.forEach(question => {
        question.addEventListener('click', (e) => {
            const value = e.target.innerText
            const nope = data.incorrect_answers
            const correct = document.querySelector('.correct')
            if (value == data.correct_answer) {
                correct.innerHTML = `
                <i class="far fa-thumbs-up fs-3" ></i> <h2 class='correct'>${scoredCorrectly++}</h2>
                `
                e.target.style.color = 'lime'
            }
            else if(value != data.correct_answer){
                const incorrect = document.querySelector('.incorrect')
                incorrect.innerHTML = `
                <i class="far fa-thumbs-down fs-3"></i> <h2>Mistakes Were Made</h2>
                `
            }

            let animamation = 0
            const newScore = document.querySelector('.score')
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

const gallery = document.querySelector('.gallery')
gallery.addEventListener('click' , () => {
    const images = document.querySelector('.images')
    images.innerHTML = `
    <img src="./assets/vulcan.jpg" class="img float-start ">
    <img src="./assets/hades.gif" class="img">
    <img src="./assets/raggy.gif" class="img float-end">
    <img src="./assets/loki.jpg" class="img float-start ">
    <img src="./assets/talos2.gif" class="img ">
    <img src="./assets/Ouroborus.jpg" class="img float-end">
    <img src="./assets/wendy.jpg" class="img float-start ">
    <img src="./assets/gm.gif" class="img ">
    <img src="./assets/bigboy.jpg" class="img float-end">
    <img src="./assets/yggdrasil.jpg" class="img float-start ">
    <img src="./assets/greekvase.gif" class="img ">
    <img src="./assets/zeus.gif" class="img float-end">
    `
})

})


