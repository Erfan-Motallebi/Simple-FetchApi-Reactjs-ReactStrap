import React, { Component } from "react";

export default class User extends Component {
  state = {
    userData: [],
  };

  componentDidMount() {
    fetch("https://randomuser.me/api")
      .then((response) => response.json())
      .then((data) => {
        this.setState(() => {
          return {
            userData: data.results,
          };
        });
      });
  }

  render() {
    return (
      <main>
        {this.state.userData.map(
          ({ name: { first }, picture: { thumbnail } }, index) => {
            return (
              <section key={index}>
                <img src={thumbnail} alt={first} />
                <h4>{first}</h4>
              </section>
            );
          }
        )}
      </main>
    );
  }
}
