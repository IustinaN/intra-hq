import React from 'react';
import { Link } from 'react-router-dom';
import TrainingsList from './trainingsList';
import Search from './search';

class Trainings extends React.Component {
  trainingsAddress = 'http://localhost:3000/trainings';

  constructor() {
    super();
    this.state = { trainingList: [], isLoading: true, searchFilter: '' };
    this.getFilteredTrainings = this.getFilteredTrainings.bind(this);
  }

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

  updateSearchFilter = value => {
    this.setState({ searchFilter: value });
  };

  getFilteredTrainings = () => {
    const filteredTrainings = [];
    const searchFilter = this.state.searchFilter;
    console.log('search filter:', searchFilter);
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
    console.log('Filtered trainings: ', filteredTrainings);
    // return filteredTrainings;
  };

  render() {
    return (
      <div>
        <Search
          updateSearchFilter={this.updateSearchFilter}
          search={this.getFilteredTrainings()}
        />
        <br />

        {!this.state.isLoading &&
          <TrainingsList trainings={this.state.trainingList} />}

        <br />
        <br />
        <button type="button" className="NewTraining-button">
          <Link to="/trainings-homepage/add-training">Add training</Link>
        </button>
      </div>
    );
  }
}

export default Trainings;
