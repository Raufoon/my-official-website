class HighlightedText extends HTMLElement {
  connectedCallback() {
    const color: string = this.getAttribute('color') || 'yellow'

    this.innerHTML = `<b style="color: ${color}">${this.innerHTML}</b>`

    this.style.filter = 'var(--invert-bio-highlights)'
  }

  get color() {
    return this.hasAttribute('color')
  }

  set color(value) {
    this.setAttribute('color', value.toString())
  }
}

export default HighlightedText
