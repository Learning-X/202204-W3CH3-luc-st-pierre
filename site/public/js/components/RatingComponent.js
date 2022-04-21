import Component from "./Component.js";
export default class RatingComponent extends Component {
  constructor(parentElement, htmlTag, serie) {
    super(parentElement, htmlTag, "score", "ul");

    this.serie = serie;
    this.generateHTML();
  }

  generateHTML() {
    const { serie } = this;

    this.element.innerHTML = `
      <li class="score__star">
        <i class="icon--score fas fa-star" title="${serie}/5"></i>
      </li>
`;
  }
}
