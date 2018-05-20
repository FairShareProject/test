import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    <h4 > The weight schedule </h4>
   
    { props.items.map(item => 
    		<div>
              
    		<h1>Username:</h1><h3>{item.Key}</h3>
             <h1>model:</h1><h3>{item.Record.nationality}</h3>


    		<ListItem item={item}/>
    		</div>
    		)
    	}
  </div>
)

export default List;