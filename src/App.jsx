import { BrowserRouter, Routes, Route } from "react-router-dom";
import Insta from "./components/Insta";
import Whatsapp from "./components/Whatsapp";
import Call from "./components/Call";
import Map from "./components/Map";
import TheNailRepublic from "./pages/TheNailRepublic";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TheNailRepublic />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
