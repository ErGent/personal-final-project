class Card {
  constructor(image, id) {
    this.image = image;
    this.id = id;
  }
}

const createCardHtml = (image, id) => {
  return `<div class="col-2 my-4 card-div">
                    <img src="${image}" class="img-thumbnail layoutImg" alt="..."
                        data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false"
                        aria-controls="collapseExample2">
                </div>
    
`;
};

class Description {
  constructor(name, image, id, description, osho) {
    (this.name = name),
      (this.image = image),
      (this.id = id),
      (this.description = description),
      (this.osho = osho);
  }
}

const createDescriptionHtml = (name, image, id, description, osho) => {
  return `<div class="card col-s collapse rounded mb-3 layout-style" id="${id}" data-bs-toggle="collapse"
                data-bs-target="#collapseExample4" aria-expanded="false" aria-controls="collapseExample4">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${image}" class="rounded img bigCard">
                    </div>
                    <div class="col-md-8 ">
                        <div class="card-body"> <span class="mx-3 my-2 float-end close">Click anywhere to
                                close</span><br>

                            <span class="cardTitle mx-3">${name}</span>

                            <p class="mx-3 my-2 fixed-content">${description}</p>
                            <span class="mx-3 my-2 fixed-content Osho-span">Osho's Teaching</span>
                            <p class="mx-3 my-2 fixed-content">${osho}</p>
                        </div>
                    </div>
                </div>
            </div>`;
};

const diamondLayoutHtml = () => {
  return ` <div class="container justify-content-center my-5 py-5 rounded"
            style="background-color: rgba(245, 237, 220, 0.2)" id="diamondLayout">
            <div class="row">
                <div class="col-5"></div>
                <!-- top card-->
                ${createCardHtml}
            </div>
            <!-- top card end-->
            <div class="row">
                <!-- start left middle card-->
                <div class="col-2"> </div>
                ${createCardHtml}
                <div class="col-1 "> </div>
                <!-- end left middle card-->
                    <div class="col-1 "> </div>
                     <!--start mid card-->
                ${createCardHtml}
                <!--end mid card -->
                 <div class="col-1 "> </div>                 
                <!-- middle right card start -->
                ${createCardHtml}
                <!-- middle right card end -->
                <div class="col-2 ">
                </div>
            </div>
            <!--bottom card-->
            <div class="row">
                <div class="col-5"></div>
                ${createCardHtml}
            </div>

           ${createDescriptionHtml}
        ${createDescriptionHtml}
        ${createDescriptionHtml}
        ${createDescriptionHtml}`;
};
