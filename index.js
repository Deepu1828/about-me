const hamburger = document.querySelector('.hamburger') 
const navLinks = document.querySelector('ul')
const btn = document.querySelector('h5')
const htmlBarExpand = document.querySelector('.html-bar')
console.log(navLinks)

hamburger.addEventListener('click', function() {
   navLinks.classList.toggle('show-links')
   
})



btn.addEventListener('click', function() {
   htmlBarExpand.style.width = 90 + '%'
})