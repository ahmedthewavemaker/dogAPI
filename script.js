'use strict';

function getDogImage(inputVal) {
    let dogApi = `https://dog.ceo/api/breeds/image/random/${inputVal}`;
    fetch(dogApi)
        .then(response => response.json())
        .then(responseJson => displayMany(responseJson));
}


function displayMany(responseJson) {
    console.log(responseJson);

    for (let i = 0; i < responseJson.message.length; i++) {

        $('.results-img').html(`<img src="${responseJson.message[i]}">`)
        $('.images').removeClass('hidden');
    }

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






