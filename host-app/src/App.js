// src/App.js
import React, { Suspense } from "react";
import StickyFooter from "./Footer/Footer";

// Dynamically import the remote component
const RemoteComponent = React.lazy(() => import("remoteApp/Button"));
const NavbarComponent = React.lazy(() => import("remoteApp/PrimarySearchAppBar"));
const ProductComponent = React.lazy(() => import("remoteAppProduct/Products"));


console.log("RemoteComponent",RemoteComponent)
function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading Remote Component...</div>}>
        <NavbarComponent/>
        <ProductComponent/>
      </Suspense>
      <StickyFooter/>
    </div>
  );
}

export default App;
