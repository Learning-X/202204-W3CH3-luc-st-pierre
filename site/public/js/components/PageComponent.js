import seriesAPI from "../../data/series.js";
import CardComponent from "./CardComponent.js";
import Component from "./Component.js";

export default class PageComponent extends Component {
  series = seriesAPI;

  constructor(parentElement) {
    super(parentElement, "conatainer");

    this.generateHTML();
  }

  generateHTML() {
    this.element.innerHTML = `
      <header class="main-header">
        <h1 class="main-title">My Series</h1>
      </header>
      <main class="main">
        <section class="series">
          <h2 class="section-title">Series list</h2>
          <section class="series-pending">
            <h3 class="subsection-title">Pending series</h3>
            <p class="info">You have 4 series pending to watch</p>
            <!--<p class="info">Congrats! You've watched all your series</p>-->
            <ul class="series-list">
            </ul>
          </section>

          <section class="series-watched">
            <h3 class="subsection-title">Watched series</h3>
            <p class="info">You have watched 4 series</p>
            <!--<p class="info">You already have not watched any serie</p>-->
            <ul class="series-list series-list--watched">
            </ul>
          </section>
        </section>
      </main>
    `;

    this.renderSeriesList();
  }

  renderSeriesList() {
    const seriesList = this.element.querySelector(
      ".series-pending .series-list"
    );

    const seriesListWatched = this.element.querySelector(
      ".series-watched .series-list--watched"
    );

    this.series.forEach((serie) => {
      const list = serie.watched ? seriesListWatched : seriesList;
      new CardComponent(list, "li", serie);
    });
  }
}
