# GameHub JS — single-scale landscape layout

## Install

Upload `index.html` and `games/*.html` to the GameHub-JS repository, retaining the original `assets/` folder. Delete `games/native-stage.js` and `games/layout-compat.js` from the repository; no pages in this archive reference them. Host over HTTPS, e.g. GitHub Pages, because game art and game JSON are fetched by URL.

## Why the screen was cropped

The previous compatibility pass inserted an 800×600 HTML stage, scaled that stage with a CSS `transform: scale(...)`, **and** allowed Phaser to apply `Scale.FIT` to its own 800×600 (or 1000×750) game canvas. The visible view was therefore scaled twice. This was particularly visible in the Memory Game player chooser.

## What changed

- **20 other playable games:** Removed the two injected layout scripts. Each HTML file provides a responsive, centered **4:3** landscape playfield and keeps its own original Phaser `Scale.FIT` configuration. Phaser is the **only** scaler of the game canvas. Safe-area insets and orientation feedback are handled by each page's own CSS and markup.
- **WastePizza:** Preserved its working gameplay and responsive layout as-is, with the redundant `layout-compat.js` reference removed.
- **WastePaint:** The 800×600 Python toolbar/palette layout now uses proportional CSS positioning. The 548×428 drawing canvas sits at its original relative location with native Phaser fitting. No transformed 800×600 wrapper remains.
- **WasteTrain:** The 70px source-equivalent toolbar and the 800×530 railway scene share one CSS-proportional 4:3 frame. HTML buttons, zoom controls and the train canvas keep aligned positions.
- **Main menu:** Preserves five icons per row and vertical scroll, now using native CSS proportional positioning rather than the previous custom JS `scale()` implementation.
- **DOM overlays:** Home and Pause buttons and result/settings panels remain in the same playfield as Phaser, with responsive sizes and no external viewport-scaling script.

## Test scope

- All 23 non-empty game HTML files passed JavaScript syntax verification with Node.js.
- Static checks confirm there are no references to `native-stage.js`, `layout-compat.js` or the old stage-scale properties.
- Markup structure has been inspected: every nonempty game contains a coherent single responsive viewport and its Phaser parent remains in the expected location.
- The intended 4:3 fitting geometry is 520×390 at 844×390, 1024×768 at 1024×768, and 1112×834 at 1194×834 (prior to safe-area adjustments).
- **Not browser-playtested against real assets.** The supplied zip contained no assets. Headless browser launching was unavailable here; verify touch and presentation on real iOS Safari and Android Chrome. This is a source-level correction, not a claim of full gameplay QA.

## Not included

The supplied JavaScript zip had no implementation in `climbingHog.html` and `wasteTacToe.html`; `GUI.html` and `helper.html` are also empty. These four are left untouched, as inventing replacement gameplay would go beyond the layout fix.
