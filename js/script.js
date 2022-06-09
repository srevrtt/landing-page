const hbBtn = document.getElementById('menu-btn')
const hbNav = document.getElementById('menu')

// Hamburger Menu
hbBtn.addEventListener('click', () => {
    hbBtn.classList.toggle('open')

    hbNav.classList.toggle('mobilemenu-closed')
    hbNav.classList.toggle('mobilemenu-opened')
})
