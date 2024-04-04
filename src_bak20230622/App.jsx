import { Routes, Route } from "react-router-dom";
import GlobalStyles from "../src/styles/GlobalStyles";

import "./App.css";

import BizRequest from "page/BizRequest";

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route index path="/" element={<BizRequest />} />
      </Routes>
    </>
  );
}

export default App;
