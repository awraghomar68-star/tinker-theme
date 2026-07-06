# ELOVIRA — Phase 1: Foundation (Report)

**Branch:** `feature/elovira-implementation`
**Scope:** architecture, file organization, global design tokens, CSS variable foundation, asset organization, shared utility classes, theme settings foundation, metafield definitions.
**Constraint honored:** purely additive. No Horizon file removed. No legacy `beauty-*` / `rbx-*` / `pack-*` section touched. No page built.

---

## Files created

| File | Purpose |
|---|---|
| `assets/elovira-tokens.css` | All 94 DS tokens as `:root` custom properties (color, type, spacing, radius, shadow, motion, breakpoints, containers, z-index, opacity, weights, focus). Values transcribed verbatim from DS `tokens/{colors,typography,spacing,system}.css`. Includes DS Google-Fonts `@import` (Playfair Display / Inter / IBM Plex Mono). |
| `assets/elovira-utilities.css` | Shared utility classes, all `elv-`-prefixed: containers (narrow/content/wide), section rhythm, surfaces, type presets, price, button bases, card, a11y helpers (visually-hidden, focus ring, tap target), reduced-motion guard. Built only on token vars. |
| `snippets/elovira-head.liquid` | Loads the two stylesheets + font preconnect, and emits a settings-driven `:root` override mapping the ELOVIRA settings group onto `--beauty-*` tokens (defaults = DS values). |
| `ELOVIRA-PHASE1-FOUNDATION.md` | This report + metafield definition manifest. |

## Files modified (additive only)

| File | Change | Reversible? |
|---|---|---|
| `layout/theme.liquid` | One `{%- render 'elovira-head' -%}` line added in `<head>`, after `color-palette`, inside a labeled comment. | Yes — delete the line. |
| `config/settings_schema.json` | One new settings group `"ELOVIRA — Foundation"` appended (brand colors, free-ship threshold, COD enable, COD backend selector, WhatsApp number). Nothing else altered. | Yes — remove the appended object. |

`config/settings_data.json` — **not touched** (active appearance unchanged; new settings resolve to their DS defaults).

---

## Architecture diagram

```
STOREFRONT REQUEST
        │
        ▼
layout/theme.liquid  (Horizon skeleton — kept)
  <head>
    meta-tags · stylesheets · fonts · scripts          ← Horizon (untouched)
    theme-styles-variables · color-palette             ← Horizon tokens (untouched)
    ┌───────────────────────────────────────────────┐
    │ render 'elovira-head'   ← NEW, additive        │
    │   ├─ preconnect (fonts)                         │
    │   ├─ elovira-tokens.css     (DS defaults)       │
    │   ├─ elovira-utilities.css  (elv-* classes)     │
    │   └─ <style> :root override ← settings-driven   │
    └───────────────────────────────────────────────┘
        │
        ▼
  CSS custom properties available document-wide:
    --beauty-*  (namespaced — no clash with Horizon --color-*)
    --font-* --space-* --radius* --shadow* --z-* --focus-ring ...
        │
        ▼
  Theme Editor  ──►  settings_schema.json "ELOVIRA — Foundation" group
                       merchant tunes colors / free-ship / COD backend
                       │
                       └──► elovira-head.liquid re-emits :root overrides

LEGACY (beauty-* / rbx-* / pack-*) ── unchanged, still live, git-rollback intact
FUTURE  (elovira-* sections/snippets, Phases 2+) ── will consume these tokens/utilities
```

**Separation model:** every ELOVIRA artifact is either in a dedicated file (`assets/elovira-*`, `snippets/elovira-head`) or namespaced (`--beauty-*` vars, `elv-*` classes, `elovira_*` settings). Zero identifier overlap with Horizon or legacy code. The whole foundation reverts by removing 3 files + 2 additive edits.

---

## Settings foundation (Theme Editor → Settings → "ELOVIRA — Foundation")

Brand colors ×10 (DS defaults) · free-shipping threshold (500 DH) · COD enable toggle · **COD backend selector** (none / draft_order / admin_api / easysell / releasit / webhook — frontend stays identical for all) · WhatsApp number. These are the settings→token bridge; sections in later phases read them.

---

## Metafield definition manifest (documentation — not yet applied to the store)

Per HANDOFF §8 + `responsive-a11y-shopify.md`. Create in **Admin → Settings → Custom data** (or via CLI/GraphQL) before the phases that consume them (PDP = Phase 7, bundles = Phase 6/7, countdown/FAQ/compare = Phase 6).

| Namespace.key | Type | Consumed by (phase) |
|---|---|---|
| `product.benefits` | list.single_line_text | Benefit chips (7) |
| `product.ingredients` | rich_text | PDP accordion (7) |
| `product.usage` | rich_text | PDP accordion (7) |
| `product.description_long` | rich_text | PDP accordion (7) |
| `product.skin_type` | list.single_line_text | PDP chips / PLP filter (7/10) |
| `product.routine_step` | single_line_text | PDP eyebrow / rail order (7) |
| `product.warnings` | rich_text | PDP accordion optional (7) |
| `product.included` | list.single_line_text | Bundle included list (6/7) |
| `product.before_image` / `product.after_image` | file_reference ×2 | Before/After (6/7) |
| option value → swatch hex | metaobject `shade` | Variant swatches (7) |
| `campaign.ends_at` | date_time | Countdown (6) |
| `faq` (q, a) | metaobject (list) | FAQ accordion (6/11) |
| `comparison` (feature, us, them) | metaobject (list) | Compare table (6) |
| cities | metaobject | COD city select (9) |
| reviews | app-owned | Review card — deferred until app chosen |

Trust/payment items = **section settings, not metafields**.

---

## Implementation risks

1. **Remote font load (2 theme-check warnings).** `elovira-tokens.css` pulls Playfair/Inter/IBM Plex Mono via Google Fonts `@import` — faithful to the DS source but flagged `RemoteAsset` by Shopify (perf + privacy). **Planned resolution: Phase 12** (subset + self-host woff2, `size-adjust` fallback for CLS). No functional impact now.
2. **Two global stylesheets load site-wide** before any ELOVIRA section exists — a few KB of currently-unused CSS. Acceptable for foundation; Phase 12 folds/splits for the perf budget.
3. **`@import` in CSS is render-blocking-ish.** Same Phase-12 resolution (move to `<link>`/self-host).
4. **Legacy debt is visible but out of scope.** Theme check surfaces 7 pre-existing errors in `beauty-hero`/`rbx-landing*`/`pack-landingsd` (parser-blocking scripts + missing `rbx-landing` assets). Not introduced by Phase 1; will be removed when legacy is retired (Phase 14, after verified replacements).

## Assumptions made

1. **Fonts via DS-specified Google Fonts for now.** DS `typography.css` itself loads this way; kept identical rather than guessing Shopify-font-library availability for Inter/IBM Plex Mono. Revisit at Phase 12.
2. **Literal English setting labels** (not `t:` locale keys) for the new group — keeps the foundation self-contained without editing locale files this phase. Localized labels can be added later if desired.
3. **Metafield definitions documented, not auto-created** on the live store. Creating store-side custom-data schema is an infra action gated to the phase that needs it; done explicitly to avoid unintended live-store mutations during a foundation phase.
4. **`--beauty-*` naming retained** (from DS source) rather than renamed to `--elovira-*`, to stay byte-faithful to the frozen token files and their `.prompt.md` references. Component styling in later phases matches DS contracts exactly.
5. **Settings default to DS values**, so the store's rendered appearance is unchanged until an ELOVIRA section is placed on a template (Phases 4+).

---

## Compile confirmation

- `config/settings_schema.json` — **valid JSON** (parser-verified).
- `shopify theme check` (v4.3.0): **350 files inspected.** ELOVIRA additions contribute **0 errors** and **2 warnings** (the expected remote-font preconnect notices in `elovira-head.liquid`).
- All 7 reported errors are **pre-existing** in legacy `beauty-*` / `rbx-*` / `pack-*` sections and unrelated to Phase 1.
- Theme compiles cleanly with the ELOVIRA foundation in place. Legacy funnel still live; stock Horizon preserved in git history for rollback.

**Status: Phase 1 complete. Awaiting approval for Phase 2 (Global tokens → applied base typography/reset layer + ELOVIRA preset in `settings_data.json`).**
