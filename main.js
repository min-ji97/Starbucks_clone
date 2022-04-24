// 'use strict';

gsap.registerPlugin(ScrollTrigger);


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


// 스타벅스 스프링 시즌 원두
gsap.to('.spring_season_blend_img img',2,{
    scrollTrigger: {
        trigger: ".spring_season_blend_img img",
        start: 'top 95%',
        toggleActions:'play none none reverse',
    },
    x: 969,
    delay: 0.3,
    opacity: 1
});

gsap.to('.spring_season_blend_txt',2,{
    scrollTrigger: {
        trigger: ".spring_season_blend_txt",
        start: 'top 95%',
        toggleActions:'play none none reverse',
    },
    x: -1071,   
    delay: 0.3,
    opacity: 1
});

// favorite 


// gsap.set('.favorite_page_logo',{
//     opacity: 0,
//     x: -1000,
// });

// ScrollTrigger.create({
//     trigger : '.favorite_page_logo',
//         start: 'bottom bottom',
//         // toggleActions : 'restart none reverse none',
//         markers: {
//             startColor: 'yellow',
//             endColor: 'black',
//             fontSize: '4rem',
//             indent: 200
//         },
//         onEnter: () => gsap.to('.favorite_page_logo',3,{
//             x: 1000,
//             opacity: 1,
//             // stagger: 3,
//         }),

//         onLeave: () => gsap.to('.favorite_page_logo', {
//             x: -1000,
//             opacity: 0,
//           }),
//         onEnterBack: () => gsap.to('.favorite_page_logo', {
//             x: 1000,
//             opacity: 1,
            
//         }),
//         onLeaveBack: () => gsap.to('.favorite_page_logo',4, {
//         x: -1000,
//         opacity: 0,
//         }),

// });

gsap.to('.favorite_page_logo',3,{
    scrollTrigger: {
        trigger : '.favorite_page_logo',
        start: 'bottom bottom',
        toggleActions : 'play none none reverse',
        // markers: {
        //     startColor: 'yellow',
        //     endColor: 'black',
        //     fontSize: '4rem',
        //     indent: 200
        // }
    
    },
    x: 1000,
    opacity : 1,
});

gsap.to('.favorite_page_txt',3,{
    scrollTrigger: {
        trigger : '.favorite_page_logo',
        start: 'bottom bottom',
        toggleActions : 'play none none reverse',
     
    },
    x: 906,
});

gsap.to('.favorite_page_btn a',4,{
    scrollTrigger: {
        trigger : '.favorite_page_logo',
        start: 'bottom bottom',
        toggleActions : 'play none none none',
    },
    opacity: 1,
});


window.addEventListener("scroll",(e)=>{
    let scrollY = this.scrollY;
    // console.log(scrollY);


    if( scrollY >= 200){ // 스타벅스 스프링 시즌 원두
        // gsap.to('.spring_season_blend_img img', 1.8, {
        //     x: 969,
        //     delay: 0.3,
        //     opacity: 1
        // });
        // gsap.to('.spring_season_blend_txt', 1.8 , {
        //     x: -1071,
        //     delay: 0.3,
        //     opacity: 1
        // });


    }else if( scrollY < 200){ // 스크롤이 200 보다 작으면 다시 지워주기..!
        // console.log('200아래임..!');
        // gsap.to('.spring_season_blend_img img',{
        //     x: -969,
        //     opacity:0
        // });
        // gsap.to('.spring_season_blend_txt',{
        //     x: 1071,
        //     opacity:0
        // });
    }

    // 스타벅스 스프링 시즌 원두 _ timeLine scroll로 다시 만들어 보쟈...!!!!
    
    


    ///////////
    if(scrollY > 800){ // 인도네시아 워스트 자바 
        gsap.to('.indonesia_coffee_img ', 2 ,{
            opacity : 1
        });
    }

    // favorite 
    // if(scrollY > 1443){ // 이미지 보여줌

    //     gsap.to('.favorite_page_btn a',4,{
    //         opacity : 1
    //     });

    //     // gsap.to('.favorite_page_logo',2.5,{
    //     //     x : 1000,
    //     //     ease: "easeIn"
    //     // });
    //     // gsap.to('.favorite_page_txt',2.5,{
    //     //     x : 906,
    //     //     ease : "ease",
    //     // });
        
    //     gsap.fromTo('.favorite_page_logo',2.5,{ left : -900 },{ left : 100 },{
    //         ease: "easeIn"
    //     });
    //     gsap.fromTo('.favorite_page_txt',2.5,{ left : -900 },{ left: -6},{
    //         ease : "ease",
    //     });

    // }else{ // 이미지 들어가..!
      
    //     gsap.to('.favorite_page_logo',2.5,{ left : 100 },{ left : -900  },{
    //         ease: "easeIn"
    //     });
    //     gsap.fromTo('.favorite_page_txt',2.5,{ left : -6 },{ left : -900 },{
    //         ease : "ease",
    //     });
    // }


});
//spring_season_blend_img



// 리저브 매거진 
//reserve_magazine_page_img

gsap.set('.reserve_magazine_page_img',{
    opacity: 0,
});
gsap.to('.reserve_magazine_page_img', 2 ,{

    scrollTrigger: {
        trigger: '.reserve_magazine_page_img',
        start: 'top 80%', 
        toggleActions : 'play none none none',
    },
    opacity : 1,
    delay: 100,
});

   
// 매장 찾기 

const findStoreImgClass = document.querySelectorAll('.find_store_page_img_1, .find_store_page_img_2 ');

gsap.set(findStoreImgClass,{
    opacity: 0
});
gsap.to(findStoreImgClass,3,{
    scrollTrigger: {
        trigger : '.find_store_page_img_2',
        start : 'top bottom',
        toggleActions : 'play none none none',
        markers: {
                startColor: 'red',
                endColor: 'black',
                fontSize: '2rem',
                indent: 200
            }
    },
    opacity : 1,
});

//

// gsap.utils.toArray()