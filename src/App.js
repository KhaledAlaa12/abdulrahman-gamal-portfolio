import "./App.css";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Loading from "./Components/Loading/Loading";
import LandingPage from "./Pages/LandingPage/LandingPage";

function App() {
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
          <LandingPage />
        </AnimatePresence>
      )}
    </>
  );
}

export default App;
