window.addEventListener("load", function () {
  setupButtons();
  setupCards();
  setupscrollMenu();
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


// ------------------------------------------------------------------
// CARDS

// when you click on a card, it gets a garnet shadow and when you click on it again, it goes away
function setupCards() {
  // get all the team cards
  const cards = document.querySelectorAll("div.background-mainMenu, div.review-box");

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

// ------------------------------------------------------------------
// SCROLL MENU******

function setupscrollMenu(){

  const button = document.querySelectorAll(".btn-scroll");

  for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function () {
      scrollMenu(button[i]);
    });
  }
}

function scrollMenu(clickedButton){
  
  const box = clickedButton.closest(".scroll-box"); //to make it interact only with the closest scroll box (not the other one)
  const menu = box.querySelector(".scroll-menu"); //to search the scroll menu within its scroll box

  let direction; //define direction variable

  if (clickedButton.textContent === "❮"){
    direction = -1 //to make the menu move backwards
  }
  else{
    direction = 1 //to make the menu move forwards
  }
  menu.scrollBy({
    left: direction * 260,//left property used to make the scroll menu move horizontally: scrolls right if direction is positive, scrolls left if direction is negative
    behavior: "smooth"
    })
}
