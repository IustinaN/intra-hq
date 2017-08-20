import React from 'react';
import { Link } from 'react-router-dom';
import TrainingsList from './trainingsList';
import Search from './search';

class Trainings extends React.Component {
  trainingsAddress = 'http://localhost:3000/trainings';

  state = { trainingList: [], isLoading: true, searchFilter: '' };

  componentDidMount() {
    this.fetchTrainingsDetails();
  }

  fetchTrainingsDetails() {
    fetch(this.trainingsAddress)
      .then(response => {
        return response.json();
      })
      .then(trainings => {
        this.setState({ trainingList: trainings, isLoading: false });
      });
  }

  search = value => {
    this.setState({ searchFilter: value });
  };

  getFilteredTrainings = () => {
    const filteredTrainings = [];
    const searchFilter = this.state.searchFilter;
    const trainings = this.state.trainingList;

    if (searchFilter === '') {
      return trainings;
    }

    for (const item of trainings) {
      if (
        item.name.includes(searchFilter) ||
        item.description.includes(searchFilter)
      ) {
        filteredTrainings.push(item);
      }
    }

    return filteredTrainings;
  };

  render() {
    return (
      <div>
        <Search search={this.search} />

        <br />
        {!this.state.isLoading &&
          <TrainingsList trainings={this.getFilteredTrainings()} />}
        <br />
        <br />
        <button type="button" className="NewTraining-button">
          <Link to="/add-training">Add training</Link>
        </button>
      </div>
    );
  }
}

export default Trainings;
