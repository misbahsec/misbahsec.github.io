// Shared behaviour for all pages. Small on purpose — no dependencies.
(function () {
  'use strict';

  var root = document.body;
  var savedTheme = localStorage.getItem('theme');
  var isDarkTheme = savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
  root.setAttribute('data-theme', isDarkTheme ? 'dark' : 'light');

  var toggle = document.querySelector('.theme-toggle');
  var menuButton = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.navlinks');

  function moonIcon() {
    return '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 0 1 11.2 3a9 9 0 1 0 9.8 9.8Z"/></svg>';
  }
  function sunIcon() {
    return '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2.5M12 19.5V22M4.93 4.93l1.77 1.77M17.3 17.3l1.77 1.77M2 12h2.5M19.5 12H22M4.93 19.07l1.77-1.77M17.3 6.7l1.77-1.77"/></svg>';
  }
  function updateThemeButton() {
    if (!toggle) return;
    var dark = root.getAttribute('data-theme') === 'dark';
    toggle.innerHTML = dark ? sunIcon() : moonIcon();
    toggle.setAttribute('aria-label', dark ? 'Switch to day mode' : 'Switch to night mode');
    toggle.setAttribute('title', dark ? 'Switch to day mode' : 'Switch to night mode');
  }

  if (toggle) {
    toggle.addEventListener('click', function () {
      var isDark = root.getAttribute('data-theme') === 'dark';
      var nextTheme = isDark ? 'light' : 'dark';
      root.setAttribute('data-theme', nextTheme);
      localStorage.setItem('theme', nextTheme);
      updateThemeButton();
    });
  }

  if (menuButton && nav) {
    menuButton.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
      menuButton.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
      menuButton.title = isOpen ? 'Close navigation menu' : 'Open navigation menu';
    });
  }

  updateThemeButton();

  // Mark the current page in the nav.
  var here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navlinks a').forEach(function (a) {
    if (a.getAttribute('href') === here) a.setAttribute('aria-current', 'page');
  });

  // Footer year.
  var yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();

  // "Show older news" toggle.
  var btn = document.getElementById('morenews');
  if (btn) {
    btn.addEventListener('click', function () {
      var hidden = document.querySelectorAll('.olddated');
      var opening = !hidden[0].classList.contains('show');
      hidden.forEach(function (el) { el.classList.toggle('show', opening); });
      btn.textContent = opening ? 'Show less' : 'Show older news';
    });
  }

  // Scroll reveal.
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var targets = document.querySelectorAll('.reveal');
  if (reduce || !('IntersectionObserver' in window)) {
    targets.forEach(function (el) { el.classList.add('in'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });
  targets.forEach(function (el) { io.observe(el); });
})();
