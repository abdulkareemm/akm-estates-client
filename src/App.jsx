import { Navbar } from "./components";
import "./layout.scss";
import { Home } from "./routes";
function App() {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
