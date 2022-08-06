"use strict";
// render header menu
// const wrapperBlock = `

// `;

// class addElements {
//     constructor(parentSelector, wrapper) {
//         this.parent = document.querySelector(parentSelector);
//         this.wrapper = wrapper;
       
//     }
//     renderHeader() {
//         const element = document.createElement('header');
//         element.classList.add('header');
//         element.innerHTML = this.wrapper;
//         this.parent.prepend(element);
//     }
// }


// new addElements('body', wrapperBlock).renderHeader();


// Modal Window
const openTrigger = document.querySelector('[data-open]'),
      modalWindow = document.querySelector('.modal'),
      closeTrigger = document.querySelector('[data-close]');

    function closeElement(element) {
        element.classList.toggle('show');
        document.body.style.overflow = '';
    }

    function openElement(element) {
        element.classList.toggle('show');
        document.body.style.overflow = 'hidden';    
    }
    
    openTrigger.addEventListener('click', () => {
        openElement(modalWindow);
    });
    
    closeTrigger.addEventListener('click', (e) => {
        closeElement(modalWindow);
        
    });
    
    modalWindow.addEventListener('click', (e) => {
        if(e.target === modalWindow) {
            closeElement(modalWindow);
        }
    });
    document.addEventListener('keydown', (e) => {
        if(e.code === 'Escape' && modalWindow.classList.contains('show')) {
            closeElement(modalWindow);
            console.log('test');
        }
    });


// Burger Menu


window.addEventListener('DOMContentLoaded', () => {
    const burgerMenuOpen = document.querySelector('.hamburger'),
    burgerMenu = document.querySelector('.header__menu_wrapper'),
    burgerCloseButton = document.querySelector('.header__menu_close'),
    header = document.querySelector('header');

header.addEventListener('click', (e) => {
let target = e.target;
  if (target && target.hasAttribute('data-triggerBurgerMenu')) {
      burgerMenu.classList.toggle('header__menu_wrapper_active');
  }
});
});

// ///////// love icons
// window.addEventListener('DOMContentLoaded', () => {
//     const headerIcons = document.querySelector('.header__icons'),
//           loveIcon = document.querySelector('.love_icon');

//         headerIcons.addEventListener('click', () => {
//             loveIcon.innerHTML = `<img slass ="love_icon" src="icons/love.svg" alt="love">`;
//             console.log('test');
//         });
// });

// console.log('loveIcon');