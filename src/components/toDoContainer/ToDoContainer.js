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
    this.addItem = this.addItem.bind(this);
    this.compleateItem = this.compleateItem.bind(this);
  }
  deleteItem=(id)=>{
    const { items } = this.state;
    items.splice(item => item.id, 1);
    this.setState({ items });
    
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
    
    item.isCompleted = !item.isCompleted 

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


