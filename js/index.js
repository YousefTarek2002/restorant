//Call Element for nav bar icon
let burgerIcon = document.querySelector('.burgericon');
let links = document.getElementById('links');
let resto = document.querySelector('.logo span');
let overlay = document.querySelector('.overlay');

burgerIcon.addEventListener('click',()=>{
    links.classList.add("active");
    burgerIcon.style.color='red';
    burgerIcon.children[1].style.opacity='0';
    burgerIcon.children[0].style.transform='rotate(45deg)';
    burgerIcon.children[0].style.top='17px';
    burgerIcon.children[2].style.top='17px';
    burgerIcon.children[2].style.transform='rotate(-45deg)';
    resto.style.color="white"
})
burgerIcon.addEventListener('dblclick',()=>{
    links.classList.remove("active");
    burgerIcon.children[1].style.opacity='1';
    burgerIcon.children[0].style.transform='rotate(0)';
    burgerIcon.children[0].style.top='8px';
    burgerIcon.children[2].style.top='25px';
    burgerIcon.children[2].style.transform='rotate(0)';
    resto.style.color="#192a56"
})
function temp(){
    overlay.style.display="none";
}
setTimeout(temp, 1000);
setTimeout(()=>{AOS.init({duration:2000});}, 1000);



let divDish = document.querySelectorAll('.dishes .contentDish')


for (let i = 0; i < divDish.length; i++) {
    divDish[i].addEventListener('mouseover',()=>{
        divDish[i].children[1].style.transform="scale(1.05)";
        divDish[i].children[0].children[0].style.transform="translateX(100%)"
        divDish[i].children[0].children[1].style.transform="translateX(-100%)"
        divDish[i].children[0].children[0].style.visibility="visible"
        divDish[i].children[0].children[1].style.visibility="visible"
        divDish[i].children[0].children[0].style.transition="0.5s all"
        divDish[i].children[0].children[1].style.transition="0.5s all"
    })
    divDish[i].addEventListener('mouseout',()=>{
        divDish[i].children[1].style.transform="scale(1)";
        divDish[i].children[0].children[0].style.transform="translateX(-100%)"
        divDish[i].children[0].children[1].style.transform="translateX(100%)"
        divDish[i].children[0].children[0].style.visibility="hidden"
        divDish[i].children[0].children[1].style.visibility="hidden"
        divDish[i].children[0].children[0].style.transition="0.2s all"
        divDish[i].children[0].children[1].style.transition="0.2s all"
    })
}
/*owl caursol plugin*/

// $(document).ready(function(){
//     $(".owl-carousel").owlCarousel();
// });
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin:2,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items:3
            }
        }
    })
});

// fa-cart-shopping  genIcons
//calling Elemente
let cart = document.querySelector('.fa-cart-shopping');
let layer = document.querySelector('.layer')
let closeButton = document.querySelector('.layer i');
cart.addEventListener('click',()=>{
    layer.style.transform='translateX(0%)';
})
closeButton.addEventListener('click',()=>{
    layer.style.transform='translateX(-100%)';
})

let btns = document.querySelectorAll('.btn');
let layerDarkchildern = document.querySelector('.layerDark .row');
let info = document.querySelectorAll('.layerDark .contentDish')
let countElements = document.querySelector('.cir')
for(let i = 0; i < btns.length ; i++){
    btns[i].addEventListener('click',()=>{
        let clonediv = btns[i].parentElement.parentElement.cloneNode(true);
        clonediv.classList.remove('col-lg-4')
        clonediv.classList.remove('col-md-6')
        clonediv.classList.remove('col-sm-12')
        clonediv.classList.add('col-lg-6')
        layerDarkchildern.append(clonediv);
        countElements.style.visibility = 'visible'
        countElements.innerHTML = layerDarkchildern.childNodes.length-1
    })
}

let scrollbtn = document.querySelector('.scrollbtn');
window.addEventListener("scroll", () => {
    if(window.scrollY > 500){
        scrollbtn.classList.add("re");
    }else{
        scrollbtn.classList.remove("re");
    }
})
let main = document.querySelector(".slide")
scrollbtn.addEventListener("click",()=>{
    main.scrollIntoView({
        behavior: "smooth"
    })
})