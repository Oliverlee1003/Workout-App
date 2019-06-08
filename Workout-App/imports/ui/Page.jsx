import React, { Component } from 'react';
import TrainerCard from './TrainerCard';
import TrainersMenu from './TrainersMenu';
import TrainerRow from './TrainerRow';
import TrainerInfo from './TrainerInfo';


export default class Page extends React.Component {



  render() {
      if (this.props.value === 'Trainers') {
        return (
          <div>
            <TrainersMenu />
            <br />
            <TrainerCard />
          </div>
      );
    }
    if (this.props.value === 'Trainer') {
      return (
        <div>
          <br/>
          <TrainerRow />
          <br />
          <TrainerInfo/>
        </div>
    );
   }else {
      return (
        <div>
          <p>to be implemented</p>
        </div>
    );
    }
  }
}