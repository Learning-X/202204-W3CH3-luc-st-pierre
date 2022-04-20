import Component from "./Component";

export default class PageComponent extends Component {
  constructor(parentElement) {
    super(parentElement, "conatainer");
    this.generateHTML();
  }

  generateHTML() {}
}
