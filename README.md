# Hungry Hedgie — A Cosy Home for Four (first implementation pass)

## Installation

**Upload/merge the contents of `games/` and `assets/` into the root of `GameHub-JS`, preserving their folder structure.** Specifically replace `games/hungryHedgie.html` and add the new `assets/hungryHedgie/home/` directory (8 tiny WebP art assets). Retain all existing `assets/hungryHedgie/*.png`, `assets/retBut.png`, `assets/retBut_clicked.png` and `index.html`. No other games are modified. The HTML file is self-contained except for Phaser 3.90 CDN and image files.

The assets have illustrated SVG source files under `art_source/` in the source archive. Those SVG files are **not required at runtime**; upload WebPs under `assets` instead. This first art pack was drawn as editable vector illustrations because the proposed generated illustrations were unavailable. The game retains all original PNG character and exterior sprites and layers the new furniture separately.

## Included now

* One 800×600 Phaser/CANVAS logical scene (no compatibility JavaScript, no secondary coordinate transform).
* Six chapters: 6/3, 8/4, 8/4, 10/5, 10/5, 12/6 (goal/carry capacity). Two trips per chapter.
* A permanent interior scene: tap the burrow **when the basket is empty**, or enter it automatically after a berry delivery.
* Two-phase furniture: a partly built piece after the first basket, a completed piece after the second. Furniture persists in later chapters.
* Larger bed, two little beds, table, pantry, lantern, family picnic; partner after chapter 2, two children after chapter 3. Family members reuse the project's hedgie sprite at different sizes and have distinctive little accessories; separate authored character PNGs are a later art pass.
* Two reversible quilt colours, original GameHub PNG Home icon and sound/pause controls, sound toggle.
* Existing slow patrolling grumpy hedgehog, soft question mark warning, 0.7s bump, 3s immunity, no lost berries, **Calm forest** option on welcome/pause.
* Stage progression, persistent completed home, relaxed repeatable picking after chapter 6.
* Validated `GameHub.hungryHedgie.v3` saves; migration from JS `hedgie-js-v1` and Python/Pygbag `GameHub.hungryHedgie.v2` saved values where accessible.

## Still planned

* New separately illustrated partner/kid hedgehog sprites matching the actual project character art, character animation and a more interactive family interior.
* Additional forest composition using the shared pine/broadleaf PNG trees, a refined patrol loop, torch/dusk lighting, celebratory finale and audio polish.
* Real iPhone/iPad with **the repository's original PNG assets** testing. Controlled browser checks use original file paths but cannot retrieve your repository artwork from this offline runtime. The WebP additions have been rendered and loaded in the browser test harness.

## Quality checks completed

* JavaScript syntax.
* Menu → collecting → first partial delivery → interior → second delivery → unlocked bed → next chapter.
* All six chapter transitions, family unlock count, final scene and repeat play; saved progress restore.
* Legacy three-stage JS migration (stage 2 → new chapter 4). Missing-WebP fallback.
* Layout bounds and canvas input correspondence at 1024×768, 844×390, 1180×820 and 600×900; iPhone portrait rotation prompt and desktop portrait access.
* Browser checks used a simulated Phaser shell; live CDN Phaser and on-device touch remain unverified.

Tip: To bypass a cached HTML response after uploading to GitHub Pages, append `?v=3` to the game URL.
