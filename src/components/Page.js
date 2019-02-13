import React from "react";
import Header from "./Header";
import List from "./List";

class Page extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <List />
      </div>
    );
  }
}

export default Page;
