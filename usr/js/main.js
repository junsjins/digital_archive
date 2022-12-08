const mainSliderPause = document.querySelector(".main-slider-pause");

const collSwiper = new Swiper('.main-coll-slider', {

    

    slidesPerView: 5,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 3000,
    },
    navigation: {
      nextEl: '.main-slider-next',
      prevEl: '.main-slider-prev',
    },
  


  });

//   $(".main-slider-pause").click(function(){
//     console.log('11');
//     if($(".main-slider-pause").data('pause') = ""){
//         collSwiper.autoplay.stop();
//         // $(".main-slider-pause").data('pause','pause');
//     } else {
//         collSwiper.autoplay.start();
//         // $(".main-slider-pause").data('pause','');
//     }
// })
 
/* 디지털 소장자료 slider - autoplay 일시중지 버튼 */
  mainSliderPause.addEventListener("click",function(){
    if( mainSliderPause.classList.contains("pause-off") == true){
        collSwiper.autoplay.start();
        mainSliderPause.classList.remove("pause-off");
    } else if(mainSliderPause.classList.contains("pause-off") == false){
        collSwiper.autoplay.stop();
        mainSliderPause.classList.add("pause-off");
    }
        
  })