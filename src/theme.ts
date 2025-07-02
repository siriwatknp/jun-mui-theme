import { createTheme } from "@mui/material/styles";

// Augment the palette to include custom 'text' property
declare module "@mui/material/styles" {
  interface PaletteColor {
    text?: string;
  }

  interface SimplePaletteColorOptions {
    text?: string;
  }
}

const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: "#000",
    },
    secondary: {
      main: "rgb(142, 142, 147)", // systemGray
      text: "rgb(108, 108, 112)", // systemGray increased contrast
    },
    success: {
      main: "rgb(52, 199, 89)", // green
      text: "rgb(0, 137, 50)", // green increased contrast
      contrastText: "#fff",
    },
    error: {
      main: "rgb(255, 56, 60)", // red
      text: "rgb(233, 21, 45)", // red increased contrast
    },
    warning: {
      main: "rgb(255, 204, 0)", // yellow
      text: "rgb(161, 106, 0)", // yellow increased contrast
    },
    info: {
      main: "rgb(0, 136, 255)", // blue
      text: "rgb(30, 110, 244)", // blue increased contrast
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          minWidth: "unset",
          textTransform: "capitalize",
          variants: [
            {
              props: { size: "small" },
              style: {
                padding: "4px 12px",
                lineHeight: "20px",
              },
            },
            {
              props: { size: "medium" },
              style: {
                padding: "8px 16px",
                lineHeight: "20px",
              },
            },
            {
              props: { size: "large" },
              style: {
                padding: "12px 24px",
                lineHeight: "24px",
              },
            },
            // Adjust padding for outlined buttons to compensate for border
            {
              props: { variant: "outlined", size: "small" },
              style: {
                padding: "3px 12px",
                lineHeight: "20px",
              },
            },
            {
              props: { variant: "outlined", size: "medium" },
              style: {
                padding: "7px 16px",
                lineHeight: "20px",
              },
            },
            {
              props: { variant: "outlined", size: "large" },
              style: {
                padding: "11px 24px",
                lineHeight: "24px",
              },
            },
            // Subtle border color for outlined primary buttons
            {
              props: { variant: "outlined", color: "primary" },
              style: {
                borderColor: `color-mix(in srgb, ${theme.vars.palette.primary.main} 28%, transparent)`,
              },
            },
            {
              props: { variant: "outlined" },
              style: {
                "& .MuiTouchRipple-root": {
                  inset: "-1px",
                },
              },
            },
            // Use text token for non-contained buttons
            {
              props: { variant: "text", color: "secondary" },
              style: {
                color: theme.vars.palette.secondary.text,
              },
            },
            {
              props: { variant: "text", color: "success" },
              style: {
                color: theme.vars.palette.success.text,
              },
            },
            {
              props: { variant: "text", color: "error" },
              style: {
                color: theme.vars.palette.error.text,
              },
            },
            {
              props: { variant: "text", color: "warning" },
              style: {
                color: theme.vars.palette.warning.text,
              },
            },
            {
              props: { variant: "text", color: "info" },
              style: {
                color: theme.vars.palette.info.text,
              },
            },
            {
              props: { variant: "outlined", color: "secondary" },
              style: {
                color: theme.vars.palette.secondary.text,
                borderColor: `color-mix(in srgb, ${theme.vars.palette.secondary.text} 28%, transparent)`,
              },
            },
            {
              props: { variant: "outlined", color: "success" },
              style: {
                color: theme.vars.palette.success.text,
                borderColor: `color-mix(in srgb, ${theme.vars.palette.success.text} 28%, transparent)`,
              },
            },
            {
              props: { variant: "outlined", color: "error" },
              style: {
                color: theme.vars.palette.error.text,
                borderColor: `color-mix(in srgb, ${theme.vars.palette.error.text} 28%, transparent)`,
              },
            },
            {
              props: { variant: "outlined", color: "warning" },
              style: {
                color: theme.vars.palette.warning.text,
                borderColor: `color-mix(in srgb, ${theme.vars.palette.warning.text} 28%, transparent)`,
              },
            },
            {
              props: { variant: "outlined", color: "info" },
              style: {
                color: theme.vars.palette.info.text,
                borderColor: `color-mix(in srgb, ${theme.vars.palette.info.text} 28%, transparent)`,
              },
            },
          ],
        }),
      },
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
  },
  shadows: [
    "none",
    "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
    "0 2px 4px 0 rgb(0 0 0 / 0.06)",
    "0 2px 4px -1px rgb(0 0 0 / 0.06), 0 1px 2px -1px rgb(0 0 0 / 0.04)",
    "0 3px 5px -1px rgb(0 0 0 / 0.07), 0 1px 3px -1px rgb(0 0 0 / 0.05)",
    "0 4px 6px -1px rgb(0 0 0 / 0.07), 0 2px 4px -1px rgb(0 0 0 / 0.05)",
    "0 5px 8px -2px rgb(0 0 0 / 0.08), 0 2px 4px -1px rgb(0 0 0 / 0.05)",
    "0 6px 10px -2px rgb(0 0 0 / 0.08), 0 3px 5px -2px rgb(0 0 0 / 0.06)",
    "0 8px 12px -3px rgb(0 0 0 / 0.09), 0 3px 6px -2px rgb(0 0 0 / 0.06)",
    "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 7px -3px rgb(0 0 0 / 0.07)",
    "0 12px 18px -4px rgb(0 0 0 / 0.11), 0 5px 9px -3px rgb(0 0 0 / 0.08)",
    "0 15px 22px -4px rgb(0 0 0 / 0.12), 0 6px 11px -4px rgb(0 0 0 / 0.09)",
    "0 18px 28px -5px rgb(0 0 0 / 0.13), 0 7px 13px -4px rgb(0 0 0 / 0.1)",
    "0 22px 34px -6px rgb(0 0 0 / 0.14), 0 8px 16px -5px rgb(0 0 0 / 0.11)",
    "0 26px 40px -7px rgb(0 0 0 / 0.15), 0 10px 19px -5px rgb(0 0 0 / 0.12)",
    "0 31px 47px -8px rgb(0 0 0 / 0.16), 0 12px 23px -6px rgb(0 0 0 / 0.13)",
    "0 36px 54px -9px rgb(0 0 0 / 0.17), 0 14px 27px -7px rgb(0 0 0 / 0.14)",
    "0 42px 62px -10px rgb(0 0 0 / 0.18), 0 16px 31px -8px rgb(0 0 0 / 0.15)",
    "0 48px 70px -11px rgb(0 0 0 / 0.2), 0 18px 36px -9px rgb(0 0 0 / 0.16)",
    "0 54px 78px -12px rgb(0 0 0 / 0.21), 0 20px 41px -10px rgb(0 0 0 / 0.17)",
    "0 60px 86px -13px rgb(0 0 0 / 0.22), 0 23px 46px -11px rgb(0 0 0 / 0.18)",
    "0 66px 94px -14px rgb(0 0 0 / 0.23), 0 26px 52px -12px rgb(0 0 0 / 0.19)",
    "0 72px 102px -15px rgb(0 0 0 / 0.24), 0 29px 58px -13px rgb(0 0 0 / 0.2)",
    "0 58px 82px -11px rgb(0 0 0 / 0.26), 0 21px 40px -11px rgb(0 0 0 / 0.22)",
  ],
});

export default theme;
