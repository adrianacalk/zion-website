/* =====================================================================
   Zion Lutheran Church  -  the only JavaScript on the site
   ---------------------------------------------------------------------
   It does three small things:
     1. Opens and closes the menu on phones (the "Menu" button).
     2. Opens and closes the About / Ministries / Events drop-downs
        when they are clicked or tapped.
     3. Puts the current year in the footer copyright line.
   The site still shows all its content if this file fails to load.
   ===================================================================== */
(function () {
  var header = document.querySelector(".site-header");
  if (!header) return;

  var menuButton = header.querySelector(".menu-toggle");
  var groupButtons = header.querySelectorAll(".menu-parent");

  /* Close every drop-down group */
  function closeGroups() {
    for (var i = 0; i < groupButtons.length; i++) {
      groupButtons[i].setAttribute("aria-expanded", "false");
      groupButtons[i].parentNode.classList.remove("is-open");
    }
  }

  /* 1. Phone menu: the Menu button shows or hides the whole menu */
  menuButton.addEventListener("click", function () {
    var open = !header.classList.contains("is-open");
    header.classList.toggle("is-open", open);
    menuButton.setAttribute("aria-expanded", open ? "true" : "false");
  });

  /* 2. Drop-downs: clicking About / Ministries / Events opens that group */
  for (var i = 0; i < groupButtons.length; i++) {
    groupButtons[i].addEventListener("click", function () {
      var button = this;
      var open = button.getAttribute("aria-expanded") !== "true";
      closeGroups();
      button.setAttribute("aria-expanded", open ? "true" : "false");
      button.parentNode.classList.toggle("is-open", open);
    });
  }

  /* Clicking anywhere else closes the drop-downs */
  document.addEventListener("click", function (event) {
    if (!event.target.closest(".menu > li")) closeGroups();
  });

  /* The Escape key closes everything */
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeGroups();
      header.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
    }
  });

  /* 3. Footer year: replaces the number inside <span id="year"> */
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
