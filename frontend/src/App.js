import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
<div className="flex ">
  <Sidebar/>
  <div>
  <Navbar/>
  <div>home</div>
  </div>
</div>
  );
}

export default App;
