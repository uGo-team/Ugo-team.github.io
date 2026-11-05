window.addEventListener("load", function () {
  setupButtons();
  setupCases();
});

// ---------- LOG IN AND SIGN UP BUTTONS ----------
function setupButtons() {
  const buttons = document.querySelectorAll("header button");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      const buttonName = buttons[i].textContent.trim();
      alert(buttonName + " page is coming soon!");
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