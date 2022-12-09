const getSiblings = elm => elm && elm.parentNode && [...elm.parentNode.children].filter(node => node != elm);
const ctgrcTab = document.querySelectorAll("#categoricalTab > li");
const ctgrResultTab = document.querySelectorAll(".categoricalArc-content-flexBox > div");


for (let i = 0; i < ctgrcTab.length; i++){
    ctgrcTab[i].addEventListener("click",function(){
        ctgrcTab[i].classList.toggle('categorical-tab-selected');
        ctgrResultTab[i].classList.toggle('cate-selected-show');
        getSiblings(ctgrcTab[i]).forEach((f) => {
            f.classList.remove('categorical-tab-selected');
        });
        getSiblings(ctgrResultTab[i]).forEach((f) => {
            f.classList.remove('cate-selected-show');
        });
    });
}