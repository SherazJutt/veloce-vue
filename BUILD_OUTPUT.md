# Build Output Structure

## Clean and Simple Package Structure

The build output is now organized in a clean, flat structure at the root level with supporting type files in subdirectories:

```
veloce/
├── index.js              # Main entry (all exports)
├── index.d.ts            # Main types
├── ui.js                 # UI components entry
├── ui.d.ts               # UI types
├── icons.js              # Icons entry
├── icons.d.ts            # Icons types
├── config.js             # Config entry
├── config.d.ts           # Config types
├── styles.css            # Compiled Tailwind styles ✅
├── package.json          # Package configuration
├── *.js.map              # Source maps
├── components/           # Supporting component types
│   └── icon/
│       ├── index.d.ts
│       ├── icons.d.ts
│       └── Icon.vue.d.ts
├── ui/                   # UI component types
│   ├── accordion/
│   │   ├── index.d.ts
│   │   └── *.vue.d.ts
│   └── button/
│       ├── index.d.ts
│       └── *.vue.d.ts
└── utils/                # Utility types
    └── config.d.ts
```

## What's Built

### ✅ Generated Files

- **JavaScript bundles** - ES modules for all entry points
- **TypeScript declarations** - Full type support for all public APIs
- **CSS styles** - Compiled Tailwind CSS (renamed to `styles.css`)
- **Source maps** - For debugging

### ✅ Entry Points

1. **Main (`index.js`)** - Everything in one import
2. **UI (`ui.js`)** - Only UI components
3. **Icons (`icons.js`)** - Only icons with full TypeScript autocomplete
4. **Config (`config.js`)** - Only configuration

## Usage

### Import Styles

```typescript
import "veloce/styles.css";
```

### Import Components

```typescript
// Option 1: Main entry (everything)
import { Button, Icon, config } from "veloce";

// Option 2: Specific subpaths (better tree-shaking)
import { Button } from "veloce/ui";
import { Icon, type Icons } from "veloce/icons";
import { config } from "veloce/config";

// Full TypeScript autocomplete for icons
const iconName: Icons = "check";
// Type: "alert" | "check" | "chevron-down" | "close" | "hamburger" | "loading"
```

## Package Configuration

### Exports Map

```json
{
  ".": {
    "types": "./index.d.ts",
    "import": "./index.js",
    "default": "./index.js"
  },
  "./ui": {
    "types": "./ui.d.ts",
    "import": "./ui.js",
    "default": "./ui.js"
  },
  "./icons": {
    "types": "./icons.d.ts",
    "import": "./icons.js",
    "default": "./icons.js"
  },
  "./config": {
    "types": "./config.d.ts",
    "import": "./config.js",
    "default": "./config.js"
  },
  "./styles.css": "./styles.css"
}
```

## Files Included in Package

Only essential files are published:

- Main entry files (`.js`, `.d.ts`)
- Subpath entry files (`ui.*`, `icons.*`, `config.*`)
- Styles (`styles.css`)
- Source maps (`*.js.map`)
- Supporting type definitions in subdirectories

## Build Process

1. **Vite builds** all entry points as ES modules
2. **vite-plugin-dts** generates TypeScript declarations
3. **Build script**:
   - Renames CSS file to `styles.css`
   - Moves type definitions to root for cleaner structure
   - Creates optimized `package.json`

## Benefits

✅ **Clean Structure** - Flat root with organized subdirectories
✅ **Full Types** - TypeScript support for all APIs
✅ **Styles Included** - Ready-to-use CSS ✅
✅ **Tree-shakeable** - Import only what you need
✅ **Small Bundle** - No internal implementation files
✅ **Simple Imports** - Clear, intuitive import paths
