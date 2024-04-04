import { Routes, Route } from "react-router-dom";

import BizRequest from "./biz_request/BizRequest";

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
