# 🌱 Soil Guardians: Restore the Hidden Wildlife

An educational click-based restoration simulator that teaches players how compost, soil microorganisms, native plants, and habitats work together to support wildlife recovery.

**Core message:** Healthy soil creates healthy habitats. Healthy habitats bring wildlife back.

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| React 19 | UI framework |
| TypeScript | Type safety |
| Vite 6 | Build tool & dev server |
| Tailwind CSS 4 | Utility-first styling |
| Lucide React | Icon library |

No backend, database, or authentication required. Everything runs in the browser.

---

## How to Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Gameplay Summary

Players follow the restoration chain from waste to wildlife across six screens:

### 1. Start Screen
Hero introduction with the project thesis, three feature cards (Compost Simulator, Soil Life Encyclopedia, Wildlife Habitat Restoration), and the ecosystem chain.

### 2. Restoration Map
Six connected zones showing restoration progress:
- **Compost Zone** → balance heat, water, oxygen, microbes
- **Soil Life Lab** → discover hidden organisms
- **Native Plant Garden** → install flowering species
- **Pollinator Patch** → create insect habitat
- **Bird Habitat** → build food webs for birds
- **Biodiversity Sanctuary** → the complete ecosystem

### 3. Compost Simulator
Scientific control panel with a circular quality gauge, temperature/moisture/oxygen/microbial activity metrics, optimal range indicators, and five compost actions.

### 4. Soil Life Encyclopedia
Six collectible organism cards (Bacteria, Fungi, Protozoa, Earthworm, Beetle, Springtail) that unlock as soil conditions improve. Each includes a real science fact.

### 5. Habitat Builder
Six upgrade cards (Native Flowers, Shrub Layer, Tree Sapling, Insect Hotel, Micro Pond, Leaf Litter Zone) with requirements, effects, and build actions.

### 6. Wildlife Return
Final sanctuary dashboard with biodiversity score, before/after visual comparison, six wildlife species cards (Butterfly, Bee, Ladybird, Frog, Sparrow, Hedgehog), and a celebration card when the sanctuary is restored.

---

## Science Flow

The game teaches this restoration chain:

```
Organic Waste → Bio-complete Compost → Living Soil → Native Plants → Insects → Wildlife Return
```

---

## Poster Mode

Click the **Poster** button in the header to activate Poster Mode. This hides interactive controls and shows a clean, presentation-ready layout ideal for screenshots and science competition posters.

### Recommended screenshot sections:

1. **Start Screen** — Hero with title, tagline, and feature cards
2. **Restoration Map** — Six zones with Science Flow and Innovation panel
3. **Compost Simulator** — Ring gauge and metrics dashboard
4. **Soil Life Encyclopedia** — Organism cards with science facts
5. **Habitat Builder** — Upgrade cards with metrics summary
6. **Wildlife Return** — Score, before/after, wildlife cards, and celebration

### Poster use tips:
- Use Poster Mode to remove buttons and controls
- Each screen is designed to be readable at poster scale
- The Start Screen works as a project introduction panel
- The Restoration Map with Science Flow shows the methodology
- The Sanctuary screen shows the result and expected impact

---

## Educational Content

| Section | Message |
|---------|---------|
| **Problem** | Wildlife conservation often focuses on visible animals, while the hidden foundation of biodiversity — soil life — is ignored. |
| **Solution** | Soil Guardians teaches players how compost, microorganisms, native plants, and habitats work together to support wildlife recovery. |
| **Innovation** | This game connects soil microbiology, composting, habitat restoration, and wildlife protection in one interactive public science product. |
| **Expected Impact** | Improve public understanding of biodiversity. Promote organic waste recycling. Encourage youth participation in conservation. Connect digital education with real-world ecological action. |

---

## Project Structure

```
soil-guardians/
├── index.html          # Entry point with Google Fonts
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
├── vite.config.ts      # Vite build configuration
├── src/
│   ├── main.tsx        # React root mount
│   ├── App.tsx         # All components, screens, and game logic
│   ├── styles.css      # Design system and animations
│   └── vite-env.d.ts   # Vite type declarations
└── dist/               # Production build output
```

---

## License

Educational use. Built as a public science game prototype for wildlife conservation education.
