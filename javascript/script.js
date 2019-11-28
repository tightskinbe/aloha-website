document.addEventListener("DOMContentLoaded", function () {
    const emailForm = document.getElementById('form');


    emailForm.addEventListener('submit', function (event) {
        event.preventDefault()
        const emailBtn = document.getElementById('email').value;
        emailValue(emailBtn);
    })

    function emailValue(email) {
        if (email === '') {
            alert('Invalid Email');
        } else {
            alert('Thanks For Subscribing!');
        }
    }

});    //end of doc ready