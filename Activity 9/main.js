document.addEventListener('DOMContentLoaded', function () {

    const form = document.getElementsByTagName('form')[0];
    form.addEventListener('submit', function (event) {

        event.preventDefault();

        const name = document.getElementsByName('name').value;
        const surnames = document.getElementsByName('surnames').value;
        const DNI = document.getElementsByName('DNI').value;


        const userName = document.getElementsByName('userName').value;
        const password = document.getElementsByName('password').value;
        const passwordAgain = document.getElementsByName('passwordAgain').value;

        let isValid = true;
        let errorMessage = "7 palabras: ESENCIA";

        if (!/^[A-Z]/.test(name)) {
            isValid = false;
            errorMessage += "Aprende a escribir analfabeto.\n";
        }
        if (!/^[A-Z]/.test(surnames)) {
            isValid = false;
            errorMessage += "Usted no aprende ¿verdad?.\n";
        }
        if (!/[0-9][A-Z]{9}/.test(DNI)) {
            isValid = false;
            errorMessage += "Ni tu DNI te sabes que triste.\n";
        }



    });
});