# ELOVIRA — Shopify Theme Implementation Report (Phase 2)

**Sources analyzed**
- Design System project: `claude.ai/design/p/0b389a1a…` (tokens, guidelines, 16 components, 2 UI kits)
- Prototype project: `claude.ai/design/p/ffb4038e…` (`ELOVIRA.dc.html` homepage, `Collection.dc.html`, `Checkout.dc.html`, `GUIDE-IMPLEMENTATION.md`, `COPY-GUIDE.md`, 29 product photos)
- Existing repo: stock Shopify **Tinker v4.1.1** theme (Horizon family) — kept untouched as backup base.

---

## ⚠️ 0. CRITICAL CONFLICT — two different design languages

The two references do **not** share tokens. They are two distinct generations:

| Axis | Design System project ("beauty kit") | Prototype (.dc.html pages, "Rhode-like redesign") |
|---|---|---|
| Display font | Playfair Display 400 | **Cormorant Garamond 500** |
| Body/UI font | Inter 400–800 (+ IBM Plex Mono labels) | **Jost 300–600** |
| Page bg | `#F8F5F2` | `#F7F2EB` |
| Primary CTA | Deep rose `#8E4B5C` | **Espresso `#2C2622`** (secondary CTA rose `#A85F52`) |
| Accent | Gold `#C9A24B` (prices, stars, checks) | Rose `#C98A7E`/`#A85F52`; gold `#C99A3B` stars only |
| Icons | Unicode glyphs (✓ ★ ✿) | **Inline stroke SVGs** (1.4–1.7 stroke) |
| Layout | Single 680px mobile column | **Full desktop grid, 1320px max** |
| Radius | 22/14/999 | 12–22px cards + 100px pills (compatible) |

The prototype pages are internally consistent and complete (3 pages, all states, all interactions). The Design System project describes the *older* landing-page kit; its own `GUIDE-IMPLEMENTATION.md` counterpart in the prototype project explicitly defines the Cormorant/Jost system as the redesign direction.

**Applying the Design System tokens verbatim would repaint every pixel of the prototype** — the two instructions ("DS has absolute priority" and "pixel-perfect prototype fidelity") cannot both hold. Resolution needed before Phase 3 (question asked separately). This report documents **the prototype token set** as primary (it is what the three pages are actually built from), with the DS kit as fallback vocabulary where the prototype is silent (e.g. success/error tones, spacing scale, motion springs).

---

## 1. Design Tokens (extracted from prototype, cross-checked with DS)

### Colors
| Token | Value | Usage |
|---|---|---|
| `--color-bg` | `#F7F2EB` | Page background (crème) |
| `--color-bg-card` | `#FDFAF5` | Drawers, modals, cards-on-cream |
| `--color-surface-sand` | `#EFE2D5` | Alt sections, img placeholder, trust banner |
| `--color-surface-blush` | `#F0D9CE` / gradient stops `#F4DCD0 #F2D8CC #EAD0C3` | Hero radial, final CTA, referral card |
| `--color-surface-tan` | `#F3E7D9` / `#F0E5D8` | Free-ship bar bg, chips, upsell buttons |
| `--color-ink` | `#2C2622` | Text, primary CTA (espresso) |
| `--color-ink-hover` | `#3d352e` | Primary CTA hover |
| `--color-ink-soft` | `#6E655C` | Body copy secondary |
| `--color-ink-mute` | `#7A7065` | Captions, meta |
| `--color-ink-faint` | `#B0A493` | Eyebrows on white, struck prices |
| `--color-taupe` | `#B0937F` | Eyebrow labels in sections |
| `--color-nav` | `#463F38` | Nav links, list text |
| `--color-rose` | `#C98A7E` | Wishlist badge, newsletter button |
| `--color-rose-deep` | `#A85F52` | Links, active nav, secondary CTA, focus outline, selected states |
| `--color-rose-deep-hover` | `#96534a` | |
| `--color-cta-text` | `#F4EDE2` | Text on espresso buttons |
| `--color-cream-inverse` | `#F1E8DC` | Text on dark bg |
| `--color-footer-bg` | `#211D1A` | Footer |
| `--color-footer-text` | `#9C9184` / links `#C6BAAC` / headers `#7C7266` | |
| `--color-success` | `#5E7A5B` (sage) | Checks, free-ship bar, done steps |
| `--color-urgency` | `#B4603F` (terracotta) | Countdown, errors, Promotion badge |
| `--color-gold` | `#C99A3B` | Stars only |
| `--color-border` | `rgba(44,38,34,.08–.10)` | Hairlines |
| `--color-border-input` | `rgba(44,38,34,.16)` | Inputs |
| `--color-overlay` | `rgba(44,38,34,.4)` | Drawer scrims (+blur 4px on modals) |
| `--color-selection` | `#E7C7BB` | ::selection |
| Badge colors | Best Seller `#2C2622`, Nouveau `#5E7A5B`, Promotion `#B4603F`, Édition limitée `#A85F52` | Product badges |
| WhatsApp | `#25D366` | WhatsApp CTAs |

### Typography
- **Display**: `'Cormorant Garamond', serif` — weight 500 (600 logo), italic accents in `#A85F52`
- **Body/UI**: `'Jost', system-ui, sans-serif` — 300 (body copy), 400 (default), 500 (emphasis/prices), 600 (rare)
- Loaded via Google Fonts, `display=swap`, preconnect both hosts.

| Role | Size | LH | Tracking | Case |
|---|---|---|---|---|
| H1 hero | `clamp(42px,6.4vw,80px)` | .98 | −.01em | Sentence |
| H1 page (collection/checkout) | `clamp(36px,5.4vw,64px)` / `clamp(28px,3.6vw,42px)` | .98–1.02 | — | |
| H2 section | `clamp(30px,4.4vw,52px)` | 1.02 | — | |
| H2 sub (bundle/quickview) | `clamp(26–28px,3.4–3.8vw,36–46px)` | 1.02–1.05 | — | |
| H3 card | 20–23px | 1.1 | — | |
| Lead | 16–17px w300 | 1.6 | — | |
| Body | 14.5–16px w300 | 1.55–1.65 | — | |
| Nav | 13.5px | — | .08em | UPPERCASE |
| Buttons | 13–15px | — | .08–.1em | UPPERCASE |
| Eyebrow | 11–12px | — | .16–.24em | UPPERCASE |
| Badges | 10–11px | — | .12em | UPPERCASE |
| Captions | 12–13.5px | 1.4 | — | |
| Logo | `clamp(23px,3.4vw,30px)` CG 600 | 1 | .34em | UPPER + sub-line 8.5px/.42em |
| Prices | Jost 500, 15–26px; struck compare `#B0A493` 12–18px | | tabular-nums on countdown | |

### Spacing — 8pt scale (8/16/24/32/48/64/96/128)
- Section padding-y: `clamp(56–64px, 8–9vw, 104–128px)`; tight sections `clamp(48px,6vw,80–88px)`
- Container: `max-width:1320px` (content pages), 1180px (checkout/bundle), 860px (FAQ), 680–760px (tracking/thanks); side padding `clamp(16px,4vw,44px)`
- Card padding: 28–34px; drawer padding 24px; grid gaps `clamp(12px,1.6vw,26px)`

### Radius
- Cards/images 12–22px (16px product cards, 22px feature imgs), inputs 12–14px, pills/buttons/chips `100px`, thumbnails 10–12px

### Shadows (soft, long-throw, negative spread only)
- Product card: `0 14px 30px -24px rgba(44,38,34,.5)`
- Feature img: `0 40px 70px -40px rgba(122,81,71,.45)`
- Header scrolled: `0 8px 24px -18px rgba(44,38,34,.4)`
- Sticky bars: `0 -8px 24px -16px rgba(44,38,34,.4)`
- Toast: `0 18px 40px -18px rgba(0,0,0,.5)`

### Breakpoints (JS-driven in prototype → CSS media queries in theme)
- Homepage: mobile `<900px`; Collection: `<760px`; Checkout: `<860px` → **standardize: 750px (mobile), 990px (desktop)** — Shopify convention, matches all three intents. Grid: collection 2-col mobile → `auto-fill minmax(230px,1fr)` desktop.

### Motion
- Announcement rotation 3.8s; marquee 26s linear infinite; header compaction `.3s`
- Drawers: `transform .35s cubic-bezier(.22,1,.36,1)`, scrim opacity `.3s`
- Hover img crossfade `.45s`; quick-actions rise `.3s`; accordion max-height `.3–.35s`
- Scroll reveal: `opacity/transform .8s ease`, translateY(28px), IntersectionObserver threshold .08
- Grid stagger: `fadeGrid .5s` delay `(i%8)*45ms`; toast `.3s`; spinner `.7s linear`
- Float animation (hero collage) 5.5–7s ease-in-out; countdown tick 1s
- All gated behind `prefers-reduced-motion`.

### Iconography
Inline stroke SVGs, stroke-width 1.4–1.7 (2 for arrows/checks), 20px header / 26px feature. No icon font. Build as `snippets/icon.liquid` sprite-style dispatcher (~25 glyphs: menu, search, account, heart, cart, close, chevron, arrow, check, truck, card, shield, chat, lock, clock, pencil, instagram, tiktok, whatsapp, plus, minus, filter, share, link, star).

---

## 2. Component Inventory (reusable)

**Global:** Announcement bar (rotating, 4 messages) · Sticky compacting header (76→64px, bg opacity .6→.9 + shadow at scroll>30) · Mega menu (desktop hover, 3 link cols + promo image card) · Mobile menu drawer (left, serif nav 28px + trust footer) · Search overlay (top sheet, suggestions chips) · Cart drawer (right; free-ship progress bar @500 DH home/300 DH collection → **unify at one setting**, line items w/ qty stepper, upsell row, WhatsApp handoff link, COD reassurance) · Footer full (4 cols: brand+social, Boutique, Aide, Newsletter; payment badges COD/VISA/MASTERCARD/CMI) · Footer slim (collection variant) · Toast notification.

**Commerce:** Product card (4:5 img, hover img crossfade, badge, wishlist heart, hover quick-actions: Ajouter + quick-view) · Quick-view modal · Badge (4 variants) · Price (+struck compare) · Star rating row · Bundle selector card (radio, tag pill, price/compare) · Quantity stepper (pill, 2 sizes) · Trust banner (4 icon features) · Trust marquee (dark, duplicated row) · Reassurance ticks grid · Delivery estimate card · Countdown urgency banner · Sticky mobile ATC bar · Free-shipping progress bar · Cross-sell / upsell row · Recently-viewed rail.

**Content:** Hero (radial blush bg, floating collage, avatar proof cluster) · Pack-contents tile (square img, gradient scrim, caption) · Before/After slider (drag divider, labels, stat pair) · Benefit card (icon coin 54px `#F0DCCF`, serif h3) · Review card (stars, italic serif quote, avatar, verified) · UGC grid tile (dark section) · FAQ accordion (card style + slim checkout variant) · Final CTA banner · Newsletter inline form (pill input+button) · Referral card (dashed code pill + copy + share) · Order timeline (checkout thanks/tracking) · Progress steps (checkout 1-2-3) · Filter chips row (sticky) · Filter drawer (checkbox cats + price range) · Sort select (pill) · Form input/select/textarea (12px radius, error `#B4603F` + helper text `aria-live`) · Shipping method radio card · Payment method card (COD active / CB disabled).

---

## 3. Shopify Architecture (Online Store 2.0)

Build **in this repo, replacing Tinker's styling layer but reusing its OS 2.0 scaffolding** (`layout/theme.liquid`, config plumbing, locales structure). Git history keeps stock Tinker as rollback.

```
layout/theme.liquid          — fonts preconnect, CSS vars from settings, skeleton
config/settings_schema.json  — brand colors, fonts, free-ship threshold, COD toggles, socials
config/settings_data.json    — ELOVIRA preset values
assets/
  base.css                   — tokens (:root vars), reset, typography, utilities
  components.css             — buttons, cards, badges, forms, drawers (or split per-component, see perf)
  global.js                  — drawer/modal controller, toast, sticky header (vanilla, ~8kb)
  product.js  collection.js  cart.js  countdown.js  before-after.js  (deferred modules)
sections/
  announcement-bar.liquid    header.liquid          footer.liquid
  hero-banner.liquid         trust-marquee.liquid   pack-contents.liquid
  main-product.liquid        before-after.liquid    benefits.liquid
  reviews.liquid             ugc-gallery.liquid     faq.liquid
  final-cta.liquid           bundle-recommendation.liquid
  main-collection.liquid     collection-hero.liquid trust-banner.liquid
  main-cart.liquid           recently-viewed.liquid newsletter.liquid
  main-search.liquid  main-page.liquid  main-404.liquid  contact-form.liquid
snippets/
  icon.liquid  product-card.liquid  price.liquid  badge.liquid  stars.liquid
  quantity-stepper.liquid  bundle-selector.liquid  quick-view.liquid
  cart-drawer.liquid  mega-menu.liquid  mobile-menu.liquid  search-overlay.liquid
  sticky-atc.liquid  free-shipping-bar.liquid  reassurance-list.liquid
  delivery-estimate.liquid  countdown.liquid  toast.liquid  pagination.liquid
templates/  (JSON)
  index.json  collection.json  product.json  cart.json  search.json
  page.json  page.contact.json  page.faq.json  404.json
  + customers/* (styled minimal)
locales/fr.default.json      — all copy per COPY-GUIDE.md (French, vous, feminine)
```

**Why:** sections = theme-editor-configurable page regions (every one gets `{% schema %}` with blocks/settings); snippets = shared atoms (DRY across sections); JSON templates = merchant-reorderable OS 2.0 pages; CSS vars = tokens editable from settings without code.

**Platform notes (flagged, per prototype guide):**
- Bundles 1/2/3 coffrets → **product variants** (native, no app) with per-variant compare-at prices.
- Checkout: Shopify checkout is not themable on non-Plus; prototype checkout → implement **cart page + COD order form** styling to prototype spec, and document that steps 2–3 (Livraison/Paiement) require a COD-form app or Plus checkout branding. Thank-you/tracking visuals → order-status page CSS where allowed + `page.suivi` template.
- Reviews: schema-configurable blocks now; Judge.me/Loox integration point documented.
- Wishlist: localStorage (no app), badge in header.

---

## 4. Page Inventory

| Page | Source | Status |
|---|---|---|
| Homepage (landing: hero → marquee → coffret grid → offer/PDP module → before/after → benefits → reviews → UGC → FAQ → final CTA) | ELOVIRA.dc.html | Full spec |
| Collection (hero+breadcrumb, sticky filter/sort, grid w/ quick-view, trust banner, load-more, bundle reco, recently viewed) | Collection.dc.html | Full spec |
| Cart (step 1: lines, note, cross-sell) + Cart drawer | Checkout.dc.html + drawers | Full spec |
| Checkout info/payment (COD) | Checkout.dc.html | Spec exists; platform-gated (see above) |
| Thank-you + referral + reco + newsletter | Checkout.dc.html | Spec exists |
| Order tracking | Checkout.dc.html | Build as `page.suivi` |
| Product page | Offer module on homepage doubles as PDP spec (gallery+thumbs, bundle selector, countdown, ATC, reassurance) | Derive `main-product` from it |
| Search | Search overlay only | Overlay + minimal results page in system style |
| FAQ / About / Contact / Policies | FAQ section exists; others: build `page.*` templates in system style | Gap — compose from existing components |
| 404 | Not in prototype | Compose (serif headline + CTA) |

## 5. Responsive Analysis

**Desktop (≥990):** 1320px container; header nav left/logo center/icons right; mega menu on hover; hero 2-col with floating collage; collection `auto-fill minmax(230px)` grid with hover crossfade + rising quick-actions; sticky PDP gallery (`top:100px`); checkout 1.4fr/1fr with sticky summary aside; footer 4-col.
**Tablet (750–989):** fluid `clamp()` type/padding scales down; grids auto-fill to 2–3 cols; mega menu off at <900 (JS `isMobile`) — keep desktop nav ≥990, drawer below.
**Mobile (<750):** hamburger + drawer nav (serif 28px); hero stacks (visual 360px); collection 2-col grid, quick-actions always visible, filter → full drawer, footer slim behavior; sticky bottom ATC bar (price + `Commander · COD`) with `env(safe-area-inset-bottom)`; checkout single col + collapsible sticky summary bottom bar; touch targets ≥44px; before/after uses touchmove.

## 6. Performance Plan (Lighthouse ≥95)

- **Images:** all via `image_url` + `srcset/sizes`, `loading="lazy"` below fold, `fetchpriority="high"` + preload on hero LCP image, explicit `width/height` + `aspect-ratio` (CLS 0), hover-crossfade second image lazy.
- **CSS:** one `base.css` (tokens+critical) + per-section `{{ 'section-x.css' | asset_url | stylesheet_tag }}` loaded only when section renders; no framework; ~30kb total.
- **JS:** zero libraries. `global.js` defer (~8kb: drawers, sticky header via rAF-throttled scroll, toast); per-feature modules (`countdown.js`, `before-after.js`, `collection.js`) `defer` + only on pages using them; Cart AJAX via `/cart/add.js`; IntersectionObserver reveals with reduced-motion guard.
- **Fonts:** 2 families, subset weights (CG 500,600 + italic 500; Jost 300,400,500), `display=swap`, preconnect; consider self-hosting woff2 for repeat-visit cache.
- **CLS:** fixed announcement/header heights, reserved badge/toast layers, `font-size-adjust` fallbacks.
- **A11y:** WCAG AA — focus-visible 2px `#A85F52`, `aria-expanded/controls` on all disclosure widgets, focus trap in drawers/modals, `aria-live` on toast+errors+cart count, semantic landmarks, alt text settings on all image pickers, contrast checked (ink-soft on cream = 5.4:1 ✓; `#B0A493` used only for decorative/struck text).

## 7. CRO features carried over (per GUIDE-IMPLEMENTATION.md)

Rotating COD announcement · trust marquee · value anchoring (590 DH) · bundle tiers w/ "Le plus choisi" · countdown (honest, ships-today) · struck prices + savings · free-ship progress bar · sticky mobile ATC · social proof (4,9/5, avatars, verified reviews, UGC) · WhatsApp support everywhere · referral −10% · COD reassurance at every step.

All copy from COPY-GUIDE.md verbatim (luxe French pass — "Votre panier attend d'être comblé", "La livraison vous est offerte.", etc.) into `locales/fr.default.json` + section defaults.
