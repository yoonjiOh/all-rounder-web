import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfileAndLossDirectPage from "./pages/ProfitAndLossDirectPage";
import ProfitAndLossExcelPage from "./pages/ProfitAndLossExcelPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* 손익계산서 직접 입력 화면 */}
          <Route path="/" element={<ProfileAndLossDirectPage />} />
          {/* 손익계산서 엑셀 입력 화면 */}
          <Route
            path="/profile-and-loss/excel"
            element={<ProfitAndLossExcelPage />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
