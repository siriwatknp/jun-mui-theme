import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Container, Typography, Box, Stack, Divider } from "@mui/material";
import Button from "@mui/material/Button";
import theme from "./theme";

function App() {
  const buttonVariants = ["text", "contained", "outlined"] as const;
  const buttonColors = [
    "primary",
    "secondary",
    "success",
    "error",
    "warning",
    "info",
  ] as const;
  const buttonSizes = ["small", "medium", "large"] as const;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Material UI Components Demo
        </Typography>

        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Button
          </Typography>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              Variants
            </Typography>
            <Stack direction="row" spacing={2}>
              {buttonVariants.map((variant) => (
                <Button key={variant} variant={variant}>
                  {variant}
                </Button>
              ))}
            </Stack>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              Colors
            </Typography>
            <Stack spacing={2}>
              {buttonVariants.map((variant) => (
                <Box key={variant}>
                  <Typography variant="subtitle2" gutterBottom>
                    {variant} buttons:
                  </Typography>
                  <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                    {buttonColors.map((color) => (
                      <Button
                        key={`${variant}-${color}`}
                        variant={variant}
                        color={color}
                      >
                        {color}
                      </Button>
                    ))}
                  </Stack>
                </Box>
              ))}
            </Stack>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              Sizes
            </Typography>
            <Stack spacing={2}>
              {buttonVariants.map((variant) => (
                <Box key={variant}>
                  <Typography variant="subtitle2" gutterBottom>
                    {variant} sizes:
                  </Typography>
                  <Stack
                    direction="row"
                    spacing={2}
                    sx={{ mb: 2, alignItems: "center" }}
                  >
                    {buttonSizes.map((size) => (
                      <Button
                        key={`${variant}-${size}`}
                        variant={variant}
                        size={size}
                      >
                        {size}
                      </Button>
                    ))}
                  </Stack>
                </Box>
              ))}
            </Stack>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              Disabled State
            </Typography>
            <Stack direction="row" spacing={2}>
              {buttonVariants.map((variant) => (
                <Button key={`${variant}-disabled`} variant={variant} disabled>
                  {variant} disabled
                </Button>
              ))}
            </Stack>
          </Box>
        </Box>

        <Divider sx={{ my: 4 }} />

        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Shadows
          </Typography>

          <Box sx={{ mb: 4 }}>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              All 25 shadow levels from the theme
            </Typography>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                gap: 8,
                mt: 3,
              }}
            >
              {Array.from({ length: 25 }, (_, i) => (
                <Box
                  key={i}
                  sx={{
                    p: 3,
                    borderRadius: 1,
                    bgcolor: "background.paper",
                    boxShadow: i,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: 100,
                  }}
                >
                  <Typography variant="h6" color="text.secondary">
                    {i}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    shadow level
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
