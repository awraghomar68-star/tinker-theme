---
name: gortex-assets-connectedcallback-anchored-popover
description: "Work in the assets · connectedCallback · anchored-popover area — 59 symbols across 32 files (67% cohesion)"
---

# assets · connectedCallback · anchored-popover

59 symbols | 32 files | 67% cohesion

## When to Use

Use this skill when working on files in:
- `assets\anchored-popover.js`
- `assets\cart-drawer.js`
- `assets\collection-links.js`
- `assets\component-cart-items.js`
- `assets\disclosures-summary-fit.js`
- `assets\facets.js`
- `assets\gift-card-recipient-form.js`
- `assets\header-actions.js`
- `assets\header-drawer.js`
- `assets\jumbo-text.js`
- `assets\marquee.js`
- `assets\media-gallery.js`
- `assets\media.js`
- `assets\overflow-list.js`
- `assets\paginated-list.js`
- `assets\price-per-item.js`
- `assets\product-card.js`
- `assets\product-form.js`
- `assets\product-hotspot.js`
- `assets\product-inventory.js`
- `assets\product-price.js`
- `assets\product-sku.js`
- `assets\qr-code-image.js`
- `assets\quick-add.js`
- `assets\quick-order-list.js`
- `assets\results-list.js`
- `assets\rte-formatter.js`
- `assets\show-more.js`
- `assets\sticky-add-to-cart.js`
- `assets\utilities.js`
- `assets\video-background.js`
- `assets\zoom-dialog.js`

## Key Files

| File | Symbols |
|------|---------|
| `assets\anchored-popover.js` | connectedCallback |
| `assets\cart-drawer.js` | connectedCallback |
| `assets\collection-links.js` | links, connectedCallback, clearSelections, CollectionLinks, currentIndex |
| `assets\component-cart-items.js` | connectedCallback |
| `assets\disclosures-summary-fit.js` | connectedCallback |
| `assets\facets.js` | connectedCallback, connectedCallback, connectedCallback, connectedCallback |
| `assets\gift-card-recipient-form.js` | connectedCallback, toggleRecipientForm, GiftCardRecipientForm |
| `assets\header-actions.js` | connectedCallback |
| `assets\header-drawer.js` | connectedCallback |
| `assets\jumbo-text.js` | connectedCallback |
| `assets\marquee.js` | connectedCallback, MarqueeComponent, clonedContent |
| `assets\media-gallery.js` | connectedCallback |
| `assets\media.js` | connectedCallback |
| `assets\overflow-list.js` | connectedCallback |
| `assets\paginated-list.js` | PaginatedList, sectionId, connectedCallback |
| `assets\price-per-item.js` | connectedCallback, PricePerItemComponent, updatePriceDisplay |
| `assets\product-card.js` | connectedCallback, connectedCallback |
| `assets\product-form.js` | connectedCallback, disable, enable, AddToCartComponent, connectedCallback |
| `assets\product-hotspot.js` | connectedCallback |
| `assets\product-inventory.js` | connectedCallback |
| `assets\product-price.js` | connectedCallback |
| `assets\product-sku.js` | connectedCallback |
| `assets\qr-code-image.js` | QRCodeImage, connectedCallback |
| `assets\quick-add.js` | connectedCallback |
| `assets\quick-order-list.js` | connectedCallback |
| `assets\results-list.js` | updateLayout, connectedCallback, ResultsList, disconnectedCallback |
| `assets\rte-formatter.js` | connectedCallback, RTEFormatter |
| `assets\show-more.js` | connectedCallback |
| `assets\sticky-add-to-cart.js` | connectedCallback |
| `assets\utilities.js` | debounce, debounced |
| `assets\video-background.js` | VideoBackgroundComponent, connectedCallback |
| `assets\zoom-dialog.js` | connectedCallback |

## Entry Points

- `assets\anchored-popover.js::AnchoredPopoverComponent.connectedCallback`
- `assets\qr-code-image.js::QRCodeImage.connectedCallback`
- `assets\quick-order-list.js::QuickOrderListComponent.connectedCallback`
- `assets\sticky-add-to-cart.js::StickyAddToCartComponent.connectedCallback`

## Connected Communities

- **assets · closest** (7 cross-edges)

## How to Explore

```
get_communities with id: "community-4"
smart_context with task: "understand assets · connectedCallback · anchored-popover", format: "gcx"
find_usages with id: "assets\anchored-popover.js::AnchoredPopoverComponent.connectedCallback", format: "gcx"
```

_`format: "gcx"` returns the [GCX1 compact wire format](../../docs/wire-format.md) — round-trippable, ~27% fewer tokens than JSON. Drop it for JSON output; agents using `@gortex/wire` or the Go `github.com/gortexhq/gcx-go` package decode either._
