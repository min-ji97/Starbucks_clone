
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
    if(selected === 3){
        selected = 0;
    }

    

    if(selected === 3){
        slideItems[0].style.transform = 'translate(210%,0)'; // 맨 뒤로 이동
        
    }else{ //selected 가 1 또는 3( 0이됨 )
        console.log('셀렉티드값이 몇인데?! => ',selected);
        slideItems[selected-1].style.transform = 'translate(210%,0)'; // 맨 뒤로 이동
        
        console.log('0번이 누구냐!! => ',slideItems[0]);
        console.log('1번이 누구냐!! => ',slideItems[1]);
        console.log('2번이 누구냐!! => ',slideItems[2]);
        
    }

    slideList.style.transform = 'translate(-33%,0)'; // 전체 앞으로 한칸씩 이동
    

});