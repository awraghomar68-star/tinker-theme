---
name: gortex-assets-getclosestcomponent
description: "Work in the assets · getClosestComponent area — 19 symbols across 3 files (88% cohesion)"
---

# assets · getClosestComponent

19 symbols | 3 files | 88% cohesion

## When to Use

Use this skill when working on files in:
- `assets\component.js`
- `assets\standard-events.d.ts`
- `assets\view-event-elements.d.ts`

## Key Files

| File | Symbols |
|------|---------|
| `assets\component.js` | registerEventListeners, getAncestor, parseData, roots, getElement, ... |
| `assets\standard-events.d.ts` | ViewEventElementBase, ViewEventElementClass, ViewEventElement, CustomElementLike |
| `assets\view-event-elements.d.ts` | T, ProductComponent, Refs, CollectionComponent, T |

## Entry Points

- `assets\component.js::registerEventListeners`

## Connected Communities

- **assets · closest** (2 cross-edges)
- **assets · connectedCallback · anchored-popover** (1 cross-edges)
- **assets · observe** (1 cross-edges)

## How to Explore

```
get_communities with id: "community-67"
smart_context with task: "understand assets · getClosestComponent", format: "gcx"
find_usages with id: "assets\component.js::registerEventListeners", format: "gcx"
```

_`format: "gcx"` returns the [GCX1 compact wire format](../../docs/wire-format.md) — round-trippable, ~27% fewer tokens than JSON. Drop it for JSON output; agents using `@gortex/wire` or the Go `github.com/gortexhq/gcx-go` package decode either._
