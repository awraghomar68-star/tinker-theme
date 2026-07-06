/* ELOVIRA — Announcement rotator (Phase 4)
   Rotates messages on a timer. Pauses on hover/focus (WCAG 2.2.2)
   and does not auto-rotate under prefers-reduced-motion.
   Dependency-free custom element; only loaded when >1 message. */
(function () {
  if (customElements.get('elovira-announcement')) return;

  class EloviraAnnouncement extends HTMLElement {
    connectedCallback() {
      this.msgs = Array.from(this.querySelectorAll('.elovira-announce__msg'));
      if (this.msgs.length < 2) return;

      this.index = 0;
      this.speed = (parseFloat(this.dataset.speed) || 4) * 1000;
      this.pauseOnHover = this.dataset.pauseHover !== 'false';
      this.reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (this.reduce) return; // honor reduced-motion: no auto-rotation

      this.next = this.next.bind(this);
      this.start();

      if (this.pauseOnHover) {
        this.addEventListener('mouseenter', () => this.stop());
        this.addEventListener('mouseleave', () => this.start());
        this.addEventListener('focusin', () => this.stop());
        this.addEventListener('focusout', () => this.start());
      }
    }

    disconnectedCallback() { this.stop(); }

    start() { if (!this.timer) this.timer = window.setInterval(this.next, this.speed); }
    stop() { window.clearInterval(this.timer); this.timer = null; }

    next() {
      const current = this.msgs[this.index];
      this.index = (this.index + 1) % this.msgs.length;
      const upcoming = this.msgs[this.index];

      current.classList.add('is-hidden');
      current.setAttribute('aria-hidden', 'true');

      upcoming.classList.remove('is-hidden');
      upcoming.removeAttribute('aria-hidden');
      upcoming.classList.remove('elovira-announce__msg--anim');
      void upcoming.offsetWidth; // restart animation
      upcoming.classList.add('elovira-announce__msg--anim');
    }
  }

  customElements.define('elovira-announcement', EloviraAnnouncement);
})();
