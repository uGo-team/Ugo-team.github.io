
// script_pricing.js - uGo Pricing page

window.addEventListener("load", function () {
  setupButtons();
  setupPricingCards();
});


// ---------- LOG IN AND SIGN UP BUTTONS AND HELP CENTRE LINK ----------
// The buttons do not go anywhere, so a message is shown
function setupButtons() {

  // get all the buttons inside the header
  const buttons = document.querySelectorAll("header button, #help-link");

  // check whether the page is French
  const isFrench = document.documentElement.lang.startsWith("fr");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function (event) {

      event.preventDefault(); //to stop "#" link from returning to the top of the page

      const buttonName = buttons[i].textContent.trim();

      if (isFrench) {
        alert("La page « " + buttonName + " » sera bientôt disponible !");
      } else {
        alert(buttonName + " page is coming soon!");
      }

    });
  }
}


// ---------- PRICING CARDS ----------
// when you click on a pricing card, it gets a garnet shadow
// when you click on it again, the shadow goes away
function setupPricingCards() {

  // get all the pricing cards
  const cards = document.querySelectorAll(".pricing-card");

  for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function () {
      toggleCard(cards[i]);
    });
  }
}


// turns the shadow on or off for a card
function toggleCard(card) {

  if (card.style.boxShadow === "") {
    // add shadow
    card.style.boxShadow = "0 0 12px #8f001a";
  } else {
    // remove shadow
    card.style.boxShadow = "";
  }
}
