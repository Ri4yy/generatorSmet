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


    function getUrlParameter(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }
    
    const token = getUrlParameter('token');

    console.log(token)
    
    if (token) {
        // const requestBody = {
        //     token: token
        // };
    
        fetch('https://app.genks.ru/api/adverlogs/', {
            method: 'POST',
            body: JSON.stringify({
                token: token,
            }),
            headers: {
                "Content-type": "application/json"
            },
            // mode: 'no-cors',
            // body: JSON.stringify(requestBody)
            
        })
        .then(response => response.json())
        .then(data => {
            console.log('Успешный ответ:', data);
        })
        .catch(error => {
            console.error('Ошибка:', error);
        });
    }
        
})