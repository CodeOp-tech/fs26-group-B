import {

  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  HomeIcon,
  AccountBoxIcon,
  Drawer,
} from "../muiImports";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";

export default function Menu({ open, onClose }) {
  const [menu, setMenu] = useState(open);

  useEffect(() => {
    setMenu(open);
  }, [open]);

  const toggleMenu = () => {
    setMenu(!menu);
    onClose();
  };

  return (
    <div>
      <Drawer anchor="right" open={menu} onClose={toggleMenu} >
        {menu && (
          <nav aria-label="main mailbox folders">
            <List sx={{ width: 220 }}>
              <ListItem className="nav-links" disablePadding>
                <Link to="/home">
                  <ListItemButton>
                    <ListItemIcon>
                      <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                  </ListItemButton>
                </Link>
              </ListItem>
              <ListItem className="nav-links" disablePadding>
                <Link to="/profile">
                  <ListItemButton>
                    <ListItemIcon>
                      <AccountBoxIcon />
                    </ListItemIcon>
                    <ListItemText primary="My Profile" />
                  </ListItemButton>
                </Link>
              </ListItem>
              <ListItem className="nav-links" disablePadding>
                <Link to="/notifications">
                  <ListItemButton>
                    <ListItemIcon>
                      <NotificationsNoneRoundedIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Notifications" />
                  </ListItemButton>
                </Link>
              </ListItem>
            </List>
          </nav>
        )}
      </Drawer>
    </div>
  );
}
