---
name: gortex-assets-localizationformcomponent
description: "Work in the assets · LocalizationFormComponent area — 10 symbols across 2 files (77% cohesion)"
---

# assets · LocalizationFormComponent

10 symbols | 2 files | 77% cohesion

## When to Use

Use this skill when working on files in:
- `assets\localization.js`
- `assets\utilities.js`

## Key Files

| File | Symbols |
|------|---------|
| `assets\localization.js` | resetCountriesFilter, toggle, LocalizationFormComponent, resizeLanguageInput, connectedCallback, ... |
| `assets\utilities.js` | normalizeString |

## Connected Communities

- **assets · connectedCallback · anchored-popover** (1 cross-edges)
- **assets · clearRecentlyViewedProducts** (1 cross-edges)
- **assets · updatePlayPauseHint** (1 cross-edges)

## How to Explore

```
get_communities with id: "community-58"
smart_context with task: "understand assets · LocalizationFormComponent", format: "gcx"
```

_`format: "gcx"` returns the [GCX1 compact wire format](../../docs/wire-format.md) — round-trippable, ~27% fewer tokens than JSON. Drop it for JSON output; agents using `@gortex/wire` or the Go `github.com/gortexhq/gcx-go` package decode either._
