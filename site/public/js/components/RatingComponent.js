export default class RatingComponent extends Component {
  constructor(parentElement, serie) {
    super(parentElement, "score", "ul");

    this.generateHTML();
  }

  generateHTML() {
    this.element.innerHTML = `
      <li class="score__star">
            <i class="icon--score fas fa-star" title="1/5"></i>
          </li>
          <li class="score__star">
            <i class="icon--score fas fa-star" title="2/5"></i>
          </li>
          <li class="score__star">
            <i class="icon--score fas fa-star" title="3/5"></i>
          </li>
          <li class="score__star">
            <i class="icon--score fas fa-star" title="4/5"></i>
          </li>
          <li class="score__star">
            <i class="icon--score fas fa-star" title="5/5"></i>
          </li>
`;
  }
}
