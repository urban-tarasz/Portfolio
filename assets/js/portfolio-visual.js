/**
 * Visual Portfolio JavaScript
 * Smooth animations and interactions
 */

(function() {
	'use strict';

	const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

	/**
	 * Remove preload class after page loads
	 */
	window.addEventListener('load', function() {
		setTimeout(function() {
			document.body.classList.remove('is-preload');
		}, 100);
	});

	/**
	 * Smooth scroll for anchor links
	 */
	function initSmoothScroll() {
		const links = document.querySelectorAll('a[href^="#"]');

		links.forEach(link => {
			link.addEventListener('click', function(e) {
				const href = this.getAttribute('href');
				if (href === '#') return;

				const target = document.querySelector(href);
				if (!target) return;

				e.preventDefault();

				const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 80;

				if (prefersReducedMotion) {
					window.scrollTo(0, offsetTop);
				} else {
					window.scrollTo({
						top: offsetTop,
						behavior: 'smooth'
					});
				}

				// Focus management
				target.setAttribute('tabindex', '-1');
				target.focus();

				// Update URL
				if (history.pushState) {
					history.pushState(null, null, href);
				}
			});
		});
	}

	/**
	 * Fade-up sections on scroll
	 */
	function initScrollAnimations() {
		if (prefersReducedMotion) return;
		if (!('IntersectionObserver' in window)) return;

		const sections = document.querySelectorAll('.wrapper.fade-up');

		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.style.opacity = '1';
					entry.target.style.transform = 'translateY(0)';
				}
			});
		}, {
			threshold: 0.1,
			rootMargin: '0px 0px -100px 0px'
		});

		sections.forEach(section => {
			section.style.opacity = '0';
			section.style.transform = 'translateY(30px)';
			section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
			observer.observe(section);
		});
	}

	/**
	 * Spotlight hover effects
	 */
	function initSpotlightEffects() {
		const spotlights = document.querySelectorAll('.case-spotlight');

		spotlights.forEach(spotlight => {
			const image = spotlight.querySelector('.image-wrapper img');

			spotlight.addEventListener('mouseenter', function() {
				if (!prefersReducedMotion && image) {
					image.style.transform = 'scale(1.05)';
				}
			});

			spotlight.addEventListener('mouseleave', function() {
				if (!prefersReducedMotion && image) {
					image.style.transform = 'scale(1)';
				}
			});
		});
	}

	/**
	 * Active navigation highlighting
	 */
	function initNavHighlight() {
		const sections = document.querySelectorAll('section[id]');
		const navLinks = document.querySelectorAll('#sidebar ul li a');

		function highlightNav() {
			let current = '';

			sections.forEach(section => {
				const sectionTop = section.offsetTop;
				const sectionHeight = section.clientHeight;

				if (window.pageYOffset >= sectionTop - 200) {
					current = section.getAttribute('id');
				}
			});

			navLinks.forEach(link => {
				link.classList.remove('active');
				if (link.getAttribute('href') === '#' + current) {
					link.classList.add('active');
				}
			});
		}

		window.addEventListener('scroll', highlightNav);
		highlightNav();
	}

	/**
	 * Mobile sidebar toggle (for future implementation)
	 */
	function initMobileSidebar() {
		// Placeholder for mobile menu toggle
		// Add a hamburger button in HTML for mobile
		const sidebar = document.getElementById('sidebar');
		const toggleBtn = document.getElementById('sidebar-toggle');

		if (toggleBtn && sidebar) {
			toggleBtn.addEventListener('click', function() {
				sidebar.classList.toggle('active');
			});
		}
	}

	/**
	 * Button ripple effect
	 */
	function initButtonRipples() {
		if (prefersReducedMotion) return;

		const buttons = document.querySelectorAll('.button');

		buttons.forEach(button => {
			button.addEventListener('click', function(e) {
				const ripple = this.querySelector('::before');
				if (ripple) {
					// Ripple effect is handled by CSS ::before pseudo-element
				}
			});
		});
	}

	/**
	 * External links
	 */
	function initExternalLinks() {
		const links = document.querySelectorAll('a[href^="http"]');

		links.forEach(link => {
			const url = new URL(link.href);

			if (url.hostname !== window.location.hostname) {
				link.setAttribute('target', '_blank');
				link.setAttribute('rel', 'noopener noreferrer');
			}
		});
	}

	/**
	 * Parallax background effect (subtle)
	 */
	function initParallax() {
		if (prefersReducedMotion) return;

		window.addEventListener('scroll', function() {
			const scrolled = window.pageYOffset;
			const wrapper = document.getElementById('wrapper');

			if (wrapper) {
				// Very subtle parallax
				wrapper.style.transform = `translateY(${scrolled * 0.02}px)`;
			}
		});
	}

	/**
	 * Initialize all features
	 */
	function init() {
		initSmoothScroll();
		initScrollAnimations();
		initSpotlightEffects();
		initNavHighlight();
		initMobileSidebar();
		initButtonRipples();
		initExternalLinks();
		// initParallax(); // Disabled by default, can enable if desired

		// Log for debugging
		if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
			console.log('Visual portfolio initialized');
		}
	}

	// Initialize
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', init);
	} else {
		init();
	}

})();
