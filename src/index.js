import ReactDOM from "react-dom/client";
import Header from "./Layout/Header";
import Counter from "./Counter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Header />
    <Counter />
  </div>
);
