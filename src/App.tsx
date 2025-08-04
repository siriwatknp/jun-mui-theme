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
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import TableSortLabel from "@mui/material/TableSortLabel";
import TableFooter from "@mui/material/TableFooter";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import EditIcon from "@mui/icons-material/Edit";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import type { TransitionProps } from "@mui/material/transitions";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import React from "react";
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

const SlideTransition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function App() {
  // Dialog states
  const [openBasic, setOpenBasic] = React.useState(false);
  const [openAlert, setOpenAlert] = React.useState(false);
  const [openForm, setOpenForm] = React.useState(false);
  const [openFullWidth, setOpenFullWidth] = React.useState(false);
  const [openScroll, setOpenScroll] = React.useState(false);
  const [openCustom, setOpenCustom] = React.useState(false);
  const [openTransition, setOpenTransition] = React.useState(false);
  const [openFullScreen, setOpenFullScreen] = React.useState(false);
  const [openList, setOpenList] = React.useState(false);
  const [openConfirm, setOpenConfirm] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState("user1@example.com");
  const [scrollType, setScrollType] = React.useState<"paper" | "body">("paper");
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
      <Box
        sx={{
          py: 4,
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fill, minmax(min(1000px, 100%), 1fr))",
        }}
      >
        <Container maxWidth="lg">
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
                  <Button
                    key={`${variant}-disabled`}
                    variant={variant}
                    disabled
                  >
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
                <Alert variant="filled" severity="error">
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
                  <TextField
                    label="Multiline"
                    multiline
                    size="small"
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
                  <TextField
                    label="Multiline Filled"
                    multiline
                    size="small"
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
                <Box>
                  <Typography variant="h6" gutterBottom>
                    Select (Outlined)
                  </Typography>
                  <FormControl variant="outlined" sx={{ minWidth: 200 }}>
                    <InputLabel>Age</InputLabel>
                    <Select label="Age">
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
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
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 1,
                            }}
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
                <TextField
                  fullWidth
                  label="Full Width Filled"
                  variant="filled"
                />
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
                <Avatar
                  alt="Trevor Henderson"
                  src="/static/images/avatar/5.jpg"
                />
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
                <Avatar sx={{ width: 24, height: 24, fontSize: "0.75rem" }}>
                  XS
                </Avatar>
                <Avatar sx={{ width: 32, height: 32, fontSize: "0.875rem" }}>
                  S
                </Avatar>
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
                  <Avatar
                    alt="Travis Howard"
                    src="/static/images/avatar/2.jpg"
                  />
                  <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                  <Avatar
                    alt="Agnes Walker"
                    src="/static/images/avatar/4.jpg"
                  />
                  <Avatar
                    alt="Trevor Henderson"
                    src="/static/images/avatar/5.jpg"
                  />
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
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      fontSize: "0.875rem",
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
                  <Avatar
                    alt="Travis Howard"
                    src="/static/images/avatar/2.jpg"
                  />
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
                <Avatar alt="Image fails to load" src="/broken-image.jpg">
                  B
                </Avatar>
                <Avatar alt="Empty src">ES</Avatar>
                <Avatar src="/broken-image.jpg" />
                <Avatar />
              </Stack>
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ mt: 1, display: "block" }}
              >
                Avatars show fallback when image fails to load
              </Typography>
            </Box>
          </Box>
          <Divider sx={{ my: 4 }} />
          <Box sx={{ my: 4 }}>
            <Typography variant="h4" component="h2" gutterBottom>
              Table
            </Typography>
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" gutterBottom>
                Basic Table
              </Typography>
              <TableContainer component={Paper} variant="outlined">
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Dessert (100g serving)</TableCell>
                      <TableCell align="right">Calories</TableCell>
                      <TableCell align="right">Fat&nbsp;(g)</TableCell>
                      <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                      <TableCell align="right">Protein&nbsp;(g)</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow hover>
                      <TableCell component="th" scope="row">
                        Frozen yoghurt
                      </TableCell>
                      <TableCell align="right">159</TableCell>
                      <TableCell align="right">6</TableCell>
                      <TableCell align="right">24</TableCell>
                      <TableCell align="right">4</TableCell>
                    </TableRow>
                    <TableRow hover>
                      <TableCell component="th" scope="row">
                        Ice cream sandwich
                      </TableCell>
                      <TableCell align="right">237</TableCell>
                      <TableCell align="right">9</TableCell>
                      <TableCell align="right">37</TableCell>
                      <TableCell align="right">4.3</TableCell>
                    </TableRow>
                    <TableRow hover>
                      <TableCell component="th" scope="row">
                        Eclair
                      </TableCell>
                      <TableCell align="right">262</TableCell>
                      <TableCell align="right">16</TableCell>
                      <TableCell align="right">24</TableCell>
                      <TableCell align="right">6</TableCell>
                    </TableRow>
                    <TableRow hover>
                      <TableCell component="th" scope="row">
                        Cupcake
                      </TableCell>
                      <TableCell align="right">305</TableCell>
                      <TableCell align="right">3.7</TableCell>
                      <TableCell align="right">67</TableCell>
                      <TableCell align="right">4.3</TableCell>
                    </TableRow>
                    <TableRow hover>
                      <TableCell component="th" scope="row">
                        Gingerbread
                      </TableCell>
                      <TableCell align="right">356</TableCell>
                      <TableCell align="right">16</TableCell>
                      <TableCell align="right">49</TableCell>
                      <TableCell align="right">3.9</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
            <Divider sx={{ my: 3 }} />
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" gutterBottom>
                Dense Table
              </Typography>
              <TableContainer component={Paper} variant="outlined">
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>Dessert (100g serving)</TableCell>
                      <TableCell align="right">Calories</TableCell>
                      <TableCell align="right">Fat&nbsp;(g)</TableCell>
                      <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                      <TableCell align="right">Protein&nbsp;(g)</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow hover>
                      <TableCell component="th" scope="row">
                        Frozen yoghurt
                      </TableCell>
                      <TableCell align="right">159</TableCell>
                      <TableCell align="right">6</TableCell>
                      <TableCell align="right">24</TableCell>
                      <TableCell align="right">4</TableCell>
                    </TableRow>
                    <TableRow hover>
                      <TableCell component="th" scope="row">
                        Ice cream sandwich
                      </TableCell>
                      <TableCell align="right">237</TableCell>
                      <TableCell align="right">9</TableCell>
                      <TableCell align="right">37</TableCell>
                      <TableCell align="right">4.3</TableCell>
                    </TableRow>
                    <TableRow hover>
                      <TableCell component="th" scope="row">
                        Eclair
                      </TableCell>
                      <TableCell align="right">262</TableCell>
                      <TableCell align="right">16</TableCell>
                      <TableCell align="right">24</TableCell>
                      <TableCell align="right">6</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
            <Divider sx={{ my: 3 }} />
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" gutterBottom>
                Table with Selection
              </Typography>
              <TableContainer component={Paper} variant="outlined">
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell padding="checkbox">
                        <Checkbox color="primary" />
                      </TableCell>
                      <TableCell>Name</TableCell>
                      <TableCell>Position</TableCell>
                      <TableCell>Office</TableCell>
                      <TableCell>Age</TableCell>
                      <TableCell align="right">Salary</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow hover selected>
                      <TableCell padding="checkbox">
                        <Checkbox color="primary" checked />
                      </TableCell>
                      <TableCell>Tiger Nixon</TableCell>
                      <TableCell>System Architect</TableCell>
                      <TableCell>Edinburgh</TableCell>
                      <TableCell>61</TableCell>
                      <TableCell align="right">$320,800</TableCell>
                    </TableRow>
                    <TableRow hover>
                      <TableCell padding="checkbox">
                        <Checkbox color="primary" />
                      </TableCell>
                      <TableCell>Garrett Winters</TableCell>
                      <TableCell>Accountant</TableCell>
                      <TableCell>Tokyo</TableCell>
                      <TableCell>63</TableCell>
                      <TableCell align="right">$170,750</TableCell>
                    </TableRow>
                    <TableRow hover>
                      <TableCell padding="checkbox">
                        <Checkbox color="primary" />
                      </TableCell>
                      <TableCell>Ashton Cox</TableCell>
                      <TableCell>Junior Technical Author</TableCell>
                      <TableCell>San Francisco</TableCell>
                      <TableCell>66</TableCell>
                      <TableCell align="right">$86,000</TableCell>
                    </TableRow>
                    <TableRow hover selected>
                      <TableCell padding="checkbox">
                        <Checkbox color="primary" checked />
                      </TableCell>
                      <TableCell>Cedric Kelly</TableCell>
                      <TableCell>Senior Javascript Developer</TableCell>
                      <TableCell>Edinburgh</TableCell>
                      <TableCell>22</TableCell>
                      <TableCell align="right">$433,060</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
            <Divider sx={{ my: 3 }} />
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" gutterBottom>
                Sortable Table
              </Typography>
              <TableContainer component={Paper} variant="outlined">
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <TableSortLabel active direction="asc">
                          Name
                        </TableSortLabel>
                      </TableCell>
                      <TableCell>
                        <TableSortLabel>Position</TableSortLabel>
                      </TableCell>
                      <TableCell>
                        <TableSortLabel>Office</TableSortLabel>
                      </TableCell>
                      <TableCell align="right">
                        <TableSortLabel>Age</TableSortLabel>
                      </TableCell>
                      <TableCell align="right">
                        <TableSortLabel>Start date</TableSortLabel>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow hover>
                      <TableCell>Airi Satou</TableCell>
                      <TableCell>Accountant</TableCell>
                      <TableCell>Tokyo</TableCell>
                      <TableCell align="right">33</TableCell>
                      <TableCell align="right">2008/11/28</TableCell>
                    </TableRow>
                    <TableRow hover>
                      <TableCell>Angelica Ramos</TableCell>
                      <TableCell>Chief Executive Officer</TableCell>
                      <TableCell>London</TableCell>
                      <TableCell align="right">47</TableCell>
                      <TableCell align="right">2009/10/09</TableCell>
                    </TableRow>
                    <TableRow hover>
                      <TableCell>Bradley Greer</TableCell>
                      <TableCell>Software Engineer</TableCell>
                      <TableCell>London</TableCell>
                      <TableCell align="right">41</TableCell>
                      <TableCell align="right">2012/10/13</TableCell>
                    </TableRow>
                    <TableRow hover>
                      <TableCell>Brenden Wagner</TableCell>
                      <TableCell>Software Engineer</TableCell>
                      <TableCell>San Francisco</TableCell>
                      <TableCell align="right">28</TableCell>
                      <TableCell align="right">2011/06/07</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
            <Divider sx={{ my: 3 }} />
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" gutterBottom>
                Table with Actions
              </Typography>
              <TableContainer component={Paper} variant="outlined">
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>User</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>Role</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell align="center">Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow hover>
                      <TableCell>
                        <Box
                          sx={{ display: "flex", alignItems: "center", gap: 2 }}
                        >
                          <Avatar sx={{ width: 32, height: 32 }}>JD</Avatar>
                          <Typography variant="body2">John Doe</Typography>
                        </Box>
                      </TableCell>
                      <TableCell>john.doe@example.com</TableCell>
                      <TableCell>
                        <Chip label="Admin" size="small" color="primary" />
                      </TableCell>
                      <TableCell>
                        <Chip
                          label="Active"
                          size="small"
                          color="success"
                          variant="outlined"
                        />
                      </TableCell>
                      <TableCell align="center">
                        <IconButton size="small">
                          <EditIcon fontSize="small" />
                        </IconButton>
                        <IconButton size="small">
                          <DeleteIcon fontSize="small" />
                        </IconButton>
                        <IconButton size="small">
                          <MoreVertIcon fontSize="small" />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                    <TableRow hover>
                      <TableCell>
                        <Box
                          sx={{ display: "flex", alignItems: "center", gap: 2 }}
                        >
                          <Avatar sx={{ width: 32, height: 32 }}>AS</Avatar>
                          <Typography variant="body2">Alice Smith</Typography>
                        </Box>
                      </TableCell>
                      <TableCell>alice.smith@example.com</TableCell>
                      <TableCell>
                        <Chip label="Editor" size="small" color="secondary" />
                      </TableCell>
                      <TableCell>
                        <Chip
                          label="Active"
                          size="small"
                          color="success"
                          variant="outlined"
                        />
                      </TableCell>
                      <TableCell align="center">
                        <IconButton size="small">
                          <EditIcon fontSize="small" />
                        </IconButton>
                        <IconButton size="small">
                          <DeleteIcon fontSize="small" />
                        </IconButton>
                        <IconButton size="small">
                          <MoreVertIcon fontSize="small" />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                    <TableRow hover>
                      <TableCell>
                        <Box
                          sx={{ display: "flex", alignItems: "center", gap: 2 }}
                        >
                          <Avatar sx={{ width: 32, height: 32 }}>BW</Avatar>
                          <Typography variant="body2">Bob Wilson</Typography>
                        </Box>
                      </TableCell>
                      <TableCell>bob.wilson@example.com</TableCell>
                      <TableCell>
                        <Chip label="Viewer" size="small" />
                      </TableCell>
                      <TableCell>
                        <Chip
                          label="Inactive"
                          size="small"
                          color="default"
                          variant="outlined"
                        />
                      </TableCell>
                      <TableCell align="center">
                        <IconButton size="small">
                          <EditIcon fontSize="small" />
                        </IconButton>
                        <IconButton size="small" disabled>
                          <DeleteIcon fontSize="small" />
                        </IconButton>
                        <IconButton size="small">
                          <MoreVertIcon fontSize="small" />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
            <Divider sx={{ my: 3 }} />
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" gutterBottom>
                Table with Pagination
              </Typography>
              <TableContainer component={Paper} variant="outlined">
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Product</TableCell>
                      <TableCell>Category</TableCell>
                      <TableCell align="right">Price</TableCell>
                      <TableCell align="right">Stock</TableCell>
                      <TableCell>Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow hover>
                      <TableCell>MacBook Pro 16"</TableCell>
                      <TableCell>Electronics</TableCell>
                      <TableCell align="right">$2,399</TableCell>
                      <TableCell align="right">12</TableCell>
                      <TableCell>
                        <Chip label="In Stock" size="small" color="success" />
                      </TableCell>
                    </TableRow>
                    <TableRow hover>
                      <TableCell>iPhone 13 Pro</TableCell>
                      <TableCell>Electronics</TableCell>
                      <TableCell align="right">$999</TableCell>
                      <TableCell align="right">45</TableCell>
                      <TableCell>
                        <Chip label="In Stock" size="small" color="success" />
                      </TableCell>
                    </TableRow>
                    <TableRow hover>
                      <TableCell>AirPods Pro</TableCell>
                      <TableCell>Electronics</TableCell>
                      <TableCell align="right">$249</TableCell>
                      <TableCell align="right">0</TableCell>
                      <TableCell>
                        <Chip label="Out of Stock" size="small" color="error" />
                      </TableCell>
                    </TableRow>
                    <TableRow hover>
                      <TableCell>iPad Air</TableCell>
                      <TableCell>Electronics</TableCell>
                      <TableCell align="right">$599</TableCell>
                      <TableCell align="right">23</TableCell>
                      <TableCell>
                        <Chip label="In Stock" size="small" color="success" />
                      </TableCell>
                    </TableRow>
                    <TableRow hover>
                      <TableCell>Apple Watch Series 7</TableCell>
                      <TableCell>Electronics</TableCell>
                      <TableCell align="right">$399</TableCell>
                      <TableCell align="right">8</TableCell>
                      <TableCell>
                        <Chip label="Low Stock" size="small" color="warning" />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25]}
                  component="div"
                  count={100}
                  rowsPerPage={5}
                  page={0}
                  onPageChange={() => {}}
                  onRowsPerPageChange={() => {}}
                />
              </TableContainer>
            </Box>
            <Divider sx={{ my: 3 }} />
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" gutterBottom>
                Sticky Header Table
              </Typography>
              <TableContainer
                component={Paper}
                variant="outlined"
                sx={{ maxHeight: 440 }}
              >
                <Table stickyHeader>
                  <TableHead>
                    <TableRow>
                      <TableCell>Country</TableCell>
                      <TableCell align="right">Population</TableCell>
                      <TableCell align="right">Area (km²)</TableCell>
                      <TableCell align="right">Density</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {[
                      {
                        country: "China",
                        population: "1,439,323,776",
                        area: "9,596,961",
                        density: "150",
                      },
                      {
                        country: "India",
                        population: "1,380,004,385",
                        area: "3,287,263",
                        density: "420",
                      },
                      {
                        country: "United States",
                        population: "331,002,651",
                        area: "9,833,517",
                        density: "34",
                      },
                      {
                        country: "Indonesia",
                        population: "273,523,615",
                        area: "1,904,569",
                        density: "144",
                      },
                      {
                        country: "Pakistan",
                        population: "220,892,340",
                        area: "881,913",
                        density: "250",
                      },
                      {
                        country: "Brazil",
                        population: "212,559,417",
                        area: "8,515,767",
                        density: "25",
                      },
                      {
                        country: "Nigeria",
                        population: "206,139,589",
                        area: "923,768",
                        density: "223",
                      },
                      {
                        country: "Bangladesh",
                        population: "164,689,383",
                        area: "147,570",
                        density: "1,116",
                      },
                      {
                        country: "Russia",
                        population: "145,934,462",
                        area: "17,098,242",
                        density: "9",
                      },
                      {
                        country: "Mexico",
                        population: "128,932,753",
                        area: "1,964,375",
                        density: "66",
                      },
                    ].map((row) => (
                      <TableRow hover key={row.country}>
                        <TableCell>{row.country}</TableCell>
                        <TableCell align="right">{row.population}</TableCell>
                        <TableCell align="right">{row.area}</TableCell>
                        <TableCell align="right">{row.density}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
            <Divider sx={{ my: 3 }} />
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" gutterBottom>
                Collapsible Table Groups
              </Typography>
              <TableContainer component={Paper} variant="outlined">
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell colSpan={2}>
                        <Typography variant="subtitle2" fontWeight={600}>
                          Frontend Technologies
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow hover>
                      <TableCell sx={{ pl: 4 }}>React</TableCell>
                      <TableCell align="right">18.2.0</TableCell>
                    </TableRow>
                    <TableRow hover>
                      <TableCell sx={{ pl: 4 }}>Material UI</TableCell>
                      <TableCell align="right">5.11.0</TableCell>
                    </TableRow>
                    <TableRow hover>
                      <TableCell sx={{ pl: 4 }}>TypeScript</TableCell>
                      <TableCell align="right">4.9.3</TableCell>
                    </TableRow>
                  </TableBody>
                  <TableHead>
                    <TableRow>
                      <TableCell colSpan={2}>
                        <Typography variant="subtitle2" fontWeight={600}>
                          Backend Technologies
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow hover>
                      <TableCell sx={{ pl: 4 }}>Node.js</TableCell>
                      <TableCell align="right">18.12.0</TableCell>
                    </TableRow>
                    <TableRow hover>
                      <TableCell sx={{ pl: 4 }}>Express</TableCell>
                      <TableCell align="right">4.18.2</TableCell>
                    </TableRow>
                    <TableRow hover>
                      <TableCell sx={{ pl: 4 }}>MongoDB</TableCell>
                      <TableCell align="right">6.0</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
            <Divider sx={{ my: 3 }} />
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" gutterBottom>
                Table with Footer
              </Typography>
              <TableContainer component={Paper} variant="outlined">
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Item</TableCell>
                      <TableCell align="right">Qty</TableCell>
                      <TableCell align="right">Unit Price</TableCell>
                      <TableCell align="right">Total</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow hover>
                      <TableCell>Product A</TableCell>
                      <TableCell align="right">2</TableCell>
                      <TableCell align="right">$50.00</TableCell>
                      <TableCell align="right">$100.00</TableCell>
                    </TableRow>
                    <TableRow hover>
                      <TableCell>Product B</TableCell>
                      <TableCell align="right">1</TableCell>
                      <TableCell align="right">$75.00</TableCell>
                      <TableCell align="right">$75.00</TableCell>
                    </TableRow>
                    <TableRow hover>
                      <TableCell>Product C</TableCell>
                      <TableCell align="right">3</TableCell>
                      <TableCell align="right">$25.00</TableCell>
                      <TableCell align="right">$75.00</TableCell>
                    </TableRow>
                  </TableBody>
                  <TableFooter>
                    <TableRow>
                      <TableCell colSpan={3} align="right">
                        <Typography variant="subtitle2" fontWeight={600}>
                          Subtotal
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography variant="subtitle2" fontWeight={600}>
                          $250.00
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell colSpan={3} align="right">
                        Tax (10%)
                      </TableCell>
                      <TableCell align="right">$25.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell colSpan={3} align="right">
                        <Typography variant="subtitle1" fontWeight={600}>
                          Total
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography variant="subtitle1" fontWeight={600}>
                          $275.00
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </TableFooter>
                </Table>
              </TableContainer>
            </Box>
          </Box>
          <Divider sx={{ my: 4 }} />
          <Box sx={{ my: 4 }}>
            <Typography variant="h4" component="h2" gutterBottom>
              Card
            </Typography>
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" gutterBottom>
                Basic Cards
              </Typography>
              <Stack direction="row" spacing={3} flexWrap="wrap" useFlexGap>
                <Card sx={{ maxWidth: 345 }}>
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      Basic Card
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      This is a basic card with some content. Cards are surfaces
                      that display content and actions on a single topic.
                    </Typography>
                  </CardContent>
                </Card>
                <Card sx={{ maxWidth: 345 }} variant="outlined">
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      Outlined Card
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      This is an outlined variant of the card. It uses a border
                      instead of a shadow for a more subtle appearance.
                    </Typography>
                  </CardContent>
                </Card>
              </Stack>
            </Box>
            <Divider sx={{ my: 3 }} />
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" gutterBottom>
                Card with Actions
              </Typography>
              <Stack direction="row" spacing={3} flexWrap="wrap" useFlexGap>
                <Card sx={{ maxWidth: 345 }}>
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      Card Title
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Cards can include actions at the bottom. These actions
                      help users interact with the card content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
                <Card sx={{ maxWidth: 345 }}>
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      Icon Actions
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Actions can also be icon buttons for a more compact
                      design.
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <Button variant="outlined" color="secondary" size="small">
                      <FavoriteIcon />
                    </Button>
                    <Button variant="outlined" color="secondary" size="small">
                      <ShareIcon />
                    </Button>
                    <Button
                      variant="outlined"
                      color="secondary"
                      size="small"
                      sx={{ marginLeft: "auto" }}
                    >
                      <ExpandMoreIcon />
                    </Button>
                  </CardActions>
                </Card>
              </Stack>
            </Box>
            <Divider sx={{ my: 3 }} />
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" gutterBottom>
                Card with Header
              </Typography>
              <Stack direction="row" spacing={3} flexWrap="wrap" useFlexGap>
                <Card sx={{ maxWidth: 345 }}>
                  <CardHeader
                    avatar={<Avatar aria-label="recipe">R</Avatar>}
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title="Card Header Title"
                    subheader="September 14, 2024"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      Cards can include headers with avatars, titles,
                      subheaders, and action buttons.
                    </Typography>
                  </CardContent>
                </Card>
                <Card sx={{ maxWidth: 345 }}>
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: "primary.main" }}>
                        <PersonIcon />
                      </Avatar>
                    }
                    action={
                      <IconButton aria-label="more">
                        <MoreHorizIcon />
                      </IconButton>
                    }
                    title="John Doe"
                    subheader="Software Engineer"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      This card represents a user profile with customized avatar
                      colors.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View Profile</Button>
                    <Button size="small">Message</Button>
                  </CardActions>
                </Card>
              </Stack>
            </Box>
            <Divider sx={{ my: 3 }} />
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" gutterBottom>
                Card with Media
              </Typography>
              <Stack direction="row" spacing={3} flexWrap="wrap" useFlexGap>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" variant="contained">
                      Share
                    </Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="div"
                    sx={{
                      height: 140,
                      backgroundColor: "primary.main",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography variant="h3" color="primary.contrastText">
                      DEMO
                    </Typography>
                  </CardMedia>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Custom Media
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Media can be custom components, not just images.
                    </Typography>
                  </CardContent>
                </Card>
              </Stack>
            </Box>
            <Divider sx={{ my: 3 }} />
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" gutterBottom>
                Interactive Cards
              </Typography>
              <Stack direction="row" spacing={3} flexWrap="wrap" useFlexGap>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Clickable Card
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        The entire card is clickable using CardActionArea.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Action Area
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Click anywhere on this card to trigger an action.
                        Perfect for navigation or selection.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Secondary Action
                    </Button>
                  </CardActions>
                </Card>
              </Stack>
            </Box>
            <Divider sx={{ my: 3 }} />
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" gutterBottom>
                Complex Card Example
              </Typography>
              <Card sx={{ maxWidth: 600 }}>
                <CardHeader
                  avatar={
                    <Avatar
                      sx={{ bgcolor: "secondary.main" }}
                      aria-label="recipe"
                    >
                      C
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="Complex Card with All Features"
                  subheader="Demonstrating multiple card components"
                />
                <CardMedia
                  component="img"
                  height="200"
                  image="https://mui.com/static/images/cards/paella.jpg"
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like.
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  <Box sx={{ flexGrow: 1 }} />
                  <Button size="small">Read More</Button>
                </CardActions>
              </Card>
            </Box>
            <Divider sx={{ my: 3 }} />
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" gutterBottom>
                Card Grid Layout
              </Typography>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                  gap: 2,
                }}
              >
                {["Project Alpha", "Project Beta", "Project Gamma"].map(
                  (project, index) => (
                    <Card key={project}>
                      <CardHeader
                        avatar={<Avatar>{project[8]}</Avatar>}
                        title={project}
                        subheader={`Last updated ${index + 1} days ago`}
                        action={
                          <IconButton size="small">
                            <MoreHorizIcon />
                          </IconButton>
                        }
                      />
                      <CardContent>
                        <Typography variant="body2" color="text.secondary">
                          {index === 0 &&
                            "A cutting-edge web application built with React and Material UI."}
                          {index === 1 &&
                            "Mobile-first responsive design system for modern applications."}
                          {index === 2 &&
                            "Enterprise-grade backend infrastructure with microservices."}
                        </Typography>
                        <Box sx={{ mt: 2, display: "flex", gap: 1 }}>
                          <Chip label="Active" color="success" size="small" />
                          <Chip
                            label={`${(index + 1) * 3} members`}
                            size="small"
                          />
                        </Box>
                      </CardContent>
                      <CardActions>
                        <Button size="small">View Details</Button>
                        <Button size="small" color="primary">
                          Open
                        </Button>
                      </CardActions>
                    </Card>
                  )
                )}
              </Box>
            </Box>
            <Divider sx={{ my: 3 }} />
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" gutterBottom>
                Card Variants & States
              </Typography>
              <Stack spacing={3}>
                <Stack direction="row" spacing={3} flexWrap="wrap" useFlexGap>
                  <Card sx={{ maxWidth: 300 }} elevation={0}>
                    <CardContent>
                      <Typography variant="h6">No Elevation</Typography>
                      <Typography variant="body2" color="text.secondary">
                        Card with elevation={0}
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card sx={{ maxWidth: 300 }} elevation={3}>
                    <CardContent>
                      <Typography variant="h6">Default Elevation</Typography>
                      <Typography variant="body2" color="text.secondary">
                        Card with elevation={3}
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card sx={{ maxWidth: 300 }} elevation={8}>
                    <CardContent>
                      <Typography variant="h6">High Elevation</Typography>
                      <Typography variant="body2" color="text.secondary">
                        Card with elevation={8}
                      </Typography>
                    </CardContent>
                  </Card>
                </Stack>
                <Stack direction="row" spacing={3} flexWrap="wrap" useFlexGap>
                  <Card
                    sx={{
                      maxWidth: 300,
                      border: "2px solid",
                      borderColor: "primary.main",
                    }}
                    variant="outlined"
                  >
                    <CardContent>
                      <Typography variant="h6" color="primary">
                        Primary Border
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Custom border color
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card
                    sx={{
                      maxWidth: 300,
                      bgcolor: "primary.main",
                      color: "primary.contrastText",
                    }}
                  >
                    <CardContent>
                      <Typography variant="h6">Colored Background</Typography>
                      <Typography variant="body2" sx={{ opacity: 0.8 }}>
                        Custom background color
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card sx={{ maxWidth: 300, borderRadius: 4 }}>
                    <CardContent>
                      <Typography variant="h6">Custom Border Radius</Typography>
                      <Typography variant="body2" color="text.secondary">
                        More rounded corners
                      </Typography>
                    </CardContent>
                  </Card>
                </Stack>
              </Stack>
            </Box>
          </Box>
          <Divider sx={{ my: 4 }} />
          <Box sx={{ my: 4 }}>
            <Typography variant="h4" component="h2" gutterBottom>
              Dialog
            </Typography>
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" gutterBottom>
                Basic Dialogs
              </Typography>
              <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
                <Button variant="outlined" onClick={() => setOpenBasic(true)}>
                  Basic Dialog
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => setOpenAlert(true)}
                >
                  Alert Dialog
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => setOpenForm(true)}
                >
                  Form Dialog
                </Button>
              </Stack>
              {/* Basic Dialog */}
              <Dialog
                open={openBasic}
                onClose={() => setOpenBasic(false)}
                aria-labelledby="basic-dialog-title"
                aria-describedby="basic-dialog-description"
              >
                <DialogTitle id="basic-dialog-title">
                  Basic Dialog Title
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="basic-dialog-description">
                    This is a basic dialog with a title, content, and actions.
                    It can be used to display information or get user
                    confirmation.
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={() => setOpenBasic(false)}>Cancel</Button>
                  <Button onClick={() => setOpenBasic(false)} autoFocus>
                    OK
                  </Button>
                </DialogActions>
              </Dialog>
              {/* Alert Dialog */}
              <Dialog
                open={openAlert}
                onClose={() => setOpenAlert(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  Delete this item?
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    This action cannot be undone. This will permanently delete
                    the item and remove all associated data from our servers.
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={() => setOpenAlert(false)}>Cancel</Button>
                  <Button
                    onClick={() => setOpenAlert(false)}
                    color="error"
                    autoFocus
                  >
                    Delete
                  </Button>
                </DialogActions>
              </Dialog>
              {/* Form Dialog */}
              <Dialog open={openForm} onClose={() => setOpenForm(false)}>
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    To subscribe to this website, please enter your email
                    address here. We will send updates occasionally.
                  </DialogContentText>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="email"
                    label="Email Address"
                    type="email"
                    fullWidth
                    variant="standard"
                    sx={{ mt: 2 }}
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={() => setOpenForm(false)}>Cancel</Button>
                  <Button onClick={() => setOpenForm(false)}>Subscribe</Button>
                </DialogActions>
              </Dialog>
            </Box>
            <Divider sx={{ my: 3 }} />
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" gutterBottom>
                Dialog Sizes & Scroll
              </Typography>
              <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
                <Button
                  variant="outlined"
                  onClick={() => setOpenFullWidth(true)}
                >
                  Full Width Dialog
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => {
                    setScrollType("paper");
                    setOpenScroll(true);
                  }}
                >
                  Scrollable Paper
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => {
                    setScrollType("body");
                    setOpenScroll(true);
                  }}
                >
                  Scrollable Body
                </Button>
              </Stack>
              {/* Full Width Dialog */}
              <Dialog
                fullWidth
                maxWidth="sm"
                open={openFullWidth}
                onClose={() => setOpenFullWidth(false)}
              >
                <DialogTitle>Full Width Dialog</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    This dialog uses fullWidth prop with maxWidth="sm". You can
                    change maxWidth to xs, sm, md, lg, or xl.
                  </DialogContentText>
                  <Box sx={{ mt: 3 }}>
                    <TextField
                      fullWidth
                      label="Full width input"
                      margin="dense"
                    />
                    <TextField fullWidth label="Another input" margin="dense" />
                  </Box>
                </DialogContent>
                <DialogActions>
                  <Button onClick={() => setOpenFullWidth(false)}>Close</Button>
                  <Button
                    onClick={() => setOpenFullWidth(false)}
                    variant="contained"
                  >
                    Save
                  </Button>
                </DialogActions>
              </Dialog>
              {/* Scrollable Dialog */}
              <Dialog
                open={openScroll}
                onClose={() => setOpenScroll(false)}
                scroll={scrollType}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
              >
                <DialogTitle id="scroll-dialog-title">
                  Scrollable Dialog ({scrollType})
                </DialogTitle>
                <DialogContent dividers={scrollType === "paper"}>
                  <DialogContentText
                    id="scroll-dialog-description"
                    tabIndex={-1}
                  >
                    {[...new Array(50)]
                      .map(
                        () => `Cras mattis consectetur purus sit amet fermentum.
        Cras justo odio, dapibus ac facilisis in, egestas eget quam.
        Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
                      )
                      .join("\n\n")}
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={() => setOpenScroll(false)}>Cancel</Button>
                  <Button onClick={() => setOpenScroll(false)}>
                    Subscribe
                  </Button>
                </DialogActions>
              </Dialog>
            </Box>
            <Divider sx={{ my: 3 }} />
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" gutterBottom>
                Custom Styled & Transitions
              </Typography>
              <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
                <Button variant="outlined" onClick={() => setOpenCustom(true)}>
                  Custom Styled Dialog
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => setOpenTransition(true)}
                >
                  Slide Transition
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => setOpenFullScreen(true)}
                >
                  Full Screen
                </Button>
              </Stack>
              {/* Custom Styled Dialog */}
              <Dialog
                open={openCustom}
                onClose={() => setOpenCustom(false)}
                sx={{
                  "& .MuiDialog-paper": {
                    borderRadius: 2,
                    minWidth: 400,
                  },
                }}
              >
                <DialogTitle
                  sx={{
                    m: 0,
                    p: 2,
                    bgcolor: "primary.main",
                    color: "primary.contrastText",
                  }}
                >
                  Custom Styled Dialog
                  <IconButton
                    aria-label="close"
                    onClick={() => setOpenCustom(false)}
                    sx={{
                      position: "absolute",
                      right: 8,
                      top: 8,
                      color: "primary.contrastText",
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                </DialogTitle>
                <DialogContent sx={{ mt: 2 }}>
                  <Typography gutterBottom>
                    This dialog has custom styling applied to various elements.
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    The title has a colored background, custom close button, and
                    rounded corners.
                  </Typography>
                </DialogContent>
                <DialogActions sx={{ p: 2 }}>
                  <Button
                    onClick={() => setOpenCustom(false)}
                    variant="outlined"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={() => setOpenCustom(false)}
                    variant="contained"
                  >
                    Confirm
                  </Button>
                </DialogActions>
              </Dialog>
              {/* Slide Transition Dialog */}
              <Dialog
                open={openTransition}
                TransitionComponent={SlideTransition}
                keepMounted
                onClose={() => setOpenTransition(false)}
                aria-describedby="slide-dialog-description"
              >
                <DialogTitle>Slide Transition Dialog</DialogTitle>
                <DialogContent>
                  <DialogContentText id="slide-dialog-description">
                    This dialog slides up from the bottom using a custom
                    transition component.
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={() => setOpenTransition(false)}>
                    Cancel
                  </Button>
                  <Button onClick={() => setOpenTransition(false)}>
                    Agree
                  </Button>
                </DialogActions>
              </Dialog>
              {/* Full Screen Dialog */}
              <Dialog
                fullScreen
                open={openFullScreen}
                onClose={() => setOpenFullScreen(false)}
                TransitionComponent={SlideTransition}
              >
                <AppBar sx={{ position: "relative" }}>
                  <Toolbar>
                    <IconButton
                      edge="start"
                      color="inherit"
                      onClick={() => setOpenFullScreen(false)}
                      aria-label="close"
                    >
                      <CloseIcon />
                    </IconButton>
                    <Typography
                      sx={{ ml: 2, flex: 1 }}
                      variant="h6"
                      component="div"
                    >
                      Full Screen Dialog
                    </Typography>
                    <Button
                      autoFocus
                      color="inherit"
                      onClick={() => setOpenFullScreen(false)}
                    >
                      Save
                    </Button>
                  </Toolbar>
                </AppBar>
                <Container maxWidth="md" sx={{ mt: 4 }}>
                  <Typography variant="h4" gutterBottom>
                    Full Screen Content
                  </Typography>
                  <Typography paragraph>
                    This is a full-screen dialog. It's useful for complex forms,
                    editors, or when you need maximum screen space.
                  </Typography>
                  <Box sx={{ mt: 4 }}>
                    <TextField fullWidth label="Title" margin="normal" />
                    <TextField
                      fullWidth
                      label="Description"
                      multiline
                      rows={4}
                      margin="normal"
                    />
                  </Box>
                </Container>
              </Dialog>
            </Box>
            <Divider sx={{ my: 3 }} />
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" gutterBottom>
                List & Confirmation Dialogs
              </Typography>
              <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
                <Button variant="outlined" onClick={() => setOpenList(true)}>
                  List Dialog
                </Button>
                <Button variant="outlined" onClick={() => setOpenConfirm(true)}>
                  Confirmation Dialog
                </Button>
              </Stack>
              {/* List Dialog */}
              <Dialog onClose={() => setOpenList(false)} open={openList}>
                <DialogTitle>Select Account</DialogTitle>
                <List sx={{ pt: 0 }}>
                  {[
                    "user1@example.com",
                    "user2@example.com",
                    "Add account",
                  ].map((email) => (
                    <ListItem disableGutters key={email}>
                      <ListItemButton
                        onClick={() => {
                          setSelectedValue(email);
                          setOpenList(false);
                        }}
                      >
                        <ListItemAvatar>
                          <Avatar sx={{ bgcolor: "primary.main" }}>
                            {email === "Add account" ? (
                              <AddIcon />
                            ) : (
                              <PersonIcon />
                            )}
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={email} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Dialog>
              {/* Confirmation Dialog with Form */}
              <Dialog
                open={openConfirm}
                onClose={() => setOpenConfirm(false)}
                maxWidth="xs"
                fullWidth
              >
                <DialogTitle>Confirm Your Action</DialogTitle>
                <DialogContent>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <Avatar sx={{ bgcolor: "warning.main", mr: 2 }}>
                      <ErrorOutlineIcon />
                    </Avatar>
                    <Typography variant="body1">
                      Are you sure you want to proceed with this action?
                    </Typography>
                  </Box>
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="Don't ask me again"
                    />
                  </FormGroup>
                </DialogContent>
                <DialogActions sx={{ px: 3, pb: 2 }}>
                  <Button onClick={() => setOpenConfirm(false)} color="inherit">
                    Cancel
                  </Button>
                  <Button
                    onClick={() => setOpenConfirm(false)}
                    variant="contained"
                    color="warning"
                  >
                    Confirm
                  </Button>
                </DialogActions>
              </Dialog>
            </Box>
            <Divider sx={{ my: 3 }} />
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" gutterBottom>
                Dialog States & Variations
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                Selected value: {selectedValue}
              </Typography>
              <Stack spacing={2}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography variant="subtitle1" gutterBottom>
                      Dialog Best Practices
                    </Typography>
                    <List dense>
                      <ListItem>
                        <ListItemText
                          primary="Use dialogs sparingly"
                          secondary="Only for important actions that require user attention"
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Clear action buttons"
                          secondary="Primary action on the right, dismissive action on the left"
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Appropriate sizing"
                          secondary="Use fullWidth with maxWidth for responsive dialogs"
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Accessibility"
                          secondary="Always include proper ARIA labels and focus management"
                        />
                      </ListItem>
                    </List>
                  </CardContent>
                </Card>
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
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 4,
            }}
          >
            <Typography variant="h3" component="h1">
              MUI X Components
            </Typography>
            <ColorSchemeToggle />
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
