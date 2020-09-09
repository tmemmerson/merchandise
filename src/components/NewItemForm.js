import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";

function NewItemForm(props) {
  function handleNewItemFormSubmission(event) {
    event.preventDefault();
    props.onNewItemCreation({
      name: event.target.name.value,
      quantity: event.target.quantity.value,
      description: event.target.description.value,
      id: v4(),
    });
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewItemFormSubmission}>
        <input type="text" name="name" placeholder="name" />
        <input type="number" name="quantity" placeholder="quantity" />
        <textarea name="description" placeholder="product description." />
        <button type="submit">ADD</button>
      </form>
    </React.Fragment>
  );
}

NewItemForm.propTypes = {
  onNewItemCreation: PropTypes.func,
};

export default NewItemForm;
