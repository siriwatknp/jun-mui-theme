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

## Screenshots

Browser screenshots are saved to the `screenshots/` directory in the project root.
