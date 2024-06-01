import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Header.css";
import { Box } from "@mui/material";

const Header = () => {
  return (
    <Box sx={{ borderBottom: "1px solid var(--clr-tertiary)" }}>
      <header className="header center">
        <h3>
          <Link to="/" className="link">
            Priya Nainwad
          </Link>
        </h3>
        <Navbar />
      </header>
    </Box>
  );
};

export default Header;
