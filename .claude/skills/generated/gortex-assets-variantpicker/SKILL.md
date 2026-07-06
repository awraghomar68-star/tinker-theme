---
name: gortex-assets-variantpicker
description: "Work in the assets · VariantPicker area — 28 symbols across 4 files (80% cohesion)"
---

# assets · VariantPicker

28 symbols | 4 files | 80% cohesion

## When to Use

Use this skill when working on files in:
- `assets\morph.js`
- `assets\overflow-list.js`
- `assets\product-card.js`
- `assets\variant-picker.js`

## Key Files

| File | Symbols |
|------|---------|
| `assets\morph.js` | collectHydrationTargets, morph, morphHydrationByKey, recreateAppBlockScripts |
| `assets\overflow-list.js` | defaultSlot, observedAttributes, overflowSlot, schedule, attributeChangedCallback, ... |
| `assets\product-card.js` | showAllSwatches, updatePrice, variantChanged, SwatchesVariantPickerComponent |
| `assets\variant-picker.js` | updateFieldsetCss, fetchUpdatedSection, updateElement, updateMain, VariantPicker, ... |

## Connected Communities

- **assets · walk** (2 cross-edges)
- **assets · closest** (2 cross-edges)
- **assets · preventDefault** (1 cross-edges)
- **assets · remove** (1 cross-edges)

## How to Explore

```
get_communities with id: "community-65"
smart_context with task: "understand assets · VariantPicker", format: "gcx"
```

_`format: "gcx"` returns the [GCX1 compact wire format](../../docs/wire-format.md) — round-trippable, ~27% fewer tokens than JSON. Drop it for JSON output; agents using `@gortex/wire` or the Go `github.com/gortexhq/gcx-go` package decode either._
