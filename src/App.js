import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import Portfolio from "./Pages/Portfolio/Portfolio";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Loading from "./Pages/Loading/Loading";
import Contact from "./Pages/Contact/Contact";

function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      )}
    </>
  );
}

export default App;
