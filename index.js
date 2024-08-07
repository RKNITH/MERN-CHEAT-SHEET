// Set the current year in the footer
document.getElementById('year').textContent = new Date().getFullYear();

// Add event listener for color mode toggle
document.addEventListener('DOMContentLoaded', function () {

    const menuToggle = document.getElementById('menu-toggle');
    const navList = document.getElementById('nav-list');

    console.log(menuToggle); // Check if this logs the menuToggle element
    console.log(navList); // Check if this logs the navList element

    if (menuToggle && navList) {
        menuToggle.addEventListener('click', function () {
            navList.classList.toggle('active');
        });
    } else {
        console.error('Menu toggle or nav list not found');
    }






    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);

        if (currentTheme === 'dark') {
            toggleSwitch.checked = true;
        }
    }

    function switchTheme(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    }

    toggleSwitch.addEventListener('change', switchTheme, false);
});
