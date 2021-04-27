// global variables
const mediumUrl = 'https://opentdb.com/api.php?amount=10&category=20&difficulty=medium&type=multiple'
const hardUrl = 'https://opentdb.com/api.php?amount=10&category=20&difficulty=hard&type=multiple'


//fetch for medium
fetch(mediumUrl)
    .then(resp => resp.json())
    .then(data => renderMedium(data))
    .catch(error => console.error(error))

function renderMedium(data) {
    data.results.forEach(med => {
        renderMediumQ(med)})
}
function renderMediumQ(data){
    renderMediumA(data)
    const questions = data.question
    console.log(questions)
}
function renderMediumA(data) {
    console.log(data.correct_answer)
    console.log(data.incorrect_answers)
}

renderMedium()

//fetch for hard
// fetch(hardUrl)
//     .then(resp => resp.json())
//     .then(quiz => renderHard(quiz))
//     .catch(error => console.error(error))

// function renderHard(data) {
//     data.results.forEach(hard => {
//         renderHardQ(hard)})
//     }
// function renderHardQ(data){
//     const questions = data.question
//     console.log(questions)
//     }

// renderHardQ()
//event listeners
//correct answer
//dropdown for selecting difficulty 
//popup
//render questions to webpage
