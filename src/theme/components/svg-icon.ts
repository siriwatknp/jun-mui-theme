import type { ThemeOptions } from "@mui/material/styles";

export const svgIconTheme: ThemeOptions["components"] = {
  MuiSvgIcon: {
    styleOverrides: {
      root: ({ theme }) => ({
        color: `var(--Icon-color, ${(theme.vars || theme).palette.text.icon})`,
        variants: [
          {
            props: { fontSize: "small" },
            style: {
              fontSize: "var(--Icon-size, 1.25rem)", // 20px
            },
          },
          {
            props: { fontSize: "medium" },
            style: {
              fontSize: "var(--Icon-size, 1.5rem)", // 24px
            },
          },
          {
            props: { fontSize: "large" },
            style: {
              fontSize: "var(--Icon-size, 2.1875rem)", // 35px
            },
          },
        ],
      }),
    },
  },
};
