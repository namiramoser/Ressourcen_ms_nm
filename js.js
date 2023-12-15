function showProducts() {
    const selectedCategory = document.getElementById('category').value;
    const productContainers = document.querySelectorAll('.productContainer');

    productContainers.forEach(container => {
        container.style.display = 'none';
    });

    const selectedContainer = document.getElementById(`category${selectedCategory.toLowerCase()}`);
    if (selectedContainer) {
        selectedContainer.style.display = 'block';
    }
}
function validateAndShowConfirmation() {
    validateForm(); // Validate the form
    showReservationConfirmation(); // Show confirmation if the information is correct
}
function validateForm() {
    const category = document.getElementById('category').value;
    const product = document.getElementById(`product${category}`).value;
    const quantity = document.getElementById('itemcount').value;
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;
    const agreeTerms = document.getElementById('agreeTerms');

    // Add date and checkbox validation logic here

    const notification = document.getElementById('notification');
    const submitButton = document.getElementById('submit');

    if (category === 'Invalid' || product === 'Invalid' || !/^[1-9]\d*$/.test(quantity) || !startDate || !endDate || !agreeTerms.checked) {
        notification.textContent = 'Please fill in necessary information and agree to the terms.';
        submitButton.disabled = true;
    } else {
        notification.textContent = '';
        submitButton.disabled = false;
    }
}

function showReservationConfirmation() {
    const category = document.getElementById('category').value;
    const product = document.getElementById(`product${category}`).value;
    const quantity = document.getElementById('itemcount').value;
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;

    // Add logic to use startDate and endDate in your confirmation message or further processing

    if (category !== 'Invalid' && product !== 'Invalid' && /^[1-9]\d*$/.test(quantity) && startDate && endDate) {
        alert("Thank you for your reservation! You will get a confirmation email soon.");
    }
}
