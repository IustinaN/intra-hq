import React from 'react';

class TrainingItem extends React.Component {
  removeTraining = entry => {
    console.log('Value:', entry.value.id);
    fetch('http://localhost:3000/trainings/' + entry.value.id, {
      method: 'delete'
    })
      .then(response => {
        return response.json();
      })
      .then(json => {
        console.log('Entry removed successfully');
      })
      .catch(ex => {
        console.log('An error occured while removing' + entry.value, ex);
      });
  };

  render() {
    const items = this.props.trainings.map((value, index) => {
      return (
        <tr key={index}>
          <td name="name">
            {value.name}
          </td>
          <td name="description">
            {value.description}
          </td>
          <td name="mandatory">
            {value.mandatory}
          </td>
          <td name="status">
            {value.status}
          </td>
          <td name="noOfPoints">
            {value.noOfPoints}
          </td>
          <td name="date">
            {value.date}
          </td>
          <td>
            <button
              type="submit"
              className="TrainingItem-button"
              onClick={() => {
                this.removeTraining({ value });
              }}
            >
              Remove{' '}
            </button>
          </td>
        </tr>
      );
    });

    return (
      <tbody>
        {items}
      </tbody>
    );
  }
}

export default TrainingItem;
