import React from "react";
import Name from "./Name";
import "./List.css";

const data = [
  { name: "CDS-SNC", date: "12.02.2019", plural: true },
  { name: "L'équipe de la Plateforme", date: "12.02.2019", plural: true },
  { name: "Khalid", date: "13.02.2019", plural: false },
  { name: "Dan", date: "13.02.2019", plural: false },
  { name: "Élenchos", date: "11.03.2019", plural: false },
  { name: "Michael", date: "04.04.2019", plural: false },
  { name: "Haitham Ahmad", date: "04.04.2019", plural: false }
];

const listItems = data.map((row, index) => (
  <li key={index}>
    <Name name={row.name} date={row.date} plural={row.plural} />
  </li>
));

class List extends React.Component {
  render() {
    return (
      <div className="ListHold">
        <div>Log Reporter V4</div>
        <ul className="List" data-testid="List">
          {listItems}
        </ul>
      </div>
    );
  }
}

export default List;
