// 'use strict';

// 봄 맞이 새 메뉴 출시 __ 사진 순차적으로 출력


const fadeInSpringClass = document.querySelectorAll('.new_spring__title , .new_spring__menus div:nth-child(1) img ,.new_spring__menus div:nth-child(2) img,.new_spring__menus div:nth-child(3) img, .new_spring__detail');

// gsap.to(요소, 지속시간, 옵션);
fadeInSpringClass.forEach(( item , index )=>{
    gsap.to(item, 1 ,{
        delay: (index + 1) * 0.7,
        opacity: 1
    });
});

// 공지사항 및 프로모션
// 
// const dd = document.querySelector('.promotion_box_add_btn');




window.addEventListener("scroll",(e)=>{
    let scrollY = this.scrollY;
    // console.log(scrollY);
    if( scrollY >= 200){ // 스타벅스 스프링 시즌 원두
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
    
    
    if(scrollY > 800){ // 인도네시아 워스트 자바 
        gsap.to('.indonesia_coffee_img ', 2 ,{
            opacity : 1
        })
    }

    // favorite 
    if(scrollY > 1443){ // 이미지 보여줌

        gsap.to('.favorite_page_btn a',4,{
            opacity : 1
        });

        // gsap.to('.favorite_page_logo',2.5,{
        //     x : 1000,
        //     ease: "easeIn"
        // });
        // gsap.to('.favorite_page_txt',2.5,{
        //     x : 906,
        //     ease : "ease",
        // });
        
        gsap.fromTo('.favorite_page_logo',2.5,{ left : -900 },{ left : 100 },{
            ease: "easeIn"
        });
        gsap.fromTo('.favorite_page_txt',2.5,{ left : -900 },{ left: -6},{
            ease : "ease",
        });

    }else{ // 이미지 들어가..!
      
        gsap.to('.favorite_page_logo',2.5,{ left : 100 },{ left : -900  },{
            ease: "easeIn"
        });
        gsap.fromTo('.favorite_page_txt',2.5,{ left : -6 },{ left : -900 },{
            ease : "ease",
        });
    }


});
//spring_season_blend_img




   

// 1443 일 때 사진 보여줌 
// 1343 일 때 사진 들어가..!