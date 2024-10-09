import "./App.css";
import Footer from "./components/Footer";

import Navbar from "./components/Navbar";
import OptionBox from "./components/OptionBox";

function App() {
  return (
    <>
      <Navbar />
      <div className="main-container min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="overlay"></div>
        <OptionBox />
      </div>
      <Footer />
    </>
  );
}

export default App;
