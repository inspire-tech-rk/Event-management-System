document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const guestCount = document.getElementById('guestCount');
    const guestNames = document.getElementById('guestNames');
    const foodPreference = document.getElementsByName('foodPreference');
    const otherFoodPreference = document.getElementById('otherFoodPreference');
    const allergies = document.getElementsByName('allergies');
    const allergyDetails = document.getElementById('allergyDetails');

    guestCount.addEventListener('change', function() {
        guestNames.innerHTML = '';
        for (let i = 1; i < this.value; i++) {
            const guestField = document.createElement('div');
            guestField.className = 'form-group';
            guestField.innerHTML = `
                <label for="guest${i}">Guest ${i} Name:</label>
                <input type="text" id="guest${i}" name="guest${i}" required>
            `;
            guestNames.appendChild(guestField);
        }
    });

    foodPreference.forEach(radio => {
        radio.addEventListener('change', function() {
            otherFoodPreference.style.display = this.value === 'Other' ? 'block' : 'none';
        });
    });

    allergies.forEach(radio => {
        radio.addEventListener('change', function() {
            allergyDetails.style.display = this.value === 'Yes' ? 'block' : 'none';
        });
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        if (validateForm()) {
            alert('Form submitted successfully!');
            // Here you would typically send the form data to a server
            console.log('Form data:', new FormData(form));
        }
    });

    function validateForm() {
        let isValid = true;
        // Add custom validation rules here
        // For example:
        if (guestCount.value > 1 && guestNames.querySelectorAll('input').length === 0) {
            alert('Please enter guest names.');
            isValid = false;
        }
        return isValid;
    }
});
