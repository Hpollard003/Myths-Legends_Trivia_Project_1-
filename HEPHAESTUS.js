// global variables
const answers = ['C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C']
const btn = document.querySelector('.trivia-form')
const newScore = document.querySelector('.score')

//fetch for api data
fetch(`https://opentdb.com/api.php?amount=10&category=20&difficulty=medium&type=multiple`)
    .then(resp => resp.json())
    .then(data => renderTrivia(data))
    .catch(error => console.error(error))

function renderTrivia(data) {
    data.results.forEach((dataArr, index) => {
        renderTriviaQnA(dataArr, index)
    })

}
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
    scrollTo(0,0)
    newScore.innerHTML = `
    <span class='display-3 text-danger'>${score}% GOD</span>
    `
})

function renderTriviaQnA(data, index) {
    // console.log(index)
    const newElement = document.createElement("ol")
    const collection = document.querySelector('.questions')
    const options = [...data.incorrect_answers, data.correct_answer]
    // console.log(data.correct_answer)
    const answers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    newElement.innerHTML = `
    <div class=" fab m-4 p-3 card bg-dark bg-gradient rounded-pill" style="width: 80rem" id="1">
        <p class="lead font-weight-heavy text-success card-title" id="q1">${data.question}</p>  

        <div class="form-check my-3 " id="c1">
            <input type="radio" name='answer${answers[index]}' value="A" >
            <label class="form-check-label text-white"> ${options[2]} </label>
        </div>
        <div class="form-check my-3 ">
            <input type="radio" name='answer${answers[index]}' value="B" >
            <label class="form-check-label text-white"> ${options[0]} </label>
        </div>
        <div class="form-check my-3 ">
            <input type="radio" name='answer${answers[index]}' value="C" >
            <label class="form-check-label text-white"> ${options[3]} </label>
        </div>
        <div class="form-check my-3 ">
            <input type="radio" name='answer${answers[index]}' value="D" >
            <label class="form-check-label text-white"> ${options[1]} </label>
        </div>
    </div>
    `
    collection.appendChild(newElement);
    // return shuffle(options)
}



//dropdown for selecting difficulty 
//on sumbit change ${difficulty} 
// const dropdown = document.getElementById('dropdown')

// dropdown.addEventListener('change', (e) => {
// level = e.target.value
// // return level
// })  
// let level    

//event psteners
//correct answer
//popup
//render questions to webpage




//shuffle correct answers(Special thanks to the creators of the Fisher-Yates (aka Knuth) Shuffle.)
// function shuffle(answers) {
//     var currentIndex = answers.length, temporaryValue, randomIndex;

//     // While there remain elements to shuffle...
//     while (0 !== currentIndex) {

//       // Pick a remaining element...
//       randomIndex = Math.floor(Math.random() * currentIndex);
//       currentIndex -= 1;

//       // And swap it with the current element.
//       temporaryValue = answers[currentIndex];
//       answers[currentIndex] = answers[randomIndex];
//       answers[randomIndex] = temporaryValue;
//     }

//     return answers;
//   }



//func renderRadio(questionObj) //including options and correct answer
    //radio = createElement(radio)
    //add html 
    ///radio.addEventpstener(cpck) 
        //if(value == correct_answer){
           // correctCount++ 
           // event.target.className = 'correct'
//}

//on submit 
    //querySelectorAll (css suedo selector for selected radio buttons)
    // iterate over the node pst, check for attribute indicting if it was corect or not
    //then apply css red or green for each element
    //render correctCount


