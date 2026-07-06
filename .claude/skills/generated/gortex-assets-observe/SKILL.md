---
name: gortex-assets-observe
description: "Work in the assets · observe area — 13 symbols across 8 files (59% cohesion)"
---

# assets · observe

13 symbols | 8 files | 59% cohesion

## When to Use

Use this skill when working on files in:
- `assets\floating-panel.js`
- `assets\fly-to-cart.js`
- `assets\header.js`
- `assets\product-recommendations.js`
- `assets\scroll-container.js`
- `assets\scrolling.js`
- `assets\slideshow.js`
- `assets\variant-picker.js`

## Key Files

| File | Symbols |
|------|---------|
| `assets\floating-panel.js` | FloatingPanelComponent, connectedCallback |
| `assets\fly-to-cart.js` | connectedCallback, FlyToCart |
| `assets\header.js` | connectedCallback, HeaderComponent |
| `assets\product-recommendations.js` | connectedCallback, ProductRecommendations |
| `assets\scroll-container.js` | getScrollEventTarget |
| `assets\scrolling.js` | ScrollHint, connectedCallback |
| `assets\slideshow.js` | observe |
| `assets\variant-picker.js` | connectedCallback |

## Entry Points

- `assets\variant-picker.js::VariantPicker.connectedCallback`

## Connected Communities

- **assets · connectedCallback · anchored-popover** (5 cross-edges)
- **assets · disconnectedCallback** (1 cross-edges)

## How to Explore

```
get_communities with id: "community-41"
smart_context with task: "understand assets · observe", format: "gcx"
find_usages with id: "assets\variant-picker.js::VariantPicker.connectedCallback", format: "gcx"
```

_`format: "gcx"` returns the [GCX1 compact wire format](../../docs/wire-format.md) — round-trippable, ~27% fewer tokens than JSON. Drop it for JSON output; agents using `@gortex/wire` or the Go `github.com/gortexhq/gcx-go` package decode either._
