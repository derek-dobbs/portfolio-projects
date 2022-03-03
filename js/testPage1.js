"use strict";
$(document).ready(function () {
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
            );
        });//end data.forEach
    });//end ajax .done

    let userDate;
    let userTime;
    let userTitle;
    let userContent

    $('#new-post-submit').click(function (event) {
        // $('#loading-message').toggleClass('hidden');
        event.preventDefault();

        userDate = $('#date-input').val();
        userTime = $('#time-input').val();
        userTitle = $('#title-input').val();
        userContent = $('#content-input').val();

        const userAdd = {date: userDate, time: userTime, title: userTitle, content:userContent};
        const url = 'https://amazing-nasal-juice.glitch.me/posts';
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userAdd),
        };
        fetch(url, options)
            .then(data => console.log(data))
            .catch( error => console.error(error));

        setTimeout(function () {
            // $('#loading-message').toggleClass('hidden');
            $('#post-container').empty();

            $.ajax("https://amazing-nasal-juice.glitch.me/posts").done(function(data, status, jqXhr) {
                $('#date-input').val('');
                $('#time-input').val('');
                $('#title-input').val('');
                $('#content-input').val('');

                data.forEach(function (element, index) {
                    $('#post-container').append(
                        `<div>
                    <h2>${element.date}</h2>
                    <p><strong>${element.time}</strong></>
                    <p><em>${element.title}</em></p>
                    <p>${element.content}</p>
                    <br>
                </div>`
                    );
                });
            });
        }, 3000);
    }); //end movie-add-button .click
}); //end document.ready