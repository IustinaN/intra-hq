import React from 'react';
import TrainingItem from './trainingItem';

class TrainingItemContainer extends React.Component {
  state = { items: this.props.trainings };

  removeTraining = entry => {
    fetch('http://localhost:3000/trainings/' + entry.item.id, {
      method: 'delete'
    })
      .then(response => {
        return response.json();
      })
      .then(json => {
        const trainings = this.props.trainings;
        trainings.splice(trainings.indexOf(entry.item), 1);
        this.setState({ items: trainings });

        console.log('Entry removed successfully');
      })
      .catch(ex => {
        console.log('An error occured while removing' + entry.item, ex);
      });
  };

  render() {
    const itemsToReturn = this.state.items.map((value, index) => {
      return (
        <TrainingItem
          trainingItem={value}
          key={index}
          removeTraining={this.removeTraining}
        />
      );
    });

    return (
      <tbody>
        {itemsToReturn}
      </tbody>
    );
  }
}

export default TrainingItemContainer;
