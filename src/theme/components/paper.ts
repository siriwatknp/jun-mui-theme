import type { ThemeOptions } from "@mui/material/styles";

export const paperTheme: ThemeOptions["components"] = {
  MuiPaper: {
    styleOverrides: {
      root: ({ theme }) => ({
        backgroundImage: "none",
        variants: [
          {
            props: { variant: "outlined" },
            style: {
              border: `1px solid ${(theme.vars || theme).palette.divider}`,
              boxShadow: "none",
            },
          },
          {
            props: { variant: "elevation" },
            style: {
              boxShadow: theme.shadows[1],
            },
          },
        ],
      }),
      rounded: {
        borderRadius: 8,
      },
    },
  },
  MuiPopover: {
    styleOverrides: {
      paper: ({ theme }) => ({
        border: `1px solid ${(theme.vars || theme).palette.divider}`,
        boxShadow: theme.shadows[8],
        backgroundImage: "none",
      }),
    },
  },
};