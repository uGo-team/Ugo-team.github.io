// script.js - uGo Team page

window.addEventListener("load", function () {
  setupButtons();
  setupTeamCards();
});


// ---------- LOG IN AND SIGN UP BUTTONS ----------
// The buttons do not go anywhere, so message is shown
function setupButtons() {
  // get all the buttons inside the header
  const buttons = document.querySelectorAll("header button");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      const buttonName = buttons[i].textContent;
      alert(buttonName + " page is coming soon!");
    });
  }
}


// ---------- TEAM CARDS ----------
// when you click on a card, it gets a garnet shadow and when you click on it again, it goes away
function setupTeamCards() {
  // get all the team cards
  const cards = document.querySelectorAll("article");

  for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function () {
      toggleCard(cards[i]);
    });
  }
}

// turns the shadow on or off for a card
function toggleCard(card) {
  if (card.style.boxShadow === "") {
    // added shadow
    card.style.boxShadow = "0 0 12px #8f001a";
  } else {
    //  removed the shawdow that was already there
    card.style.boxShadow = "";
  }
}