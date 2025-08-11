import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage";
import WeatherApp from "./weather/src/App";
import QuoteChatApp from "./quote_chat/src";
import UploadApp from "./up_load/src/App";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* weather */}
        <Route path="/weather/*" element={<WeatherApp />} />
        {/* QuoteChat */}
        <Route path="/chat/*" element={<QuoteChatApp />} />

        {/* Upload */}

        <Route path="/up_load/*" element={<UploadApp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
