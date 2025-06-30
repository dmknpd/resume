import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          {/* <Route path="/test" element={<Test />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
