function sendEmail() {
    const name = $("#name");
    const email = $("#email");
    const subject = $("#subject");
    const message = $("#body");
    const formText = $('.contact__form-message');


    if (isNotEmpty(name) && isNotEmpty(email) && isNotEmpty(subject) && isNotEmpty(message)) {
        if (validateEmail(email)) {
            formText.text("Sending...")
            $.ajax({
                url: './sendEmail.php',
                method: 'post',
                data: {
                    name: name.val(),
                    email: email.val(),
                    subject: subject.val(),
                    body: message.val()
                },
                success: function (response) {
                    $('#myForm')[0].reset();
                    formText.text("Message sent!");

                },
                error: function (response) {
                    formText.text("Error! Try again");
                }
            })
        }
    }
}

function isNotEmpty(caller) {
    if (caller.val() == "") {
        caller.css('border', '1px solid red');
        return false;
    } else {
        caller.css('border', '');
        return true;
    }
}

function validateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail.val())) {
        return (true)
    }
    mail.css('border', '1px solid red')
    alert("You have entered an invalid email address!")
    return (false)
}

$(".button__contact").on("click", sendEmail);