document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('marriageRegistrationForm');
    const ceremonyTypeRadios = document.getElementsByName('ceremonyType');
    const otherCeremonyTypeInput = document.getElementById('otherCeremonyType');
    const specialRitualsCheckbox = document.getElementById('specialRituals');
    const ritualsDescriptionTextarea = document.getElementById('ritualsDescription');
    const othersCheckbox = document.getElementById('others');
    const otherAssistanceInput = document.getElementById('otherAssistance');

    // Show/hide "Other" ceremony type input
    ceremonyTypeRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            otherCeremonyTypeInput.style.display = e.target.value === 'other' ? 'block' : 'none';
        });
    });

    // Show/hide special rituals description
    specialRitualsCheckbox.addEventListener('change', (e) => {
        ritualsDescriptionTextarea.style.display = e.target.checked ? 'block' : 'none';
    });

    // Show/hide other assistance input
    othersCheckbox.addEventListener('change', (e) => {
        otherAssistanceInput.style.display = e.target.checked ? 'block' : 'none';
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        if (validateForm()) {
            const formData = new FormData(form);
            const formObject = Object.fromEntries(formData.entries());
            
            // Handle multiple checkbox values for assistance
            formObject.assistance = formData.getAll('assistance');

            console.log('Form data:', formObject);
            alert('Form submitted successfully!');
            // Here you would typically send the data to your server
        }
    });

    function validateForm() {
        let isValid = true;
        const requiredFields = form.querySelectorAll('[required]');
        
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                showError(field, 'This field is required');
            } else {
                clearError(field);
            }
        });

        // Validate email fields
        const emailFields = [document.getElementById('email1'), document.getElementById('email2')];
        emailFields.forEach(field => {
            if (field.value && !isValidEmail(field.value)) {
                isValid = false;
                showError(field, 'Please enter a valid email address');
            }
        });

        return isValid;
    }

    function showError(field, message) {
        clearError(field);
        const errorElement = document.createElement('div');
        errorElement.className = 'error';
        errorElement.textContent = message;
        field.parentNode.insertBefore(errorElement, field.nextSibling);
    }

    function clearError(field) {
        const error = field.parentNode.querySelector('.error');
        if (error) {
            error.remove();
        }
    }

    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
