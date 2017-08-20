import React from 'react';

class NewTraining extends React.Component {
  addTrainingAction = 'http://localhost:3000/trainings';

  render() {
    return (
      <form
        className="NewTraining-form"
        method="post"
        action={this.addTrainingAction}
      >
        <div className="NewTraining-title">
          <span>Add a new training </span>
        </div>

        <div className="NewTraining-grid">
          <div>
            <span>Name: </span>
          </div>
          <div>
            <input type="text" name="name" />
          </div>

          <div>
            <span>Description: </span>
          </div>
          <div>
            <textarea name="description" rows="10" cols="30" />
          </div>

          <div>
            <span>Mandatory: </span>
          </div>
          <div>
            <select name="mandatory">
              <option value="true">true</option>
              <option value="false">false</option>
            </select>
          </div>

          <div>
            <span>Status: </span>
          </div>
          <div>
            <select name="status">
              <option value="available">available</option>
              <option value="notAvailable">not available</option>
            </select>
          </div>

          <div>
            <span>Number of points: </span>
          </div>
          <div>
            <input type="text" name="noOfPoints" />
          </div>

          <div>
            <span>Date: </span>
          </div>
          <div>
            <input id="date" type="date" name="date" />
          </div>
        </div>

        <input type="submit" className="button" value="Save" />
      </form>
    );
  }
}

export default NewTraining;
