/* ADD TOGGLE NAVIGATION BUTTON FOR SMALL SCREEN MENU */

//get the navigation list in order to add or remove the show-list class when the toggle button is clicked
const navList = document.getElementById('nav-list');
//get the toggle button in order to add an event listener to it
const toggleBtn = document.getElementById('nav-toggle-button');

//show the menu when clicking the toggle button
//hide the menu when clicking the toggle button again
toggleBtn.addEventListener('click', () => {
    //add or remove the show-list class from the element with id 'nav-list'
    navList.classList.toggle('show-list');
});


/* ADD A SWITCH THEME (LIGHT/DARK) FUNCTIONALITY */

//get the theme switcher button
//this element contains the icon that will be displayed on theme switch (moon or sun)
const themeButton = document.getElementById('theme-switch-button');
//get the header element in order to change the theme for it too
const headerEl = document.getElementById('header');
/*
    check if the body currently has the dark theme
    if the body currently has the dark theme, this function will return true
    if not, it will return false
    this way we know if we should store the dark theme in the local storage or remove it
*/
const addTheDarkTheme = () =>
    document.body.classList.contains('dark-theme') ? true : false;
/* 
    get which theme icon we should show on click
    if the sun icon is currently displayed, and the theme button is clicked we should show the moon icon
    if the moon icon is currently displayed, and the theme button is clicked we should show the sun icon
*/
const getThemeIconToAdd = () => 
    themeButton.classList.contains('uil-sun') ? 'uil-moon' : 'uil-sun';
/*
    get which theme icon we should hide on click
    this function returns which theme icon is currently shown
    and which class should be removed from the themeButton element
*/
const getThemeIconToRemove = () =>
    themeButton.classList.contains('uil-sun') ? 'uil-sun' : 'uil-moon';
/*
    is these two local storage variables have a value we can get it here
    get the theme and icon from the local storage in case it exists
*/
const storedTheme = localStorage.getItem('stored-theme');
const storedThemeIcon = localStorage.getItem('stored-icon');
/*
    add an event listener to the themeButton element ('theme-switch-button')
    on click, toggle the theme icon and add or remove the dark-theme for the body and header
    also store the new theme and icon in the local storage variables
*/
themeButton.addEventListener('click', () => {
    const iconToAdd = getThemeIconToAdd();
    const iconToRemove = getThemeIconToRemove();
    //display the new icon
    themeButton.classList.add(iconToAdd);
    //hide the existent icon
    themeButton.classList.remove(iconToRemove);
    //toggle the dark theme for header and body
    document.body.classList.toggle('dark-theme');
    headerEl.classList.toggle('dark-theme-header');
    //create or update the variable called 'stored-theme' in the local storage
    //if the user switches to dark theme, the stored-theme variable gets the value 'dark'
    //if the user switches to light theme, it gets the value 'light'
    //this is maintained in the local storage in order to persist the chosen theme on refresh or page change
    localStorage.setItem('stored-theme', addTheDarkTheme() ? 'dark' : 'light');
    //create or update a local storage variable called 'stored-icon'
    //this gets the vale of the icon that is displayed on click
    localStorage.setItem('stored-icon', iconToAdd);
});
/*
    this check is done in order to maintain the chosen theme and theme icon on refresh or page change
    check if the storedTheme and storedThemeIcon are not null
*/
if (storedTheme && storedThemeIcon) {
    // check which theme is stored in the local storage
    // if the stored value is dark, add the dark theme for body and header
    // if not, remove the dark theme from body and header
    document.body.classList[storedTheme === 'dark' ? 'add' : 'remove']('dark-theme');
    headerEl.classList[storedTheme === 'dark' ? 'add' : 'remove']('dark-theme-header');
    //if the uil-sun icon is stored in local storage, add this class to the theme button in order to show the sun icon
    //if not, add the uil-moon class to the theme button in order to show the moon icon
    if(storedThemeIcon === 'uil-sun'){
        themeButton.classList.add('uil-sun');
        themeButton.classList.remove('uil-moon');
    }
}


/* ADD CURRENT YEAR FOR FOOTER */

//get the element with id 'date' from the footer
const date = document.getElementById('date');
/*
    set the innerHTML for the date element as the current year
    for this I used the built in JS date object 
*/
date.innerHTML = new Date().getFullYear();


/* ADD FUNCTIONALITY FOR THE SCROLL UP BUTTON */

//get the scroll up button element
const scrollUpButton = document.getElementById('scroll-up-button')
//add event listener
scrollUpButton.addEventListener('click', () => {
    //scroll to the top of the page
    window.scrollTo(0, 0)
})


