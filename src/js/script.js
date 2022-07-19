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
        <li><a href="#">Contacts</a></li>
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









