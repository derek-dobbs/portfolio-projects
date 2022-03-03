"use strict";
$(document).ready(function () {
    $('#test-button-1').click(function (){
        alert("Test Button 1 was pressed.")
    });

    $.ajax("https://concrete-maple-mayflower.glitch.me/movies").done(function(data, status, jqXhr) {
        $('#loading-message').toggleClass('hidden');

        data.forEach(function (element, index) {
            $('#movie-card-1-container').append(
                `<div class="card">
                    <div class="card-body">
                        <h5 card-title>${element.title}</h5>

                        <p><img class="card-img-top" src="${element.poster}" alt=""></p>
                        <p class="card-text">${element.genre}</p>
                        <p class="card-text">${element.rating}</p>
                    </div>
                </div>`
            );//end movie-card-1-container append
        });//end data.forEach
    });//end ajax .done
}); //end document.ready