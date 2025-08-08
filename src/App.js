import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage";
import WeatherApp from "./weather/src/App";
import QuoteChatApp from "./quote_chat/src";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
