import { Routes, Route } from "react-router";
import Layout from "./layout/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Missing from "./pages/Missing";
import Collections from "./pages/Collections";
import ProducDetails from "./pages/ProducDetails";
import { ProductProvider } from "./context/ProductContext";
import Cart from "./pages/Cart";

function App() {
  return (
    <ProductProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Collections />} />
          <Route path=":id" element={<ProducDetails />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
    </ProductProvider>
  );
}

export default App;
