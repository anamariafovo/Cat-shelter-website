/*
    this function is called in the HTML element with class 'adoption-info'
    so when the user clicks on one adoption step, the modal opens with detailed information
*/
const openModal = (id) => {
    //get the modal that should open by its id and add the show class
    document.getElementById(id).classList.add('show')
}

/*
    this function is called directly in the HTML element with class modal
    when the modal is opened, if the user clicks anywhere on the screen, the modal is closed
*/
const closeModal = (event) => {
    //using the event target to get the modal that is opened so the user can remove the show class on click
    event.target.classList.remove('show');
}
