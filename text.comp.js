class Text extends HTMLParagraphElement {
    connectedCallback() {
        if (this.hasAttribute("value")) {
            this.innerText = this.getAttribute("value");
        }
    }
}
customElements.define("mp-text", Text, { extends: "p" });