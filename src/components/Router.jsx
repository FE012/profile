import { Route, Routes } from "react-router-dom";
import Home from "../page/Home";
import Resume from "../page/Resume";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/resume" element={<Resume />}></Route>
    </Routes>
  );
}

export default Router;
