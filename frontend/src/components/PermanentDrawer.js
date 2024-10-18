import * as React from "react";
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

const drawerWidth = 260;

export default function PermanentDrawer() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
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
            <ListItemButton>
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
              <ListItemButton>
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
                <ListItemButton>
                  <ListItemText style={{ paddingLeft: 10 }} primary={text} />
                </ListItemButton>
              </ListItem>
            )
          )}
        </List>
        <Divider />
        <ListItem key={"Sample Use Cases"} disablePadding>
          <ListItemButton>
            <ListItemText primary={"Sample Use Cases"} />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem key={"Project Roadmap"} disablePadding>
          <ListItemButton>
            <ListItemText primary={"Project Roadmap"} />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem key={"Others"} disablePadding>
          <ListItemButton>
            <ListItemText primary={"Others"} />
          </ListItemButton>
        </ListItem>
      </Drawer>
    </Box>
  );
}
