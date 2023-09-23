// Отправка формы

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');

    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        disableErrorPopups();

        let canSend = formValidate();

        let formData = new FormData(form);

        if (canSend) {
            form.classList.add('_sending');
            response = await fetch('php/telegram.php', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                let result = await response.json();
                form.reset();
                form.classList.remove('_sending');
                alert(result.message);
            }
            else {
                form.classList.remove('_sending');
                alert("Не удалось отправить сообщение... Попробуйте позже");
            }
        }
    }

    function formValidate() {
        let canSend = true;
        let formReq = document.querySelectorAll('._req');

        for(let index = 0; index < formReq.length; index++) {

            let errorInElement = false;

            const input = formReq[index];
            formRemoveError(input);

            if (input.classList.contains('_email')) 
            {
                if (checkEmail(input)) {
                    errorInElement = true;
                }
            }

            else if(input.classList.contains('_phonenumber')) 
            {
                if (checkPhone(input)) {
                    errorInElement = true;
                }
            }

            else if(input.classList.contains('_name')) 
            {
                if (checkName(input)) {
                    errorInElement = true;
                }
            }

            if (errorInElement)
            {
                formAddError(input);
                canSend = false;

                let errPopup = input.nextElementSibling;
                if (errPopup.classList.contains('error_popup'))
                {
                    errPopup.style.display = "block";
                }
            }
        }

        return canSend;
    }

    function formAddError(input) {
        input.classList.add('_error');
    }

    function formRemoveError(input) {
        input.classList.remove('_error');
    }

    function disableErrorPopups() {
        let errPopups = document.querySelectorAll('.error_popup');

        for(let index = 0; index < errPopups.length; index++) {
            const errorPopup = errPopups[index];
            errorPopup.style.display = "none";
        }
    }

    function checkEmail(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }

    function checkPhone(input) {
        return !/^[\d\+][\d\(\)\ -]{4,14}\d$/.test(input.value);
    }

    function checkName(input) {
        return !/[а-яА-Яa-zA-Z]/.test(input.value);
    }
});