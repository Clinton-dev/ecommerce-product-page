import { useState } from "react";

import Navbar from "./Navbar";
import Product from "./Product";

function App() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <Product />
    </div>
  );
}

export default App;
