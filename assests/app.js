AOS.init();

const menuBar = document.querySelector('.navbar-menu-btn')
const mobileNav = document.querySelector('.mobile-nav')
const times = document.querySelector('.times')
const formClose = document.querySelector('.formclose-btn')
const userForm = document.querySelector('.signin')
const signinBtn = document.querySelector('.signin-link')

menuBar.addEventListener('click', ()=>{
    mobileNav.style.display = 'block'
})
times.addEventListener('click', ()=>{
    mobileNav.style.display = 'none'
})
signinBtn.addEventListener('click', ()=>{
    userForm.style.visibility = 'visible'
})
formClose.addEventListener('click', ()=>{
    userForm.style.visibility = 'hidden'
})
