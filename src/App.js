import { useContext } from "react";
import { ThemeContext } from "./contexts/theme";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Footer from "./components/Footer/Footer";
import "./App.css";
import Home from "./pages/Home/Home";
import ProjectDetail from "./pages/ProjectDetail/ProjectDetail";
import Resume from "./pages/Resume/Resume";
import ProjectPage from "./pages/ProjectPage/ProjectPage";

const App = () => {
  const [{ themeName }] = useContext(ThemeContext);

  return (
    <div id="top" className={`${themeName} app`}>
      <Header />
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/projects" element={<ProjectPage></ProjectPage>} />
        <Route
          path="projects/:slug"
          element={<ProjectDetail></ProjectDetail>}
        />
        <Route path="/work-experience" element={<Resume></Resume>} />
      </Routes>
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default App;
