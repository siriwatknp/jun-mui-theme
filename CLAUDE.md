## Project requirements

The goal is to create a Material UI theme that reduce Material Design's complexity.

- The visual design of the theme (NOT the structure) should have a modern look and minimalism like Shadcn UI.

## Material UI documentation

When working with Material UI libraries, aka `@mui/material` and `@mui/icons-material`, ALWAYS:

- Refer to the @material-ui/llms.txt file. The file and folders contain the documentation for the Material UI libraries.
- DO NOT use deprecated APIs.

## Theme aesthetics

This theme is best for opting out of the default Material design and still let users override the tokens with their own colors.

The theme will align with Shadcn UI vibe, with primary color of #000000 for schematic look (great for prototyping apps).

The theme must work with any Material UI projects, meaning it can be used or removed at anytime.

## Theme customization best practices

- Avoid setting explicit `height` on components - let the padding and line-height determine the natural height
- Use `variants` array in `styleOverrides.root` instead of deprecated size-specific slots
- Use callback functions with `theme.vars` instead of raw CSS variable strings for type safety
- Place the callback at the component slot level (e.g., `root`) so all nested properties can access the theme:

```typescript
// ❌ Not type-safe
styleOverrides: {
  root: {
    color: "var(--mui-palette-primary-main)",
  }
}

// ✅ Type-safe with callback at slot level
styleOverrides: {
  root: ({ theme }) => ({
    color: theme.vars.palette.primary.main,
    variants: [
      {
        props: { variant: "outlined" },
        style: {
          borderColor: theme.vars.palette.primary.main, // theme accessible here too
        },
      },
    ],
  }),
}
```

### Theming components

- ALWAYS create a separate file (kebab-case) for each component's theme customization with this template:

  ```typescript
  // src/theme/components/button.ts
  import type { ThemeOptions } from "@mui/material/styles";

  export const buttonTheme: ThemeOptions["components"] = {
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.vars.palette.primary.main,
        }),
      },
    },
  };
  ```

  However, if the customization does not use the `theme` object, do not use the callback function.

  ```typescript
  // src/theme/components/select.ts
  import type { ThemeOptions } from "@mui/material/styles";

  export const selectTheme: ThemeOptions["components"] = {
    MuiSelect: {
      styleOverrides: {
        select: {
          "&.MuiInputBase-input": {
            paddingRight: 32,
          },
        },
      },
    },
  };
  ```

- DO NOT import other the main theme file in the component theme file. To get the theme, use the callback function as the value of each slot of the `styleOverrides` object.
- When using `theme.vars` for getting `palette|shape`, always fallback to the theme like this `(theme.vars || theme).*`.
- For typography properties, use `theme.typography` directly (NOT `theme.vars.typography` or `(theme.vars || theme).typography`).
- Finally, there should be no type errors after created/updated the component theme file.

## TypeScript integration

When adding custom properties to Material UI theme tokens, you must extend the TypeScript interfaces using module augmentation:

```typescript
declare module "@mui/material/styles" {
  interface PaletteColor {
    customProperty?: string;
  }

  interface SimplePaletteColorOptions {
    customProperty?: string;
  }
}
```

This prevents TypeScript errors and provides proper type checking for custom theme properties.

## Screenshots

Browser screenshots are saved to the `screenshots/` directory in the project root.

## Development

DO NOT ask me to run the project, I will do it myself.
