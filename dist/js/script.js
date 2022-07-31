"use strict";
// render header menu
const wrapperBlock = `
<div class="container">
    <div class="header__logo">
        <a href="../index.html"><img src="img/logo.png" alt="logo"></a>
    </div>
    <ul class="header__menu">
        <li><a href="../index.html">Main</a></li>
        <li><a href="../pages/gallary.html">Gallery</a></li>
        <li><a href="#">Exhibitions</a></li>
        <li><a href="#">Bio</a></li>
        <li><a href="#">FAQ</a></li>
        <li><a href="#" data-open>Contacts</a></li>
        <li><a href="#">Auction</a></li>
        <li><a href="#">NFT</a></li>
    </ul>
    <div class="header__like">
        <a href="#">
        </a>
    </div>
    <ul class="header__social-icons">
        <li>
            <a href="#"></a>
        </li>
        <li>
            <a href=""></a>
        </li>
        <li>
            <a href=""></a>
        </li>
        <li>
            <a href=""></a>
        </li>
    </ul>
</div>
`;

class addElements {
    constructor(parentSelector, wrapper) {
        this.parent = document.querySelector(parentSelector);
        this.wrapper = wrapper;
       
    }
    renderHeader() {
        const element = document.createElement('header');
        element.classList.add('header');
        element.innerHTML = this.wrapper;
        this.parent.prepend(element);
    }
}


new addElements('body', wrapperBlock).renderHeader();


// Modal window
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




