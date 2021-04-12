class HighlightedText extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<b style="color: var(--color-highlight)">${this.innerHTML}</b>`
  }
}

export default HighlightedText
