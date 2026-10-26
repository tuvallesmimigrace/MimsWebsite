const mainHead = document.querySelector('.main-head');
const logo = document.querySelector('.logo');

window.addEventListener('scroll', function(){
  if(window.scrollY > 200){
    mainHead.classList.add('slidedown');
    logo.style.color = '#34459e';
  } else {
    mainHead.classList.remove('slidedown');
    logo.style.color = ''; // reset to original
  }
});
