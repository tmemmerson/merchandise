import React from "react";
import PropTypes from "prop-types";

function Item(props) {
  return (
    <React.Fragment>
      <h3>
        {props.name} (In Stock: {props.quantity})
      </h3>
      <p>
        <em>{props.description}</em>
      </p>
      <hr />
    </React.Fragment>
  );
}

Item.propTypes = {
  name: PropTypes.string,
  quantity: PropTypes.number,
  description: PropTypes.string,
};

export default Item;
