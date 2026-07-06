---
name: gortex-assets-closest
description: "Work in the assets · closest area — 39 symbols across 14 files (65% cohesion)"
---

# assets · closest

39 symbols | 14 files | 65% cohesion

## When to Use

Use this skill when working on files in:
- `assets\cart-discount.js`
- `assets\facets.js`
- `assets\header-menu.js`
- `assets\local-pickup.js`
- `assets\predictive-search.js`
- `assets\product-card.js`
- `assets\product-form.js`
- `assets\product-inventory.js`
- `assets\product-price.js`
- `assets\product-sku.js`
- `assets\section-renderer.js`
- `assets\theme-editor.js`
- `assets\utilities.js`
- `assets\variant-picker.js`

## Key Files

| File | Symbols |
|------|---------|
| `assets\cart-discount.js` | CartDiscount, removeDiscount, applyDiscount |
| `assets\facets.js` | updatePriceSummary, FacetStatusComponent, clearSummary, updateListSummary, sectionId, ... |
| `assets\header-menu.js` | headerComponent |
| `assets\local-pickup.js` | handleProductSelect, LocalPickup, connectedCallback |
| `assets\predictive-search.js` | dialog |
| `assets\product-card.js` | featuredMediaUrl, productTransitionEnabled, navigateToProduct, handleViewTransition, ProductCardLink |
| `assets\product-form.js` | handleClick |
| `assets\product-inventory.js` | ProductInventory, disconnectedCallback |
| `assets\product-price.js` | disconnectedCallback, ProductPrice |
| `assets\product-sku.js` | disconnectedCallback, ProductSkuComponent |
| `assets\section-renderer.js` | buildSectionSelector, morphSection, injectSectionStylesheet |
| `assets\theme-editor.js` | features.matches, features.matches, features.matches, features.matches |
| `assets\utilities.js` | fetchConfig, yieldToMainThread, closest, getViewParameterValue |
| `assets\variant-picker.js` | buildRequestUrl, variantChanged |

## Entry Points

- `assets\cart-discount.js::CartDiscount.applyDiscount`
- `assets\cart-discount.js::CartDiscount.removeDiscount`
- `assets\variant-picker.js::VariantPicker.variantChanged`
- `assets\local-pickup.js::LocalPickup.connectedCallback`
- `assets\product-card.js::ProductCard.navigateToProduct`

## Connected Communities

- **assets · VariantPicker** (3 cross-edges)
- **assets · preventDefault** (3 cross-edges)
- **assets · disconnectedCallback** (3 cross-edges)
- **assets · connectedCallback · anchored-popover** (1 cross-edges)
- **assets · remove** (1 cross-edges)
- **assets · updateFilters** (1 cross-edges)
- **assets · getCurrentValues** (1 cross-edges)
- **assets · measure** (1 cross-edges)

## How to Explore

```
get_communities with id: "community-56"
smart_context with task: "understand assets · closest", format: "gcx"
find_usages with id: "assets\cart-discount.js::CartDiscount.applyDiscount", format: "gcx"
```

_`format: "gcx"` returns the [GCX1 compact wire format](../../docs/wire-format.md) — round-trippable, ~27% fewer tokens than JSON. Drop it for JSON output; agents using `@gortex/wire` or the Go `github.com/gortexhq/gcx-go` package decode either._
