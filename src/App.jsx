import { Route, Routes } from "react-router-dom";
import { Header } from "./components";
import { UniversityList, UniversityDetails } from "./screens";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route key={"home"} path={"/"} element={<UniversityList />} />
        <Route
          key={"university-details"}
          path={"/university-details/:id"}
          element={<UniversityDetails />}
        />
      </Routes>
    </>
  );
}

export default App;
