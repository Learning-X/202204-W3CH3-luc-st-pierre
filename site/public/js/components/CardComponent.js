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
    this.renderRatingReviews();
  }

  renderRatingReviews() {
    const ratingContainer = this.element.querySelector("ul");
    const score = this.serie.score;
    new RatingComponent(ratingContainer, "li");

    // need to continue, closing the night!
  }
}
