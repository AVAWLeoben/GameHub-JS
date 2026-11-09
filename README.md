# Hungry Hedgie — Storybook Art Pack

10 original illustrations: 1 empty burrow background and 9 transparent furniture/decor sprites.

- `assets/hungryHedgie/home/`: optimized WebP files, with the existing names used by Hungry Hedgie v3.6 for eight of the items. Two additional assets are `basket_upgrade.webp` and `bunting.webp`.
- `PNG_Masters/`: full-resolution original generated PNG files.
- `ASSET_PREVIEW.jpg`: visual index.
- `asset_manifest.json`: filenames and resolutions.

To install, copy `assets/` into the root of your GameHub-JS repo, merging with the existing assets directory. This pack contains **artwork only**, not a new HTML file. The earlier Hungry Hedgie v3.6 HTML already references the eight original home filenames, but may need adjustments to displayed sprite sizes and positions to make the new illustrations fit well. The two extra sprites are not used until explicitly wired into the game. Keep your original sprites in `assets/hungryHedgie/` unchanged.

PNG masters may be used for editing. Keep transparency when modifying the furniture art. WebP versions are optimized for loading in landscape browsers.
