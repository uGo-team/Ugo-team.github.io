window.addEventListener("load", function () {
  setupButtons();
  setupCases();
  addPageTitle();
  setupCardEffects()
});

// ---------- LANGUAGE ----------
// true on the French page (<html lang="fr-CA">)
function isFrench() {
  return document.documentElement.lang.toLowerCase().startsWith("fr");
}


// ---------- LOG IN AND SIGN UP BUTTONS AND HELP CENTRE LINK----------
// The buttons do not go anywhere, so a message is shown
function setupButtons() {
  // get all the buttons inside the header
  const buttons = document.querySelectorAll("header button, #help-link");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function (event) {

      event.preventDefault(); //to stop "#" link from returning to the top of the page
      const buttonName = buttons[i].textContent;

      if (isFrench()) {
        alert("La page « " + buttonName + " » sera bientôt disponible!");
      } else {
        alert(buttonName + " page is coming soon!");
      }
    });
  }
}

// ---------- CASES ----------
function setupCases() {
  const cases = document.querySelectorAll("main details");

  cases.forEach(function (caseElement) {
    caseElement.addEventListener("mouseenter", function () {
      caseElement.open = true;
    });
    caseElement.addEventListener("mouseleave", function () {
      caseElement.open = false;
    });
  });
}
function addPageTitle() {
    const main = document.querySelector("main");

    const isFrench = window.location.pathname.includes("-fr");

    const title = document.createElement("h1");
    const description = document.createElement("p");

    if (isFrench) {
        title.textContent = "Découvrez uGo";
        description.textContent = "Explorez les fonctionnalités qui facilitent vos déplacements.";
    } else {
        title.textContent = "Discover uGo";
        description.textContent = "Explore the features that make your journey easier.";
    }
    main.prepend(description);
    main.prepend(title);
}
function setupCardEffects() {
    const cards = document.querySelectorAll("main details");

    cards.forEach(function(card) {

        // Hover animation
        card.addEventListener("mouseenter", function() {
            card.style.transform = "translateY(-8px) scale(1.02)";
        });

        card.addEventListener("mouseleave", function() {
            card.style.transform = "";
        });
        // Click effect
        card.addEventListener("click", function() {

            // Remove selection from other cards
            cards.forEach(function(otherCard) {
                otherCard.classList.remove("selected");
            });

            // Select clicked card
            card.classList.add("selected");
        });
    });
}

