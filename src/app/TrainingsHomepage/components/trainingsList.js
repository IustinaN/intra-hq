import React from 'react';
import TrainingItemContainer from './trainingItemContainer';

class TrainingsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { trainings: props.trainings };
    console.log('state trainings', this.state.trainings);
  }

  render() {
    return (
      <table className="Trainings-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Mandatory</th>
            <th>Status</th>
            <th>Number of points</th>
            <th>Date</th>
          </tr>
        </thead>

        <TrainingItemContainer trainings={this.state.trainings} />
      </table>
    );
  }
}

export default TrainingsList;
