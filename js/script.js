'use strict'

// to all range lines
let range2 = document.querySelectorAll('.range__line')
let number2 = document.querySelectorAll('.range__num')
    for(let i = 0;i<range2.length;i++){
        range2[i].oninput = function scroll(){
        number2[i].style.left = this.value - -10*this.value*0.38 + 'px'
        number2[i].innerHTML = range2[i].value + '%'
     }
     if(screen.width < 551){
            range2[i].oninput = function scroll(){
            number2[i].style.left = this.value - -5*this.value*0.58 + 'px'
            number2[i].innerHTML = range2[i].value + '%'
        }
    }
     if(screen.width < 501){
            range2[i].oninput = function scroll(){
            number2[i].style.left = this.value - -5*this.value*0.38 + 'px'
            number2[i].innerHTML = range2[i].value + '%'
        }
    }
}

// Even Odd
let newsItems = document.querySelector('.news__items')
let newsItem = document.getElementsByClassName('news__item')
    if(newsItem.length%2 == 0){
        newsItems.style.justifyContent = 'center'
    } else{
        newsItems.style.maxWidth = '94%'
        newsItems.style.margin = '0 auto'
    }



//burger menu

let body = document.getElementsByTagName('body')[0]//заблокировать скролл когда меню работает
let menu = document.getElementById('menu')
let burger = document.getElementById('burger')
burger.onclick = function(event){
    burger.classList.toggle('active')// добавляем или убираем классы по нажатию
    menu.classList.toggle('active')
    body.classList.toggle('lock')
    let linkHeader = document.querySelectorAll('.link')
    for(let i = 0;i<linkHeader.length;i++){
        linkHeader[i].onmouseup = ()=>{
            burger.classList.remove('active')
            menu.classList.remove('active')
            body.classList.remove('lock')
        }
    }
}

//spoiler
if(screen.width < 981) {
   let navName = document.querySelectorAll('.linkName'); // получаешь объект при нажатии на который будет появляться контент
   navName.forEach(navName =>{ // цикл чтобы повесить событие для каждого
       navName.addEventListener('click', event =>{ // вешаем событие
        let navCurrectActive = document.querySelector('.linkName.active'); //эффект аккордеона,
        if(navCurrectActive && navCurrectActive!==navName){  //когда открыто больше 1ой 
            navCurrectActive.classList.toggle('active');   //вкладки преведущая закрывается
            navCurrectActive.nextElementSibling.style.maxHeight = 0;
        }
        navName.classList.toggle('active'); //добавляем / убираем active
        let navUls = navName.nextElementSibling; // получаем следующий элемент
        if(navName.classList.contains('active')){ //проверяем есть ли класс active
            navUls.style.maxHeight = navUls.scrollHeight + 'px';  //получаем нужную высоту контента
        }else{
            navUls.style.maxHeight = 0; // обнуляем если нет active
        }
       });
   });
}

//links to objects

//linksHeader
document.querySelectorAll('.link')[0].onclick = function (){
    document.querySelector('.fullscreen').scrollIntoView({
        block: 'center',
		inline:'center',
		behavior:'smooth',
    })
}
document.querySelectorAll('.link')[1].onclick = function (){
    document.querySelector('.about').scrollIntoView({
        block: 'center',
		inline:'center',
		behavior:'smooth',
    })
}
document.querySelectorAll('.link')[2].onclick = function (){
    document.querySelector('.services').scrollIntoView({
        block: 'center',
		inline:'center',
		behavior:'smooth',
    })
}
document.querySelectorAll('.link')[3].onclick = function (){
    document.querySelector('.projects').scrollIntoView({
        block: 'center',
		inline:'center',
		behavior:'smooth',
    })
}
document.querySelectorAll('.link')[4].onclick = function (){
    document.querySelector('.news').scrollIntoView({
        block: 'center',
		inline:'center',
		behavior:'smooth',
    })
}
document.querySelectorAll('.link')[5].onclick  = function (){
    document.querySelector('.contact').scrollIntoView({
        block: 'center',
		inline:'center',
		behavior:'smooth',
    })
}

//aboutme link
document.querySelectorAll('.button__about')[0].onclick = function (){
    document.querySelector('.about').scrollIntoView({
        block: 'center',
		inline:'center',
		behavior:'smooth',
    })
}
