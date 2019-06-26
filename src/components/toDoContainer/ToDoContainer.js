import React from 'react'
import './ToDoContainer.scss'

import {
  ToDoList,
  AddToDoList
} from "../";


const items = [
]
const pluralize = count =>
    count > 1 ? `There are ${count} todos.` : `There is ${count} todo.`;

export class ToDoContainer extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      items: items,
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.compleateItem = this.compleateItem.bind(this);
  }
  deleteItem=(id)=>{
    const {items} = this.state;
    const isNotId = item => item.id !== id;
    const updateList = items.filter(isNotId);
    this.setState({
      items: updateList
    });
  }
  addItem = (item) =>{
    const {items} = this.state;
     item.id = items.length+1;
     item.compleateItem = false;
     let updateList = [...items, item];
     this.setState({
        items: updateList
      }
     )
  }

  compleateItem = (item) =>{
    const {items} = this.state;
    
    item.isCompleted 
      ? item.isCompleted = false
      : item.isCompleted = true

    this.setState({
      items
    });
    
  }

  render() {
    return (
      <div>
       <h3 className='h3'>{pluralize(this.state.items.length)}</h3>
       <div>
        <ToDoList items = {this.state.items} deleteItem={this.deleteItem} compleateItem={this.compleateItem} className="items"/>
       </div>
       <AddToDoList addItem={this.addItem}/>
      </div>
    );
  }
}


