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
        
    },
    opacity : 1,
});

//

// gsap.utils.toArray()
// 타임라인을 사용하면 되지 않을까...!!!!!!!!!!!!
// forEach문을 사용해서.....delay 를 줘서..?!


const findStoreTxtClass = document.querySelectorAll('.find_store_page_txt_1 , .find_store_page_txt_2 , .find_store_page_btn');

findStoreTxtClass.forEach((item, index)=>{

    gsap.set(item,{
        x: 1000,
        opacity: 0,
    });

    const t1 = gsap.timeline({

        scrollTrigger:{
            trigger: '.find_store_page_txt_2',
            start: 'top bottom',
            toggleActions : 'play none none reverse',
        },
    });

    t1.to(item, 2.5 ,{
        x: 1,
        opacity: 1,
        delay: index  * 0.2,
    })
    // tl.to(item,3,{
    //     scrollTrigger : {
    //         trigger: '.find_store_page_txt_2',
    //         start: 'top bottom',
    //         toggleActions : 'play none none reverse',
    
    //         markers: {
    //             startColor: 'red',
    //             endColor: 'black',
    //             fontSize: '2rem',
    //             indent: 200
    //         }
    //     },
    //     x:-1000,
    //     opacity: 1,
    // });

});

// 스타벅스 공지사항 ============================================
// li 태그에 순차적으로 id = "active" 줬다 뺏다 해주기..! 그럼 될 듯?!?!

const noticeLiClass = document.querySelectorAll('.notice_box ul li');
// 비동기작업 순차실행과 병렬 실행 공부..!!

// console.log('되냐?! 쿠ㅜ',noticeLiClass[0]);

// for (let i =0; i < noticeLiClass.length ; i++){
//     // setInterval(()=>{
//     //     console.log(i);
//     // },1000);
    

// }
// console.log(noticeLiClass[0].innerHTML);


let k = 0;
while( k < 10){
    for(let i=0; i < noticeLiClass.length ; i++){
        ( x=>{
            setTimeout(()=>{
                console.log(noticeLiClass[x]);
                noticeLiClass[x].id = 'active';
               if(x===0){   

               }else{
                noticeLiClass[x-1].removeAttribute('id');
               }
            },2000*x);
            
        })(i) 
    }
    break;
}

// setInterval(()=>{

//     for(let i=0; i < noticeLiClass.length ; i++){
//         ( x=>{
//             setTimeout(()=>{
//                 console.log(noticeLiClass[x]);
//                 noticeLiClass[x].id = 'active';
//                if(x===0){
                   
//                }else{
//                 noticeLiClass[x-1].removeAttribute('id');
//                }
//             },2000*x);
            
//         })(i) 
//     }

// },3000);

/////////////////////////////////////////
// setInterval() 사용
// let i = 0
// console.log(i++)
// let interval = setInterval(() => {
//  console.log(i++)
//  if(i >= 4) clearInterval(interval)
// }, 1000);




noticeLiClass.forEach((item, index)=>{
    
    // console.log('?',item.innerHTML);
  
    // setInterval(()=>{
    //     console.log('5초마다 반복함..! => ',item[index].innerHTML);
        

    // },5000);

});




// 스타벅스 프로모션 ============================================
//  버튼을 클릭하면 -> 화살표 이미지 바뀌고 프로모션 배너 보여주기..! 
//  한번 더 클릭  -> 화살표 이미지 바뀌고 프로모션 배너 안보여주기..!



function promotionBtnToggle(){
    console.log('버튼을 클릭햇땀..!!');
    const btn = document.querySelector('.promotion_box_add_btn');
    
    console.log();
    if(btn.getAttribute('value') === "down"){ // 화살표를 업 이미지로 바꿔주고 프로모션 배너 보여주기

        

        btn.setAttribute('value','up');
        btn.setAttribute('src','images/공지사항및프로모션/btn_prom_up.png');
        document.querySelector('.promotion_banners').style.height = '750px';
        // 수정전 height = '658px'
        console.log('아래 화살표를 눌렀음~~~ 이제 value는 up이 떠야함..!',btn.getAttribute('value'));


    }else if(btn.getAttribute('value') === "up"){ //화살표를 다운이미지로 바꿔주고 프로모션 배너 지워주기

        btn.setAttribute('value','down');
        btn.setAttribute('src','images/공지사항및프로모션/btn_prom_down.png');
        console.log('위 화살표를 눌렀음~~~ 이제 value는 down이 떠야함..!',btn.getAttribute('value'));
        document.querySelector('.promotion_banners').style.height = '0px';
    }
};



///////////// 슬라이드 !!! 

// var nextBtn = document.querySelector('.arrow_right');
// var prevBtn = document.querySelector('.arrow_left'); 

// var slideee = document.querySelector('.slide_list');
// var sliderFirst = document.querySelector('.slide_item:nth-child(1)');
// var sliderMiddle = document.querySelector('.slide_item:nth-child(2)');
// var sliderLast = document.querySelector('.slide_item:nth-child(3)');

// prevBtn.addEventListener('click',()=>{

//     slideee.style.transform = 'translate(33%,0)';

//     // sliderFirst.style.transform = 'translate(100%,0)';
//     // sliderMiddle.style.transform = 'translate(-210%,0)';
//     sliderLast.style.transform = 'translate(-410%,0)';
// });

// nextBtn.addEventListener('click',()=>{

//     slideee.style.transform = 'translate(-33%,0)';
//     sliderFirst.style.transform = 'translate(210%,0)';

//     // sliderMiddle.style.transform = 'translate(-200%,0)';
//     // sliderLast.style.transform = 'translate(-200%,0)';


// });


//swiper를 이용한 슬라이드

 // init Swiper:
  var swiper = new Swiper('.swiper', {
   // configure Swiper to use modules
  // direction: 'vertical',
    // slidesPerView: 3,

    // slidesPerGroup: 3,
    centeredSlides: true,
    
    slidesPerView: 'auto',
    // spaceBetween: 30,
    loop: true,
    // loopFillGroupWithBlank: true,

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    //  modules: [Navigation, Pagination],
    pagination: {
        el : '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        prevEl: '.arrow_left',
        nextEl: '.arrow_right',
    },
    // scrollbar : {
    //     el : '.swiper-scrollbar'
    // },


 });

//  swiper.on('reachEnd', function(){
//     swiper.autoplay = false;
// })