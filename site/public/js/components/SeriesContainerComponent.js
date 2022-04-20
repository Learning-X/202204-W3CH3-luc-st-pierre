export default class SeriesContainerComponent extends Component {
  constructor(parentElement, className, series) {
    super(parentElement, className, "section");

    this.generateHTML();
  }
}
