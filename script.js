function returnCard(img) {
    return `
    <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <svg
                  class="bd-placeholder-img card-img-top"
                  width="100%"
                  height="225"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                >
                  <title>Placeholder</title>
                  <img width="100%" height="100%" src=${img.url}>
                  <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                    Thumbnail
                  </text>
                </svg>
                <div class="card-body">
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button>
                    </div>
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
    `;
  }

  let cards = [];

  const createCards = function () {

    const cardsRow = document.getElementById('cards-row');
    let imgCards = document.getElementsByClassName("img-card");

    cardsRow.innerHTML = '';
    imgCards.forEach(card => {
        cardsRow.innerHTML += returnCard(card);
    })

  };

window.onload = function(){
    fetch("http://www.splashbase.co/api/v1/images/search?query=sun", {
          method: "GET",
        })
        .then(response => {
          if (response.ok) {
            return response.json();
          }
        })
        .then( card => 
          cards.push(card.data)
          )
        .catch( error =>
          console.log(error));

    
    const btn = document.getElementById("loadImgs");
    btn.onclick = createCards;
}

