class Deck {
  constructor() {
    this.cards = [];
    this.usedCards = [];
  }

  cardShuffle() {
    let randomIdx = Math.floor(Math.random() * this.cards.length);
    console.log(randomIdx);
    let randCard = this.cards.splice(randomIdx, 1)[0];
    this.usedCards.push(randCard);

    return randomIdx;
  }

  resetDeck() {
    for (let i = 0; i < this.usedCards.length; i++) {
      this.cards.push(this.usedCards[i]);
    }
  }

  createCardHtml = (image, name, id) => {
    console.log("id", id);
    //image starting out as card-back, can I click and have it give first card?
    return `<div class="col-2 my-4 card-div">
                    <img src="${image}" class="img-thumbnail layoutImg" alt="..."
                        data-bs-toggle="collapse" data-bs-target="#collapseExample${id}" aria-expanded="false"
                        aria-controls="collapseExample${id}">
                </div>
    
`;
  };

  createDescriptionHtml = (
    name,
    image,
    id,
    description,
    osho,
    position,
    positionInsight
  ) => {
    return `<div class="card col-s collapse rounded mb-3 layout-style" id="collapseExample${id}" data-bs-toggle="collapse"
                data-bs-target="#collapseExample${id}" aria-expanded="false" aria-controls="collapseExample${id}">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${image}" class="rounded img-responsive bigCard">
                    </div>
                    <div class="col-md-8 ">
                        <div class="card-body mx-2"> <span class="mx-3 my-2 float-end close">Click here to
                                close</span><br>

                            <span class="cardTitle">${name}</span><br><br>
                             <span class="cardPosition">${position}: ${positionInsight}</span><br><br>

                             <span class="my-2 fixed-content Osho-span">Commentary</span>
                            <p class=" my-2 fixed-content">${description}</p>
                            <span class="my-2 fixed-content Osho-span">Meaning</span>
                            <p class=" my-2 fixed-content">${osho}</p>
                        </div>
                    </div>
                </div>
            </div>`;
  };

  singleCardLayoutHtml(c1) {
    return `<div class="container justify-content-center my-5 py-5 rounded"
            style="background-color: rgba(245, 237, 220, 0.2)" id="singleCardLayout">
            <div class="row">
                <div class="col-5"></div>
                
                <!-- top card-->
                ${this.createCardHtml(c1.image, c1.name, c1.id)}
                </div>
                ${this.createDescriptionHtml(
                  c1.name,
                  c1.image,
                  c1.id,
                  c1.description,
                  c1.Osho,
                  singleCardMeditation[0].position,
                  singleCardMeditation[0].description
                )}`;
  }
  singleCardLayout() {
    this.resetDeck();
    this.cards = tarotCards;

    this.position = singleCardMeditation.position;
    console.log(this.position);

    this.description = singleCardMeditation.description;
    console.log(this.description);
    this.usedCards = [];

    this.cardShuffle();

    let l = this.singleCardLayoutHtml(this.usedCards[0]);
    let insert = document.getElementById("insertDiv");
    if (insert.childNodes.length == 0) {
      insert.insertAdjacentHTML("afterbegin", l);
    } else {
      while (insert.firstChild) {
        insert.removeChild(insert.firstChild);
      }
      insert.insertAdjacentHTML("afterbegin", l);
    }

    // insert.insertAdjacentHTML("afterend", l);
    //insert = ""
    //? insert.insertAdjacentHTML("afterend", l) // trying to do ternary so that if there's nothing on the board, continue, else clear board
    //: insert.insertAdjacentHTML("afterend", "");
  }

  ppfLayoutHTML(c1, c2, c3) {
    return `<div class="container justify-content-center my-5 py-5 rounded"
    style = "background-color: rgba(245, 237, 220, 0.2)" id = "ppfLayout" >
              <div class="row">
                <!-- start left middle card-->
                <div class="col-2"> </div>
                ${this.createCardHtml(c1.image, c1.name, c1.id)}
                <div class="col-1 "> </div>
                <!-- end left middle card-->
                     <!--start mid card-->
                ${this.createCardHtml(c2.image, c2.name, c2.id)}
                <!--end mid card -->
                 <div class="col-1 "> </div>                 
                <!-- middle right card start -->
                ${this.createCardHtml(c3.image, c3.name, c3.id)}
                <!-- middle right card end -->
                <div class="col-2 ">
                </div>
            </div>

     ${this.createDescriptionHtml(
       c1.name,
       c1.image,
       c1.id,
       c1.description,
       c1.Osho,
       pastPresentFuture[0].position,
       pastPresentFuture[0].description
     )}
            ${this.createDescriptionHtml(
              c2.name,
              c2.image,
              c2.id,
              c2.description,
              c2.Osho,
              pastPresentFuture[1].position,
              pastPresentFuture[1].description
            )}
            ${this.createDescriptionHtml(
              c3.name,
              c3.image,
              c3.id,
              c3.description,
              c3.Osho,
              pastPresentFuture[2].position,
              pastPresentFuture[2].description
            )}`;
  }

  ppfLayout() {
    this.resetDeck();
    this.cards = tarotCards;

    this.position = pastPresentFuture.position;
    console.log(this.position);

    this.positionInsight = pastPresentFuture.description;

    this.usedCards = [];

    this.cardShuffle();
    this.cardShuffle();
    this.cardShuffle();

    let l = this.ppfLayoutHTML(
      this.usedCards[0],
      this.usedCards[1],
      this.usedCards[2]
    );
    let insert = document.getElementById("insertDiv");
    if (insert.childNodes.length == 0) {
      insert.insertAdjacentHTML("afterbegin", l);
    } else {
      while (insert.firstChild) {
        insert.removeChild(insert.firstChild);
      }
      insert.insertAdjacentHTML("afterbegin", l);
    }
    this.usedCards = [];
    // document.getElementById("insertAfter").insertAdjacentHTML("afterend", l);
  }

  diamondLayoutHtml(c1, c2, c3, c4, c5) {
    return ` <div id="layoutContainer"  class="container justify-content-center my-5 py-5 rounded"
            style="background-color: rgba(245, 237, 220, 0.2)" id="diamondLayout">
            <div class="row">
                <div class="col-5"></div>
                <!-- top card-->
                ${this.createCardHtml(c4.image, c4.name, c4.id)}
            </div>
            <!-- top card end-->
            <div class="row">
                <!-- start left middle card-->
                <div class="col-2"> </div>
                ${this.createCardHtml(c2.image, c2.name, c2.id)}
                <div class="col-1 "> </div>
                <!-- end left middle card-->
                     <!--start mid card-->
                ${this.createCardHtml(c1.image, c1.name, c1.id)}
                <!--end mid card -->
                 <div class="col-1 "> </div>                 
                <!-- middle right card start -->
                ${this.createCardHtml(c3.image, c3.name, c3.id)}
                <!-- middle right card end -->
                <div class="col-2 ">
                </div>
            </div>
            <!--bottom card-->
            <div class="row">
                <div class="col-5"></div>
                ${this.createCardHtml(c5.image, c5.name, c5.id)}
            </div>

            ${this.createDescriptionHtml(
              c1.name,
              c1.image,
              c1.id,
              c1.description,
              c1.Osho,
              diamondLayout[0].position,
              diamondLayout[0].positionInsight
            )}
            ${this.createDescriptionHtml(
              c2.name,
              c2.image,
              c2.id,
              c2.description,
              c2.Osho,
              diamondLayout[1].position,
              diamondLayout[1].positionInsight
            )}
            ${this.createDescriptionHtml(
              c3.name,
              c3.image,
              c3.id,
              c3.description,
              c3.Osho,
              diamondLayout[2].position,
              diamondLayout[2].positionInsight
            )}
            ${this.createDescriptionHtml(
              c4.name,
              c4.image,
              c4.id,
              c4.description,
              c4.Osho,
              diamondLayout[4].position,
              diamondLayout[4].positionInsight
            )}
            ${this.createDescriptionHtml(
              c5.name,
              c5.image,
              c5.id,
              c5.description,
              c5.Osho,
              diamondLayout[3].position,
              diamondLayout[3].positionInsight
            )}

       `;
  }
  diamondLayout() {
    this.resetDeck();
    this.cards = tarotCards;

    this.position = diamondLayout.position;

    this.positionInsight = diamondLayout[1].positionInsight;

    this.usedCards = [];

    this.cardShuffle();
    this.cardShuffle();
    this.cardShuffle();
    this.cardShuffle();
    this.cardShuffle();

    let l = this.diamondLayoutHtml(
      this.usedCards[0],
      this.usedCards[1],
      this.usedCards[2],
      this.usedCards[3],
      this.usedCards[4]
    );

    let insert = document.getElementById("insertDiv");
    if (insert.childNodes.length == 0) {
      insert.insertAdjacentHTML("afterbegin", l);
    } else {
      while (insert.firstChild) {
        insert.removeChild(insert.firstChild);
      }
      insert.insertAdjacentHTML("afterbegin", l);
    }
  }
}
