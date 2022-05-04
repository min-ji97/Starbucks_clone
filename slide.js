
const slideList = document.querySelector('.slide_list');
const slideItems = document.querySelectorAll('.slide_item');
const slidePaginations = document.querySelector('.slider_controller_paginations');
const slideControllBtn = document.querySelector('.slider_controller_btn');

const nextBtn = document.querySelector('.arrow_right'); // 오른쪽 버튼
const prevBtn = document.querySelector('.arrow_left');  // 왼쪽 버튼

const lastIndex = slideItems.length -1;
let selected = 0;
let interval;



// 일단.... 슬라이드 아이템 이렇게 불러옴....ㅠㅠㅡㅠㅡㅠㅡㅠㅡㅠㅡ
var sliderFirst = document.querySelector('.slide_item:nth-child('+1+')');
var sliderMiddle = document.querySelector('.slide_item:nth-child(2)');
var sliderLast = document.querySelector('.slide_item:nth-child(3)');

//왼쪽 버튼 클릭 시
prevBtn.addEventListener('click',()=>{
    selected -= 1;
    // 애니메이션 효과 주기
    // 왼쪽으로 이동하기! 

    console.log('0번이 누구냐!! => ',slideItems[0]);
    console.log('1번이 누구냐!! => ',slideItems[1]);
    console.log('2번이 누구냐!! => ',slideItems[2]);

    if(selected === -3 ){
        selected = 0;

    }

    slideItems[selected].style.transform = 'translate(-410%,0)'; // 맨 앞으로 이동
    slideList.style.transform = 'translate(33%,0)'; // 전체 뒤로 한칸씩 이동

});

//오른쪽 버튼 클릭 시
nextBtn.addEventListener('click',()=>{
    selected += 1;
    
    // slideList.style.transform = `translate(${selected*100}px,0)`; 

    console.log('셀렉티드값이 몇인데?! => ',selected);
    if(selected === 1){
        slideItems[0].style.transform = 'translate(1705px,0)'; // 맨 뒤로 이동
        slideList.style.transform = 'translate(-839px,0)'; // 전체 앞으로 한칸씩 이동

        slideItems[1].style.opacity = '0.5';
        slideItems[2].style.opacity = '1';

        slideList.style.transition = 'all ease 2s';
         // slideItems[0].style.transform = 'translate(860px,0)';
        // slideItems[1].style.transform = 'translate(-1678px,0)'; 
        // slideItems[2].style.transform = 'translate(-1678px,0)'; 
    }else if(selected === 2){
        // [1]은 뒤로 한칸 [0]은 뒤로 한칸 [2]는 앞으로 두칸
        slideItems[0].style.transform = 'translate(839px,0)'; 
        slideItems[1].style.transform = 'translate(839px,0)'; 
        slideItems[2].style.transform = 'translate(-1678px,0)'; 

        slideItems[2].style.opacity = '0.5';
        slideItems[0].style.opacity = '1';

        slideList.style.transition = 'all ease 2s';

    }else if(selected === 3){
        // [select-2] 이 가운데 옴 이걸 opacity 1주면 될 듯
        // 그냥 translate(0,0) 해주면 다 각자 제자리로 돌아오지 않을까아..?!?!? 하하하하하ㅏㅎ
        slideList.style.transform = 'none';
        slideItems[0].style.transform = 'translate(-839px,0)'; 
        slideItems[1].style.transform = 'translate(-839px,0)'; 
        slideItems[2].style.transform = 'translate(-839px,0)';

        slideItems[0].style.opacity = '0.5';
        slideItems[1].style.opacity = '1';

        slideList.style.transition = 'all ease 2s';

        
        
        selected = 0;
    }
    
    
    console.log('0번이 누구냐!! => ',slideItems[0]);
    console.log('1번이 누구냐!! => ',slideItems[1]);
    console.log('2번이 누구냐!! => ',slideItems[2]);

    if(selected === 3){
        selected = 0;
    }

















    // 

    // if(selected === 3){
    //     slideItems[0].style.transform = 'translate(210%,0)'; // 맨 뒤로 이동
        
    // }else{ //selected 가 1 또는 3( 0이됨 )
    //     console.log('셀렉티드값이 몇인데?! => ',selected);
    //     slideItems[selected-1].style.transform = 'translate(210%,0)'; // 맨 뒤로 이동

    //     slideList.style.transform = 'translate(-33%,0)'; // 전체 앞으로 한칸씩 이동
        
    //     console.log('0번이 누구냐!! => ',slideItems[0]);
    //     console.log('1번이 누구냐!! => ',slideItems[1]);
    //     console.log('2번이 누구냐!! => ',slideItems[2]);
        
    // }

    
    

});