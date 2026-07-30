(function () {
  "use strict";

  var header = document.querySelector(".site-header");
  var hero = document.querySelector(".hero");
  var navToggle = document.querySelector(".nav-toggle");
  var mobileMenu = document.querySelector(".mobile-menu");

  /* -------------------- header state on scroll -------------------- */
  function onScroll() {
    if (window.scrollY > 8) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
    if (hero) {
      var heroBottom = hero.offsetTop + hero.offsetHeight;
      var pastHero = window.scrollY + header.offsetHeight > heroBottom;
      header.classList.toggle("header-past-hero", pastHero);
    }
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);

  /* -------------------- menu mobile -------------------- */
  function closeMobileMenu() {
    mobileMenu.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  }
  function openMobileMenu() {
    mobileMenu.classList.add("is-open");
    navToggle.setAttribute("aria-expanded", "true");
  }
  navToggle.addEventListener("click", function () {
    var isOpen = mobileMenu.classList.contains("is-open");
    if (isOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });
  mobileMenu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeMobileMenu);
  });

  /* -------------------- scroll suave sem scrollIntoView -------------------- */
  function smoothScrollTo(targetEl) {
    var headerH = header.offsetHeight;
    var rect = targetEl.getBoundingClientRect();
    var top = rect.top + window.pageYOffset - headerH - 12;
    window.scrollTo({ top: top, behavior: "smooth" });
  }

  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
      var id = link.getAttribute("href");
      if (!id || id === "#" || id.length < 2) return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      smoothScrollTo(target);
      if (history.pushState) history.pushState(null, "", id);
    });
  });

  /* -------------------- reveal on scroll -------------------- */
  var revealEls = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) {
      io.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  /* -------------------- popup do WhatsApp -------------------- */
  var waBackdrop = document.querySelector(".wa-backdrop");
  var waPopup = document.querySelector(".wa-popup");
  var waOpenTriggers = document.querySelectorAll("[data-wa-open]");
  var waCloseTriggers = document.querySelectorAll("[data-wa-close]");
  var lastFocused = null;

  function openWaPopup(e) {
    if (e) e.preventDefault();
    lastFocused = document.activeElement;
    waBackdrop.classList.add("is-open");
    waPopup.classList.add("is-open");
    var closeBtn = waPopup.querySelector(".wa-popup-close");
    if (closeBtn) closeBtn.focus();
    document.addEventListener("keydown", onKeydown);
  }

  function closeWaPopup() {
    waBackdrop.classList.remove("is-open");
    waPopup.classList.remove("is-open");
    document.removeEventListener("keydown", onKeydown);
    if (lastFocused && typeof lastFocused.focus === "function") {
      lastFocused.focus();
    }
  }

  function onKeydown(e) {
    if (e.key === "Escape") closeWaPopup();
  }

  waOpenTriggers.forEach(function (btn) {
    btn.addEventListener("click", openWaPopup);
  });
  waCloseTriggers.forEach(function (btn) {
    btn.addEventListener("click", closeWaPopup);
  });
  waBackdrop.addEventListener("click", closeWaPopup);
})();
