import { Link } from "react-router-dom";
import { header } from "../../portfolio";
import Navbar from "../Navbar/Navbar";
import "./Header.css";
import { Box } from "@mui/material";

const Header = () => {
  const { homepage, title } = header;

  return (
    <Box sx={{ borderBottom: "1px solid var(--clr-tertiary)" }}>
      <header className="header center">
        <h3>
          {homepage ? (
            <Link to={homepage} className="link">
              {title}
            </Link>
          ) : (
            title
          )}
        </h3>
        <Navbar />
      </header>
    </Box>
  );
};

export default Header;
