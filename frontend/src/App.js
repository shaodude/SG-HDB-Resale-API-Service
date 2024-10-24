import "./App.css";
import React, { useRef } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

const drawerWidth = 260;

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  marginLeft: -10,
  marginBottom: 20,
  border: `0px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "1rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "transparent",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
}));

const core_first_response = `{
  "id": 19,
  "title": "Opna Women's Short Sleeve Moisture",
  "price": 7.95,
  "description": "100% Polyester, Machine wash, 100% cationic polyester interlock",
  "category": "women's clothing",
  "image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
  "rating": {
    "rate": 4.5,
    "count": 146
  }
}`;

const core_second_response = `{
  "id": 19,
  "title": "Opna Women's Short Sleeve Moisture",
  "price": 7.95,
  "description": "100% Polyester, Machine wash, 100% cationic polyester interlock",
  "category": "women's clothing",
  "image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
  "rating": {
    "rate": 4.5,
    "count": 146
  }
}`;

const core_third_response = `{
  "id": 19,
  "title": "Opna Women's Short Sleeve Moisture",
  "price": 7.95,
  "description": "100% Polyester, Machine wash, 100% cationic polyester interlock",
  "category": "women's clothing",
  "image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
  "rating": {
    "rate": 4.5,
    "count": 146
  }
}`;

const core_fourth_response = `{
  "id": 19,
  "title": "Opna Women's Short Sleeve Moisture",
  "price": 7.95,
  "description": "100% Polyester, Machine wash, 100% cationic polyester interlock",
  "category": "women's clothing",
  "image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
  "rating": {
    "rate": 4.5,
    "count": 146
  }
}`;

function App() {
  const sectionsData = [
    { label: "Introduction", ref: useRef(null), className: "intro" },
    { label: "Core Events", ref: useRef(null), className: "core_first" },
    { label: "Get Transactions", ref: useRef(null), className: "core_second" },
    {
      label: "Get Transaction by Id",
      ref: useRef(null),
      className: "core_third",
    },
    {
      label: "Get Transactions by Price",
      ref: useRef(null),
      className: "core_fourth",
    },
  ];

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (event, index) => {
    // Move to a certain div on the page based on the index
    setSelectedIndex(index);

    const targetElement = sectionsData[index].ref.current;

    if (targetElement) {
      const headerOffset = 120; // Adjust for fixed header
      const elementPosition =
        targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      // Scroll to the element
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const DefaultSubSection = ({ title, body, variant }) => {
    let titleVariant;

    if (variant === "API") {
      titleVariant = "h5";
    } else {
      titleVariant = "h6"; // Default variant
    }

    return (
      <Box>
        <Typography variant={titleVariant} sx={{ marginBottom: 1 }}>
          {title}
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 4 }}>
          {body}
        </Typography>
      </Box>
    );
  };

  const TopBar = () => {
    return (
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            SG HDB Resale API
          </Typography>
        </Toolbar>
      </AppBar>
    );
  };

  const PermDrawer = () => {
    return (
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <ListItem key={"Introduction"} disablePadding>
          <ListItemButton
            selected={selectedIndex === 0}
            onClick={(event) => handleListItemClick(event, 0)}
          >
            <ListItemText primary={"Introduction"} />
          </ListItemButton>
        </ListItem>
        <Divider />

        <List disablePadding>
          <ListItem key={"Core Events"} disablePadding>
            <ListItemButton onClick={(event) => handleListItemClick(event, 1)}>
              <ListItemText primary={"Core Events"} />
            </ListItemButton>
          </ListItem>

          {[
            "Get Transactions",
            "Get Transaction by Id",
            "Get Transactions by Price",
            "Get Average Price",
          ].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton
                selected={selectedIndex === index + 1}
                onClick={(event) => handleListItemClick(event, index + 1)}
              >
                <ListItemText style={{ paddingLeft: 10 }} primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List disablePadding>
          <ListItem key={"Helper Events"} disablePadding>
            <ListItemButton>
              <ListItemText primary={"Helper Events"} />
            </ListItemButton>
          </ListItem>
          {["Get Distinct Flat Types", "Get Distinct Street Names"].map(
            (text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton
                  selected={selectedIndex === index + 5}
                  onClick={(event) => handleListItemClick(event, index + 5)}
                >
                  <ListItemText style={{ paddingLeft: 10 }} primary={text} />
                </ListItemButton>
              </ListItem>
            )
          )}
        </List>
        <Divider />
        <ListItem key={"Sample Use Cases"} disablePadding>
          <ListItemButton
            selected={selectedIndex === 7}
            onClick={(event) => handleListItemClick(event, 7)}
          >
            <ListItemText primary={"Sample Use Cases"} />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem key={"Project Roadmap"} disablePadding>
          <ListItemButton
            selected={selectedIndex === 8}
            onClick={(event) => handleListItemClick(event, 8)}
          >
            <ListItemText primary={"Project Roadmap"} />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem key={"Others"} disablePadding>
          <ListItemButton
            selected={selectedIndex === 9}
            onClick={(event) => handleListItemClick(event, 9)}
          >
            <ListItemText primary={"Others"} />
          </ListItemButton>
        </ListItem>
      </Drawer>
    );
  };

  const IntroSection = () => {
    return (
      <Box component="section" sx={{ marginBottom: 12 }}>
        <Box
          ref={sectionsData[0].ref}
          className={sectionsData[0].label}
          sx={{ marginBottom: 4 }}
        >
          <Typography
            variant="h5"
            sx={{ textDecoration: "underline", textUnderlineOffset: 8 }}
          >
            Introduction
          </Typography>
        </Box>
        <Box>
          <DefaultSubSection
            title={"API Documentation"}
            body={
              "Proident esse adipisicing esse do ea reprehenderit labore tempor eiusmod non velit eiusmod consectetur. Nisi est non laborum pariatur culpa laboris duis proident adipisicing do do. Laboris amet amet elit sit ullamco. Elit veniam aliquip aute sint enim exercitation ullamco do irure occaecat. Eu Lorem ex magna occaecat. In deserunt exercitation est amet exercitation officia sunt proident excepteur qui aute tempor. Consectetur non occaecat excepteur adipisicing deserunt enim occaecat duis cillum occaecat consectetur eiusmod."
            }
          />
          <DefaultSubSection
            title={"Usage"}
            body={
              "Proident esse adipisicing esse do ea reprehenderit labore tempor eiusmod non velit eiusmod consectetur. Nisi est non laborum pariatur culpa laboris duis proident adipisicing do do. Laboris amet amet elit sit ullamco. Elit veniam aliquip aute sint enim exercitation ullamco do irure occaecat. Eu Lorem ex magna occaecat. In deserunt exercitation est amet exercitation officia sunt proident excepteur qui aute tempor. Consectetur non occaecat excepteur adipisicing deserunt enim occaecat duis cillum occaecat consectetur eiusmod."
            }
          />
          <DefaultSubSection
            title={"Response Types"}
            body={
              "Proident esse adipisicing esse do ea reprehenderit labore tempor eiusmod non velit eiusmod consectetur. Nisi est non laborum pariatur culpa laboris duis proident adipisicing do do. Laboris amet amet elit sit ullamco. Elit veniam aliquip aute sint enim exercitation ullamco do irure occaecat. Eu Lorem ex magna occaecat. In deserunt exercitation est amet exercitation officia sunt proident excepteur qui aute tempor. Consectetur non occaecat excepteur adipisicing deserunt enim occaecat duis cillum occaecat consectetur eiusmod."
            }
          />
          <DefaultSubSection
            title={"Response Codes"}
            body={
              "Proident esse adipisicing esse do ea reprehenderit labore tempor eiusmod non velit eiusmod consectetur. Nisi est non laborum pariatur culpa laboris duis proident adipisicing do do. Laboris amet amet elit sit ullamco. Elit veniam aliquip aute sint enim exercitation ullamco do irure occaecat. Eu Lorem ex magna occaecat. In deserunt exercitation est amet exercitation officia sunt proident excepteur qui aute tempor. Consectetur non occaecat excepteur adipisicing deserunt enim occaecat duis cillum occaecat consectetur eiusmod."
            }
          />
        </Box>
      </Box>
    );
  };

  const CoreEvents = () => {
    return (
      <div>
        <Box>
          {/* Header */}
          <Box
            ref={sectionsData[1].ref}
            className={sectionsData[1].label}
            sx={{ marginBottom: 4 }}
          >
            <Typography
              variant="h5"
              sx={{ textDecoration: "underline", textUnderlineOffset: 8 }}
            >
              Core Events
            </Typography>
          </Box>

          {/* Get transaction section */}
          <Box sx={{ marginBottom: 12 }}>
            <DefaultSubSection
              title={"Get Transactions"}
              variant={"API"}
              body={
                "Proident esse adipisicing esse do ea reprehenderit labore tempor eiusmod non velit eiusmod consectetur. Nisi est non laborum pariatur culpa laboris duis proident adipisicing do do. Laboris amet amet elit sit ullamco. Elit veniam aliquip aute sint enim exercitation ullamco do irure occaecat. Eu Lorem ex magna occaecat. In deserunt exercitation est amet exercitation officia sunt proident excepteur qui aute tempor. Consectetur non occaecat excepteur adipisicing deserunt enim occaecat duis cillum occaecat consectetur eiusmod."
              }
            />
            <Box sx={{ marginBottom: 4 }}>
              <Typography variant="h6" sx={{ marginBottom: 1 }}>
                Example Request
              </Typography>
              <SyntaxHighlighter language="xml" style={dracula} showLineNumbers>
                http://localhost:3000/SG-HDB-Resale-API-Service/
              </SyntaxHighlighter>
            </Box>
            <Box sx={{ marginBottom: 4 }}>
              <Typography variant="h6" sx={{ marginBottom: 1 }}>
                Example Response
              </Typography>
              <SyntaxHighlighter
                language="javascript"
                style={dracula}
                showLineNumbers
              >
                {core_first_response}
              </SyntaxHighlighter>
            </Box>
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <Typography variant="h6">Parameters</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                aria-controls="panel2d-content"
                id="panel2d-header"
              >
                <Typography variant="h6">Response Schema</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Box>
        <Box
          ref={sectionsData[2].ref}
          className={sectionsData[2].label}
          sx={{ marginBottom: 12 }}
        >
          <DefaultSubSection
            title={"Get Transactions by Id"}
            variant={"API"}
            body={
              "Proident esse adipisicing esse do ea reprehenderit labore tempor eiusmod non velit eiusmod consectetur. Nisi est non laborum pariatur culpa laboris duis proident adipisicing do do. Laboris amet amet elit sit ullamco. Elit veniam aliquip aute sint enim exercitation ullamco do irure occaecat. Eu Lorem ex magna occaecat. In deserunt exercitation est amet exercitation officia sunt proident excepteur qui aute tempor. Consectetur non occaecat excepteur adipisicing deserunt enim occaecat duis cillum occaecat consectetur eiusmod."
            }
          />
          <Box sx={{ marginBottom: 4 }}>
            <Typography variant="h5" sx={{ marginBottom: 1 }}>
              Example Request
            </Typography>
            <SyntaxHighlighter language="xml" style={dracula} showLineNumbers>
              http://localhost:3000/SG-HDB-Resale-API-Service/
            </SyntaxHighlighter>
          </Box>
          <Box sx={{ marginBottom: 4 }}>
            <Typography variant="h5" sx={{ marginBottom: 1 }}>
              Example Response
            </Typography>
            <SyntaxHighlighter
                language="javascript"
                style={dracula}
                showLineNumbers
              >
                {core_second_response}
              </SyntaxHighlighter>
          </Box>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography variant="h5">Parameters</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="h6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              aria-controls="panel4d-content"
              id="panel4d-header"
            >
              <Typography variant="h5">Response Schema</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="h6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>

        <Box>
          <Box
            ref={sectionsData[3].ref}
            className={sectionsData[3].label}
            sx={{ marginBottom: 12 }}
          >
            <DefaultSubSection
              title={"Get Transactions by Price"}
              variant={"API"}
              body={
                "Proident esse adipisicing esse do ea reprehenderit labore tempor eiusmod non velit eiusmod consectetur. Nisi est non laborum pariatur culpa laboris duis proident adipisicing do do. Laboris amet amet elit sit ullamco. Elit veniam aliquip aute sint enim exercitation ullamco do irure occaecat. Eu Lorem ex magna occaecat. In deserunt exercitation est amet exercitation officia sunt proident excepteur qui aute tempor. Consectetur non occaecat excepteur adipisicing deserunt enim occaecat duis cillum occaecat consectetur eiusmod."
              }
            />
            <Box sx={{ marginBottom: 4 }}>
              <Typography variant="h5" sx={{ marginBottom: 1 }}>
                Example Request
              </Typography>
              <SyntaxHighlighter language="xml" style={dracula} showLineNumbers>
                http://localhost:3000/SG-HDB-Resale-API-Service/
              </SyntaxHighlighter>
            </Box>
            <Box sx={{ marginBottom: 4 }}>
              <Typography variant="h5" sx={{ marginBottom: 1 }}>
                Example Response
              </Typography>
              <SyntaxHighlighter
                language="javascript"
                style={dracula}
                showLineNumbers
              >
                {core_third_response}
              </SyntaxHighlighter>
            </Box>
            <Accordion
              expanded={expanded === "panel5"}
              onChange={handleChange("panel5")}
            >
              <AccordionSummary
                aria-controls="panel5d-content"
                id="panel5d-header"
              >
                <Typography variant="h5">Parameters</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="h6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel6"}
              onChange={handleChange("panel6")}
            >
              <AccordionSummary
                aria-controls="panel6d-content"
                id="panel6d-header"
              >
                <Typography variant="h5">Response Schema</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="h6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Box>

        <Box>
          <Box
            ref={sectionsData[4].ref}
            className={sectionsData[4].label}
            sx={{ marginBottom: 12 }}
          >
            <DefaultSubSection
              title={"Get Average Price"}
              variant={"API"}
              body={
                "Proident esse adipisicing esse do ea reprehenderit labore tempor eiusmod non velit eiusmod consectetur. Nisi est non laborum pariatur culpa laboris duis proident adipisicing do do. Laboris amet amet elit sit ullamco. Elit veniam aliquip aute sint enim exercitation ullamco do irure occaecat. Eu Lorem ex magna occaecat. In deserunt exercitation est amet exercitation officia sunt proident excepteur qui aute tempor. Consectetur non occaecat excepteur adipisicing deserunt enim occaecat duis cillum occaecat consectetur eiusmod."
              }
            />
            <Box sx={{ marginBottom: 4 }}>
              <Typography variant="h5" sx={{ marginBottom: 1 }}>
                Example Request
              </Typography>
              <SyntaxHighlighter language="xml" style={dracula} showLineNumbers>
                http://localhost:3000/SG-HDB-Resale-API-Service/
              </SyntaxHighlighter>
            </Box>
            <Box sx={{ marginBottom: 4 }}>
              <Typography variant="h5" sx={{ marginBottom: 1 }}>
                Example Response
              </Typography>
              <SyntaxHighlighter
                language="javascript"
                style={dracula}
                showLineNumbers
              >
                {core_fourth_response}
              </SyntaxHighlighter>
            </Box>
            <Accordion
              expanded={expanded === "panel7"}
              onChange={handleChange("panel7")}
            >
              <AccordionSummary
                aria-controls="panel7d-content"
                id="panel7d-header"
              >
                <Typography variant="h5">Parameters</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="h6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel8"}
              onChange={handleChange("panel8")}
            >
              <AccordionSummary
                aria-controls="panel8d-content"
                id="panel8d-header"
              >
                <Typography variant="h5">Response Schema</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="h6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Box>
      </div>
    );
  };

  return (
    <div>
      <header>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <TopBar />
          <PermDrawer />

          <Box component="main" sx={{ flexGrow: 1, p: 8 }}>
            <Toolbar />
            <IntroSection />
            <CoreEvents />
          </Box>
        </Box>
      </header>
    </div>
  );
}

export default App;
