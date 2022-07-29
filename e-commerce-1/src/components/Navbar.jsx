import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

const pages = ["Products", "Pricing", "Blog"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box style={{ cursor: "pointer" }} sx={{ flexGrow: 0 }}>
            Login
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
