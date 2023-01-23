class Card {
  constructor(name, description, osho, image, id) {
    this.name = name;
    this.description = description;
    this.osho = osho;
    this.image = image;
    this.id = id;
  }
}

const createYCardHtml = (description, osho, image, id) => {
  return `
    <div class="col-xs-2 d-flex justify-content-center card-div">
                    <img src="${image}" alt="..."
                        data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false"
                        aria-controls="collapseExample">
                </div>
            </div>

            <div class="card col-s collapse rounded mb-3 layout-style" id="${id}" data-bs-toggle="collapse"
                data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${image}" class="rounded img bigCard">
                    </div>
                    <div class="col-md-8 ">
                        <div class="card-body">

                            <span class="cardTitle mx-3">The Fool</span>
                            <span class="mx-3 my-2 float-end close">Click anywhere to
                                close</span><br>

                            <p class="mx-3 my-2 fixed-content">${description}</p>
                            <span class="mx-3 my-2 fixed-content Osho-span">Osho's Teaching</span>
                            <p class="mx-3 my-2 fixed-content">${osho}</p>
                        </div>
                    </div>
                </div>
            </div>`;
};
