import Component from "./Component.js";

export default class SeriesContainerComponent extends Component {
  state = {};

  constructor(parentElement, className, series, status) {
    super(parentElement, className, "section");

    this.state.status = status;
    this.generateHTML();
  }

  generateHTML() {
    this.element.innerHTML = `
      <h3 class="subsection-title">Pending series</h3>
         <p class="info">You have 4 series pending to watch</p>           <!--<p class="info">Congrats! You've watched all your series</p>-->
       <ul class="series-list">
       </ul>
    `;
  }
}
