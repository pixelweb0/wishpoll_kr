import { Routes, Route } from "react-router-dom";

import BizRequest from "./page/BizRequest";

function App() {
  return (
    <>
      <Routes>
        <Route index path="/" element={<BizRequest />} />
      </Routes>
    </>
  );
}

export default App;
