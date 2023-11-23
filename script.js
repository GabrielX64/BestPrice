document.addEventListener('DOMContentLoaded', function () {
    const btnLoginPopup = document.querySelector('.btnLogin-popup');
    const wrapper = document.querySelector('.wrapper');
    const iconClose= document.querySelector('.icon-close');
    const cuadrado = document.querySelector('.cuadrado');
    const moreInfo= document.querySelector('.btn');
    const close= document.querySelector('.close-more');
    const loginLink= document.querySelector('.login-link');
    const registerLink= document.querySelector('.register-link');
    
    const cuadrado2 = document.querySelector('.cuadrado2');
    const moreAbout= document.querySelector('.btnCont');
    const closeAbout= document.querySelector('.close-about');

    btnLoginPopup.addEventListener('click', function () {
        wrapper.classList.toggle('active-popup');
    });
    iconClose.addEventListener('click', function(){
        wrapper.classList.remove('active-popup');
    });
    registerLink.addEventListener('click',function(){
        wrapper.classList.toggle('active');
    });
    loginLink.addEventListener('click',function(){
        wrapper.classList.remove('active');
    });
    moreInfo.addEventListener('click',function(){
        cuadrado.classList.toggle('active-more');
    });
    close.addEventListener('click',function(){
        cuadrado.classList.remove('active-more');
    });
    moreAbout.addEventListener('click',function(){
        cuadrado2.classList.toggle('active-about');
    });
    closeAbout.addEventListener('click',function(){
        cuadrado2.classList.remove('active-about');
    });
});


function openNav(){
    document.getElementById("mobile-menu").style.width="100%";
}
function closeNav(){
    document.getElementById("mobile-menu").style.width="0%";
}