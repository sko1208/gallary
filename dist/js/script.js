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
    header = document.querySelector('header');

    header.addEventListener('click', (e) => {
        let target = e.target;
        if (target && target.hasAttribute('data-triggerBurgerMenu')) {
            burgerMenu.classList.toggle('header__menu_wrapper_active');
        }
    });
});


// slider
$(document).ready(function(){
    $('.gallary__card-wrapper').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        variableWidth: true,
        swipeToSlide: true,
        prevArrow: '<button type="button" class="slick-prev"><</button>',
        nextArrow: '<button type="button" class="slick-next">></button>',
        // centerMode: true,
        // focusOnSelect: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    centerMode: true,
                    focusOnSelect: true
                  }
                
            }
        ]
      
      });
  });





  