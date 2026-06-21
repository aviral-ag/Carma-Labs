(function () {
  "use strict";

  var navToggle = document.querySelector(".nav-toggle");
  var navLinks = document.querySelector(".nav-links");

  /* Mobile menu toggle */
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      var isOpen = navLinks.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navLinks.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && navLinks.classList.contains("is-open")) {
        navLinks.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* Active page link */
  var segments = window.location.pathname.split("/").filter(Boolean);
  var currentPage = segments.pop() || "index.html";

  if (!currentPage.includes(".")) {
    currentPage = "index.html";
  }

  document.querySelectorAll(".nav-links a").forEach(function (link) {
    var linkPage = link.getAttribute("href").split("/").pop();

    if (linkPage === currentPage) {
      link.classList.add("is-active");
    }
  });

  /* Course filter */
  var filterButtons = document.querySelectorAll(".filter-btn");
  var catalogCards = document.querySelectorAll(".course-grid--catalog .course-card");

  if (filterButtons.length && catalogCards.length) {
    filterButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        var filter = button.getAttribute("data-filter");

        filterButtons.forEach(function (btn) {
          btn.classList.remove("is-active");
        });
        button.classList.add("is-active");

        catalogCards.forEach(function (card) {
          var category = card.getAttribute("data-category");
          var matches = filter === "all" || category === filter;

          if (matches) {
            card.classList.remove("is-hidden");
          } else {
            card.classList.add("is-hidden");
          }
        });
      });
    });
  }

  /* Contact form validation */
  var contactForm = document.getElementById("contact-form");

  if (contactForm) {
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var orgInput = document.getElementById("organisation");
    var messageInput = document.getElementById("message");
    var successMessage = document.getElementById("form-success");

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function setError(fieldId, message) {
      var errorEl = document.getElementById(fieldId + "-error");
      var input = document.getElementById(fieldId);

      if (errorEl) {
        errorEl.textContent = message;
      }
      if (input) {
        input.classList.toggle("is-invalid", Boolean(message));
      }
    }

    function clearErrors() {
      ["name", "email", "organisation", "message"].forEach(function (field) {
        setError(field, "");
      });
    }

    function validateForm() {
      var isValid = true;

      if (!nameInput.value.trim()) {
        setError("name", "Please enter your name.");
        isValid = false;
      } else {
        setError("name", "");
      }

      if (!emailInput.value.trim()) {
        setError("email", "Please enter your email address.");
        isValid = false;
      } else if (!emailPattern.test(emailInput.value.trim())) {
        setError("email", "Please enter a valid email address.");
        isValid = false;
      } else {
        setError("email", "");
      }

      if (!orgInput.value.trim()) {
        setError("organisation", "Please enter your organisation.");
        isValid = false;
      } else {
        setError("organisation", "");
      }

      if (!messageInput.value.trim()) {
        setError("message", "Please enter a message.");
        isValid = false;
      } else {
        setError("message", "");
      }

      return isValid;
    }

    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      successMessage.hidden = true;

      if (!validateForm()) {
        return;
      }

      contactForm.reset();
      clearErrors();
      successMessage.hidden = false;
    });
  }
})();
