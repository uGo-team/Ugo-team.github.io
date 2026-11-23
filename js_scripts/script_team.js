window.addEventListener("load", function () {
  setupButtons();
  setupTeamCards();
});


// ---------- LANGUAGE ----------
//French page
function isFrench() {
  return document.documentElement.lang.toLowerCase().startsWith("fr");
}


// ---------- LOG IN, SIGN UP BUTTONS AND HELP CENTRE LINK----------
// The buttons doesnt go anywhere, so a message is shown
function setupButtons() {
  // get all the buttons inside the header
  const buttons = document.querySelectorAll("header button, #help-link");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function (event) {
      event.preventDefault(); //to stop "#" link from going to the top of the page
      const buttonName = buttons[i].textContent;

      if (isFrench()) {
        alert("La page « " + buttonName + " » sera bientôt disponible!");
      } else {
        alert(buttonName + " page is coming soon!");
      }
    });
  }
}


// ---------- TEAM CARDS ----------
// when you click on a card, it gets a garnet shadow(only one at a time).
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