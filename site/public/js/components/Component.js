export default class Component {
  element;

  constructor(parentElement, className, htmlTag = "div") {
    this.element = document.createElement(this.element);
    this.element.className = className;
    parentElement.append(this.element);
  }
}
