document.addEventListener('DOMContentLoaded', () => {
    let menuBtn = document.querySelector('.menu-btn'),
        closeBtn = document.querySelector('.close-btn'),
        menu = document.querySelector('.mobile-menu')

    menuBtn.addEventListener('click', (e) => {
        menu.classList.add('open')
        document.querySelector('body').classList.add('no-scroll')
    })
    closeBtn.addEventListener('click', (e) => {
        menu.classList.remove('open')
        document.querySelector('body').classList.remove('no-scroll')
    })
})