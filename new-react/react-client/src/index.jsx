import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';


const input={
  padding: '10px 10px 10px 10px',
  display: 'block',
  marginRight: 'auto',
  marginLeft: 'auto',
  marginTop:'20px',
  color:'black',
  fontSize:'15px',
  border: '2px solid black',
  borderRadius: '15px',
};

const button={
  padding:'5px',
  display: 'block',
  marginRight: 'auto',
  marginLeft: 'auto',
  backgroundColor: '#000000',
  color: 'white',
  border: '2px solid #000000',
  borderRadius: '10px',
  marginTop:'20px',
  fontSize:'20px',
  fontFamily: 'Lobster',
};

const p ={
  color:'#000000',
  fontWeight:'bold',
  textAlign:'center',
  fontSize:'20px',
  marginBottom:'-10px',
};
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: [],
      argsQuery:"",
      ORG:"",
      FamilyID:"",
      Amount:"",
      Date:""

    }
    this.onChange=this.onChange.bind(this);
    this.query=this.query.bind(this);
    this.invoke=this.invoke.bind(this);
    this.queryAll=this.queryAll.bind(this);

  }


  onChange (e) {
    this.setState({

     [e.target.name]: e.target.value });
    
  }

  query(fcn,args) {
    $.ajax({
      type:'POST',
      url: '/query',
      data:{fcn:fcn,args:args}, 
      success: (data) => {
        this.setState({
          items:data
        })
      }
    });


  }


  invoke(fcn,org,famid,amount,date) {
    $.ajax({
      type:'POST',
      url: '/invoke',
      data:{fcn:fcn,args:[famid,org,amount,date]}, 
      success: (data) => {
        this.setState({
          items:data
        })
      }
    });


  }

  queryAll(fcn,args) {
    $.ajax({
      type:'POST',
      url: '/getAll',
      data:{fcn:fcn,args:args}, 
      success: (data) => {
        this.setState({
          items:data
        })
      }
    });
  }



  render () {
    return (
      <div>

      
      <p style={p}>ORG:</p><input style={input} name='ORG' onChange={this.onChange} />
      <p style={p} >FamilyID:</p><input style={input} name='FamilyID' onChange={this.onChange} />
      <p style={p} >Amount:</p><input style={input} name='Amount' onChange={this.onChange} />
      <p style={p} >Date:</p><input style={input} name='Date' type="date" onChange={this.onChange} />
      <button  style={button} onClick={()=> this.invoke('newAid',this.state.ORG,this.state.FamilyID,this.state.Amount,this.state.Date)}>submit the last aid </button>
      <p style={p}>last Aid for :</p><input style={input} name='argsQuery' onChange={this.onChange} />
      
      <button  style={button} onClick={()=> this.query('lastAid',this.state.argsQuery)}>get one aid </button>
      <button  style={button} onClick={()=> this.queryAll('aidHistory',this.state.argsQuery)}>get history aid </button>


      <List items={this.state.items}/>
      </div>
      )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));