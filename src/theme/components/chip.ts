import type { ThemeOptions } from "@mui/material/styles";

export const chipTheme: ThemeOptions["components"] = {
  MuiChip: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: 6,
        fontWeight: 400,
        fontSize: theme.typography.body2.fontSize,
        variants: [
          {
            props: { variant: "outlined", color: "primary" },
            style: {
              color: (theme.vars || theme).palette.primary.text,
            },
          },
          {
            props: { variant: "outlined", color: "secondary" },
            style: {
              color: (theme.vars || theme).palette.secondary.text,
            },
          },
          {
            props: { variant: "outlined", color: "success" },
            style: {
              color: (theme.vars || theme).palette.success.text,
            },
          },
          {
            props: { variant: "outlined", color: "error" },
            style: {
              color: (theme.vars || theme).palette.error.text,
            },
          },
          {
            props: { variant: "outlined", color: "warning" },
            style: {
              color: (theme.vars || theme).palette.warning.text,
            },
          },
          {
            props: { variant: "outlined", color: "info" },
            style: {
              color: (theme.vars || theme).palette.info.text,
            },
          },
        ],
      }),
      icon: {
        fontSize: "1.125rem",
        variants: [
          {
            props: { size: "small" },
            style: {
              fontSize: "1rem",
            },
          },
        ],
      },
      deleteIcon: ({ theme }) => ({
        variants: [
          {
            props: { color: "default" },
            style: {
              color: (theme.vars || theme).palette.text.icon,
              "&:hover": {
                color: (theme.vars || theme).palette.text.secondary,
              },
            },
          },
        ],
      }),
    },
  },
};
