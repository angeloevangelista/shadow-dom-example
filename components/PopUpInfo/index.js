import { styles } from "./styles.js";

class WebComponent extends HTMLElement {
  injectStyles(stylesheet) {
    const styleElement = document.createElement("style");
    styleElement.textContent = stylesheet;

    this.shadowRoot.appendChild(styleElement);
  }
}

class PopUpInfo extends WebComponent {
  shadowRoot = null;

  constructor() {
    // Always call super first in constructor
    super();

    // Create a shadow root
    this.shadowRoot = this.attachShadow({ mode: "closed" });

    // Create spans
    let containerElement = document.createElement("div");
    containerElement.setAttribute("class", "wrapper");

    let iconElement = document.createElement("div");
    iconElement.setAttribute("class", "icon");
    iconElement.setAttribute("tabindex", 0);

    let infoElement = document.createElement("strong");
    infoElement.setAttribute("class", "info");

    // Take attribute content and put it inside the info span
    let text = this.getAttribute("text");
    infoElement.textContent = text;

    // Insert icon
    let imgUrl = this.hasAttribute("img")
      ? this.getAttribute("img")
      : "assets/images/crewmate.png";

    let emgElement = document.createElement("img");
    emgElement.src = imgUrl;

    iconElement.appendChild(emgElement);

    this.injectStyles(styles);

    containerElement.appendChild(iconElement);
    containerElement.appendChild(infoElement);

    this.shadowRoot.appendChild(containerElement);
  }
}

// Define the new element
customElements.define("popup-info", PopUpInfo);
