import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Footer from "./pages/Shared/Footer/Footer";
import Header from "./pages/Shared/Header/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import publicRoute from "./routes/publicRoute";

function App() {
  return (
    <>
      <Header />
      <Routes>
        {publicRoute.map(({ path, Component }, index) => {
          return <Route key={index} path={path} element={<Component />} />;
        })}
      </Routes>
      <ToastContainer />
      <Footer />
    </>
  );
}

export default App;
