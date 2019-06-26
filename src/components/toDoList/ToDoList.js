import React from 'react'

import {
  Button
} from "../";


import './ToDo.scss'

export const ToDoList = ({items, deleteItem, compleateItem}) => {
  const itemList = items.length ? (
      items.map(item=>
          <div key={item.id}  className="item" >
              <div className="item-block" onClick={()=>{compleateItem(item)}}>
                <Button className={"item-button"}>{item && item.isCompleted ? "👌" : "👋"}{" "}</Button>
                <p className="item-name" style={{ textDecoration: item.isCompleted ? "line-through" : "", color: item.isCompleted ? "grey" : "" }}>{item.text}</p>
              </div>
              <Button onClick={()=>{deleteItem(item.id)}} className={"item-button item-button__remove"}>X</Button>
          </div>
      )
  ) 
  : (
      <p className='textDisable'> No todos yet</p>
  );
  return(
      <div>
          {itemList}
      </div>
  );
  
}