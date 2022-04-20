import seriesAPI from "../../data/series.js";
import Component from "./Component";

export default class PageComponent extends Component {
  series = seriesAPI;

  constructor(parentElement) {
    super(parentElement, "conatainer");
    this.generateHTML();
  }

  generateHTML() {}
}
