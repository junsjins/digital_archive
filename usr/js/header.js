const navMenus = document.querySelectorAll('nav a');
const subNavs = document.getElementById('subNav');


    for(let i=0;i<navMenus.length;i++){
        navMenus[i].addEventListener("mouseover",function(){
            subNavs.classList.remove("hd-subNav-hidden");
            subNavs.classList.add("hd-subNav-show");
        })
    }
    
    // subNavs.addEventListener("mouseout",function(){
    //     subNavs.classList.remove("hd-subNav-show");
    //     subNavs.classList.add("hd-subNav-hidden");
    // })


    for(let i=0;i<navMenus.length;i++){
        subNavs.addEventListener("mouseout",function(){
            subNavs.classList.remove("hd-subNav-show");
            subNavs.classList.add("hd-subNav-hidden");
        })
    }



