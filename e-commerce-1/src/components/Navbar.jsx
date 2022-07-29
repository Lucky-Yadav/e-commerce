import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            Products Pricing Blog
          </Box>
          <Link to="/login">
            <Box style={{ cursor: "pointer" }} sx={{ flexGrow: 0 }}>
              Login
            </Box>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
