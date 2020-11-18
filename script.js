const s="Hi, i'm Aranyak Panigrahi";
const btnDiv = document.getElementById('button-holder');
let index=0,x;
const typeElement = document.getElementById('typing');
function type()
{
            typeElement.textContent=typeElement.textContent+s[index];
            index++;
            if(index <= s.length-1)
            {
                setTimeout(type,100);
            }
            else
            {
                btnDiv.style.opacity = 1;
            }
}
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(type,3000);
}, false);

const nav = document.querySelector('.navigation');
window.addEventListener('scroll',() => {
    nav.style.opacity = 0.8;
    nav.style.height = '4rem';
    nav.style.transition = "height 0.2s ease-in";
    if(document.querySelector('header').getBoundingClientRect().y == 0)
    {
        nav.style.opacity = 1;
        nav.style.height = '4.5rem';
    }
}) ;

const project = document.getElementsByClassName('project');
const projectButton = document.querySelector('.project-button-1');
let flag = false;
  
projectButton.addEventListener('click',toggleProjects)

const mobileNav =  document.querySelector('.mobile-nav');
mobileNav.addEventListener('click',()=>{
    const mobileNavPage = document.querySelector('.mobile-nav-page');
            mobileNavPage.classList.toggle('invisible');
            const navLine = document.querySelector('.nav-line');
            navLine.classList.toggle('close');
});

