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
/*function glowGuide() {
  let start = document.getElementById("one");
  let two = document.getElementById("two");
  let three = document.getElementById("three");
  let four = document.getElementById("four");
  let five = document.getElementById("five");
  if (start.classList.contains("glow")) {
    $(start).removeClass("glow");
    two.classList.add("glow");
  } else if (two.classList.contains("glow")) {
    $(two).removeClass("glow");
    three.classList.add("glow");
  }
}*/
function glowGuide(clickedCard) {
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
