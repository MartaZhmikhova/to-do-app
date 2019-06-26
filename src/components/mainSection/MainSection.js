import React from 'react'
import './MainSection.scss'

import {
  ToDoContainer
} from "../";

export class MainSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', done: null, hide: null};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleSubmit(event) {
    this.setState({ done: true, hide: true })
  }

  render() {
    return (
        <section className='box'>
          {!this.state.done && (
            <form className='box-form' onSubmit={this.handleSubmit}>
              <h2 className='h2'>enter the first name and lets start</h2>
              <input
                type="text"
                placeholder="First name"
                className="box-form-input"
                required="required" 
                onChange={this.handleChange} />
              <button className="box-form-button">
                remember me
              </button>
            </form>
          )}
          {this.state.hide && (
            <div>
              <h2 className="h2">{('Welcome ' + this.state.value)}</h2>
              <ToDoContainer />
            </div>
          )}
        </section>
    );
  }
}



