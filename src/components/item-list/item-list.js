import React from "react";
import "./item-list.css";

const ItemList = (props) => {

  const { itemList, onItemSelected, children: renderLabel } = props;

  const renderItems = (arr) => {
    return arr.map((item) => {
      const { id } = item;
      const label = renderLabel(item);
      return (<li key={id}
        onClick={() => onItemSelected(id)}>
        {label}
      </li>
      )
    })
  }

  const items = renderItems(itemList);
  return (
    <div className="item-list jumbotron rounded" >
      <ul className="item-list_data">
        {items}
      </ul>
    </div>

  )
}

export default ItemList;

