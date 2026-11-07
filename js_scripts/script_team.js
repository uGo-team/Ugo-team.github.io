window.addEventListener("load", function () {
  setupButtons();
  setupTeamCards();
});


// ---------- LANGUAGE ----------
// on the French page
function isFrench() {
  return document.documentElement.lang.toLowerCase().startsWith("fr");
}


// ---------- LOG IN AND SIGN UP BUTTONS ----------
// The buttons do not go anywhere, so a message is shown
function setupButtons() {
  // get all the buttons inside the header
  const buttons = document.querySelectorAll("header button");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      const buttonName = buttons[i].textContent;

      if (isFrench()) {
        showMessage(
          "Cette page indique",
          "La page « " + buttonName + " » sera bientôt disponible!",
          "OK"
        );
      } else {
        showMessage(
          "This page says",
          buttonName + " page is coming soon!",
          "OK"
        );
      }
    });
  }
}


// ---------- POPUP MESSAGE ----------
// our own message box, so the title can be in French or English
function showMessage(title, text, buttonText) {
  // do not open two popups at the same time
  if (document.getElementById("ugo-popup")) {
    return;
  }

  // dark background behind the box
  const overlay = document.createElement("div");
  overlay.id = "ugo-popup";
  overlay.setAttribute("role", "alertdialog");
  overlay.setAttribute("aria-modal", "true");
  overlay.setAttribute("aria-labelledby", "ugo-popup-title");
  overlay.style.cssText =
    "position:fixed; top:0; left:0; width:100%; height:100%;" +
    "background:rgba(45,45,44,0.6); display:flex;" +
    "align-items:center; justify-content:center; z-index:1000; padding:20px;";

  // white box
  const box = document.createElement("div");
  box.style.cssText =
    "background:#ffffff; color:#2d2d2c; border-top:5px solid #8f001a;" +
    "border-radius:8px; padding:24px; max-width:360px; width:100%;" +
    "font-family:'Poppins', sans-serif; text-align:center;" +
    "box-shadow:0 12px 30px rgba(0,0,0,0.25);";

  const heading = document.createElement("h3");
  heading.id = "ugo-popup-title";
  heading.textContent = title;
  heading.style.cssText = "margin:0 0 12px 0; font-size:20px; width:auto;";

  const message = document.createElement("p");
  message.textContent = text;
  message.style.cssText = "margin:0 0 20px 0;";

  const okButton = document.createElement("button");
  okButton.textContent = buttonText;
  okButton.style.cssText =
    "background:#8f001a; color:#ffffff; border:2px solid #8f001a;" +
    "border-radius:8px; padding:10px 28px; font-size:16px;" +
    "font-weight:bold; font-family:'Poppins', sans-serif; cursor:pointer;";

  box.appendChild(heading);
  box.appendChild(message);
  box.appendChild(okButton);
  overlay.appendChild(box);
  document.body.appendChild(overlay);

  // close the popup
  function closeMessage() {
    document.removeEventListener("keydown", onKey);
    overlay.remove();
  }

  function onKey(event) {
    if (event.key === "Escape") {
      closeMessage();
    }
  }

  okButton.addEventListener("click", closeMessage);
  document.addEventListener("keydown", onKey);

  // clicking the dark background also closes it
  overlay.addEventListener("click", function (event) {
    if (event.target === overlay) {
      closeMessage();
    }
  });

  okButton.focus();
}


// ---------- TEAM CARDS ----------
// when you click on a card, it gets a garnet shadow.
// only one card can have the shadow at a time.
// click on the same card again and the shadow goes away
function setupTeamCards() {
  // get all the team cards
  const cards = document.querySelectorAll("article");

  for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function () {
      toggleCard(cards[i], cards);
    });
  }
}

// turns the shadow on for the clicked card and off for all the others
function toggleCard(card, allCards) {
  // remember if this card already had the shadow
  const wasOn = card.style.boxShadow !== "";

  // remove the shadow from every card first
  for (let j = 0; j < allCards.length; j++) {
    allCards[j].style.boxShadow = "";
  }

  // if it was off, turn it on (if it was on, it stays off now)
  if (!wasOn) {
    card.style.boxShadow = "0 0 12px #8f001a";
  }
}