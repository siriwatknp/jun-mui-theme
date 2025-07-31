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
import Avatar from "@mui/material/Avatar";
import FaceIcon from "@mui/icons-material/Face";
import DoneIcon from "@mui/icons-material/Done";
import TagIcon from "@mui/icons-material/LocalOffer";
import PersonIcon from "@mui/icons-material/Person";
import GroupIcon from "@mui/icons-material/Group";
import FolderIcon from "@mui/icons-material/Folder";
import PageviewIcon from "@mui/icons-material/Pageview";
import AssignmentIcon from "@mui/icons-material/Assignment";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Autocomplete from "@mui/material/Autocomplete";
import Chip from "@mui/material/Chip";
import AvatarGroup from "@mui/material/AvatarGroup";
import Badge from "@mui/material/Badge";
import theme from "./theme";

function ColorSchemeToggle() {
  const { mode, setMode } = useColorScheme();

  return (
    <IconButton
      onClick={() => {
        setMode(mode === "light" ? "dark" : "light");
      }}
      color="inherit"
      sx={{ position: "fixed", top: "1rem", right: "1rem" }}
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

  // Sample data for Autocomplete demos
  const topMovies = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Godfather: Part II", year: 1974 },
    { title: "The Dark Knight", year: 2008 },
    { title: "12 Angry Men", year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: "Pulp Fiction", year: 1994 },
    { title: "The Lord of the Rings: The Return of the King", year: 2003 },
    { title: "The Good, the Bad and the Ugly", year: 1966 },
    { title: "Fight Club", year: 1999 },
  ];

  const programmingLanguages = [
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "C++",
    "C#",
    "Go",
    "Rust",
    "Swift",
    "Kotlin",
  ];

  const tags = [
    "React",
    "Material UI",
    "TypeScript",
    "JavaScript",
    "CSS",
    "HTML",
    "Node.js",
    "Express",
    "MongoDB",
    "GraphQL",
  ];

  const groupedOptions = [
    { title: "React", category: "Frontend" },
    { title: "Vue", category: "Frontend" },
    { title: "Angular", category: "Frontend" },
    { title: "Svelte", category: "Frontend" },
    { title: "Node.js", category: "Backend" },
    { title: "Express", category: "Backend" },
    { title: "Django", category: "Backend" },
    { title: "FastAPI", category: "Backend" },
    { title: "PostgreSQL", category: "Database" },
    { title: "MongoDB", category: "Database" },
    { title: "MySQL", category: "Database" },
    { title: "Redis", category: "Database" },
  ];

  return (
    <ThemeProvider theme={theme} disableTransitionOnChange>
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
            Autocomplete
          </Typography>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              Basic Autocomplete
            </Typography>
            <Stack spacing={3}>
              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                <Autocomplete
                  options={topMovies}
                  getOptionLabel={(option) => option.title}
                  sx={{ width: 300 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Movie" />
                  )}
                />
                <Autocomplete
                  options={topMovies}
                  getOptionLabel={(option) => option.title}
                  sx={{ width: 300 }}
                  size="small"
                  renderInput={(params) => (
                    <TextField {...params} label="Movie (Small)" />
                  )}
                />
              </Box>
            </Stack>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              Multiple Selection with Chips
            </Typography>
            <Stack spacing={3}>
              <Autocomplete
                multiple
                options={topMovies}
                getOptionLabel={(option) => option.title}
                defaultValue={[topMovies[0], topMovies[1]]}
                sx={{ width: "100%", maxWidth: 600 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Favorite Movies"
                    placeholder="Select movies..."
                  />
                )}
              />
              <Autocomplete
                multiple
                options={programmingLanguages}
                defaultValue={[
                  programmingLanguages[0],
                  programmingLanguages[2],
                ]}
                sx={{ width: "100%", maxWidth: 600 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Programming Languages"
                    placeholder="Select languages..."
                  />
                )}
              />
              <Autocomplete
                multiple
                options={topMovies}
                getOptionLabel={(option) => option.title}
                defaultValue={[topMovies[3], topMovies[4], topMovies[5]]}
                size="small"
                sx={{ width: "100%", maxWidth: 600 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Small Size Multiple"
                    placeholder="Select movies..."
                  />
                )}
              />
            </Stack>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              Free Solo & Creatable
            </Typography>
            <Stack spacing={3}>
              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                <Autocomplete
                  freeSolo
                  options={topMovies.map((option) => option.title)}
                  sx={{ width: 300 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Free Solo" />
                  )}
                />
                <Autocomplete
                  multiple
                  freeSolo
                  options={tags}
                  defaultValue={["React", "Material UI"]}
                  sx={{ width: 300 }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Tags"
                      placeholder="Add tags..."
                    />
                  )}
                />
              </Box>
            </Stack>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              Custom Chip Colors
            </Typography>
            <Autocomplete
              multiple
              options={topMovies}
              getOptionLabel={(option) => option.title}
              defaultValue={[
                topMovies[0],
                topMovies[1],
                topMovies[2],
                topMovies[3],
              ]}
              sx={{ width: "100%", maxWidth: 600 }}
              renderTags={(value, getTagProps) =>
                value.map((option, index) => {
                  const { key, ...tagProps } = getTagProps({ index });
                  const colors = [
                    "primary",
                    "secondary",
                    "success",
                    "error",
                    "warning",
                    "info",
                  ];
                  const color = colors[index % colors.length] as
                    | "primary"
                    | "secondary"
                    | "success"
                    | "error"
                    | "warning"
                    | "info";
                  return (
                    <Chip
                      variant="outlined"
                      label={option.title}
                      key={key}
                      color={color}
                      {...tagProps}
                    />
                  );
                })
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Movies with Colored Chips"
                  placeholder="Select movies..."
                />
              )}
            />
          </Box>

          <Divider sx={{ my: 3 }} />

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              Grouped Options
            </Typography>
            <Autocomplete
              options={groupedOptions.sort(
                (a, b) => -b.category.localeCompare(a.category)
              )}
              groupBy={(option) => option.category}
              getOptionLabel={(option) => option.title}
              sx={{ width: 350 }}
              renderInput={(params) => (
                <TextField {...params} label="Grouped Options" />
              )}
            />
          </Box>

          <Divider sx={{ my: 3 }} />

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              Disabled & Read-only States
            </Typography>
            <Stack spacing={3}>
              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                <Autocomplete
                  disabled
                  options={topMovies}
                  getOptionLabel={(option) => option.title}
                  defaultValue={topMovies[0]}
                  sx={{ width: 300 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Disabled" />
                  )}
                />
                <Autocomplete
                  readOnly
                  options={topMovies}
                  getOptionLabel={(option) => option.title}
                  defaultValue={topMovies[1]}
                  sx={{ width: 300 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Read-only" />
                  )}
                />
              </Box>
            </Stack>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              Loading State
            </Typography>
            <Autocomplete
              loading
              options={[]}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField {...params} label="Loading..." />
              )}
            />
          </Box>

          <Divider sx={{ my: 3 }} />

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              Limit Tags
            </Typography>
            <Autocomplete
              multiple
              limitTags={2}
              options={topMovies}
              getOptionLabel={(option) => option.title}
              defaultValue={[
                topMovies[0],
                topMovies[1],
                topMovies[2],
                topMovies[3],
                topMovies[4],
              ]}
              sx={{ width: "100%", maxWidth: 600 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Limit Tags to 2"
                  placeholder="Select movies..."
                />
              )}
            />
          </Box>
        </Box>

        <Divider sx={{ my: 4 }} />

        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Chip
          </Typography>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              Basic Chips
            </Typography>
            <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
              <Chip label="Basic" />
              <Chip label="Outlined" variant="outlined" />
              <Chip label="Filled" variant="filled" />
            </Stack>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              Colors
            </Typography>
            <Stack spacing={2}>
              <Box>
                <Typography variant="subtitle2" gutterBottom>
                  Filled chips:
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  <Chip label="Default" />
                  <Chip label="Primary" color="primary" />
                  <Chip label="Secondary" color="secondary" />
                  <Chip label="Success" color="success" />
                  <Chip label="Error" color="error" />
                  <Chip label="Warning" color="warning" />
                  <Chip label="Info" color="info" />
                </Stack>
              </Box>
              <Box>
                <Typography variant="subtitle2" gutterBottom>
                  Outlined chips:
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  <Chip label="Default" variant="outlined" />
                  <Chip label="Primary" variant="outlined" color="primary" />
                  <Chip
                    label="Secondary"
                    variant="outlined"
                    color="secondary"
                  />
                  <Chip label="Success" variant="outlined" color="success" />
                  <Chip label="Error" variant="outlined" color="error" />
                  <Chip label="Warning" variant="outlined" color="warning" />
                  <Chip label="Info" variant="outlined" color="info" />
                </Stack>
              </Box>
            </Stack>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              Sizes
            </Typography>
            <Stack spacing={2}>
              <Box>
                <Typography variant="subtitle2" gutterBottom>
                  Small size:
                </Typography>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Chip label="Small" size="small" />
                  <Chip label="Small Primary" size="small" color="primary" />
                  <Chip
                    label="Small Outlined"
                    size="small"
                    variant="outlined"
                  />
                </Stack>
              </Box>
              <Box>
                <Typography variant="subtitle2" gutterBottom>
                  Medium size (default):
                </Typography>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Chip label="Medium" />
                  <Chip label="Medium Primary" color="primary" />
                  <Chip label="Medium Outlined" variant="outlined" />
                </Stack>
              </Box>
            </Stack>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              Deletable Chips
            </Typography>
            <Stack spacing={2}>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                <Chip label="Deletable" onDelete={() => {}} />
                <Chip
                  label="Deletable Primary"
                  color="primary"
                  onDelete={() => {}}
                />
                <Chip
                  label="Deletable Secondary"
                  color="secondary"
                  onDelete={() => {}}
                />
                <Chip
                  label="Small Deletable"
                  size="small"
                  onDelete={() => {}}
                />
              </Stack>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                <Chip
                  label="Outlined Deletable"
                  variant="outlined"
                  onDelete={() => {}}
                />
                <Chip
                  label="Outlined Primary"
                  variant="outlined"
                  color="primary"
                  onDelete={() => {}}
                />
                <Chip
                  label="Outlined Error"
                  variant="outlined"
                  color="error"
                  onDelete={() => {}}
                />
              </Stack>
            </Stack>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              Clickable Chips
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              <Chip label="Clickable" onClick={() => {}} />
              <Chip
                label="Clickable Primary"
                color="primary"
                onClick={() => {}}
              />
              <Chip
                label="Clickable & Deletable"
                onClick={() => {}}
                onDelete={() => {}}
              />
              <Chip
                label="Clickable Link"
                component="a"
                href="#chip"
                clickable
              />
              <Chip
                label="Outlined Clickable"
                variant="outlined"
                onClick={() => {}}
              />
            </Stack>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              Chips with Icons
            </Typography>
            <Stack spacing={2}>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                <Chip icon={<TagIcon />} label="With Icon" />
                <Chip icon={<DoneIcon />} label="Done" color="success" />
                <Chip icon={<FaceIcon />} label="Face" color="primary" />
                <Chip icon={<TagIcon />} label="Small Icon" size="small" />
              </Stack>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                <Chip
                  icon={<TagIcon />}
                  label="Outlined Icon"
                  variant="outlined"
                />
                <Chip
                  icon={<DoneIcon />}
                  label="Deletable Icon"
                  onDelete={() => {}}
                />
                <Chip
                  icon={<FaceIcon />}
                  label="Clickable Icon"
                  onClick={() => {}}
                />
              </Stack>
            </Stack>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              Chips with Avatar
            </Typography>
            <Stack spacing={2}>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                <Chip avatar={<Avatar>M</Avatar>} label="Avatar Chip" />
                <Chip
                  avatar={
                    <Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />
                  }
                  label="Natacha"
                  color="primary"
                />
                <Chip
                  avatar={<Avatar>JD</Avatar>}
                  label="John Doe"
                  onDelete={() => {}}
                />
                <Chip
                  avatar={<Avatar>✓</Avatar>}
                  label="Verified"
                  color="success"
                />
              </Stack>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                <Chip
                  avatar={<Avatar>S</Avatar>}
                  label="Small Avatar"
                  size="small"
                />
                <Chip
                  avatar={<Avatar>O</Avatar>}
                  label="Outlined Avatar"
                  variant="outlined"
                />
                <Chip
                  avatar={<Avatar>C</Avatar>}
                  label="Clickable Avatar"
                  onClick={() => {}}
                  onDelete={() => {}}
                />
              </Stack>
            </Stack>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              Disabled State
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              <Chip label="Disabled" disabled />
              <Chip label="Disabled Primary" disabled color="primary" />
              <Chip label="Disabled Outlined" disabled variant="outlined" />
              <Chip label="Disabled Deletable" disabled onDelete={() => {}} />
              <Chip icon={<TagIcon />} label="Disabled Icon" disabled />
              <Chip
                avatar={<Avatar>D</Avatar>}
                label="Disabled Avatar"
                disabled
              />
            </Stack>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              Custom Styles & Long Labels
            </Typography>
            <Stack spacing={2}>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                <Chip label="Custom Height" sx={{ height: 40 }} />
                <Chip
                  label="Custom Colors"
                  sx={{
                    bgcolor: "background.paper",
                    border: "2px solid",
                    borderColor: "primary.main",
                  }}
                />
                <Chip
                  label="Gradient Background"
                  sx={{
                    background:
                      "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                    color: "white",
                  }}
                />
              </Stack>
              <Box sx={{ maxWidth: 250 }}>
                <Typography variant="subtitle2" gutterBottom>
                  Long label with ellipsis:
                </Typography>
                <Chip
                  label="This is a very long label that should be truncated with ellipsis"
                  sx={{ maxWidth: "100%" }}
                />
              </Box>
            </Stack>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              Array of Chips (Common Use Case)
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Example of managing a dynamic list of chips
            </Typography>
            <Stack
              direction="row"
              spacing={1}
              flexWrap="wrap"
              useFlexGap
              sx={{ mt: 2 }}
            >
              {[
                "React",
                "TypeScript",
                "Material UI",
                "Node.js",
                "GraphQL",
                "MongoDB",
              ].map((skill) => (
                <Chip
                  key={skill}
                  label={skill}
                  variant="outlined"
                  onDelete={() => console.log(`Delete ${skill}`)}
                  color={skill === "React" ? "primary" : "default"}
                />
              ))}
              <Chip
                label="+ Add Skill"
                variant="outlined"
                color="primary"
                onClick={() => console.log("Add new skill")}
                sx={{ borderStyle: "dashed" }}
              />
            </Stack>
          </Box>
        </Box>

        <Divider sx={{ my: 4 }} />

        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Avatar
          </Typography>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              Basic Avatars
            </Typography>
            <Stack direction="row" spacing={2} alignItems="center">
              <Avatar>H</Avatar>
              <Avatar>N</Avatar>
              <Avatar>OP</Avatar>
            </Stack>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              Image Avatars
            </Typography>
            <Stack direction="row" spacing={2} alignItems="center">
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
              <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
              <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
            </Stack>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              Icon Avatars
            </Typography>
            <Stack direction="row" spacing={2} alignItems="center">
              <Avatar>
                <PersonIcon />
              </Avatar>
              <Avatar>
                <GroupIcon />
              </Avatar>
              <Avatar>
                <FolderIcon />
              </Avatar>
              <Avatar>
                <PageviewIcon />
              </Avatar>
              <Avatar>
                <AssignmentIcon />
              </Avatar>
            </Stack>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              Sizes
            </Typography>
            <Stack direction="row" spacing={2} alignItems="center">
              <Avatar sx={{ width: 24, height: 24, fontSize: "0.75rem" }}>XS</Avatar>
              <Avatar sx={{ width: 32, height: 32, fontSize: "0.875rem" }}>S</Avatar>
              <Avatar>M</Avatar>
              <Avatar sx={{ width: 56, height: 56 }}>L</Avatar>
              <Avatar sx={{ width: 64, height: 64 }}>XL</Avatar>
            </Stack>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              Variants
            </Typography>
            <Stack direction="row" spacing={2} alignItems="center">
              <Avatar variant="circular">C</Avatar>
              <Avatar variant="rounded">R</Avatar>
              <Avatar variant="square">S</Avatar>
              <Avatar variant="rounded">
                <PersonIcon />
              </Avatar>
              <Avatar variant="square">
                <FolderIcon />
              </Avatar>
            </Stack>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              Avatar Group
            </Typography>
            <Stack spacing={2}>
              <AvatarGroup max={4}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
              </AvatarGroup>
              <AvatarGroup max={3} spacing="small">
                <Avatar>A</Avatar>
                <Avatar>B</Avatar>
                <Avatar>C</Avatar>
                <Avatar>D</Avatar>
                <Avatar>E</Avatar>
              </AvatarGroup>
              <AvatarGroup 
                max={4} 
                variant="rounded"
                sx={{
                  '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    fontSize: '0.875rem',
                  },
                }}
              >
                <Avatar>J</Avatar>
                <Avatar>K</Avatar>
                <Avatar>L</Avatar>
                <Avatar>M</Avatar>
                <Avatar>N</Avatar>
                <Avatar>O</Avatar>
              </AvatarGroup>
            </Stack>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              Avatar with Badge
            </Typography>
            <Stack direction="row" spacing={3} alignItems="center">
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                badgeContent={
                  <Avatar sx={{ width: 22, height: 22, fontSize: "0.75rem" }}>
                    ✓
                  </Avatar>
                }
              >
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
              </Badge>
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
                color="success"
              >
                <Avatar>JD</Avatar>
              </Badge>
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
                color="error"
              >
                <Avatar>
                  <PersonIcon />
                </Avatar>
              </Badge>
            </Stack>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              Fallback Behavior
            </Typography>
            <Stack direction="row" spacing={2} alignItems="center">
              <Avatar alt="Image fails to load" src="/broken-image.jpg">B</Avatar>
              <Avatar alt="Empty src">ES</Avatar>
              <Avatar src="/broken-image.jpg" />
              <Avatar />
            </Stack>
            <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: "block" }}>
              Avatars show fallback when image fails to load
            </Typography>
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
