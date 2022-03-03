"use strict";
$(document).ready(function () {
    $('#test-button-1').click(function (){
        alert("Test Button 1 was pressed.")
    });

    $.ajax("https://amazing-nasal-juice.glitch.me/posts").done(function(data, status, jqXhr) {
        // $('#loading-message').toggleClass('hidden');

        data.forEach(function (element, index) {
            $('#post-container').append(
                `<div>
                    <h2>${element.date}</h2>
                    <p><strong>${element.time}</strong></>
                    <p><em>${element.title}</em></p>
                    <p>${element.content}</p>
                    <br>
                </div>`
            );//end movie-card-1-container append



        });//end data.forEach
    });//end ajax .done
}); //end document.ready