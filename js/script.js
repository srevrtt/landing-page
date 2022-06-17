const hbBtn = document.getElementById('menu-btn')
const hbNav = document.getElementById('menu')
const hbBar = document.getElementById('nav')

// Hamburger Menu
hbBtn.addEventListener('click', () => {
    hbBtn.classList.toggle('open')

    // Hide to show
    hbNav.classList.toggle('mobilemenu-closed')
    hbNav.classList.toggle('mobilemenu-opened')
    
    // Blur to solid
    hbBar.classList.toggle('navbdblur')
    hbBar.classList.toggle('navbgsolid')
})
