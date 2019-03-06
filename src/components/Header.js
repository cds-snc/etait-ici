import React from "react";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <div className="Header-header">
          <h2 data-testid="Header">Était ici!</h2>
          <p>
            \|||/
            <br />
            (o o)
            <br />
            ----ooO-(_)-Ooo----
            <br />
          </p>
        </div>
      </div>
    );
  }
}

export default Header;
