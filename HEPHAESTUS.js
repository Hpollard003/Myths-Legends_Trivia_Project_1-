// global variables
const apiUrl = 'https://opentdb.com/api.php?amount=10&category=20&difficulty=medium&type=multiple'



//fetch for api data
fetch(apiUrl)
    .then(resp => resp.json())
    .then(data => renderTrivia(data))
    .catch(error => console.error(error))

function renderTrivia(data) {
    data.results.forEach(dataArr => {
        renderTriviaQ(dataArr)})
}

function renderTriviaQ(data){
    const newElement = document.createElement("ul")
    const collection = document.getElementById('questions')
    const options = [...data.incorrect_answers,data.correct_answer] 
    newElement.innerHTML = `
    <div class="my-5" id="1">
    <p class="lead font-weight-heavy text-info" id="q1">Question
    <li class='text-white'>${data.question}</li></p>
    <div class="form-check my-3 text-info-50" id="c1">
        <input type="radio" name='q1' value="A" checked>
        <label class="form-check-label"> ${data.correct_answer} </label>
    </div>
    <div class="form-check my-3 text-info-50">
        <input type="radio" name='q1' value="B" >
        <label class="form-check-label"> ${options[0]}</label>
    </div>
    <div class="form-check my-3 text-info-50">
        <input type="radio" name='q1' value="C" >
        <label class="form-check-label"> ${options[1]} </label>
    </div>
    <div class="form-check my-3 text-info-50">
        <input type="radio" name='q1' value="D" >
        <label class="form-check-label"> ${options[2]} </label>
    </div>
</div>
    `
    collection.appendChild(newElement); 
}

//func renderRadio(questionObj) //including options and correct answer
    //radio = createElement(radio)
    //add html 
    ///radio.addEventListener(click) 
        //if(value == correct_answer){
           // correctCount++ 
           // event.target.className = 'correct'
//}

//on submit 
    //querySelectorAll (css suedo selector for selected radio buttons)
    // iterate over the node list, check for attribute indicting if it was corect or not
    //then apply css red or green for each element
    //render correctCount

//event listeners
//correct answer
//dropdown for selecting difficulty 
//on sumbit change ${difficulty} 
// const activities = document.getElementById('dropdownMenuButton');

// activities.addEventListener('click', (e) => {
//   console.log(e);
// });
//popup
//render questions to webpage
