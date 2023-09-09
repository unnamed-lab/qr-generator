import React, { useEffect } from "react";
import QRGenerator from "./QRCode";
import Donate from "./Donate";
import "../styles/css/index.css";

function App() {
  const [textInput, setTextInput] = React.useState(
    sessionStorage.getItem("text-input") || "Follow me on X: https://x.com/unnamed_labs.com/"
  );

  useEffect(() => {
    sessionStorage.setItem("text-input", textInput);
  }, [textInput]);

  return (
    <>
      <div className="container">
        <div className="intro">
          <h1>Unnamed QR Generator</h1>
        </div>
        <div className="row">
          <div className="qr-container">
            <QRGenerator text={textInput} />
          </div>

          <div className="info">
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              className="form-container"
            >
              <div className="form-group">
                <label htmlFor="textBox">
                  Input Data:
                </label>
                <input
                  type="text"
                  name=""
                  id="textBox"
                  className="form-input"
                  placeholder={textInput}
                />
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  name=""
                  id=""
                  className="form-input submit"
                  onClick={() =>
                    setTextInput(document.getElementById("textBox").value)
                  }
                />
              </div>
            </form>
          </div>
        </div>
      </div>

      <Donate />
    </>
  );
}

export default App;
