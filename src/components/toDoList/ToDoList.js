import React from 'react'

import cx from "classnames";

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
                <p className={cx(
                    "item-name",
                    item && item.isCompleted && "item-name--completed"
                  )}>{item.text}</p>
                {/* second option
                    <p className={item && item.isCompleted ? "item-name item-name--completed" : "item-name"}>{item.text}</p>
                 */}  
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