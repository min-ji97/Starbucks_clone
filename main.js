// 'use strict';

// 봄 맞이 새 메뉴 출시 __ 사진 순차적으로 출력


const fadeIn = document.querySelectorAll('.new_spring__title , .new_spring__menus div:nth-child(1) img ,.new_spring__menus div:nth-child(2) img,.new_spring__menus div:nth-child(3) img, .new_spring__detail');

// gsap.to(요소, 지속시간, 옵션);
fadeIn.forEach(( item , index )=>{
    gsap.to(item, 1 ,{
        delay: (index + 1) * 0.7,
        opacity: 1
    });
});