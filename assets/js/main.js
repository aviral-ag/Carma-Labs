(function () {
  "use strict";

  var navToggle = document.querySelector(".nav-toggle");
  var navLinks = document.querySelector(".nav-links");

  function closeNav() {
    if (!navLinks || !navToggle) return;
    navLinks.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open sections");
  }

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      var isOpen = navLinks.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      navToggle.setAttribute("aria-label", isOpen ? "Close sections" : "Open sections");
    });

    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeNav);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeNav();
    });
  }

  var sectionLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  var sections = [];
  sectionLinks.forEach(function (link) {
    var id = link.getAttribute("href").slice(1);
    var section = document.getElementById(id);
    if (section) sections.push({ link: link, section: section });
  });

  if (sections.length && "IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          sections.forEach(function (item) {
            item.link.classList.toggle("is-active", item.section === entry.target);
          });
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach(function (item) { observer.observe(item.section); });
  }

  var form = document.getElementById("join-form");
  if (!form) return;

  var fields = ["name", "email", "affiliation", "interest", "note"];
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var success = document.getElementById("form-success");

  function setError(id, message) {
    var error = document.getElementById(id + "-error");
    var input = document.getElementById(id);
    if (error) error.textContent = message;
    if (input) input.classList.toggle("is-invalid", Boolean(message));
  }

  function validate() {
    var valid = true;
    fields.forEach(function (id) {
      var input = document.getElementById(id);
      var value = input.value.trim();
      if (!value) {
        setError(id, "This field is required.");
        valid = false;
        return;
      }
      if (id === "email" && !emailPattern.test(value)) {
        setError(id, "Enter a valid email address.");
        valid = false;
        return;
      }
      setError(id, "");
    });
    return valid;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    success.hidden = true;
    if (!validate()) return;

    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var affiliation = document.getElementById("affiliation").value.trim();
    var interest = document.getElementById("interest").value.trim();
    var note = document.getElementById("note").value.trim();

    var body = [
      "I would like to join the CARMA research team.",
      "",
      "Name: " + name,
      "Email: " + email,
      "Affiliation: " + affiliation,
      "Interest: " + interest,
      "",
      note
    ].join("\n");

    var mailto = "mailto:hello@carmalabs.info"
      + "?subject=" + encodeURIComponent("Research team — " + name)
      + "&body=" + encodeURIComponent(body);

    success.innerHTML = "Your email app should open with this note. If it does not, <a href=\""
      + mailto.replace(/"/g, "%22")
      + "\">send it to hello@carmalabs.info</a>.";
    success.hidden = false;
    window.location.href = mailto;
  });
})();
