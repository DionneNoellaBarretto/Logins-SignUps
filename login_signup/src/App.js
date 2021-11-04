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
          <div className="col-lg-2 one"> <One /> </div>
          <div className="col-lg-2 two"><Two /></div>
          <div className="col-lg-2 three"><Three /></div>
          <div className="col-lg-2 four"><Four /></div>
          <div className="col-lg-2 five"><Five /></div>
          <div className="col-lg-2 six"><Six /></div>
        </div>
      </div>
    </div>
  );
}

export default App;
