---
name: gortex-assets-getcurrentvalues
description: "Work in the assets · getCurrentValues area — 20 symbols across 3 files (94% cohesion)"
---

# assets · getCurrentValues

20 symbols | 3 files | 94% cohesion

## When to Use

Use this skill when working on files in:
- `assets\component-cart-quantity-selector.js`
- `assets\component-quantity-selector.js`
- `assets\utilities.js`

## Key Files

| File | Symbols |
|------|---------|
| `assets\component-cart-quantity-selector.js` | CartQuantitySelectorComponent, getEffectiveMax, updateButtonStates |
| `assets\component-quantity-selector.js` | getValue, setCartQuantity, quantityInput, QuantitySelectorComponent, connectedCallback, ... |
| `assets\utilities.js` | parseIntOrDefault |

## Entry Points

- `assets\component-quantity-selector.js::QuantitySelectorComponent.updateConstraints`
- `assets\component-quantity-selector.js::QuantitySelectorComponent.updateQuantity`

## Connected Communities

- **assets · preventDefault** (1 cross-edges)
- **assets · connectedCallback · anchored-popover** (1 cross-edges)
- **assets · Slideshow** (1 cross-edges)

## How to Explore

```
get_communities with id: "community-8"
smart_context with task: "understand assets · getCurrentValues", format: "gcx"
find_usages with id: "assets\component-quantity-selector.js::QuantitySelectorComponent.updateConstraints", format: "gcx"
```

_`format: "gcx"` returns the [GCX1 compact wire format](../../docs/wire-format.md) — round-trippable, ~27% fewer tokens than JSON. Drop it for JSON output; agents using `@gortex/wire` or the Go `github.com/gortexhq/gcx-go` package decode either._
