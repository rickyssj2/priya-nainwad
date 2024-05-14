import { render } from "react-dom";
import App from "./App";
import { ThemeProvider } from "./contexts/theme";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

render(
  <ThemeProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById("root")
);
