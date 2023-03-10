import "./App.css";
import Bar from "./Components/Toolbar/Bar";
import SideDrawer from "./Components/SideDrawer/SideDrawer";

function App() {
  return (
    <div className="App">
      <div style={{ height: "100%" }}>
        <Bar />
        <SideDrawer />
      </div>
    </div>
  );
}

export default App;
