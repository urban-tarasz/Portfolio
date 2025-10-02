/**
 * Portfolio JavaScript - Progressive Enhancement
 * Minimal, no-framework vanilla JS
 */

(function() {
  'use strict';

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /**
   * Smooth scroll to anchor links
   * Only if user doesn't prefer reduced motion
   */
  function initSmoothScroll() {
    if (prefersReducedMotion) return;

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
      link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');

        // Skip if href is just "#"
        if (href === '#') return;

        const target = document.querySelector(href);

        if (target) {
          e.preventDefault();

          // Get header height for offset
          const header = document.querySelector('.site-header');
          const headerHeight = header ? header.offsetHeight : 0;

          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });

          // Update URL without jumping
          if (history.pushState) {
            history.pushState(null, null, href);
          }

          // Focus management for accessibility
          target.setAttribute('tabindex', '-1');
          target.focus();
        }
      });
    });
  }

  /**
   * Sticky header with scroll detection
   * Adds class when scrolled for optional styling
   */
  function initStickyHeader() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    let lastScroll = 0;

    window.addEventListener('scroll', function() {
      const currentScroll = window.pageYOffset;

      if (currentScroll > 100) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }

      lastScroll = currentScroll;
    });
  }

  /**
   * Lazy load Figma embeds only when visible
   * Improves initial page load performance
   */
  function initLazyFigmaEmbeds() {
    if ('IntersectionObserver' in window) {
      const embedObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const iframe = entry.target;
            if (iframe.dataset.src) {
              iframe.src = iframe.dataset.src;
              iframe.removeAttribute('data-src');
              embedObserver.unobserve(iframe);
            }
          }
        });
      }, {
        rootMargin: '50px'
      });

      document.querySelectorAll('.figma-embed[data-src]').forEach(iframe => {
        embedObserver.observe(iframe);
      });
    }
  }

  /**
   * External link handling
   * Ensures external links open in new tab with security
   */
  function initExternalLinks() {
    const links = document.querySelectorAll('a[href^="http"]');

    links.forEach(link => {
      const url = new URL(link.href);

      // If external domain
      if (url.hostname !== window.location.hostname) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
      }
    });
  }

  /**
   * Form validation (if contact forms are added)
   */
  function initFormValidation() {
    const forms = document.querySelectorAll('form[data-validate]');

    forms.forEach(form => {
      form.addEventListener('submit', function(e) {
        let isValid = true;
        const requiredFields = form.querySelectorAll('[required]');

        requiredFields.forEach(field => {
          const errorId = field.id + '-error';
          let errorEl = document.getElementById(errorId);

          // Remove existing error if present
          if (errorEl) {
            errorEl.remove();
          }

          // Validate
          if (!field.value.trim()) {
            isValid = false;

            // Create error message
            errorEl = document.createElement('div');
            errorEl.id = errorId;
            errorEl.className = 'field-error';
            errorEl.setAttribute('role', 'alert');
            errorEl.textContent = field.getAttribute('data-error') || 'This field is required';

            field.setAttribute('aria-describedby', errorId);
            field.setAttribute('aria-invalid', 'true');
            field.parentNode.appendChild(errorEl);
          } else {
            field.removeAttribute('aria-invalid');
            field.removeAttribute('aria-describedby');
          }
        });

        if (!isValid) {
          e.preventDefault();
          // Focus first error
          const firstError = form.querySelector('[aria-invalid="true"]');
          if (firstError) firstError.focus();
        }
      });
    });
  }

  /**
   * Analytics helper (placeholder)
   * Track case study card clicks
   */
  function initAnalytics() {
    const caseLinks = document.querySelectorAll('.case-card-link');

    caseLinks.forEach(link => {
      link.addEventListener('click', function() {
        const cardTitle = this.closest('.case-card')?.querySelector('.case-card-title')?.textContent;

        // Send to analytics if available
        if (typeof gtag !== 'undefined') {
          gtag('event', 'case_study_click', {
            'case_title': cardTitle
          });
        }
      });
    });
  }

  /**
   * Skip link focus management
   */
  function initSkipLink() {
    const skipLink = document.querySelector('.skip-link');
    if (!skipLink) return;

    skipLink.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.setAttribute('tabindex', '-1');
        target.focus();
        window.scrollTo(0, 0);
      }
    });
  }

  /**
   * Initialize all features
   */
  function init() {
    // Core navigation
    initSmoothScroll();
    initStickyHeader();
    initSkipLink();

    // Performance
    initLazyFigmaEmbeds();

    // Enhancements
    initExternalLinks();
    initFormValidation();
    initAnalytics();

    // Log for debugging
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      console.log('Portfolio JS initialized');
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
