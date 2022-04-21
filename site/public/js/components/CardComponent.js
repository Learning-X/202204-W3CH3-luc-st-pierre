import Component from "./Component.js";
import RatingComponent from "./RatingComponent.js";

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
    this.renderRatingContainer();
    this.renderRatingStars();
  }

  renderRatingContainer() {
    const ratingContainer = this.element.querySelector("ul");
    new RatingComponent(ratingContainer, "li", this.serie);
  }

  renderRatingStars() {
    const startContainer = this.element.querySelector(".score__star");
    const { score } = this.serie;

    // for (let index = 1; index < 5; index++) {

    // }

    // console.log(startContainer);
  }
}
