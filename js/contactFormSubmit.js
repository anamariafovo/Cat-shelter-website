/* ADD CONFIRMATION MESSAGE FOR THE CONTACT FORM */

//get the contact form element
const contactForm = document.getElementById('contact-form');
//get the confirmation message element
const confirmationMsg = document.getElementById('confirmation-message')

//add a confirmation message on submit 
contactForm.addEventListener('submit', (e) => {
    //prevent default so the page doesn't refresh immediately after clicking the submit button
    //using the event object for this
    e.preventDefault();
    //add confirmation message text to the element
    confirmationMsg.innerHTML = "Your message has been sent succesfully! Thank you!"
    //remove the message after 3 seconds
    setTimeout(function(){
        confirmationMsg.innerHTML = ""
    }, 3000);
})