import React from "react";
import Item from "./Item";
import PropTypes from "prop-types";

// remove const masterTicketList = [ ... ]. We no longer want these.

function ItemList(props) {
  // Add props as parameter.
  return (
    <React.Fragment>
      <hr />
      {props.itemList.map((
        item,
        index // Loop through the list passed down from TicketControl.
      ) => (
        <Item
          name={item.name}
          quantity={item.quantity}
          description={item.description}
          key={index}
        />
      ))}
    </React.Fragment>
  );
}

// Add propTypes for ticketList.
ItemList.propTypes = {
  itemList: PropTypes.array,
};

export default ItemList;
