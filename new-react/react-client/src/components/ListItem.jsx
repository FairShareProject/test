import React from 'react';


const item ={
  color:'#000000',
  fontWeight:'bold',
  textAlign:'center',
  fontSize:'20px',
  marginBottom:'-10px',
};


const ListItem = (props) => (
	<div style={item}>
	<h4 > Orgnaization Name : {props.item.org} </h4>
	<h4 > Amount : {props.item.amount} </h4>
	<h4 > Family nationality: {props.item.nationality} </h4>
	</div>
	)

export default ListItem;