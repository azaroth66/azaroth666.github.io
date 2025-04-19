"use strict";

/**
 * CWEB195 Final Project
 * Cameron Dufour
 * Aron Szabo
 * May 2024
 */


/**
 * helper method to validate form using bootstraps invalid-feedback class
 * @param event
 */
function validateForm(event) {
    event.preventDefault(); // required to prevent premature closing of modal

    let form = event.target;
    let isValid = true;

    if (form.checkValidity() === false) {
        isValid = false;
    }

    form.classList.add('was-validated');


    if (isValid) {
        form.submit();
    }
}