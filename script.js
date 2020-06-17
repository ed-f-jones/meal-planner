const search = document.getElementById('search');
const submit = document.getElementById('submit');
const random = document.getElementById('random');
const meals = document.getElementById('meals');
const resultHeading = document.getElementById('result-heading');
const single_mealEl = document.getElementById('single-meal');


// search meal and fetch from api
function searchMeal(e){
    e.preventDefault();

    // clear single meal
    single_mealEl.innerHTML ='';

    // get the earch term
    const term = search.nodeValue;
}

// event listeners
submit.addEventListener('submit', searchMeal);