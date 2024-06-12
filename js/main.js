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

    let mobileLink = document.querySelectorAll('.mobile-menu-list__link')

    mobileLink.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('open')
            document.querySelector('body').classList.remove('no-scroll')
        })
    })
    

    let accordionItem = document.querySelectorAll('.accordion__item'),
        accordionBtn = document.querySelectorAll('.accordion__btn')

        accordionBtn.forEach(btn => {
            btn.addEventListener('click', (e) => {
                btn.closest('.accordion__item').classList.toggle('open')
                
            })
        })
        
})