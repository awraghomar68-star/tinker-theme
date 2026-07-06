---
name: gortex-assets-scrollintoview
description: "Work in the assets · scrollIntoView area — 20 symbols across 6 files (78% cohesion)"
---

# assets · scrollIntoView

20 symbols | 6 files | 78% cohesion

## When to Use

Use this skill when working on files in:
- `assets\beauty-landing.js`
- `assets\media-gallery.js`
- `assets\scrolling.js`
- `assets\utilities.js`
- `assets\view-transitions.js`
- `assets\zoom-dialog.js`

## Key Files

| File | Symbols |
|------|---------|
| `assets\beauty-landing.js` | showError |
| `assets\media-gallery.js` | presentation, media, MediaGallery, preloadImage, slideshow |
| `assets\scrolling.js` | scrollIntoView, calculateScrollOffset |
| `assets\utilities.js` | startViewTransition, supportsViewTransitions |
| `assets\view-transitions.js` | isMetaInAppBrowser, shouldSkipViewTransition, isLowPowerDevice, prefersReducedMotion |
| `assets\zoom-dialog.js` | loadHighResolutionImage, open, handleThumbnailClick, selectThumbnail, handleThumbnailPointerEnter, ... |

## Entry Points

- `assets\zoom-dialog.js::ZoomDialog.open`

## Connected Communities

- **assets · preventDefault** (3 cross-edges)
- **assets · closest** (1 cross-edges)
- **assets · scrollTo** (1 cross-edges)

## How to Explore

```
get_communities with id: "community-62"
smart_context with task: "understand assets · scrollIntoView", format: "gcx"
find_usages with id: "assets\zoom-dialog.js::ZoomDialog.open", format: "gcx"
```

_`format: "gcx"` returns the [GCX1 compact wire format](../../docs/wire-format.md) — round-trippable, ~27% fewer tokens than JSON. Drop it for JSON output; agents using `@gortex/wire` or the Go `github.com/gortexhq/gcx-go` package decode either._
