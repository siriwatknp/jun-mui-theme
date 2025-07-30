import type { ThemeOptions } from "@mui/material/styles";

export const selectTheme: ThemeOptions["components"] = {
  MuiSelect: {
    defaultProps: {
      variant: "outlined",
    },
    styleOverrides: {
      select: {
        "&.MuiInputBase-input": {
          paddingRight: 32,
        },
        "&.MuiOutlinedInput-input": {
          padding: "8px 14px",
        },
        "&.MuiFilledInput-input": {
          padding: "25px 12px 8px",
        },
        variants: [
          {
            props: { size: "small" },
            style: {
              "&.MuiOutlinedInput-input": {
                padding: "4px 14px",
              },
              "&.MuiFilledInput-input": {
                padding: "21px 10px 4px",
              },
            },
          },
        ],
      },
      icon: ({ theme }) => ({
        color: (theme.vars || theme).palette.text.secondary,
        right: 8,
        transition: theme.transitions.create(["transform"], {
          duration: theme.transitions.duration.shorter,
        }),
      }),
      iconOpen: {
        transform: "rotate(180deg)",
      },
    },
  },
  MuiMenuItem: {
    styleOverrides: {
      root: ({ theme }) => ({
        fontSize: theme.typography.body2.fontSize,
        padding: "6px",
        borderRadius: 4,
        margin: 0,
        transition: theme.transitions.create(["background-color"], {
          duration: theme.transitions.duration.shortest,
        }),
        "&:hover": {
          backgroundColor: (theme.vars || theme).palette.action.hover,
        },
        "&.Mui-selected": {
          backgroundColor: (theme.vars || theme).palette.action.selected,
          "&:hover": {
            backgroundColor: (theme.vars || theme).palette.action.selected,
          },
        },
        "&.Mui-focusVisible": {
          backgroundColor: (theme.vars || theme).palette.action.focus,
        },
        variants: [
          {
            props: { dense: true },
            style: {
              padding: "4px 8px",
            },
          },
        ],
      }),
    },
  },
  MuiMenu: {
    defaultProps: {
      PaperProps: {
        elevation: 0,
        variant: "outlined",
      },
    },
    styleOverrides: {
      paper: ({ theme }) => ({
        marginTop: 4,
        borderRadius: 8,
        border: `1px solid ${(theme.vars || theme).palette.divider}`,
      }),
      list: {
        padding: "6px",
        display: "flex",
        flexDirection: "column",
        gap: "4px",
      },
    },
  },
};
