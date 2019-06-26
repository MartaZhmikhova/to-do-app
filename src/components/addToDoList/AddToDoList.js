import React from 'react'
import {
  Button
} from "../";

import './AddToDoList.scss'

export class AddToDoList extends React.Component {
  state = {
      text: '',
  }

  handleChange = (e) => {
      this.setState(
          {
              text: e.target.value
          }
      ) 
  }
  handleSubmit = (e) => {
      e.preventDefault();
      this.props.addItem(this.state);
      this.setState(
          {
              text: ''
          }
      )
      
  }
  render(){
      return(
          <form onSubmit={this.handleSubmit} className="addList">
              <input
                  className="addList-input"
                  type = "text"
                  value = {this.state.text}
                  onChange={this.handleChange}
                  required="required"
                  placeholder="New ToDo"
              >
              </input>
              <Button type={"submit"} className={"addList-button"}>
                  +
              </Button>
          </form>
      );
  }
}