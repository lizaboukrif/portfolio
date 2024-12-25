var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }

    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

//-------------------------------responsive----------------------------------------
var sidemenu = document.getElementById("sidemenu");
var hamburgerMenu = document.querySelector("nav i.fa-bars");
var closeMenuIcon = document.querySelector("nav .fa-xmark");

// Function to check screen size
function checkScreenSize() {
    if (window.innerWidth <= 600) {
        // Show the hamburger menu and close icon for small screens
        hamburgerMenu.style.display = "block";
        closeMenuIcon.style.display = "block";
    } else {
        // Hide the hamburger menu and close icon for larger screens
        hamburgerMenu.style.display = "none";
        closeMenuIcon.style.display = "none";
        // Make sure the sidemenu is hidden
        sidemenu.classList.remove('open');
    }
}

// Function to open the menu
function openmenu() {
    sidemenu.classList.add('open');  
}

// Function to close the menu
function closemenu() {
    sidemenu.classList.remove('open'); 
}

checkScreenSize();
window.addEventListener('resize', checkScreenSize);

//---------------------------------------form--------------------------------
// Attach the event listener to the form
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get values from the form fields
    const name = document.querySelector('input[name="Name"]').value.trim();
    const email = document.querySelector('input[name="email"]').value.trim();
    const message = document.querySelector('textarea[name="Message"]').value.trim();

    let isValid = true;

    // Validate Name: Only letters and spaces
    if (!/^[a-zA-Z\s]+$/.test(name)) {
        isValid = false;
        alert('Error: Name can only contain letters and spaces.');
    }

    // Validate Email: Must have "@" and "."
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        isValid = false;
        alert('Error: Email must be in the format: something@something.something');
    }

    // If validation passes, save form data to an object and display it
    if (isValid) {
        const formData = {
            Name: name,
            Email: email,
            Message: message
        };

        alert(`Name: ${formData.Name}\nEmail: ${formData.Email}\nMessage: ${formData.Message}`);
    }
});


//-------------------------Dark mode-----------------

const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Check if user has a preferred theme
const userPreference = localStorage.getItem('darkMode');
if (userPreference === 'enabled') {
    body.classList.add('dark-mode');
}

// Listen for button click to toggle dark mode
darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Save user preference in localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
});



