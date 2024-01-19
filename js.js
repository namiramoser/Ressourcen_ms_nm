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



document.addEventListener("DOMContentLoaded", function () {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });

        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }

    const categoryDropdown = document.getElementById('category');
    categoryDropdown.addEventListener('change', showProducts);

    // Füge Event Listener für Bearbeiten und Löschen hinzu
    const editButtons = document.querySelectorAll('.editReservation');
    const deleteButtons = document.querySelectorAll('.deleteReservation');

    editButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            const reservationId = event.target.getAttribute('data-reservation-id');
            editReservation(reservationId);
        });
    });

    deleteButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            const reservationId = event.target.getAttribute('data-reservation-id');
            deleteReservation(reservationId);
        });
    });
});

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

function togglePanel(panelId) {
    var panel = document.getElementById('panel' + panelId);
    if (panel.style.display === 'block') {
        panel.style.display = 'none';
    } else {
        panel.style.display = 'block';
    }
}

function editReservation(reservationId) {
    alert('Reservation ' + reservationId + ' bearbeiten');
    // Hier kannst du die spezifische Bearbeitung für die Reservation implementieren
    // Zum Beispiel könntest du ein Formular anzeigen, das es dem Benutzer ermöglicht, die Details zu ändern.
}

function deleteReservation(reservationId) {
    var confirmDelete = confirm('Möchtest du die Reservation wirklich löschen?');
    if (confirmDelete) {
        // Hier den tatsächlichen Löschvorgang durchführen
        alert('Reservation ' + reservationId + ' gelöscht');
        const reservationElement = document.getElementById('reservation' + reservationId);
        reservationElement.remove();
    }
}
// JavaScript-Teil
function editReservation(reservationId) {
    const reservationElement = document.getElementById('reservation' + reservationId);
    const panel = reservationElement.querySelector('.panel');
    const editForm = panel.querySelector('.edit-form');

    // Formular sichtbar machen
    editForm.style.display = 'block';
}

function saveChanges(reservationId) {
    const reservationElement = document.getElementById('reservation' + reservationId);
    const panel = reservationElement.querySelector('.panel');
    const editForm = panel.querySelector('.edit-form');

    // Hier kannst du die eingegebenen Informationen aus dem Formular abrufen und verwenden
    const newDate = editForm.querySelector('#newDate').value;
    const newQuantity = editForm.querySelector('#newQuantity').value;

    // Hier kannst du die Informationen speichern oder die Anzeige aktualisieren
    const infoParagraph = panel.querySelector('p');
    infoParagraph.innerHTML = `Ausgelehnt: Kamera <br>
                               Datum: ${newDate} <br>
                               Anzahl: ${newQuantity} <br>
                               Schüler: Schüler 1`;

    // Formular ausblenden, nachdem die Änderungen gespeichert wurden
    editForm.style.display = 'none';
}

// JavaScript-Teil
function editProfile() {
    document.getElementById('displayDetails').style.display = 'none';
    document.getElementById('editForm').style.display = 'block';

    document.getElementById('editName').value = document.getElementById('displayName').innerText;
    document.getElementById('editAge').value = document.getElementById('displayAge').innerText;
    document.getElementById('editGender').value = document.getElementById('displayGender').innerText;
    document.getElementById('editEmail').value = document.getElementById('displayEmail').innerText;
    document.getElementById('editAddress').value = document.getElementById('displayAddress').innerText;
    document.getElementById('editClass').value = document.getElementById('displayClass').innerText;
    document.getElementById('editReservations').value = document.getElementById('displayReservations').innerText;
    document.getElementById('editGeburtstag').value = document.getElementById('displayGeburtstag').innerText;
    // Passwörter sollten nicht vorab im Formular angezeigt werden
}

function saveChanges() {
    document.getElementById('displayName').innerText = document.getElementById('editName').value;
    document.getElementById('displayAge').innerText = document.getElementById('editAge').value;
    document.getElementById('displayGender').innerText = document.getElementById('editGender').value;
    document.getElementById('displayEmail').innerText = document.getElementById('editEmail').value;
    document.getElementById('displayAddress').innerText = document.getElementById('editAddress').value;
    document.getElementById('displayClass').innerText = document.getElementById('editClass').value;
    document.getElementById('displayReservations').innerText = document.getElementById('editReservations').value;
    document.getElementById('displayGeburtstag').innerText = document.getElementById('editGeburtstag').value;
    // Passwortänderung sollte sicherheitshalber auf dem Server überprüft werden

    document.getElementById('editForm').style.display = 'none';
    document.getElementById('displayDetails').style.display = 'block';
}


