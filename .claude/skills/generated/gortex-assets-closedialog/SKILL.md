---
name: gortex-assets-closedialog
description: "Work in the assets · closeDialog area — 21 symbols across 7 files (72% cohesion)"
---

# assets · closeDialog

21 symbols | 7 files | 72% cohesion

## When to Use

Use this skill when working on files in:
- `assets\anchored-popover.js`
- `assets\dialog.js`
- `assets\product-hotspot.js`
- `assets\quick-add.js`
- `assets\theme-editor.js`
- `assets\utilities.js`
- `assets\zoom-dialog.js`

## Key Files

| File | Symbols |
|------|---------|
| `assets\anchored-popover.js` | AnchoredPopoverComponent, getTriggerByAriaControls, openDialog |
| `assets\dialog.js` | toggleDialog |
| `assets\product-hotspot.js` | lightDismissMouse, handleHotspotClick, ProductHotspotComponent, lightDismissKeyboard, closeDialog, ... |
| `assets\quick-add.js` | connectedCallback, QuickAddDialog, handleCartUpdate |
| `assets\theme-editor.js` | features.open, features.open |
| `assets\utilities.js` | isPointWithinElement, isTouchDevice, isClickedOutside |
| `assets\zoom-dialog.js` | getMostVisibleElement, close |

## Entry Points

- `assets\zoom-dialog.js::ZoomDialog.close`
- `assets\anchored-popover.js::AnchoredPopoverComponent.openDialog`
- `assets\product-hotspot.js::ProductHotspotComponent.handleHotspotClick`

## Connected Communities

- **assets · preventDefault** (3 cross-edges)
- **assets · scrollIntoView** (3 cross-edges)
- **assets · closest** (2 cross-edges)
- **assets · disconnectedCallback** (1 cross-edges)
- **assets · isMobileBreakpoint** (1 cross-edges)
- **assets · clearRecentlyViewedProducts** (1 cross-edges)
- **assets · remove** (1 cross-edges)
- **assets · observe** (1 cross-edges)
- **assets · connectedCallback · anchored-popover** (1 cross-edges)

## How to Explore

```
get_communities with id: "community-69"
smart_context with task: "understand assets · closeDialog", format: "gcx"
find_usages with id: "assets\zoom-dialog.js::ZoomDialog.close", format: "gcx"
```

_`format: "gcx"` returns the [GCX1 compact wire format](../../docs/wire-format.md) — round-trippable, ~27% fewer tokens than JSON. Drop it for JSON output; agents using `@gortex/wire` or the Go `github.com/gortexhq/gcx-go` package decode either._
