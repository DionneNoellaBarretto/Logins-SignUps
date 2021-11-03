import "./App.css";
import React from "react";
import One from "components/One";
import Two from "components/Two";
import Three from "components/Three";
import Four from "components/Four";
import Five from "components/Five";
import Six from "components/Six";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 one"> <One /> </div>
          <div className="col-lg-6 two"><Two /></div>
          <div className="col-lg-6 three"><Three /></div>
          <div className="col-lg-6 four"><Four /></div>
          <div className="col-lg-6 five"><Five /></div>
          <div className="col-lg-6 six"><Six /></div>
        </div>
      </div>
    </div>
  );
}

export default App;
