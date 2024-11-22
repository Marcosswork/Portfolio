
let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click',()=>{
    menu.classList.add('abrirmenu')
})

menu.addEventListener('click',()=>{
    menu.classList.remove('abrirmenu')
})

overlay.addEventListener('click',()=>{
    menu.classList.remove('abrirmenu')
})
