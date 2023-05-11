import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfileAndLoss from "./pages/ProfileAndLoss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        {/* 손익계산서 화면 */}
        <Route path="/" element={<ProfileAndLoss />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
