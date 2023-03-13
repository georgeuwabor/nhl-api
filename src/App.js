import "./App.css";
import Bar from "./Components/Toolbar/Bar";
import SideDrawer from "./Components/SideDrawer/SideDrawer";
import Backdrop from "./Components/Backdrop/Backdrop";

function App() {
  return (
    <div className="App">
      <div style={{ height: "100%" }}>
        <Bar />
        <SideDrawer />
        <Backdrop />
      </div>
    </div>
  );
}

export default App;
