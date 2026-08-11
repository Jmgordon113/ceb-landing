(function () {
  "use strict";

  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* 1. Sticky nav: shadow + solid bg after 10px scroll */
  var header = document.getElementById("site-header");

  function updateHeader() {
    if (!header) return;
    if (window.scrollY > 10) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  }

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  /* 2. Mobile hamburger menu */
  var toggle = document.getElementById("nav-toggle");
  var menu = document.getElementById("mobile-menu");
  var closeBtn = document.getElementById("mobile-menu-close");

  function openMenu() {
    if (!menu || !toggle) return;
    menu.hidden = false;
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Close menu");
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    if (!menu || !toggle) return;
    menu.hidden = true;
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
    document.body.style.overflow = "";
  }

  function isMenuOpen() {
    return menu && !menu.hidden;
  }

  if (toggle) {
    toggle.addEventListener("click", function () {
      if (isMenuOpen()) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", closeMenu);
  }

  if (menu) {
    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && isMenuOpen()) {
      closeMenu();
    }
  });

  /* 3. FAQ accordion: one open at a time, chevron rotates, smooth height */
  var faqItems = document.querySelectorAll(".faq-item");

  function closeFaqItem(item) {
    var btn = item.querySelector(".faq-question");
    var answer = item.querySelector(".faq-answer");
    item.classList.remove("is-open");
    if (btn) btn.setAttribute("aria-expanded", "false");
    if (answer) {
      answer.style.maxHeight = "0px";
      answer.setAttribute("hidden", "");
    }
  }

  function openFaqItem(item) {
    var btn = item.querySelector(".faq-question");
    var answer = item.querySelector(".faq-answer");
    item.classList.add("is-open");
    if (btn) btn.setAttribute("aria-expanded", "true");
    if (answer) {
      answer.removeAttribute("hidden");
      /* force reflow so max-height transition runs */
      void answer.offsetHeight;
      if (prefersReducedMotion) {
        answer.style.maxHeight = "none";
      } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    }
  }

  faqItems.forEach(function (item) {
    var btn = item.querySelector(".faq-question");
    if (!btn) return;

    btn.addEventListener("click", function () {
      var isOpen = item.classList.contains("is-open");
      faqItems.forEach(closeFaqItem);
      if (!isOpen) openFaqItem(item);
    });
  });

  /* 4. Smooth-scroll handled via CSS scroll-behavior + scroll-margin-top */

  /* 5. Reveal-on-scroll (IntersectionObserver) */
  var revealEls = document.querySelectorAll(".reveal");

  if (prefersReducedMotion) {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  } else if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }
})();
