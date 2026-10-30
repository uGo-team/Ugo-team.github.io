const cases = document.querySelectorAll("main details");
cases.forEach(function(caseElement) {
    caseElement.addEventListener("mouseenter", function () {
        caseElement.open = true;
    });
    caseElement.addEventListener("mouseleave", function () {
        caseElement.open = false;
    });
});
