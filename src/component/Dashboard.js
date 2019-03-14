import React, { Component } from "react";
import data from "./data";

import { next, previous } from "./NextPrevious";

class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      userCards: [],
      cardID: 0,
      cardsArr: 0
    };
  }

  getData = () => {
    this.setState({
      userCards: data
    });
  };

  setCardsArr = () => {
    setTimeout(() => {
      this.setState({
        cardsArr: this.state.userCards.length
      })
    }, 0);
  }

  componentDidMount() {
    this.getData();
    this.setCardsArr();
  }

  handleNext = e => {
    if (this.state.cardID <= this.state.userCards.length - 2) {
      this.setState({
        cardID: this.state.cardID + 1
      });
    } else {alert("This is the last one")}
  };

  handlePrevious = e => {
    if (this.state.cardID >= 1) {
      this.setState({
        cardID: this.state.cardID - 1
      });
    } else {alert("This is the first one")}
  };

  render() {
    const newData = this.state.userCards.map(user => {
      return (
        <div>
          <h3 id="cardName">{`${user.name.first} ${user.name.last}`}</h3>
          <br></br>
          <div>
            <p>
              <span id="infoTags">From:</span> {user.city} {user.country}
            </p>
            <p>
              <span id="infoTags">Job Title:</span> {user.title}
            </p>
            <p>
              <span id="infoTags">Employer</span> {user.employer}
            </p>
          </div>
          <br></br>
          <div>
            <p>
              <span id="infoTags">Favorite Movies:</span>
            </p>
            <ol>
              <li>{user.favoriteMovies[0]}</li>
              <li>{user.favoriteMovies[1]}</li>
              <li>{user.favoriteMovies[2]}</li>
            </ol>
          </div>
        </div>
      );
    });

    return (
      <div>
        <section className="dashboardRaper">
          <div className="userCards">
            {newData[this.state.cardID]}
            <h3>{`${this.state.cardID + 1}/${this.state.cardsArr}`}</h3>
          </div>
          <div className="userCardButton">
            {previous(this.handlePrevious)}
            {next(this.handleNext)}
          </div>
        </section>
      </div>
    );
  }
}

export default Dashboard;
