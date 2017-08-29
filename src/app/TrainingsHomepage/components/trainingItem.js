import React from 'react';

class TrainingItem extends React.Component {
  render() {
    const item = this.props.trainingItem;
    return (
      <tr>
        <td name="name">
          {item.name}
        </td>
        <td name="description">
          {item.description}
        </td>
        <td name="mandatory">
          {item.mandatory}
        </td>
        <td name="status">
          {item.status}
        </td>
        <td name="noOfPoints">
          {item.noOfPoints}
        </td>
        <td name="date">
          {item.date}
        </td>
        <td>
          <button
            type="submit"
            className="TrainingItem-button"
            onClick={() => {
              this.props.removeTraining({ item });
            }}
          >
            Remove
          </button>
        </td>
      </tr>
    );
  }
}

export default TrainingItem;
