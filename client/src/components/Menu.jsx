import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  HomeIcon,
  AccountBoxIcon,
} from "../muiImports";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Menu() {
  const [menu, setMenu] = useState();

  useEffect(() => {
    setMenu(true);

    return () => {
      setMenu(false);
    };
  }, []);

  return (
    <div>
      <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {menu && (
          <nav aria-label="main mailbox folders">
            <List>
              <ListItem disablePadding>
                <Link to="/home">
                  <ListItemButton>
                    <ListItemIcon>
                      <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                  </ListItemButton>
                </Link>
              </ListItem>
              <ListItem disablePadding>
                <Link to="/profile">
                  <ListItemButton>
                    <ListItemIcon>
                      <AccountBoxIcon />
                    </ListItemIcon>
                    <ListItemText primary="My Profile" />
                  </ListItemButton>
                </Link>
              </ListItem>
            </List>
          </nav>
        )}
      </Box>
    </div>
  );
}
