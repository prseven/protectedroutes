import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Protected from "./Protected";
import Product from "./Product";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* <Route path="/" element={<Protected Component={Home} />} />
          <Route path="/about" element={<Protected Component={About} />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
