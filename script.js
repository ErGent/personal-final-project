var d;

(function () {
  d = new Deck();
  d.resetDeck();
})();
function removeShow() {
  let nav = document.getElementById("navbarSupportedContent");
  console.log(nav);
  if (nav.classList.contains("show")) {
    $(nav).removeClass("show");
  }
}
