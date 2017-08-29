import React from 'react';
import { Route } from 'react-router-dom';
import Trainings from './components/trainings';
import NewTraining from './components/newTraining';
import './Trainings.css';

const TrainingsHomepage = () =>
  <div>
    <br />
    <Route path="/trainings-homepage" exact component={Trainings} />
    <Route path={'/trainings-homepage/add-training'} component={NewTraining} />
  </div>;

export default TrainingsHomepage;
