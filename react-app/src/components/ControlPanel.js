import React from 'react';
import PropTypes from 'prop-types';

class ControlPanel extends React.Component {
  // Pass props to the constructor / super to access them in the constructor.
  constructor(props) {
    super(props);

    // Create row controls
    const rowOptions = [5, 10, 25, 50];
    const rowControl = {};

    rowOptions.forEach(function(item) {
      if (item === this.props.rows) {
        rowControl[item] = {
          rows: item,
          active: true,
          className: "pt-button pt-intent-primary pt-active"
        };
      }
      else {
        rowControl[item] = {
          rows: item,
          active: false,
          className: "pt-button pt-intent-primary"
        }
      }
    }, this);

    this.state = {
      rowControl
    };
  }

  handleRowChange = (numRows) => {
    this.props.setRows(numRows);
    const rowControl = {...this.state.rowControl};
    // TODO - Is there a better pattern for iterating through an object?
    const rowControlIds = Object.keys(rowControl);
    rowControlIds.map((key) => {
      if (key === numRows) {
        return rowControl[key].className = "pt-button pt-intent-primary pt-active";
      }
      else {
        return rowControl[key].className = "pt-button pt-intent-primary";
      }
    });
  };

  render() {
    const rowControlIds = Object.keys(this.state.rowControl);
    return (
      // Todo - convert clases to BEM style syntax
      <div className="control-panel">
        <h2>Best of Best Of 2016</h2>
        <p>Number of Results:</p>
        <div className="pt-button-group pt-large pt-fill">
          {/* Could convert this to a render function but I think below is more readable */}
          {rowControlIds.map(key =>
            <a
              key={key}
              className={this.state.rowControl[key].className}
              tabIndex="0"
              role="button"
              onClick={() => this.handleRowChange(this.state.rowControl[key].rows)}
            >
              {key}
            </a>
          )}
        </div>
      </div>
    )
  }
}

ControlPanel.propTypes = {
  rows: PropTypes.number.isRequired,
  setRows: PropTypes.func.isRequired
};

export default ControlPanel;
