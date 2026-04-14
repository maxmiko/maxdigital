/* ============================================
   MaxDigital.lv — Main JavaScript
   ============================================ */

(function () {
  'use strict';

  // --- Sticky header shadow ---
  const header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', function () {
      header.classList.toggle('scrolled', window.scrollY > 10);
    }, { passive: true });
  }

  // --- Mobile menu toggle ---
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', function () {
      const isOpen = nav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close on link click
    nav.querySelectorAll('a:not(.nav-dropdown > a)').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // Mobile dropdown toggle
    nav.querySelectorAll('.nav-dropdown > a').forEach(function (toggle) {
      toggle.addEventListener('click', function (e) {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          toggle.parentElement.classList.toggle('open');
        }
      });
    });
  }

  // --- Scroll animations ---
  var animatedElements = document.querySelectorAll('.fade-in');
  if (animatedElements.length > 0 && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    animatedElements.forEach(function (el) {
      observer.observe(el);
    });
  }

  // --- Contact form ---
  var contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = contactForm.querySelector('.btn');
      var originalText = btn.textContent;
      btn.textContent = 'Sūta...';
      btn.disabled = true;

      fetch(contactForm.action, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { 'Accept': 'application/json' }
      }).then(function (response) {
        if (response.ok) {
          btn.textContent = 'Nosūtīts!';
          btn.style.background = '#10b981';
          contactForm.reset();
          setTimeout(function () {
            btn.textContent = originalText;
            btn.style.background = '';
            btn.disabled = false;
          }, 3000);
        } else {
          btn.textContent = 'Kļūda. Mēģiniet vēlreiz.';
          btn.style.background = '#ef4444';
          setTimeout(function () {
            btn.textContent = originalText;
            btn.style.background = '';
            btn.disabled = false;
          }, 3000);
        }
      }).catch(function () {
        btn.textContent = 'Kļūda. Mēģiniet vēlreiz.';
        btn.style.background = '#ef4444';
        setTimeout(function () {
          btn.textContent = originalText;
          btn.style.background = '';
          btn.disabled = false;
        }, 3000);
      });
    });
  }

  // --- Current year in footer ---
  var yearSpans = document.querySelectorAll('.current-year');
  yearSpans.forEach(function (span) {
    span.textContent = new Date().getFullYear();
  });

})();
