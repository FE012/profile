import { BrowserRouter, Route, Routes } from "react-router-dom";
import Headers from "./components/Headers";
import Home from "./page/Home";
import Resume from "./page/Resume";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Headers />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/resume" element={<Resume />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
