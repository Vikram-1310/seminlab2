import React from "react";
import PageHeader from "./PageHeader.jsx";

function App() {
  return (
    <div className="navbar">
      <PageHeader title="Home" />
      <PageHeader title="About" />
      <PageHeader title="Contact" />
    </div>
  );
}

export default App;