'use strict';

// to all range lines
(function () {
    let range2 = document.querySelectorAll('.range__line')
    let number2 = document.querySelectorAll('.range__num')
    for (let i = 0; i < range2.length; i++) {
        range2[i].oninput = function scroll() {
            number2[i].style.left = this.value - -10 * this.value * 0.38 + 'px'
            number2[i].innerHTML = range2[i].value + '%'
        }
        if (screen.width < 551) {
            range2[i].oninput = function scroll() {
                number2[i].style.left = this.value - -5 * this.value * 0.58 + 'px'
                number2[i].innerHTML = range2[i].value + '%'
            }
        }
        if (screen.width < 501) {
            range2[i].oninput = function scroll() {
                number2[i].style.left = this.value - -5 * this.value * 0.38 + 'px'
                number2[i].innerHTML = range2[i].value + '%'
            }
        }
    }
}());
// Even Odd
(function () {
    let newsItems = document.querySelector('.news__items')
    let newsItem = document.getElementsByClassName('news__item')
    if (newsItem.length % 2 == 0) {
        newsItems.style.justifyContent = 'center'
    } else {
        newsItems.style.maxWidth = '94%'
        newsItems.style.margin = '0 auto'
    }
}());
//burger menu
(function () {
    let body = document.getElementsByTagName('body')[0] //заблокировать скролл когда меню работает
    let menu = document.getElementById('menu')
    let burger = document.getElementById('burger')
    burger.onclick = function (event) {
        burger.classList.toggle('activeBurger') // добавляем или убираем классы по нажатию
        menu.classList.toggle('activeBurger')
        body.classList.toggle('lockBurger')
        let linkHeader = document.querySelectorAll('.link')
        for (let i = 0; i < linkHeader.length; i++) {
            linkHeader[i].onmousedown = () => {
                burger.classList.remove('activeBurger')
                menu.classList.remove('activeBurger')
                body.classList.remove('lockBurger')
            }
        }
    }
}());

//spoiler
(function () {
    if (document.documentElement.clientWidth > 981) {
        document.querySelector('.newsletter__email').style.border = '1px rgba(0,0,0,0.09) solid'
    } else {
        document.querySelector('.newsletter__email').style.border = 'none'
    }
    if (document.documentElement.clientWidth < 981) {
        let navName = document.querySelectorAll('.linkName'); // получаешь объект при нажатии на который будет появляться контент
        navName.forEach(navName => { // цикл чтобы повесить событие для каждого
            navName.addEventListener('click', event => { // вешаем событие
                let navCurrectActive = document.querySelector('.linkName.active'); //эффект аккордеона,
                if (navCurrectActive && navCurrectActive !== navName) { //когда открыто больше 1ой 
                    navCurrectActive.classList.toggle('active'); //вкладки преведущая закрывается
                    navCurrectActive.nextElementSibling.style.maxHeight = 0;
                }
                navName.classList.toggle('active'); //добавляем / убираем active
                let navUls = navName.nextElementSibling; // получаем следующий элемент
                if (navName.classList.contains('active')) { //проверяем есть ли класс active
                    navUls.style.maxHeight = navUls.scrollHeight + 'px'; //получаем нужную высоту контента
                    document.querySelector('.newsletter__email').style.border = '1px rgba(0,0,0,0.09) solid'
                } else {
                    navUls.style.maxHeight = 0; // обнуляем если нет active
                    document.querySelector('.newsletter__email').style.border = 'none'
                }
            });
        });
    };
}());

//links to objects

function linkToAll(get, num, to) {
    document.querySelectorAll(get)[num].onmouseup = ()=> {
        document.querySelector(to).scrollIntoView({
            block: 'center', inline: 'center', behavior: 'smooth',
        })
    }
};
document.querySelectorAll('.link')[0].addEventListener('mousedown', () => {
    linkToAll('.link', 0, '.fullscreen')
})
document.querySelectorAll('.link')[1].addEventListener('mousedown', () => {
    linkToAll('.link', 1, '.about')
})
document.querySelectorAll('.link')[2].addEventListener('mousedown', () => {
    linkToAll('.link', 2, '.services')
})
document.querySelectorAll('.link')[3].addEventListener('mousedown', () => {
    linkToAll('.link', 3, '.projects')
})
document.querySelectorAll('.link')[4].addEventListener('mousedown', () => {
    linkToAll('.link', 4, '.news')
})
document.querySelectorAll('.link')[5].addEventListener('mousedown', () => {
    linkToAll('.link', 5, '.contact')
})
document.querySelectorAll('.button__about')[0].addEventListener('mousedown', () => {
    linkToAll('.button__about', 0, '.about')
});


//animation

(function () {
    const animItems = document.querySelectorAll('.anim-items');
    if (document.documentElement.clientWidth < 981) {
        problemSpoiler.classList.remove('animationRigth')
        problemSpoiler.classList.add('animationLeft')
    }
    if (animItems.length > 0) {
        window.addEventListener('scroll', showAnimate)

        function showAnimate() {
            for (let i = 0; i < animItems.length; i++) {
                const animItem = animItems[i];
                const animItemHeight = animItem.offsetHeight;
                const animItemOfSet = offset(animItem).top;
                const animStart = 3;

                let animItemPoint = window.innerHeight - animItemHeight / animStart

                if (animItemHeight > window.innerHeight) {
                    animItemPoint = window.innerHeight - window.innerHeight / animStart
                }

                if ((pageYOffset > animItemOfSet - animItemPoint) && pageYOffset < (animItemOfSet + animItemHeight)) {
                    animItem.classList.add('active')
                } else {
                    if (!animItem.classList.contains('anim-no-hide')) {
                        animItem.classList.remove('active')
                    }
                }
            }
        }

        function offset(element) {
            const rect = element.getBoundingClientRect(),
                scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return {
                top: rect.top + scrollTop,
                left: rect.left + scrollLeft
            }
        }
        setTimeout(() => {
            showAnimate();
        }, 300);
    }
}());