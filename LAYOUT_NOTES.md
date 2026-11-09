# GameHub JavaScript — Python layout restoration

## Install

Copy `index.html`, `games/*.html`, and `games/*.js` into the existing GameHub-JS repository, replacing the current files. **Keep the repository's existing `assets/` folder**; this archive does not contain game art or other assets, just as the submitted JS archive did not.

Run the site over HTTP(S) (e.g. GitHub Pages) rather than opening the HTML files directly, because Phaser and several games load image/JSON resources by URL.

## Changes

- **Menu** (`index.html`): reverted the responsive HTML card grid to the original `main.py` geometry: 800 × 600 viewport; five image buttons per row at x=50, 200, 350, 500, 650; rows start at y=200 and repeat every 200px. The title stays fixed while native vertical touch scrolling moves the buttons. The original icon files, pressed images, game ordering, and game links remain.
- **All populated game pages**: landscape-only orientation overlay, iPhone/iPad viewport and safe-area scaling; controls use the same coordinate projection as the game canvas. No page stretches its game world to fill a phone's wide aspect ratio.
- **20 games**: `native-stage.js` keeps all external DOM controls, game dialogs, HTML status and Phaser canvas inside one logical 800 × 600 stage, uniformly scaled to the real display. It fixes the fixed-position controls that previously floated outside the centered canvas on wide screens.
- **7 originally generic canvas ports**: fixed their virtual draw size to 1000 × 750 (4:3) instead of recalculating height from the phone screen. This prevents the game fields from being crushed vertically on landscape phones.
- **WastePilot**: likewise uses a fixed 4:3 logical projection, keeping cockpit, menu, HUD and controls from being displaced by the physical screen ratio.
- **WasteRace and WasteTeroids**: returned to their original 800 × 600 layout using Phaser FIT rather than resize/reflow.
- **WasteMatch and WasteSort**: removed the additional 96px HTML header from the actual playfield height; the Home control is in the native top-left position and the game uses the full 600 logical pixels.
- **WastePizza**: restored the original 800 × 600 arrangement from `wastePizza.py`: 600×600 pizza at (0,0), recipe (600,0) 200×250, cutting board (591,266) 218×368, ingredient buttons starting at (611,286), Home (10,10), and Clear (10,500). Removed the side-by-side responsive rearrangement. Drag/drop and order-completion code are retained.
- **WastePaint**: restored the `wastePaint.py` positions: art canvas (125,35) 540×420 with 4px frame, left Home/Save/Clear, brushes at x690 with source Y coordinates, and 11 colours along y500.
- **WasteTrain**: restored a single scaled 800×600 stage with the 70px Python topbar and a 530px game region rather than a browser-fixed 80px header which crowded the game on mobile.

## Limitations / verification

- The supplied JS archive contained **zero-byte `climbingHog.html` and `wasteTacToe.html`**. They remain unchanged: there is no JavaScript layout or gameplay in those files to restore. `GUI.html` and `helper.html` were also empty. Completing those ports is separate from this layout-only pass.
- All 25 non-empty inline HTML scripts passed Node.js syntax checks. The WastePizza native layout and drag/drop flow passed a separate Node.js assertion test.
- Browser DOM layout probes confirmed that the menu, paint stage, railway stage and native game stages fit and align at 844×390, 1024×768 and 1194×834 landscape sizes; 390×844 portrait is gated by a rotation overlay.
- Full visual/gameplay regression checks with game art and the live Phaser CDN were **not available** in this sandbox, because the submitted archives did not contain `assets/` and browser navigation was blocked. This is a source/geometry restoration, not a claim that all existing JS gameplay reproduces the Python game exactly.
