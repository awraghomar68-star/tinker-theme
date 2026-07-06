---
name: gortex-assets-preventdefault
description: "Work in the assets · preventDefault area — 41 symbols across 15 files (76% cohesion)"
---

# assets · preventDefault

41 symbols | 15 files | 76% cohesion

## When to Use

Use this skill when working on files in:
- `assets\cart-drawer.js`
- `assets\elovira-header.js`
- `assets\facets.js`
- `assets\focus.js`
- `assets\header-drawer.js`
- `assets\localization.js`
- `assets\media-gallery.js`
- `assets\predictive-search.js`
- `assets\product-form.js`
- `assets\quick-order-list.js`
- `assets\standard-actions-override.js`
- `assets\theme-drawer.js`
- `assets\theme-editor.js`
- `assets\utilities.js`
- `assets\zoom-dialog.js`

## Key Files

| File | Symbols |
|------|---------|
| `assets\cart-drawer.js` | settle, openAndSettle |
| `assets\elovira-header.js` | open, EloviraHeader, _bindClosers, _measure, connectedCallback, ... |
| `assets\facets.js` | handleKeyDown |
| `assets\focus.js` | getFocusableElements, removeTrapFocus, trapFocus |
| `assets\header-drawer.js` | toggle, open, HeaderDrawer, back, isOpen, ... |
| `assets\localization.js` | selectCountry |
| `assets\media-gallery.js` | zoom |
| `assets\predictive-search.js` | onSearchKeyDown |
| `assets\product-form.js` | ProductFormComponent, handleSubmit |
| `assets\quick-order-list.js` | hideRemoveAllConfirmation, showRemoveAllConfirmation, onLineItemRemove |
| `assets\standard-actions-override.js` | init |
| `assets\theme-drawer.js` | disconnectedCallback, open, ThemeDrawer, isOpen, connectedCallback, ... |
| `assets\theme-editor.js` | update, saveEditorState, features.open |
| `assets\utilities.js` | preventDefault |
| `assets\zoom-dialog.js` | closeDialog, handleKeyDown |

## Entry Points

- `assets\elovira-header.js::EloviraHeader.connectedCallback`
- `assets\facets.js::SortingFilterComponent.handleKeyDown`
- `assets\elovira-header.js::EloviraHeader.open`
- `assets\predictive-search.js::PredictiveSearchComponent.onSearchKeyDown`
- `assets\header-drawer.js::HeaderDrawer.open`

## Connected Communities

- **assets · clearRecentlyViewedProducts** (2 cross-edges)
- **assets · remove** (2 cross-edges)
- **assets · DialogComponent** (2 cross-edges)
- **assets · closest** (1 cross-edges)
- **assets · connectedCallback · anchored-popover** (1 cross-edges)
- **assets · disconnectedCallback** (1 cross-edges)
- **assets · observe** (1 cross-edges)

## How to Explore

```
get_communities with id: "community-60"
smart_context with task: "understand assets · preventDefault", format: "gcx"
find_usages with id: "assets\elovira-header.js::EloviraHeader.connectedCallback", format: "gcx"
```

_`format: "gcx"` returns the [GCX1 compact wire format](../../docs/wire-format.md) — round-trippable, ~27% fewer tokens than JSON. Drop it for JSON output; agents using `@gortex/wire` or the Go `github.com/gortexhq/gcx-go` package decode either._
