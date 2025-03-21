document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const teamType = document.getElementsByName('teamType');
    const teamDetails = document.getElementById('teamDetails');

    // Show/hide team details based on selection
    teamType.forEach(function(radio) {
        radio.addEventListener('change', function() {
            if (this.value === 'Team') {
                teamDetails.style.display = 'block';
            } else {
                teamDetails.style.display = 'none';
            }
        });
    });

    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Basic form validation
        const requiredFields = form.querySelectorAll('[required]');
        let isValid = true;

        requiredFields.forEach(function(field) {
            if (!field.value.trim()) {
                isValid = false;
                field.style.borderColor = 'red';
            } else {
                field.style.borderColor = '';
            }
        });

        if (isValid) {
            // Here you would typically send the form data to a server
            // For this example, we'll just log it to the console
            console.log('Form submitted successfully!');
            alert('Registration submitted successfully!');
            form.reset();
        } else {
            alert('Please fill in all required fields.');
        }
    });
});

