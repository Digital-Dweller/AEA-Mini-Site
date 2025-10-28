// JavaScript source code
const contactButton = document.getElementById('contact_form_show');
const cancelButton = document.getElementById('contact_form_cancel');
const submitButton = document.getElementById('contact_form_submit');
const contactForm = document.getElementById('contact_form');
const contentSection = document.getElementById('content_section');
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Toggle the contact form using the contact us or cancel buttons
contactButton.addEventListener('click', () => {
    contactForm.classList.toggle('hidden');
    contentSection.classList.toggle('hidden');
});
cancelButton.addEventListener('click', () => {
    contactForm.classList.toggle('hidden');
    contentSection.classList.toggle('hidden');
    contactForm.reset();
});
submitButton.addEventListener('click', (event) => {
    event.preventDefault();

    const first = document.getElementById("firstName").value.trim();
    const last = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    // Check if any input fields are empty and add a screen reader supported message to the live-region if they are
    if (first === "" || last === "" || email === "" || phone === "" || message === "") {
        document.querySelector('[aria-live="polite"]').textContent = "Please fill out all fields.";
    }
    // Check if email is a valid email and add a screen reader supported message to the live-region if not
    else if (!emailPattern.test(email)) {
        document.querySelector('[aria-live="polite"]').textContent = "Please enter a valid email address.";
    }
    // Check if the phone number is a valid and add a screen reader supported message to the live-region if not
    else if (phone.length != 14) {
        document.querySelector('[aria-live="polite"]').textContent = "Please enter a valid phone number.";
    }
    // Input has passed criteria, add a screen reader supported message to the live-region and clear the form
    else {
        document.querySelector('[aria-live="polite"]').textContent = "Message sent successfully!";
        contactForm.reset();
    }
});
// Auto format the phone number input
phone.addEventListener('input', (e) => {
    // Remove all non-digits
    let digits = e.target.value.replace(/\D/g, '');

    // Limit to 10 digits
    if (digits.length > 10) digits = digits.slice(0, 10);

    // Apply formatting
    // Add - after 6 digits
    if (digits.length > 6) {
        e.target.value = `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
    }
    // Add closing ) and space after 3 digits
    else if (digits.length > 3) {
        e.target.value = `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    }
    // Add ( to start of input when user starts typing
    else if (digits.length > 0) {
        e.target.value = `(${digits}`;
    } else {
        e.target.value = '';
    }
});
// Clear the contact form on page reload
document.addEventListener('DOMContentLoaded', () => {
    contactForm.reset();
});
