// global variables
const answers = ['C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C']
const btn = document.querySelector('.trivia-form')
const newScore = document.querySelector('.score')


//fetching the api data
function fetchApis(level){
fetch(`https://opentdb.com/api.php?amount=10&category=20&difficulty=${level}&type=multiple`)
    .then(resp => resp.json())
    .then(data => renderTrivia(data))
    .catch(error => console.error(error))
//render data from API
function renderTrivia(data) {
    data.results.forEach((dataArr, index) => {
        renderTriviaQnA(dataArr, index)
    })

}}
function renderTriviaQnA(data, index) {
    // console.log(index)
    const newElement = document.createElement("ol")
    newElement.innerHTML = ""
    const collection = document.querySelector('.questions')
    let options = [...data.incorrect_answers, data.correct_answer]
    // options = shuffle(options)
    //options.forEach()
        // create div, input and label
        // attach event listen to input 
        //input.addEventListener()
            //if(target.value == data.correct_answer)
                //correct++

    // console.log(data.correct_answer)
    const answers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    newElement.innerHTML = `
    <div class=" fab m-4 p-3 card bg-dark bg-gradient rounded" style="width: 80rem" id="1">
        <p class="lead font-weight-heavy text-success card-title" id="q1">${data.question}</p>  

        <div class="answer form-check my-3 " id="c1">
            <input type="radio" name='answer${answers[index]}' value="A" >
            <label class="form-check-label "> ${options[2]} </label>
        </div>
        <div class="answer form-check my-3 ">
            <input type="radio" name='answer${answers[index]}' value="B" >
            <label class="form-check-label "> ${options[0]} </label>
        </div>
        <div class="answer form-check my-3 ">
            <input type="radio" name='answer${answers[index]}' value="C" >
            <label class="form-check-label "> ${options[3]} </label>
        </div>
        <div class="answer form-check my-3 ">
            <input type="radio" name='answer${answers[index]}' value="D" >
            <label class="form-check-label "> ${options[1]} </label>
        </div>
    </div>
    `

    collection.appendChild(newElement);
    // options.reverse()
    // return shuffle(options)
}

//shuffle correct answers(Special thanks to the creators of the Fisher-Yates (aka Knuth) Shuffle.)
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

//event listeners
btn.addEventListener('submit', e => {
    const userA = [btn.answer1.value, btn.answer2.value, btn.answer3.value, btn.answer4.value, btn.answer5.value, btn.answer6.value, btn.answer7.value, btn.answer8.value, btn.answer9.value, btn.answer10.value];
    let score = 0;

    userA.forEach((answr, ind) => {
        if (answr === answers[ind]) {
            score += 10;
        }
    })
    e.preventDefault();
    // console.log(score)
    scrollTo(0, 0)

    let animamation = 0
    const stopWatch = setInterval(() => {
        newScore.innerHTML = `
    <span class='display-3 text-danger'>${animamation}% GOD!!!</span>
    `
        if (animamation === score) {
            clearInterval(stopWatch)
        } else {
            animamation++
        } 
    }, 50)


})
const click = document.getElementsByClassName('answer')





//dropdown for selecting difficulty 
//on sumbit change ${difficulty} 
const dropdown = document.getElementById('dropdown')

dropdown.addEventListener('change', (e) => {
    const level = e.target.value
    fetchApis(level)
})  
// let level    


//correct answer
//popup
//render questions to webpage

//func renderRadio(questionObj) //including options and correct answer
    //radio = createElement(radio)
    //add html 
    ///radio.addEventpstener(cpck) 
        //if(value == correct_answer){
           // correctCount++ 
           // event.target.className = 'correct'
//}
//qs all label correct
//on click lock radio
//on sumbit change color bg-success and bg-danger
//on submit 
    //querySelectorAll (css suedo selector for selected radio buttons)
    // iterate over the node pst, check for attribute indicting if it was corect or not
    //then apply css red or green for each element
    //render correctCount


