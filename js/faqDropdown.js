/* CREATE DROPDOWN FUNCTIONALITY FOR FAQ SECTION */

//get the FAQ dropdown element
const faqDropdown = document.getElementById('faq-dropdown');
//get the FAQ dropdown icon
const dropdownButton = document.getElementById('dropdown-icon');
//get the FAQ list element which contains all the questions and answers
const faqList = document.getElementById('faq-list');

//get the current icon class contained into the dropdown button
const getCurrentDropdownIcon = () => 
    dropdownButton.classList.contains('uil-arrow-down') ? 'uil-arrow-down' : 'uil-arrow-up';

//get which icon we should show after click
const getDropdownIconToAdd = () => 
    dropdownButton.classList.contains('uil-arrow-down') ? 'uil-arrow-up' : 'uil-arrow-down';

/*
    add an event listener to the FAQ element
    the dropdown button is switched between arrow up and arrow down
    the FAQ list is opened or closed
*/
faqDropdown.addEventListener('click', () => {
    const iconToAdd = getDropdownIconToAdd();
    const iconToRemove = getCurrentDropdownIcon();
    //add the new icon
    dropdownButton.classList.add(iconToAdd);
    //remove the existent icon
    dropdownButton.classList.remove(iconToRemove);
    //toggle the show-list class for the faq list element
    faqList.classList.toggle('show-list');
})

/*
    open the answer when the user clicks on a question
    this function is called inside the HTML question element and sends the answer id
    we get the answer id associated with the clicked question
    the answer is opened or closed on click
*/
const openAnswer = (answerId) => {
    document.getElementById(answerId).classList.toggle('show-answer')
}