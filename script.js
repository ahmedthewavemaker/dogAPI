'use strict';

function getDogImage(inputVal) {
    let dogApi = `https://dog.ceo/api/breeds/image/random/${inputVal}`;
    fetch(dogApi)
        .then(response => response.json())
        .then(responseJson => displayMany(responseJson));

}


function displayMany(responseJson) {
    console.log(responseJson);
    let dogArray = responseJson.message;
    let display = getImages(dogArray);
    $('.results-img').html(display);
    $('.images').removeClass('hidden');


}

function getImages(dogArray) {
    let value = '';
    for (let i = 0; i < dogArray.length; i++) {
        value += `<img src="${dogArray[i]}" class="results-img">`
    }
    return value

}



function watchForm() {
    $('#number').submit(event => {
        event.preventDefault();
        let inputVal = $('#picNumber').val()
        getDogImage(inputVal);
    });
}



function getBreed(breed) {
    let dogApiBreed = `https://dog.ceo/api/breed/${breed}/images/random `;
    fetch(dogApiBreed)
        .then(response => response.json())
        .then(responseJson => displayOne(responseJson))
        .catch(() => alert('Something went wrong'));
}

function displayOne(responseJson) {
    console.log(responseJson);
    $('.results-img').html(
        `<img src="${responseJson.message}">`
    )
    $('.images').removeClass('hidden')

}

function breedSubmit() {
    $('#breed').submit(event => {
        let inputVal = $('#picBreed').val()
        event.preventDefault();
        getBreed(inputVal);

    })
}


$(function () {
    console.log('App loaded! Waiting for submit!');
    watchForm();
    breedSubmit();
});






