document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Gather form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        // Validate form
        if (validateForm(data)) {
            // If valid, you would typically send this data to your server
            console.log('Form submitted:', data);
            alert('Registration submitted successfully!');
            form.reset();
        }
    });

    function validateForm(data) {
        let isValid = true;

        // Basic validation
        if (!data.fullName.trim()) {
            alert('Please enter your full name.');
            isValid = false;
        }

        if (!data.contactNumber.trim()) {
            alert('Please enter your contact number.');
            isValid = false;
        }

        if (!data.purpose.trim()) {
            alert('Please enter the purpose of payment.');
            isValid = false;
        }

        if (!data.paymentMethod) {
            alert('Please select a payment method.');
            isValid = false;
        }

        if (!data.transactionId.trim()) {
            alert('Please enter the transaction ID.');
            isValid = false;
        }

        return isValid;
    }

    // You might want to add more sophisticated validation for email, phone number, etc.
});

