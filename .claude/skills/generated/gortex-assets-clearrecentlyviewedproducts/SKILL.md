---
name: gortex-assets-clearrecentlyviewedproducts
description: "Work in the assets · clearRecentlyViewedProducts area — 10 symbols across 4 files (57% cohesion)"
---

# assets · clearRecentlyViewedProducts

10 symbols | 4 files | 57% cohesion

## When to Use

Use this skill when working on files in:
- `assets\predictive-search.js`
- `assets\recently-viewed-products.js`
- `assets\sticky-add-to-cart.js`
- `assets\utilities.js`

## Key Files

| File | Symbols |
|------|---------|
| `assets\predictive-search.js` | clearRecentlyViewedProducts, connectedCallback, PredictiveSearchComponent |
| `assets\recently-viewed-products.js` | getProducts, clearProducts, RecentlyViewed, addProduct |
| `assets\sticky-add-to-cart.js` | StickyAddToCartComponent, handleAddToCartClick |
| `assets\utilities.js` | onAnimationEnd |

## Entry Points

- `assets\sticky-add-to-cart.js::StickyAddToCartComponent.handleAddToCartClick`

## Connected Communities

- **assets · connectedCallback · anchored-popover** (1 cross-edges)
- **assets · remove** (1 cross-edges)

## How to Explore

```
get_communities with id: "community-37"
smart_context with task: "understand assets · clearRecentlyViewedProducts", format: "gcx"
find_usages with id: "assets\sticky-add-to-cart.js::StickyAddToCartComponent.handleAddToCartClick", format: "gcx"
```

_`format: "gcx"` returns the [GCX1 compact wire format](../../docs/wire-format.md) — round-trippable, ~27% fewer tokens than JSON. Drop it for JSON output; agents using `@gortex/wire` or the Go `github.com/gortexhq/gcx-go` package decode either._
