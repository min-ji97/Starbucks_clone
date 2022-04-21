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

// 공지사항 및 프로모션
// 
const dd = document.querySelector('.promotion_box_add_btn');




// 스타벅스 스프링 시즌 원두

window.addEventListener("scroll",(e)=>{
    let scrollY = this.scrollY;
    if( scrollY >= 200){
        gsap.to('.spring_season_blend_img img', 1.8, {
            x: 969,
            delay: 0.3,
            opacity: 1
        });
        gsap.to('.spring_season_blend_txt', 1.8 , {
            x: -1071,
            delay: 0.3,
            opacity: 1
        });


    }else if( scrollY < 200){ // 스크롤이 200 보다 작으면 다시 지워주기..!
        console.log('200아래임..!');
        gsap.to('.spring_season_blend_img img',{
            x: -969,
            opacity:0
        });
        gsap.to('.spring_season_blend_txt',{
            x: 1071,
            opacity:0
        });
        // let dd = document.querySelector('.spring_season_blend_img img');
        // let ss = document.querySelector('spring_season_blend_txt');
        // dd.style.left = '-800px';
        // ss.style.left = '1700px';
    }
});
//spring_season_blend_img



