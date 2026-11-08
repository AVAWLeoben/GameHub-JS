# GameHub — eight JavaScript ports

Copy the `games` directory from this ZIP into the repository root, replacing the corresponding empty HTML files. The existing index.html already links to these filenames.

## Included games

| File | Gameplay |
| --- | --- |
| wasteHog.html | Automatic platform jumping, touch steering, gift collection, height and best score |
| hungryHedgie.html | Berry collection and delivery; bed, garden and picnic progression; saved basket and stage |
| wasteBird.html | Tap-to-flap flight, pipe gaps, coins, incoming rockets and saved best score |
| tankDuel.html | Local two-player artillery; free/coin workshops, bodies, weapons, upgrades, fuel, wind and destructible terrain |
| wastePizza.html | Recipe matching, ingredient placement and removal, completed orders and gradually larger recipes |
| wasteKart.html | One to four local players, original track catalog, route drawing, one/three laps, four-track cups, reaction starts, power-ups, hazards and best-run ghosts |
| wasteGOL.html | Conway's Game of Life; paint cells, run/pause, single-step, speed, glider and random seeds |
| wastePong.html | Solo against the computer or local two-player Pong, first to seven |

Each HTML is self-contained apart from the Phaser CDN and the existing game assets. No Python runtime, npm build, or additional shared JavaScript file is required.

## Existing files to retain

- `index.html` at the repository root.
- `assets/retBut.png` and `assets/retBut_clicked.png`.
- The existing `assets/wasteHog`, `assets/hungryHedgie`, `assets/wasteBird`, and `assets/wastePizza` artwork.
- The shared coin sprite in `assets/wastePilot/coin/star coin rotate 1.png`.
- The complete `assets/WasteKart` directory, including catalog.json, geometry JSON, track images, masks, hazard manifests and sprites. Preserve capitalization exactly.
- `assets/tank_game_assets`, including rig/tank_rig.json and all referenced part sprites. Tank Duel also supports the older root-level `tank_game_assets` location.

The assets are not included in this ZIP. All game references are relative, including the Home link (`../index.html`). Serve through GitHub Pages or a local web server: WasteKart and Tank Duel load JSON, so opening the HTML via file:// is not a supported way to test those asset loads. Phaser 3.90.0 loads from cdnjs and requires an internet connection.

## Touch and controls

The Home PNG, pause button and game controls are inside each game's canvas. Games pause when the tab loses focus. Layout checks cover landscape and portrait iPad proportions; artwork with a fixed map aspect ratio keeps that aspect ratio.

- Hog: hold the left/right half; keyboard arrows or A/D.
- Hedgie: tap/drag a destination; arrows or WASD also work. Berries are safe when the neighbour bumps you.
- Bird: tap anywhere, Space or Up to flap.
- Pizza: choose a topping, tap the pizza, or drag an existing topping off to remove it. The counts must match exactly, including zero for unrequested ingredients.
- Tank Duel: pass the tablet between turns. Drag over the battlefield to aim, adjust angle/power with buttons, hold movement buttons, then Fire. Keyboard arrows aim/move; Space fires.
- Kart: each player draws their route in turn. During countdown and racing, each player uses their own coloured button for the reaction start and collected power-ups. A star does not prevent falling. Fall recovery moves the kart forward to the next safe point on its drawn route after a delay.
- Life: pause to paint; each gesture consistently paints or erases rather than repeatedly toggling the same cell.
- Pong: solo controls the right paddle; two-player mode assigns each touch to its starting half. Keyboard arrows control the right paddle; W/S controls the left in two-player mode.

## Porting and validation notes

These are JavaScript adaptations, not pixel-identical reproductions of the Python rendering. Menus, touch targets and transitions have been rebuilt. Bird obstacle spacing, Hog platform generation and several Kart hazard timing/visual effects are adapted. Tank Duel can show procedural tanks if its optional rig artwork cannot load.

WasteKart reads the original authored track data and implements the train, cactus lanes, gorge logs, comet impacts/craters and ramp jump, phased ghosts, curious fairies, spiral/strike cats and rocket chompers. Track masks govern road speed and falling; overpass drawing uses geometry/layer data. Special hazard animations and rescue effects are simpler than in the Python version. Existing Python saves are not migrated; browser saves use new keys.

Verified in this environment:

- Syntax of all eight final HTML inline scripts.
- Render paths and control bounds at four iPad-like aspect ratios, using a canvas harness.
- Pause-screen input isolation and menu/result transitions.
- Life oscillator rules; exact recipe counts; Hedgie pickup/delivery and progression; Hog landing; Bird collisions; Pong victory.
- Tank damage, crater deformation, purchase affordability and payouts.
- Kart route drawing, countdown reactions, race completion, cup results, and stars still allowing falls, using generated fixtures.

Not verified here: browser/Phaser integration, real iPad touch performance, actual artwork rendering or the complete real-world hazard manifests. Those asset packs were not attached. A deployment playtest of each game, particularly the sixteen Kart tracks and tank rig, is still needed before treating these ports as release-tested replacements.
