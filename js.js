// Initialise variables
var button = document.querySelector('#submit'); // Select the submit button by id
button.disabled = true; // Disables the button by default.
button.style.display = 'none';
var output = document.querySelector('#output');
var inputUsername = document.querySelector('#username'); // Selects the email input by the DOM
var inputPassword = document.querySelector('#password'); // Selects the password input by the DOM
var passwordStrength = document.querySelector('#passwordStrength'); // Selects password strength


// Regular expression for email: (3+ chars) + @ + (3+ chars) + dot + (2-3 chars)
const regexUsername = /^[a-zA-Z0-9]{3,}@[a-zA-Z0-9]{3,}.[a-zA-Z]{2,3}$/;
// Regular expression for password: (3+ chars) + @ + (3+ chars) + dot + (2-3 chars)
const regexHasEightChars = /^(?=^.{8,}$).*$/;
const regexPassword = /^(?=^.{12,}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).*$/;



// Listens to any inputs and calls the validateInputs() methode.
document.addEventListener('keyup', function (event) {
    button.disabled = validateInputs();
    validatePassword();

});


// Using a reverse validation. It always returns false (not invalid) until something is invalid (true).
function validateInputs() {
    let invalid = false;
    let message = '';
    // Checks if both input length are higher than 3 letters
    if (inputUsername.value.length < 3 || inputPassword.value.length < 3) {
        message += '<p>Username and password has to have at least 3 letters!</p>';
        invalid = true;
    }
    // Checks if username matches the regular expression
    if (!regexUsername.test(inputUsername.value)) {
        message += '<p>Username structure:  (3+ chars) + @ + (3+ chars) + "." + (2-3 chars)</p>';
        invalid = true;
    }
    // Checks if password has at least 8 chars
    if (!regexHasEightChars.test(inputPassword.value)) {
        message += '<p>Password needs to contain at least 8 characters</p>';
        invalid = true;
    }

    // Checks if password matches the regular expression
    // if (regexPassword.test(inputPassword.value)) {
    //     message += '<p>Password structure: lenght at least 12, Contains a digit. Contains an uppercase letter.
    //     Contains a lowercase letter.A character not being alphanumeric.</p>';
    // }

    // console.log(invalid);
    output.innerHTML = message;
    return invalid;
}

/**
 *  (?=^.{12,}$) - String is >= 12 chars
 (?=.*[0-9]) - Contains a digit
 (?=.*[A-Z]) - Contains an uppercase letter
 (?=.*[a-z]) - Contains a lowercase letter
 (?=.*[^A-Za-z0-9]) - A character not being alphanumeric.
 * */
function validatePassword() {
    let points = 0;
    // Regex
    const twelfChars = /^(?=^.{12,}$).*$/;
    const containsDigit = /^(?=.*[0-9]).*$/;
    const containsUppercase = /^(?=.*[A-Z]).*$/;
    const containsLowercase = /^(?=.*[a-z]).*$/;
    const alphanumeric = /^(?=.*[^A-Za-z0-9]).*$/;

    // Giving points for matching regex
    if (twelfChars.test(inputPassword.value)) {
        points++;
    }
    if (containsDigit.test(inputPassword.value)) {
        points++;
    }
    if (containsUppercase.test(inputPassword.value)) {
        points++;
    }
    if (containsLowercase.test(inputPassword.value)) {
        points++;
    }
    if (alphanumeric.test(inputPassword.value)) {
        points++;
    }

    // Set Strength
    if (points === 5) {
        setPasswordStrength('strong', 'green');
    } else if (points > 2) {
        setPasswordStrength('medium', 'yellow');
    } else {
        setPasswordStrength('Low', 'red');
    }
}

function setPasswordStrength(strenght, color) {
    passwordStrength.innerHTML = 'Password strenght: ' + strenght + '!';
    passwordStrength.style.color = color;
}






function showNextInputs() {
    // Check if input1 is filled
    var input1show = document.getElementById('name').value;

    if (input1Value.trim() !== '') {
        // If input1 is filled, show input2
        document.getElementById('surname').classList.remove('hidden');
    }

    // Check if input2 is filled
    var input2Value = document.getElementById('surname').value;

    if (input2Value.trim() !== '') {
        // If input2 is filled, show input3
        document.getElementById('adressline').classList.remove('hidden');
    }
}

