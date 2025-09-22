const cardWrapper = document.querySelector(".content-main__cards");
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");

const movies = [
  {
    id: 0,
    title: "Марсианин,",
    originalTitle: "The Martian 2015",
    category: "Фантастика, приключения",
    rating: 7.8,
    image: "./img/movie.png",
    link: "./movie.html",
  },
  {
    id: 1,
    title: "Марсианин,",
    originalTitle: "The Martian 2015",
    category: "Фантастика, приключения",
    rating: 7.8,
    image: "./img/movie.png",
    link: "./movie.html",
  },
  {
    id: 2,
    title: "Марсианин,",
    originalTitle: "The Martian 2015",
    category: "Фантастика, приключения",
    rating: 7.8,
    image: "./img/movie.png",
    link: "./movie.html",
  },
  {
    id: 3,
    title: "Марсианин,",
    originalTitle: "The Martian 2015",
    category: "Фантастика, приключения",
    rating: 7.8,
    image: "./img/movie.png",
    link: "./movie.html",
  },
  {
    id: 4,
    title: "Марсианин,",
    originalTitle: "The Martian 2015",
    category: "Фантастика, приключения",
    rating: 7.8,
    image: "./img/movie.png",
    link: "./movie.html",
  },
  {
    id: 5,
    title: "Марсианин,",
    originalTitle: "The Martian 2015",
    category: "Фантастика, приключения",
    rating: 7.8,
    image: "./img/movie.png",
    link: "./movie.html",
  },
];

const render = (array) => {
  cardWrapper.innerHTML = "";

  array.forEach((item) => {
    cardWrapper.insertAdjacentHTML("beforeend", `
      <a href="${item.link}" class="card">
        <div class="card__image">
          <img src="${item.image}" alt="Movie">
        </div>
        <div class="card__title flex">
          <h5>${item.title}</h5>
          <span>${item.originalTitle}</span>
        </div>
        <p class="card__description">
          ${item.category}
        </p>
        <p class="card__rating">${item.rating}</p>
      </a>
    `)
  })
};

searchBtn.addEventListener("click", () => {
  render(movies.filter((item) => item.title.includes(searchInput.value)))
});

render(movies);