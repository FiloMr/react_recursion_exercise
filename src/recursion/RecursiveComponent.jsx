import React from "react";
import PropTypes from "prop-types";

function RecursiveComponent(props) {
  const { components } = props;
  if (components.length === 0) {
    return null;
  }

  const FirstComponent = components[0];
  const furtherComponents = components.slice(1);

  return (
    <div class="App-box">
      <FirstComponent>
        <RecursiveComponent components={furtherComponents} />
      </FirstComponent>
    </div>
  );
}

RecursiveComponent.propTypes = {
  components: PropTypes.arrayOf(PropTypes.elementType).isRequired,
};

export default RecursiveComponent;
