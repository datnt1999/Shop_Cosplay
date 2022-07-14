window.onload = function travel_fn(){
    //toggle buttom
    let toggle1 = document.querySelector(".header__navbar-item--register")
    let toggle2 = document.querySelector(".header__navbar-item--login")
    let collapse1 =document.querySelector(".auth-form-register")
    let collapse2 =document.querySelector(".auth-form-login")
    toggle1.addEventListener('click',function(){
        collapse1.classList.toggle('display_form')
    })
    toggle2.addEventListener('click',function(){
        collapse2.classList.toggle('display_form')
    })
}