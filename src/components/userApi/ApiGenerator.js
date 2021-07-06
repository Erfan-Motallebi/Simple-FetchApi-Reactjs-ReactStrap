import React, { Component, Fragment } from "react";
import User from "./User";
// import "./user.css";
import { Button } from "reactstrap";
import { Input, InputGroup, InputGroupAddon, InputGroupText } from "reactstrap";

export default class ApiGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      value: "",
    };
  }

  handleForm = (e) => {
    e.preventDefault();
    this.setState((state) => {
      return {
        value: +state.inputValue,
        inputValue: "",
      };
    });
  };
  onChangeHandler = (event) => {
    this.setState(() => {
      return {
        inputValue: +event.target.value,
      };
    });
  };
  render() {
    let userGenerator = [];
    for (let i = 0; i < this.state.value; i++) {
      userGenerator.push(<User key={i} />);
    }
    return (
      <Fragment>
        <form className="mx-auto">
          <InputGroup>
            <Input
              type="text"
              name="api"
              id="api"
              value={this.state.inputValue}
              placeholder="insert a number"
              onChange={this.onChangeHandler}
            />
            <InputGroupAddon addonType="append">
              <InputGroupText>Api</InputGroupText>
            </InputGroupAddon>
          </InputGroup>

          <Button
            type="submit"
            onClick={this.handleForm}
            className=" btn btn-lg"
          >
            Submit
          </Button>
        </form>
        {userGenerator}
      </Fragment>
    );
  }
}
