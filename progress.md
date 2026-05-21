Original prompt: Create a complete React + Vite + TypeScript web game project called soil-guardians. The game is "Soil Guardians: Restore the Hidden Wildlife", a poster-ready educational click-based restoration simulator showing the chain Organic Waste -> Bio-complete Compost -> Living Soil -> Native Plants -> Insects -> Wildlife Return -> Biodiversity Sanctuary. Use React, Vite, TypeScript, Tailwind CSS, no backend/database/auth, responsive desktop-first layout, six polished screens, one App state object, reusable UI components, and make sure npm install/npm run dev/npm run build work.

Progress notes:
- Started from an empty workspace at /Users/mobashirsifat/Desktop/soil-guardians.
- Visual thesis: premium ecological dashboard, forest green depth, white/off-white glass panels, emerald actions, restrained soil-brown accents.
- Interaction thesis: click-based tuning and unlocks, map/tab navigation, visible state progression from compost to sanctuary.
- Added React + Vite + TypeScript + Tailwind CSS project files, reusable UI components, six screen implementations, and the single App state object.
- npm install completed successfully with 0 vulnerabilities.
- npm run build completed successfully.
- First screenshot found a hidden start-button label and overly aggressive advanceTime hook; fixed both.
- Tightened the start screen into a first-viewport poster layout so the primary action is visible without scrolling.
- Added screen-change scroll reset and no-wrap action buttons after screenshot review.
- Verification: npm run build passes; required web-game client captured screenshot/state; full Playwright click-through completed with no console or page errors and reached day 17 sanctuary state with 6 soil organism groups, 5 wildlife groups, and all 5 habitat upgrades.
- Added .gitignore for node_modules, dist, output, and local logs.
- Replaced prototype effects with the requested full game loop: exact initial values, compost action effects, optimal/stalled Wait One Day rules, soil organism unlock thresholds, gated habitat upgrades, wildlife unlock thresholds, wildlife survey scoring, feedback messages, and final "Biodiversity Sanctuary Restored" state.
- Verification: npm run build passes after full game logic. Browser loop reached day 9, wildlifeScore 90, all six organisms, all six wildlife groups, and all six habitat upgrades with no console errors.

TODO:
- No known implementation TODOs.
