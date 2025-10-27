// JavaScript source code
const contactButton = document.getElementById('contact_form_show');
const cancelButton = document.getElementById('contact_form_cancel');
const submitButton = document.getElementById('contact_form_submit');
const contactForm = document.getElementById('contact_form');
const contentSection = document.getElementById('content_section');


contactButton.addEventListener('click', () => {
    contactForm.classList.toggle('hidden');
    contentSection.classList.toggle('hidden');
});
cancelButton.addEventListener('click', () => {
    contactForm.classList.toggle('hidden');
    contentSection.classList.toggle('hidden');
});