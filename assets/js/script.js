'use strict';

/**
 * Utility function to toggle an element's "active" class.
 * @param {HTMLElement} element - The element to toggle.
 */
const toggleElement = (element) => {
  element.classList.toggle('active');
};

/**
 * Navbar Toggle Functionality
 */
const navbar = document.querySelector('[data-navbar]');
const navTogglers = document.querySelectorAll('[data-nav-toggler]');
const overlay = document.querySelector('[data-overlay]');

navTogglers.forEach((toggler) => {
  toggler.addEventListener('click', () => {
    toggleElement(navbar);
    toggleElement(overlay);
  });
});

/**
 * Sticky Header & Back to Top Button
 */
const header = document.querySelector('[data-header]');
const backTopBtn = document.querySelector('[data-back-top-btn]');

window.addEventListener('scroll', () => {
  const isScrolled = window.scrollY >= 100;
  
  header.classList.toggle('active', isScrolled);
  backTopBtn.classList.toggle('active', isScrolled);
  header.classList.toggle('header-anim', isScrolled);
});

/**
 * Search Box Toggle
 */
const searchBox = document.querySelector('[data-search-box]');
const searchTogglers = document.querySelectorAll('[data-search-toggler]');

searchTogglers.forEach((toggler) => {
  toggler.addEventListener('click', () => {
    toggleElement(searchBox);
  });
});

/**
 * Wishlist Button Toggle
 */
const wishlistButtons = document.querySelectorAll('[data-whish-btn]');

wishlistButtons.forEach((button) => {
  button.addEventListener('click', () => {
    toggleElement(button);
  });
});
