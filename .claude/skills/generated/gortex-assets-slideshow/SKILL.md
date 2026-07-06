---
name: gortex-assets-slideshow
description: "Work in the assets · Slideshow area — 41 symbols across 8 files (82% cohesion)"
---

# assets · Slideshow

41 symbols | 8 files | 82% cohesion

## When to Use

Use this skill when working on files in:
- `assets\collection-links.js`
- `assets\facets.js`
- `assets\layered-slideshow.js`
- `assets\marquee.js`
- `assets\product-card.js`
- `assets\scrolling.js`
- `assets\slideshow.js`
- `assets\utilities.js`

## Key Files

| File | Symbols |
|------|---------|
| `assets\collection-links.js` | select |
| `assets\facets.js` | cancelPrefetchPage |
| `assets\layered-slideshow.js` | select |
| `assets\marquee.js` | cancel |
| `assets\product-card.js` | previewVariant, previewImage |
| `assets\scrolling.js` | by, to, calculatePaddingStart |
| `assets\slideshow.js` | autoplay, initialSlideIndex, disabled, resume, initialSlide, ... |
| `assets\utilities.js` | clamp |

## Entry Points

- `assets\slideshow.js::Slideshow.select`
- `assets\slideshow.js::onPointerMove`
- `assets\slideshow.js::onPointerUp`

## Connected Communities

- **assets · preventDefault** (3 cross-edges)
- **assets · closest** (2 cross-edges)
- **assets · scrollIntoView** (1 cross-edges)
- **assets · connectedCallback · anchored-popover** (1 cross-edges)
- **assets · disconnectedCallback** (1 cross-edges)
- **assets · observe** (1 cross-edges)

## How to Explore

```
get_communities with id: "community-40"
smart_context with task: "understand assets · Slideshow", format: "gcx"
find_usages with id: "assets\slideshow.js::Slideshow.select", format: "gcx"
```

_`format: "gcx"` returns the [GCX1 compact wire format](../../docs/wire-format.md) — round-trippable, ~27% fewer tokens than JSON. Drop it for JSON output; agents using `@gortex/wire` or the Go `github.com/gortexhq/gcx-go` package decode either._
