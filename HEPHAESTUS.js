// global variables
const mediumUrl = 'https://opentdb.com/api.php?amount=10&category=20&difficulty=medium&type=multiple'
const hardUrl = 'https://opentdb.com/api.php?amount=10&category=20&difficulty=hard&type=multiple'


//fetch for medium
const mediumQA = () => {
    fetch(mediumUrl)
    .then(resp => resp.json())
    .then(data => console.log(data))
} 
mediumQA()


//fetch for hard
const hardQA = () => {
    fetch(hardUrl)
    .then(resp => resp.json())
    .then(data => console.log(data))
}
hardQA()


//event listeners
//correct answer
//dropdown for selecting difficulty 
//popup
//render questions to webpage
