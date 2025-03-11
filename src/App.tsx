import { Outlet } from "react-router-dom";
import NavBar from "./components/mono/nav-bar";
import Header from "./components/mono/header";

function App() {
  return (
    <main className="font-mono">
      <Header />
      <NavBar />
      <Outlet />
    </main>
  );
}

export default App;
