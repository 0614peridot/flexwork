# Design System — Flexwork (ChatGPT Redesign)

Extracted from Figma file `SYWgWd2g5AtWs3BsanrAHQ`, node `1:803`.
All raw values live in `design-tokens.json`. This doc explains how to *use* them.

---

## Color

The palette is a pure greyscale system — no hues, no brand accent color. Everything is achieved through opacity and lightness steps.

| Token | Value | Role |
|---|---|---|
| `grey/5` | `#0d0d0d` | Primary text · filled icon button bg |
| `grey/36` | `#5d5d5d` | Secondary text · default pill button label |
| `grey/56` | `#8f8f8f` | Muted / placeholder |
| `grey/91` | `#e8e8e8` | Selected nav item bg · square button hover |
| `grey/98` | `#f9f9f9` | Subtle surface |
| `white/solid` | `#ffffff` | Background |
| `grey/56 20%` | `rgba(143,143,143,0.2)` | Pill button border · subtle hover |
| `grey/5 5%` | `rgba(13,13,13,0.05)` | Nav item hover bg |

**Rule**: Never use a color outside this set. State changes are expressed purely through these steps (transparent → 5% → 20% → solid).

---

## Typography

Single typeface, single weight, two sizes.

| Token | Value | Usage |
|---|---|---|
| Font family | `Helvetica, sans-serif` | All UI |
| Font weight | `400` (Regular) | All UI |
| `font-size/14` | `14px` | Sidebar nav labels |
| `font-size/16` | `16px` | Pill button labels · body |
| `line-height/20` | `20px` | All text |
| Letter spacing | `0` | All text |

Mono font (`Roboto Mono`) is for internal annotations only — not used in the prototype UI.

---

## Spacing

| Token | Value | Usage |
|---|---|---|
| `space-100` | `4px` | Tight internal gaps |
| `space-200` | `8px` | Standard internal padding |
| `item-spacing/6` | `6px` | Gap inside page button |
| `item-spacing/10` | `10px` | Pill button padding-y + icon gap |
| `item-spacing/s` | `16px` | Pill button padding-x |

---

## Border Radius

| Token | Value | Usage |
|---|---|---|
| `radius/sm` | `8px` | Square icon button |
| `radius/md` | `10px` | Sidebar page button |
| `radius/pill` | `1000px` | Primary/Subtle icon button · Pill button |

---

## Stroke Width

| Token | Value | Usage |
|---|---|---|
| `stroke/0.8` | `0.8px` | — |
| `stroke/1` | `1px` | Page button bottom border |
| `stroke/1.2` | `1.2px` | Pill button border |

---

## Sizing

| Token | Value | Usage |
|---|---|---|
| `icon/sm` | `16px` | Icon inside pill button |
| `icon/md` | `20px` | Standard sidebar icon |
| `icon/lg` | `24px` | Primary icon button content, OpenAI logo |
| `btn/icon-tap` | `36px` | All icon button tap area (width × height) |
| `sidebar/item-w` | `248px` | Page button width |
| `sidebar/item-h` | `36px` | Page button height |

---

## Components

### 1. Icon Button

Three visual variants × three states. All share a `36 × 36px` tap area.

```
Variant      State     BG                         Radius
──────────   ───────   ─────────────────────────  ───────
Primary      Default   #0d0d0d (solid dark)        pill
Primary      Hover     #5d5d5d (grey/36)           pill
Subtle       Default   transparent                 pill
Subtle       Hover     rgba(143,143,143,0.2)       pill
Subtle       Pressed   rgba(13,13,13,0.05)         pill
Square       Default   transparent                 8px
Square       Hover     #e8e8e8 (grey/91)           8px
Square       Pressed   transparent                 8px
```

Icon inside is `20px` for Subtle, `24px` for Primary and Square.

---

### 2. Page Button (Sidebar Nav Item)

The sidebar conversation list item. Width is always `248px`, height `36px`.

```
State     BG                         Notes
───────   ─────────────────────────  ─────────────────────────────
Default   transparent                No bg, invisible border
Hover     rgba(13,13,13,0.05)        5% dark tint
Selected  #e8e8e8 (grey/91)          Solid light grey fill
```

- Padding: `10px` horizontal, `8px` vertical
- Gap between icon and label: `6px`
- Font: `Helvetica 14px / 20px lh`, color `#0d0d0d`
- Border radius: `10px`
- Optional icon at start (`20px`) and end (More button, `20px`)
- Bottom border is `1px solid transparent` — always present, just invisible

---

### 3. Pill Button

The action button that appears on the home screen (e.g. "Create an image").

```
State     BG                        Text color   Border
───────   ────────────────────────  ───────────  ──────────────────────────
Default   transparent               #5d5d5d      1.2px rgba(143,143,143,0.2)
Hover     rgba(13,13,13,0.05)       #000000      1.2px rgba(143,143,143,0.2)
```

- Padding: `16px` horizontal, `10px` vertical
- Gap between icon and label: `10px`
- Icon: `16px`, label: `16px / 20px lh`
- Border radius: `1000px` (full pill)

---

### 4. More Button

Inline ellipsis control that appears on hover inside a page button.

- Size: `20 × 20px`
- Default: icon dimmed
- Hover: icon at full opacity (uses `variant=24` SVG)

---

## Icon System

**Location**: `root/icon svg/variant={n}.svg` (25 icons, numbered 1–25)

**Sizes used**:
- `24px` viewBox: variants 1, 14 (large, used in icon buttons)
- `16px` viewBox: variants 5, 16 (small, used in pill button)
- `20px` viewBox: all others (standard sidebar use)

**Identified icons**:

| Variant | Name | Size | Where used |
|---|---|---|---|
| 1 | `chatgpt-voice` | 24px | Primary icon button |
| 2 | `add-person` | 20px | Subtle icon button |
| 5 | `(small icon)` | 16px | — |
| 14 | `openai-logo` | 24px | Square icon button |
| 16 | `(small icon)` | 16px | — |
| 20 | `add-person-alt` | 20px | Subtle icon button (alt state) |
| 24 | `new-project` | 20px | Page button start icon, More button hover |

Variants 3–4, 6–13, 15, 17–19, 21–23, 25 are as yet unnamed — update the `icon.variants` entries in `design-tokens.json` as you identify them in Figma.

**Usage pattern**: Import as inline `<img src="/root/icon svg/variant=N.svg" />` or move to `public/icons/` and reference as `/icons/variant-N.svg`.

---

## Interaction States Summary

Every interactive element follows the same 3-step pattern:

```
Default  →  no background fill
Hover    →  faint bg (grey/5 5% or grey/56 20%)
Active   →  solid bg (grey/91) or deeper tint
```

No color transitions between states — just opacity/fill changes. Animation (if any) is purely easing on the background property.

---

## What's NOT in this design system

- No shadows / elevation
- No hue-based color (zero blues, greens, reds — all greyscale)
- No bold or medium font weight
- No text sizes below 14px or above 16px
- No border radius values other than 8, 10, 1000px
