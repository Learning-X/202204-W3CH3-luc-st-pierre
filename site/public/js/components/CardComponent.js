import Component from "./Component.js";

export default class CardComponent extends Component {
  serie;

  constructor(parentElement, htmlTag, serie) {
    super(parentElement, "serie", htmlTag);

    this.serie = serie;
    this.generateHTML();
  }

  generateHTML() {
    this.element.innerHTML = `
      <img
        class="serie__poster"
        src="${this.serie.poster}"
        alt="${this.serie.name}"
        />
        <h4 class="serie__title">${this.serie.name}</h4>
        <p class="serie__info">${this.serie.creator} ${this.serie.year}</p>
        <ul class="score">
        </ul>
        <i class="fas fa-times-circle icon--delete"></i>
    `;

    this.renderRatingStars();
  }

  renderRatingStars() {
    const ratingContainer = this.element.querySelector("ul");
    const { score } = this.serie;

    for (let i = 1; i <= 5; i++) {
      let classFontAwesome;

      if (this.serie.watched) {
        i <= score ? (classFontAwesome = "fas") : (classFontAwesome = "far");
      } else {
        classFontAwesome = "far";
      }

      ratingContainer.innerHTML += `
          <li class="score__star">
            <i class="icon--score ${classFontAwesome} fa-star" title="${i}/5"></i>
          </li>
      `;
    }
  }
}
