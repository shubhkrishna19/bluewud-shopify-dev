// Bluewud Theme JavaScript
(function() {
  'use strict';

  // Initialize theme
  document.addEventListener('DOMContentLoaded', function() {
    console.log('Bluewud Theme Loaded');
    
    // Mobile menu toggle
    initMobileMenu();
    
    // Cart drawer
    initCartDrawer();
    
    // Quantity selectors
    initQuantitySelectors();
  });

  // Mobile Menu
  function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    
    if (menuToggle && mobileNav) {
      menuToggle.addEventListener('click', function() {
        mobileNav.classList.toggle('open');
        menuToggle.classList.toggle('active');
      });
    }
  }

  // Cart Drawer
  function initCartDrawer() {
    const cartLinks = document.querySelectorAll('a[href="/cart"]');
    
    cartLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        // Let default cart page work, cart drawer is optional
      });
    });
  }

  // Quantity Selectors
  function initQuantitySelectors() {
    const quantityInputs = document.querySelectorAll('.quantity-input input');
    
    quantityInputs.forEach(function(input) {
      input.addEventListener('change', function() {
        const form = this.closest('form');
        if (form) {
          form.submit();
        }
      });
    });
  }

  // Add to cart AJAX (optional enhancement)
  window.addToCart = function(variantId, quantity) {
    fetch('/cart/add.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        items: [{
          id: variantId,
          quantity: quantity || 1
        }]
      })
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      // Update cart count
      fetch('/cart.js')
        .then(function(res) { return res.json(); })
        .then(function(cart) {
          const countEl = document.querySelector('.cart-count');
          if (countEl) {
            countEl.textContent = cart.item_count;
          }
        });
      
      // Open cart drawer
      if (typeof toggleCart === 'function') {
        toggleCart();
      }
    })
    .catch(function(error) {
      console.error('Error adding to cart:', error);
    });
  };

})();
