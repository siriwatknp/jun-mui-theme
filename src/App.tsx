import { ThemeProvider, useColorScheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Container, Typography, Box, Stack, Divider } from "@mui/material";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import InputAdornment from "@mui/material/InputAdornment";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import SaveIcon from "@mui/icons-material/Save";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import EuroIcon from "@mui/icons-material/Euro";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import CurrencyYenIcon from "@mui/icons-material/CurrencyYen";
import LanguageIcon from "@mui/icons-material/Language";
import PublicIcon from "@mui/icons-material/Public";
import FlagIcon from "@mui/icons-material/Flag";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import theme from "./theme";

function ColorSchemeToggle() {
  const { mode, setMode } = useColorScheme();

  return (
    <IconButton
      onClick={() => {
        setMode(mode === "light" ? "dark" : "light");
      }}
      color="inherit"
    >
      {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
    </IconButton>
  );
}

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
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 4,
          }}
        >
          <Typography variant="h3" component="h1">
            Material UI Components Demo
          </Typography>
          <ColorSchemeToggle />
        </Box>

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

          <Divider sx={{ my: 3 }} />

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              Buttons with Icons
            </Typography>
            <Stack spacing={3}>
              <Box>
                <Typography variant="subtitle2" gutterBottom>
                  Start icon:
                </Typography>
                <Stack direction="row" spacing={2}>
                  <Button variant="contained" startIcon={<SendIcon />}>
                    Send
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<DeleteIcon />}
                    color="error"
                  >
                    Delete
                  </Button>
                  <Button
                    variant="text"
                    startIcon={<AddIcon />}
                    color="success"
                  >
                    Add Item
                  </Button>
                </Stack>
              </Box>

              <Box>
                <Typography variant="subtitle2" gutterBottom>
                  End icon:
                </Typography>
                <Stack direction="row" spacing={2}>
                  <Button
                    variant="contained"
                    endIcon={<KeyboardArrowDownIcon />}
                  >
                    Options
                  </Button>
                  <Button
                    variant="outlined"
                    endIcon={<SaveIcon />}
                    color="secondary"
                  >
                    Save Draft
                  </Button>
                  <Button
                    variant="text"
                    endIcon={<CloudUploadIcon />}
                    color="info"
                  >
                    Upload
                  </Button>
                </Stack>
              </Box>

              <Box>
                <Typography variant="subtitle2" gutterBottom>
                  Icon only buttons (all sizes):
                </Typography>
                <Stack direction="row" spacing={2} alignItems="center">
                  {buttonSizes.map((size) => (
                    <Button
                      key={`icon-only-${size}`}
                      variant="contained"
                      size={size}
                    >
                      <DeleteIcon
                        fontSize={
                          size === "small"
                            ? "small"
                            : size === "large"
                            ? "large"
                            : "medium"
                        }
                      />
                    </Button>
                  ))}
                  {buttonSizes.map((size) => (
                    <Button
                      key={`icon-only-outlined-${size}`}
                      variant="outlined"
                      size={size}
                      color="secondary"
                    >
                      <AddIcon
                        fontSize={
                          size === "small"
                            ? "small"
                            : size === "large"
                            ? "large"
                            : "medium"
                        }
                      />
                    </Button>
                  ))}
                </Stack>
              </Box>

              <Box>
                <Typography variant="subtitle2" gutterBottom>
                  Different colors with icons:
                </Typography>
                <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
                  {buttonColors.map((color) => (
                    <Button
                      key={`icon-color-${color}`}
                      variant="contained"
                      color={color}
                      startIcon={<SaveIcon />}
                      size="small"
                    >
                      {color}
                    </Button>
                  ))}
                </Stack>
              </Box>
            </Stack>
          </Box>
        </Box>

        <Divider sx={{ my: 4 }} />

        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Alert
          </Typography>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              Severities
            </Typography>
            <Stack spacing={2}>
              <Alert severity="success">
                This is a success alert — check it out!
              </Alert>
              <Alert severity="info">
                This is an info alert — check it out!
              </Alert>
              <Alert severity="warning">
                This is a warning alert — check it out!
              </Alert>
              <Alert severity="error">
                This is an error alert — check it out!
              </Alert>
            </Stack>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              Variants
            </Typography>
            <Stack spacing={2}>
              <Alert variant="filled" severity="success">
                This is a filled success alert — check it out!
              </Alert>
              <Alert variant="outlined" severity="info">
                This is an outlined info alert — check it out!
              </Alert>
              <Alert variant="standard" severity="warning">
                This is a standard warning alert — check it out!
              </Alert>
            </Stack>
          </Box>
        </Box>

        <Divider sx={{ my: 4 }} />

        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            TextField
          </Typography>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              Basic TextField
            </Typography>
            <Stack spacing={2}>
              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                <TextField
                  label="Standard"
                  variant="standard"
                  placeholder="Placeholder"
                />
                <TextField
                  label="Filled"
                  variant="filled"
                  placeholder="Placeholder"
                />
                <TextField
                  label="Outlined"
                  variant="outlined"
                  placeholder="Placeholder"
                />
              </Box>
            </Stack>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              Form Props
            </Typography>
            <Stack spacing={3}>
              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                <TextField
                  required
                  label="Required"
                  defaultValue="Hello World"
                />
                <TextField
                  disabled
                  label="Disabled"
                  defaultValue="Hello World"
                />
                <TextField
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                />
                <TextField
                  label="Read Only"
                  defaultValue="Hello World"
                  inputProps={{ readOnly: true }}
                />
              </Box>
            </Stack>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              Validation
            </Typography>
            <Stack spacing={3}>
              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                <TextField
                  error
                  label="Error"
                  defaultValue="Hello World"
                  helperText="Incorrect entry."
                />
                <TextField
                  label="Error"
                  defaultValue="Hello World"
                  helperText="Incorrect entry."
                  variant="filled"
                  error
                />
                <TextField
                  label="Error"
                  defaultValue="Hello World"
                  helperText="Incorrect entry."
                  variant="standard"
                  error
                />
              </Box>
            </Stack>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              Multiline
            </Typography>
            <Stack spacing={3}>
              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                <TextField
                  label="Multiline"
                  multiline
                  rows={4}
                  defaultValue="Default Value"
                />
                <TextField label="Multiline Flexible" multiline maxRows={4} />
                <TextField
                  label="Multiline Filled"
                  multiline
                  rows={4}
                  defaultValue="Default Value"
                  variant="filled"
                />
              </Box>
            </Stack>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              Select - Basic
            </Typography>
            <Stack spacing={3}>
              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                <TextField
                  select
                  label="Select"
                  defaultValue="EUR"
                  sx={{ minWidth: 120 }}
                >
                  <MenuItem value="USD">USD</MenuItem>
                  <MenuItem value="EUR">EUR</MenuItem>
                  <MenuItem value="BTC">BTC</MenuItem>
                  <MenuItem value="JPY">JPY</MenuItem>
                </TextField>
                <TextField
                  select
                  label="Select"
                  defaultValue="EUR"
                  variant="filled"
                  sx={{ minWidth: 120 }}
                >
                  <MenuItem value="USD">USD</MenuItem>
                  <MenuItem value="EUR">EUR</MenuItem>
                  <MenuItem value="BTC">BTC</MenuItem>
                  <MenuItem value="JPY">JPY</MenuItem>
                </TextField>
                <TextField
                  select
                  label="Select"
                  defaultValue="EUR"
                  variant="standard"
                  sx={{ minWidth: 120 }}
                >
                  <MenuItem value="USD">USD</MenuItem>
                  <MenuItem value="EUR">EUR</MenuItem>
                  <MenuItem value="BTC">BTC</MenuItem>
                  <MenuItem value="JPY">JPY</MenuItem>
                </TextField>
              </Box>
            </Stack>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              Select - With Icons
            </Typography>
            <Stack spacing={3}>
              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                <FormControl sx={{ minWidth: 140 }}>
                  <InputLabel>Currency</InputLabel>
                  <Select defaultValue="USD" label="Currency">
                    <MenuItem value="USD">
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <AttachMoneyIcon fontSize="small" />
                        USD
                      </Box>
                    </MenuItem>
                    <MenuItem value="EUR">
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <EuroIcon fontSize="small" />
                        EUR
                      </Box>
                    </MenuItem>
                    <MenuItem value="BTC">
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <CurrencyBitcoinIcon fontSize="small" />
                        BTC
                      </Box>
                    </MenuItem>
                    <MenuItem value="JPY">
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <CurrencyYenIcon fontSize="small" />
                        JPY
                      </Box>
                    </MenuItem>
                  </Select>
                </FormControl>

                <FormControl sx={{ minWidth: 160 }}>
                  <InputLabel>Region</InputLabel>
                  <Select
                    defaultValue="US"
                    label="Region"
                    renderValue={(value) => {
                      const regionMap: Record<string, string> = {
                        US: "United States",
                        EU: "Europe",
                        ASIA: "Asia",
                      };
                      return (
                        <Box
                          sx={{ display: "flex", alignItems: "center", gap: 1 }}
                        >
                          <PublicIcon fontSize="small" />
                          {regionMap[value as string]}
                        </Box>
                      );
                    }}
                  >
                    <MenuItem value="US">
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <FlagIcon fontSize="small" />
                        United States
                      </Box>
                    </MenuItem>
                    <MenuItem value="EU">
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <FlagIcon fontSize="small" />
                        Europe
                      </Box>
                    </MenuItem>
                    <MenuItem value="ASIA">
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <FlagIcon fontSize="small" />
                        Asia
                      </Box>
                    </MenuItem>
                  </Select>
                </FormControl>

                <FormControl variant="filled" sx={{ minWidth: 140 }}>
                  <InputLabel>Language</InputLabel>
                  <Select variant="filled" defaultValue="en" label="Language">
                    <MenuItem value="en">
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <LanguageIcon fontSize="small" />
                        English
                      </Box>
                    </MenuItem>
                    <MenuItem value="es">
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <LanguageIcon fontSize="small" />
                        Spanish
                      </Box>
                    </MenuItem>
                    <MenuItem value="fr">
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <LanguageIcon fontSize="small" />
                        French
                      </Box>
                    </MenuItem>
                    <MenuItem value="de">
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <LanguageIcon fontSize="small" />
                        German
                      </Box>
                    </MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Stack>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              Select - Sizes
            </Typography>
            <Stack spacing={3}>
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <TextField
                  select
                  label="Small"
                  defaultValue="option1"
                  size="small"
                  sx={{ minWidth: 120 }}
                >
                  <MenuItem value="option1">Option 1</MenuItem>
                  <MenuItem value="option2">Option 2</MenuItem>
                  <MenuItem value="option3">Option 3</MenuItem>
                </TextField>
                <TextField
                  select
                  label="Medium"
                  defaultValue="option1"
                  sx={{ minWidth: 120 }}
                >
                  <MenuItem value="option1">Option 1</MenuItem>
                  <MenuItem value="option2">Option 2</MenuItem>
                  <MenuItem value="option3">Option 3</MenuItem>
                </TextField>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <FormControl size="small" sx={{ minWidth: 120 }}>
                  <InputLabel>Age</InputLabel>
                  <Select defaultValue={10} label="Age">
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
                <FormControl sx={{ minWidth: 120 }}>
                  <InputLabel>Age</InputLabel>
                  <Select defaultValue={10} label="Age">
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Stack>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              Select - States
            </Typography>
            <Stack spacing={3}>
              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                <TextField
                  select
                  label="Normal"
                  defaultValue="option1"
                  sx={{ minWidth: 120 }}
                >
                  <MenuItem value="option1">Option 1</MenuItem>
                  <MenuItem value="option2">Option 2</MenuItem>
                </TextField>
                <TextField
                  select
                  label="Disabled"
                  defaultValue="option1"
                  disabled
                  sx={{ minWidth: 120 }}
                >
                  <MenuItem value="option1">Option 1</MenuItem>
                  <MenuItem value="option2">Option 2</MenuItem>
                </TextField>
                <TextField
                  select
                  label="Error"
                  defaultValue="option1"
                  error
                  helperText="Please select a valid option"
                  sx={{ minWidth: 120 }}
                >
                  <MenuItem value="option1">Option 1</MenuItem>
                  <MenuItem value="option2">Option 2</MenuItem>
                </TextField>
              </Box>
            </Stack>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              Icons and Adornments
            </Typography>
            <Stack spacing={3}>
              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                <TextField
                  label="With Icon"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  label="Search"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  label="Amount"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">$</InputAdornment>
                    ),
                  }}
                />
                <TextField
                  label="Weight"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">kg</InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Stack>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              Sizes
            </Typography>
            <Stack spacing={3}>
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <TextField label="Small" size="small" />
                <TextField label="Normal" />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <TextField label="Small" size="small" variant="filled" />
                <TextField label="Normal" variant="filled" />
              </Box>
            </Stack>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              Full Width
            </Typography>
            <Stack spacing={2}>
              <TextField fullWidth label="Full Width" />
              <TextField fullWidth label="Full Width Filled" variant="filled" />
              <TextField
                fullWidth
                label="Full Width Standard"
                variant="standard"
              />
            </Stack>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              Password with Toggle
            </Typography>
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              <TextField
                label="Password"
                type="password"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton edge="end">
                        <VisibilityOff />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
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
