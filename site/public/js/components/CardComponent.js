import Component from "./Component";

export default class CardComponent extends Component {
  serie;

  constructor(parentElement, htmlTag, serie) {
    super(parentElement, "serie", htmlTag);

    this.serie = serie;
    this.generateHTML();
  }

  generateHTML() {}
}
