/* ELOVIRA — Header controller (Phase 4)
   One custom element drives the mobile nav drawer and the search overlay:
   open/close, body scroll-lock, focus trap, Escape, and return-focus to
   the trigger. Search trigger is progressively enhanced (an <a href="/search">
   that JS intercepts). Also publishes header height as a CSS var for offsets.
   Dependency-free. */
(function () {
  if (customElements.get('elovira-header')) return;

  var FOCUSABLE =
    'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

  class EloviraHeader extends HTMLElement {
    connectedCallback() {
      // Cut-the-mustard flag: disables the CSS :target no-JS fallback so the
      // JS drawer experience is the only one active when JS is available.
      document.documentElement.classList.add('elovira-js');

      this.drawer = document.getElementById('elovira-nav-drawer');
      this.overlay = document.getElementById('elovira-search-overlay');
      this.scrim = document.querySelector('.elovira-nav-drawer__scrim');

      // JS owns the drawer's closed state (inert + aria-hidden). The markup
      // ships without them so the CSS :target fallback stays operable with JS off.
      if (this.drawer) {
        this.drawer.setAttribute('inert', '');
        this.drawer.setAttribute('aria-hidden', 'true');
      }

      this._onKeydown = this._onKeydown.bind(this);
      this._onResize = () => this._measure();
      this._active = null;
      this._trigger = null;

      // Nav drawer
      var navOpen = this.querySelector('[data-nav-open]');
      if (navOpen && this.drawer) {
        navOpen.addEventListener('click', (e) => {
          e.preventDefault();
          this.open(this.drawer, navOpen, this.scrim);
        });
        this._bindClosers(this.drawer);
        if (this.scrim)
          this.scrim.addEventListener('click', (e) => {
            e.preventDefault();
            this.close();
          });
      }

      // Search overlay (progressive: intercept the /search link)
      var searchOpen = this.querySelector('[data-search-open]');
      if (searchOpen && this.overlay) {
        searchOpen.addEventListener('click', (e) => {
          e.preventDefault();
          this.open(this.overlay, searchOpen);
          var input = this.overlay.querySelector('[data-search-input]');
          if (input) requestAnimationFrame(() => input.focus());
        });
        this._bindClosers(this.overlay);
      }

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
      document.removeEventListener('keydown', this._onKeydown);
    }

    _bindClosers(root) {
      root.querySelectorAll('[data-nav-close], [data-search-close]').forEach((el) =>
        el.addEventListener('click', (e) => {
          e.preventDefault();
          this.close();
        })
      );
    }

    open(dialog, trigger, scrim) {
      if (this._active) this.close();
      this._active = dialog;
      this._trigger = trigger;
      this._scrim = scrim || null;

      dialog.removeAttribute('inert');
      dialog.setAttribute('aria-hidden', 'false');
      requestAnimationFrame(() => dialog.classList.add('is-open'));
      if (scrim) requestAnimationFrame(() => scrim.classList.add('is-open'));
      if (trigger) trigger.setAttribute('aria-expanded', 'true');

      document.documentElement.classList.add('elovira-scroll-lock');
      document.addEventListener('keydown', this._onKeydown);

      var first = dialog.querySelector(FOCUSABLE);
      if (first) requestAnimationFrame(() => first.focus());
    }

    close() {
      var dialog = this._active;
      if (!dialog) return;

      dialog.classList.remove('is-open');
      dialog.setAttribute('aria-hidden', 'true');
      dialog.setAttribute('inert', '');
      if (this._scrim) this._scrim.classList.remove('is-open');
      if (this._trigger) this._trigger.setAttribute('aria-expanded', 'false');

      document.documentElement.classList.remove('elovira-scroll-lock');
      document.removeEventListener('keydown', this._onKeydown);

      var trigger = this._trigger;
      this._active = null;
      this._trigger = null;
      this._scrim = null;
      if (trigger) trigger.focus();
    }

    _onKeydown(e) {
      if (!this._active) return;
      if (e.key === 'Escape') {
        e.preventDefault();
        this.close();
        return;
      }
      if (e.key !== 'Tab') return;

      var nodes = Array.prototype.slice
        .call(this._active.querySelectorAll(FOCUSABLE))
        .filter((n) => n.offsetWidth || n.offsetHeight || n.getClientRects().length);
      if (!nodes.length) return;

      var first = nodes[0];
      var last = nodes[nodes.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
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

  customElements.define('elovira-header', EloviraHeader);
})();
