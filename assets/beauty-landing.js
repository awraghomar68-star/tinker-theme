/* =========================================================
   Beauty Care — Landing Page interactions
   Vanilla JS, no deps. Idempotent.
   Each section on the page wraps its own markup in its own <div class="beauty">
   (Shopify sections render independently), so all queries below run against
   `document`, not a single shared root, to work across section boundaries.
   - Bundle select -> price/summary sync + "what's included" list
   - FAQ accordion
   - Gallery scroll-snap arrows
   - Sticky buy show/hide (hidden near hero & when form in view)
   - Client-side COD form validation
   - AJAX POST to Google Sheet webhook (form_action setting); demo mode when action="#"
   - Scroll-reveal entrance animation (skipped under prefers-reduced-motion)
   ========================================================= */
(function () {
  'use strict';

  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  ready(function () {
    if (!document.querySelector('.beauty')) return;

    /* ---------- Analytics helper (Meta Pixel + GA dataLayer, safe no-ops) ---------- */
    function track(event, params) {
      try { if (typeof window.fbq === 'function') window.fbq('track', event, params || {}); } catch (e) {}
      try { (window.dataLayer = window.dataLayer || []).push(Object.assign({ event: event }, params || {})); } catch (e) {}
    }
    track('ViewContent', { content_name: 'Beauty Pack', currency: 'MAD' });

    /* ---------- Smooth scroll to order form ---------- */
    document.querySelectorAll('[data-beauty-scroll]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        var target = document.querySelector(a.getAttribute('href'));
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });

    /* ---------- Gallery scroll-snap arrows ---------- */
    document.querySelectorAll('.beauty-gallery__wrap').forEach(function (wrap) {
      var gallery = wrap.querySelector('.beauty-gallery');
      if (!gallery) return;
      function step() {
        var item = gallery.querySelector('.beauty-gallery__item');
        if (!item) return gallery.clientWidth;
        var gap = parseInt(getComputedStyle(gallery).columnGap || getComputedStyle(gallery).gap, 10) || 0;
        return item.offsetWidth + gap;
      }
      var prev = wrap.querySelector('[data-beauty-gallery-prev]');
      var next = wrap.querySelector('[data-beauty-gallery-next]');
      if (prev) prev.addEventListener('click', function () { gallery.scrollBy({ left: -step(), behavior: 'smooth' }); });
      if (next) next.addEventListener('click', function () { gallery.scrollBy({ left: step(), behavior: 'smooth' }); });
    });

    /* ---------- FAQ accordion ---------- */
    document.querySelectorAll('[data-beauty-faq] .beauty-faq__q').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var panel = btn.nextElementSibling;
        var open = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', String(!open));
        panel.style.maxHeight = open ? null : panel.scrollHeight + 'px';
      });
    });

    /* ---------- Bundle selection -> summary + "what's included" (cross-section) ---------- */
    var bundleInputs = document.querySelectorAll('input[name="bundle"]');
    var sumEl = document.querySelector('[data-beauty-sum]');
    var includedEl = document.querySelector('[data-beauty-included-list]');

    function getSelectedBundle() {
      var checked = document.querySelector('input[name="bundle"]:checked');
      if (!checked) return null;
      var card = checked.closest('.beauty-bundle');
      return {
        id: checked.value,
        name: card ? card.getAttribute('data-bundle-name') : '',
        price: card ? parseInt(card.getAttribute('data-bundle-price'), 10) || 0 : 0,
        comparePrice: card ? parseInt(card.getAttribute('data-bundle-compare'), 10) || 0 : 0,
        currency: card ? card.getAttribute('data-bundle-currency') || 'DH' : 'DH',
        included: card ? (card.getAttribute('data-bundle-included') || '').split('|').filter(Boolean) : []
      };
    }

    function updateSummary() {
      var b = getSelectedBundle();
      document.querySelectorAll('.beauty-bundle').forEach(function (card) {
        var input = card.querySelector('input[name="bundle"]');
        card.classList.toggle('is-active', !!(input && input.checked));
      });
      if (!b) return;

      if (includedEl) {
        includedEl.innerHTML = '';
        b.included.forEach(function (item) {
          var li = document.createElement('li');
          li.textContent = item;
          includedEl.appendChild(li);
        });
      }

      if (sumEl) {
        var nameEl = sumEl.querySelector('[data-sum-name]');
        var priceEl = sumEl.querySelector('[data-sum-price]');
        var compareEl = sumEl.querySelector('[data-sum-compare]');
        if (nameEl) nameEl.textContent = b.name;
        if (priceEl) priceEl.textContent = b.price + ' ' + b.currency;
        if (compareEl) compareEl.textContent = b.comparePrice ? (b.comparePrice + ' ' + b.currency) : '';
      }

      var bundleIdField = document.querySelector('[data-beauty-bundle-id]');
      var bundleNameField = document.querySelector('[data-beauty-bundle-name]');
      var totalField = document.querySelector('[data-beauty-total]');
      if (bundleIdField) bundleIdField.value = b.id;
      if (bundleNameField) bundleNameField.value = b.name;
      if (totalField) totalField.value = b.price;

      document.querySelectorAll('[data-beauty-sticky-price]').forEach(function (el) {
        el.textContent = b.price + ' ' + b.currency;
      });
    }

    /* ---------- Bundle card "Buy" button: select this bundle, then scroll to form ---------- */
    document.querySelectorAll('[data-beauty-buy]').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        var card = btn.closest('.beauty-bundle');
        var input = card ? card.querySelector('input[name="bundle"]') : null;
        if (input && !input.checked) { input.checked = true; }
        updateSummary();
        var target = document.getElementById('beauty-order');
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });

    bundleInputs.forEach(function (input) {
      input.addEventListener('change', updateSummary);
    });
    if (bundleInputs.length && !document.querySelector('input[name="bundle"]:checked')) {
      bundleInputs[0].checked = true;
    }
    updateSummary();

    /* ---------- Sticky buy bar ---------- */
    var sticky = document.querySelector('[data-beauty-sticky]');
    var hero = document.querySelector('.beauty-hero');
    var order = document.getElementById('beauty-order');
    if (sticky && 'IntersectionObserver' in window) {
      var heroOut = true, formHidden = true;
      function sync() {
        var show = heroOut && formHidden;
        sticky.classList.toggle('is-visible', show);
        sticky.setAttribute('aria-hidden', String(!show));
      }
      if (hero) {
        new IntersectionObserver(function (es) { heroOut = !es[0].isIntersecting; sync(); }, { threshold: 0.15 }).observe(hero);
      }
      if (order) {
        new IntersectionObserver(function (es) { formHidden = !es[0].isIntersecting; sync(); }, { threshold: 0.10 }).observe(order);
      }
    }

    /* ---------- Scroll-reveal entrance animation ---------- */
    var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduceMotion && 'IntersectionObserver' in window) {
      var revealTargets = document.querySelectorAll('.beauty__section');
      var revealObserver = new IntersectionObserver(function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
      revealTargets.forEach(function (el) {
        el.classList.add('beauty-reveal');
        revealObserver.observe(el);
      });
    }

    /* ---------- COD form: validate + AJAX POST to Google Sheet webhook ---------- */
    var form = document.querySelector('[data-beauty-form]');
    if (!form) return;
    var orderBox = document.querySelector('[data-beauty-order]');

    function setErr(field, on) {
      if (!field) return;
      field.classList.toggle('beauty-field--error', on);
      var input = field.querySelector('input, textarea');
      if (input) input.setAttribute('aria-invalid', on ? 'true' : 'false');
    }

    function validate() {
      var ok = true, firstBad = null;
      form.querySelectorAll('[data-field]').forEach(function (field) {
        var input = field.querySelector('input, textarea');
        var bad = false;
        if (input) {
          var v = (input.value || '').trim();
          if (!v) bad = true;
          else if (input.name === 'phone') {
            var digits = v.replace(/\D/g, '');
            if (digits.length < 9 || digits.length > 12) bad = true;
          }
        }
        setErr(field, bad);
        if (bad) { ok = false; if (!firstBad) firstBad = field; }
      });
      if (firstBad) {
        var el = firstBad.querySelector('input, textarea');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return ok;
    }

    form.querySelectorAll('input, textarea').forEach(function (i) {
      i.addEventListener('input', function () { setErr(i.closest('[data-field]'), false); });
    });

    var submitBtn = form.querySelector('button[type="submit"]');
    var errorBox = orderBox ? orderBox.querySelector('.beauty-order__error') : null;
    var submitting = false;

    function showSuccess() {
      if (!orderBox) return;
      var b = getSelectedBundle();
      track('Lead', { content_name: b ? b.name : 'Beauty Pack', value: b ? b.price : 0, currency: 'MAD' });
      orderBox.classList.remove('is-error');
      orderBox.classList.add('is-success');
      var box = orderBox.querySelector('.beauty-order__success');
      if (box) { box.scrollIntoView({ behavior: 'smooth', block: 'center' }); try { box.focus(); } catch (e) {} }
    }
    function showError() {
      if (errorBox) errorBox.hidden = false;
      if (submitBtn) { submitBtn.disabled = false; submitBtn.removeAttribute('aria-busy'); }
      submitting = false;
      if (errorBox) errorBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (submitting) return;
      if (!validate()) return;
      if (errorBox) errorBox.hidden = true;
      updateSummary();

      var action = (form.getAttribute('action') || '#').trim();
      if (action === '#' || action === '') { showSuccess(); return; }

      submitting = true;
      if (submitBtn) { submitBtn.disabled = true; submitBtn.setAttribute('aria-busy', 'true'); }
      // Apps Script /exec POST 302-redirects (no CORS headers) -> response unreadable.
      // Fire-and-forget: resolved fetch = delivered, rejection = real network failure.
      fetch(action, { method: 'POST', mode: 'no-cors', body: new FormData(form) })
        .then(function () { showSuccess(); })
        .catch(function () { showError(); });
    });
  });
})();
