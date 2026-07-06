---
name: gortex-assets-hydratesection
description: "Work in the assets · hydrateSection area — 10 symbols across 4 files (87% cohesion)"
---

# assets · hydrateSection

10 symbols | 4 files | 87% cohesion

## When to Use

Use this skill when working on files in:
- `assets\quick-order-list.js`
- `assets\section-hydration.js`
- `assets\section-renderer.js`
- `assets\utilities.js`

## Key Files

| File | Symbols |
|------|---------|
| `assets\quick-order-list.js` | onPaginationControlClick |
| `assets\section-hydration.js` | hydrateSection, hydrate |
| `assets\section-renderer.js` | SectionRenderer, buildSectionRenderingURL, constructor, getSectionHTML, normalizeSectionId, ... |
| `assets\utilities.js` | onDocumentReady |

## Connected Communities

- **assets · closest** (1 cross-edges)
- **assets · preventDefault** (1 cross-edges)

## How to Explore

```
get_communities with id: "community-59"
smart_context with task: "understand assets · hydrateSection", format: "gcx"
```

_`format: "gcx"` returns the [GCX1 compact wire format](../../docs/wire-format.md) — round-trippable, ~27% fewer tokens than JSON. Drop it for JSON output; agents using `@gortex/wire` or the Go `github.com/gortexhq/gcx-go` package decode either._
