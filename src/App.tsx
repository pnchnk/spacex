import { Routes, Route } from "react-router-dom";

//Pages
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
        </Route>
        <Route path="/favorites">
          <Route index element={<Favorites />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
