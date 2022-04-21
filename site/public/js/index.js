import PageComponent from "./components/PageComponent.js";
import seriesAPI from "../data/series.js";
const page = document.querySelector("div");

const pageComponent = new PageComponent(page, seriesAPI);
