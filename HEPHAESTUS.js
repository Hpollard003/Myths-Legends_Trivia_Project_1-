//dropdown for selecting difficulty 
//on sumbit change ${difficulty} 
const dropdown = document.getElementById('dropdown')
dropdown.addEventListener('click', () => {
    const btn = document.getElementById('dropdownMenuButton')
    

})






// global variables
const apiUrl = 'https://opentdb.com/api.php?amount=10&category=20&difficulty=medium&type=multiple'
const hard = 'hard'
const medium = 'medium'
//fetch for api data
fetch(apiUrl)
    .then(resp => resp.json())
    .then(data => renderTrivia(data))
    .catch(error => console.error(error))

function renderTrivia(data) {
    data.results.forEach(dataArr => {
        renderTriviaQnA(dataArr)})
}

function renderTriviaQnA(data){
    const newElement = document.createElement("ol")
    const collection = document.querySelector('.questions')
    const options = [...data.incorrect_answers,data.correct_answer]
    console.log(data.correct_answer)
    newElement.innerHTML = `
    <div class="fab my-4" id="1">
    <p class="lead font-weight-heavy text-info" id="q1">Question  
    <p class='text-white'>${data.question}</p></p>
    <div class="form-check my-3 text-info-50" id="c1">
        <input type="radio" name='q1' value="A" >
        <label class="form-check-label text-white"> ${options[2]} </label>
    </div>
    <div class="form-check my-3 text-info-50">
        <input type="radio" name='q1' value="B" >
        <label class="form-check-label text-white"> ${options[0]}</label>
    </div>
    <div class="form-check my-3 text-info-50">
        <input type="radio" name='q1' value="C" >
        <label class="form-check-label text-white"> ${options[3]} </label>
    </div>
    <div class="form-check my-3 text-info-50">
        <input type="radio" name='q1' value="D" >
        <label class="form-check-label text-white"> ${options[1]} </label>
    </div>
</div>
    `
    collection.appendChild(newElement); 
    return shuffle(options)
}

//shuffle correct answers(Special thanks to the creators of the Fisher-Yates (aka Knuth) Shuffle.)
// function shuffle(array) {
//     var currentIndex = array.length, temporaryValue, randomIndex;
  
//     // While there remain elements to shuffle...
//     while (0 !== currentIndex) {
  
//       // Pick a remaining element...
//       randomIndex = Math.floor(Math.random() * currentIndex);
//       currentIndex -= 1;
  
//       // And swap it with the current element.
//       temporaryValue = array[currentIndex];
//       array[currentIndex] = array[randomIndex];
//       array[randomIndex] = temporaryValue;
//     }
  
//     return array;
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

//event psteners
//correct answer

//popup
//render questions to webpage
