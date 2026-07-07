/* ELOVIRA — Header controller (Phase 4, delegated to native dialogs Phase 14B)
   Nav drawer and search overlay are now native Horizon <dialog-component>/
   <dialog> elements (see snippets/elovira-nav-drawer.liquid and
   snippets/elovira-search-overlay.liquid) — open/close, focus trap, Escape,
   scroll-lock and return-focus are handled natively by assets/dialog.js and
   the browser, not reimplemented here.
   This controller only keeps two responsibilities that stay legitimately
   ours: (1) intercepting the two progressive-enhancement trigger anchors
   so they open the dialog instead of navigating when JS is available, and
   (2) publishing header height as a CSS var for layout offsets. */
(function () {
  if (customElements.get('elovira-header')) return;

  document.documentElement.classList.add('elovira-js');

  class EloviraHeader extends HTMLElement {
    connectedCallback() {
      this._onResize = () => this._measure();

      var navOpen = this.querySelector('[aria-controls="elovira-nav-drawer"]');
      if (navOpen) navOpen.addEventListener('click', preventNavigation);

      var searchOpen = this.querySelector('[aria-controls="elovira-search-overlay"]');
      if (searchOpen) searchOpen.addEventListener('click', preventNavigation);

      this._measure();
      if ('ResizeObserver' in window) {
        this._ro = new ResizeObserver(() => this._measure());
        this._ro.observe(this);
      }
      window.addEventListener('resize', this._onResize);
    }

    disconnectedCallback() {
      if (this._ro) this._ro.disconnect();
      window.removeEventListener('resize', this._onResize);
    }

    _measure() {
      var h = this.offsetHeight;
      document.body.style.setProperty('--elovira-header-height', h + 'px');
      // Keep Horizon's expected vars in sync (header group = announcement + header)
      var group = document.getElementById('header-group');
      document.body.style.setProperty('--header-height', h + 'px');
      if (group) {
        document.body.style.setProperty('--header-group-height', group.offsetHeight + 'px');
      }
    }
  }

  function preventNavigation(e) {
    e.preventDefault();
  }

  customElements.define('elovira-header', EloviraHeader);
})();
