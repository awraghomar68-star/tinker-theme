class EloviraBeforeAfter extends HTMLElement {
  connectedCallback() {
    this.range = this.querySelector('.elovira-before-after__range');
    if (!this.range) return;
    this._onInput = () => {
      this.style.setProperty('--elovira-ba-pos', `${this.range.value}%`);
    };
    this.range.addEventListener('input', this._onInput);
  }

  disconnectedCallback() {
    if (this.range && this._onInput) {
      this.range.removeEventListener('input', this._onInput);
    }
  }
}

if (!customElements.get('elovira-before-after')) {
  customElements.define('elovira-before-after', EloviraBeforeAfter);
}
