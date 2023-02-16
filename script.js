var d;

(function () {
  d = new Deck();
  d.resetDeck();
})();
function removeShow() {
  let nav = document.getElementById("navbarSupportedContent");
  console.log(nav);
  if (nav.classList.contains("show")) {
    nav.classList.remove("show");
  }
}

function glowGuide(clickedCard) {
  if (clickedCard.classList.contains("glow" == false)) {
    console.log("what");
    return;
  }
  const nextId = clickedCard.getAttribute("data-next");
  console.log(clickedCard);
  clickedCard.parentElement.classList.remove("glow");
  if (nextId == "") {
    return;
  }

  const nextElement = document.getElementById(nextId);
  console.log(nextElement);
  nextElement.classList.add("glow");
}
