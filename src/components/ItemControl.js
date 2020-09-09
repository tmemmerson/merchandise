import React from "react";
import NewItemForm from "./NewItemForm";
import ItemList from "./ItemList";
import Counter from "./counter";

class ItemControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterItemList: [],
    };
  }
  handleAddingNewItemToList = (newItem) => {
    const newMasterItemList = this.state.masterItemList.concat(newItem);
    this.setState({
      masterItemList: newMasterItemList,
      formVisibleOnPage: false,
    });
  };
  handleClick = () => {
    this.setState((prevState) => ({
      formVisibleOnPage: !prevState.formVisibleOnPage,
    }));
  };

  render() {
    let currentlyVisibleState = null;
    let buttonText = null; // new code
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = (
        <NewItemForm onNewItemCreation={this.handleAddingNewItemToList} />
      );
      buttonText = "Return to Item List"; // new code
    } else {
      currentlyVisibleState = <ItemList itemList={this.state.masterItemList} />;
      buttonText = "Add Item"; // new code
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>{" "}
        {/* new code */}
      </React.Fragment>
    );
  }
}
export default ItemControl;
