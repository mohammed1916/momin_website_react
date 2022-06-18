import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Start from "./Pages/Start/Start";
import ResponsiveAppBar from "./Components/Navbar/ResponsiveAppBar";
import About from "./Pages/About/About";
import Site from "./Pages/Site/Site";
import Footer from "./Components/Footer/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <ResponsiveAppBar />
      <Routes>
        <Route>
          <Route path="/home" exact element={<Start />} />
          <Route path="/about" element={<About />} />
          <Route path="/:site/site" element={<Site />} />
        </Route>
      </Routes>
      <Footer />

    </BrowserRouter>
  );
}
