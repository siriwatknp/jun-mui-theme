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
              // border: `1px solid ${(theme.vars || theme).palette.divider}`,
            },
          },
        ],
      }),
      rounded: {
        borderRadius: 8,
      },
    },
  },
};
