import "./index.css";

import { store } from "./store/store";
import { Provider } from "react-redux";
import QuoteChat from "./App";

export default function QuoteChatApp() {
  return (
    <Provider store={store}>
      <QuoteChat />
    </Provider>
  );
}
