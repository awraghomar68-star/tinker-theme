/*
 * ELOVIRA — Quantity stepper (Phase 3 atom behavior)
 * Dependency-free custom element. Clamps to [min,max], keeps the
 * decrement/increment buttons' disabled state in sync, and emits a
 * bubbling `quantity:change` event with { value } so any page
 * (cart, PDP, quick-add) can react without importing the theme runtime.
 */
(function () {
  if (customElements.get('elovira-quantity-stepper')) return;

  class EloviraQuantityStepper extends HTMLElement {
    connectedCallback() {
      this.input = this.querySelector('.elovira-qty__input');
      this.decBtn = this.querySelector('[data-dec]');
      this.incBtn = this.querySelector('[data-inc]');
      if (!this.input) return;

      this.min = this._int(this.input.min, 1);
      this.max = this._int(this.input.max, 99);

      this._onDec = () => this._step(-1);
      this._onInc = () => this._step(1);
      this._onChange = () => this._set(this._current());

      this.decBtn && this.decBtn.addEventListener('click', this._onDec);
      this.incBtn && this.incBtn.addEventListener('click', this._onInc);
      this.input.addEventListener('change', this._onChange);
      this._sync();
    }

    disconnectedCallback() {
      this.decBtn && this.decBtn.removeEventListener('click', this._onDec);
      this.incBtn && this.incBtn.removeEventListener('click', this._onInc);
      this.input && this.input.removeEventListener('change', this._onChange);
    }

    _int(v, fallback) {
      var n = parseInt(v, 10);
      return isNaN(n) ? fallback : n;
    }

    _current() {
      return this._int(this.input.value, this.min);
    }

    _step(delta) {
      this._set(this._current() + delta);
    }

    _set(n) {
      var v = Math.max(this.min, Math.min(this.max, n));
      var changed = String(v) !== String(this.input.value);
      this.input.value = v;
      this._sync();
      if (changed) {
        this.dispatchEvent(
          new CustomEvent('quantity:change', { bubbles: true, detail: { value: v } })
        );
      }
    }

    _sync() {
      var v = this._current();
      if (this.decBtn) this.decBtn.disabled = v <= this.min;
      if (this.incBtn) this.incBtn.disabled = v >= this.max;
    }
  }

  customElements.define('elovira-quantity-stepper', EloviraQuantityStepper);
})();
