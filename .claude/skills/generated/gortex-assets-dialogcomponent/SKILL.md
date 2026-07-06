---
name: gortex-assets-dialogcomponent
description: "Work in the assets · DialogComponent area — 12 symbols across 3 files (69% cohesion)"
---

# assets · DialogComponent

12 symbols | 3 files | 69% cohesion

## When to Use

Use this skill when working on files in:
- `assets\dialog.js`
- `assets\scroll-container.js`
- `assets\utilities.js`

## Key Files

| File | Symbols |
|------|---------|
| `assets\dialog.js` | connectedCallback, DialogComponent, minWidth, closeDialog, maxWidth, ... |
| `assets\scroll-container.js` | getScrollTop |
| `assets\utilities.js` | unlockScroll, syncScrollLock, pruneDisconnectedScrollLockOwners, lockScroll |

## Entry Points

- `assets\dialog.js::DialogComponent.closeDialog`
- `assets\dialog.js::DialogComponent.showDialog`

## Connected Communities

- **assets · scrollTo** (2 cross-edges)
- **assets · disconnectedCallback** (2 cross-edges)
- **assets · observe** (1 cross-edges)
- **assets · clearRecentlyViewedProducts** (1 cross-edges)
- **assets · preventDefault** (1 cross-edges)
- **assets · remove** (1 cross-edges)
- **assets · connectedCallback · anchored-popover** (1 cross-edges)

## How to Explore

```
get_communities with id: "community-63"
smart_context with task: "understand assets · DialogComponent", format: "gcx"
find_usages with id: "assets\dialog.js::DialogComponent.closeDialog", format: "gcx"
```

_`format: "gcx"` returns the [GCX1 compact wire format](../../docs/wire-format.md) — round-trippable, ~27% fewer tokens than JSON. Drop it for JSON output; agents using `@gortex/wire` or the Go `github.com/gortexhq/gcx-go` package decode either._
