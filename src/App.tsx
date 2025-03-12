import { Outlet } from "react-router-dom";
import NavBar from "./components/mono/nav-bar";
import Header from "./components/mono/header";
import Footer from "./components/mono/footer";

function App() {
  return (
    <main className="font-mono">
      <Header />
      <NavBar />
      <Outlet />
      <Footer />
    </main>
  );
}

export default App;
