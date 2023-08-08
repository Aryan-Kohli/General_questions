import React from "react";
import Card from "./card";
import Data from "./data";
import Header from "./header";
import Footer from "./footer";
function App() {
  const datacard = Data.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">{datacard}</div>
      </div>
      <Footer />
    </>
  );
}

export default App;
