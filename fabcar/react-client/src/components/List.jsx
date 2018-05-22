import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    <h4 > {props.items.amount} </h4>
    <h4 > {props.items.org} </h4>
    <h4 > {props.items.nationality} </h4>
  </div>
)

export default List;