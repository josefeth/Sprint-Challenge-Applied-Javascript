// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
function Words(item) {
    const cards = document.createElement("div");
    const head = document.createElement("div");
    const author1 = document.createElement("div");
    const imgCont = document.createElement("div");
    const img = document.createElement("img");
    const authorsName = document.createElement("span");
  
    cards.appendChild(head);
    cards.appendChild(author1);
    author1.appendChild(imgCont);
    author1.appendChild(authorsName);
    imgCont.appendChild(img);
  
    cards.classList.add("card");
    head.classList.add("headline");
    author1.classList.add("author");
    imgCont.classList.add("img-container");
  
    head.textContent = item.headline;
    authorsName.textContent = item.authorName;
    img.src = item.authorPhoto;
  
    return cards;
  }

  axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(resp => {
    const article = resp.data.articles;
    console.log(resp);
    Object.keys(article).map(key => {
      value = article[key];
      value.map(a => {
        const cardsContainer = document.querySelector(".cards-container");
        cardsContainer.append(Words(a));
      });
    });
  })
  .catch(err => {
    console.log(err);
  });