## Project requirements

The goal is to create a Material UI theme that reduce Material Design's complexity.

- The visual design of the theme (NOT the structure) should have a modern look and minimalism like Shadcn UI.

## Material UI documentation

When working with Material UI libraries, aka `@mui/material` and `@mui/icons-material`, ALWAYS:

- Refer to the @material-ui/llms.txt file. The file and folders contain the documentation for the Material UI libraries.
- DO NOT use deprecated APIs.

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
