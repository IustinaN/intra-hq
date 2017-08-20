import React from 'react';

class Search extends React.Component {
  state = { textFieldValue: '' };

  handleTextFieldChange = event => {
    this.setState({ textFieldValue: event.target.value });
  };

  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search"
              className="Search-input"
              value={this.state.textFieldValue}
              onChange={event => this.handleTextFieldChange(event)}
            />

            <button
              type="button"
              className="button"
              onClick={() => {
                this.props.search(this.state.textFieldValue);
              }}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
