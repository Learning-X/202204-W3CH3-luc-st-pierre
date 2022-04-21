import seriesAPI from "../../data/series.js";
import CardComponent from "./CardComponent.js";
import Component from "./Component.js";
import SeriesContainerComponent from "./SeriesContainerComponent.js";

export default class PageComponent extends Component {
  series = seriesAPI;

  constructor(parentElement) {
    super(parentElement, "container");

    this.generateHTML();
  }

  generateHTML() {
    this.element.innerHTML = `
      <header class="main-header">
        <h1 class="main-title">My Series</h1>
      </header>
      <main class="main">
        <section class="series">
        </section>
      </main>
    `;

    this.renderSeriesContainer();
    this.renderSeriesList();
  }

  renderSeriesContainer() {
    const seriesSection = this.element.querySelector(".series");
    seriesSection.innerHTML = `<h2 class="section-title">Series list</h2>`;

    new SeriesContainerComponent(
      seriesSection,
      "series-pending",
      this.series,
      "Pending"
    );

    new SeriesContainerComponent(
      seriesSection,
      "series-watched",
      this.series,
      "Watched",
      "series-list--watched"
    );
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
      return new CardComponent(list, "li", serie);
    });
  }
}
