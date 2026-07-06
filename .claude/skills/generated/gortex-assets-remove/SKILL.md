---
name: gortex-assets-remove
description: "Work in the assets · remove area — 19 symbols across 10 files (63% cohesion)"
---

# assets · remove

19 symbols | 10 files | 63% cohesion

## When to Use

Use this skill when working on files in:
- `assets\component-cart-items.js`
- `assets\component-quantity-selector.js`
- `assets\copy-to-clipboard.js`
- `assets\elovira-announcement.js`
- `assets\elovira-header.js`
- `assets\header-drawer.js`
- `assets\performance.js`
- `assets\utilities.js`
- `assets\view-transitions.js`
- `assets\volume-pricing-info.js`

## Key Files

| File | Symbols |
|------|---------|
| `assets\component-cart-items.js` | isDrawer, remove, CartItemsComponent, sectionId, fetchCartData, ... |
| `assets\component-quantity-selector.js` | decreaseQuantity, increaseQuantity |
| `assets\copy-to-clipboard.js` | copyToClipboard, CopyToClipboardComponent |
| `assets\elovira-announcement.js` | next |
| `assets\elovira-header.js` | close |
| `assets\header-drawer.js` | reset |
| `assets\performance.js` | createStartingMarker |
| `assets\utilities.js` | TextComponent, shimmer |
| `assets\view-transitions.js` | disableCrossDocumentViewTransitions |
| `assets\volume-pricing-info.js` | updateActiveTier |

## Entry Points

- `assets\component-cart-items.js::CartItemsComponent.onLineItemRemove`
- `assets\elovira-header.js::EloviraHeader.close`

## Connected Communities

- **assets · closest** (3 cross-edges)
- **assets · scrollIntoView** (2 cross-edges)
- **assets · preventDefault** (2 cross-edges)
- **assets · clearRecentlyViewedProducts** (1 cross-edges)
- **assets · onRemoveAll** (1 cross-edges)
- **assets · measure** (1 cross-edges)

## How to Explore

```
get_communities with id: "community-7"
smart_context with task: "understand assets · remove", format: "gcx"
find_usages with id: "assets\component-cart-items.js::CartItemsComponent.onLineItemRemove", format: "gcx"
```

_`format: "gcx"` returns the [GCX1 compact wire format](../../docs/wire-format.md) — round-trippable, ~27% fewer tokens than JSON. Drop it for JSON output; agents using `@gortex/wire` or the Go `github.com/gortexhq/gcx-go` package decode either._
