import React from 'react';
import TrainingItem from './trainingItem';

class TrainingsList extends React.Component {
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

        <TrainingItem trainings={this.props.trainings} />
      </table>
    );
  }
}

export default TrainingsList;
