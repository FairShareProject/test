import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';

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
    this.submit=this.submit.bind(this);
   
  }


onChange (e) {
    this.setState({
     
       [e.target.name]: e.target.value });
    
  }

  submit(fcn,args) {
    $.ajax({
      type:'POST',
      url: '/query',
      data:{fcn:fcn,args:args}, 
      success: (data) => {
        console.log(typeof data,data)
        this.setState({
          items:data
        })
      }
    });


  }


invoke(fcn,org,famid,amount,date) {
  console.log(typeof date)
    $.ajax({
      type:'POST',
      url: '/invoke',
      data:{fcn:fcn,args:[famid,org,amount,date]}, 
      success: (data) => {
        console.log(typeof data,data)
        this.setState({
          items:data
        })
      }
    });


  }

  getAll(fcn,args) {
    $.ajax({
      type:'POST',
      url: '/getAll',
      data:{fcn:fcn,args:args}, 
      success: (data) => {
        console.log(typeof data,data)
        this.setState({
          items:data
        })
      }
    });
  }



  render () {
    return (
      <div>

        <h1>Get all the queriees</h1>
          <p>ORG:</p><input name='ORG' onChange={this.onChange} />
          <p>FamilyID:</p><input name='FamilyID' onChange={this.onChange} />
          <p>Amount:</p><input name='Amount' onChange={this.onChange} />
          <p>Date:</p><input name='Date' type="date" onChange={this.onChange} />
          <p>last Aid for :</p><input name='argsQuery' onChange={this.onChange} />
          <button  style={{width: 70 }} onClick={()=> this.invoke('newAid',this.state.ORG,this.state.FamilyID,this.state.Amount,this.state.Date)}>submit the last aid </button>
          <button  style={{width: 70 }} onClick={()=> this.submit('lastAid',this.state.argsQuery)}>get one aid </button>
          <button  style={{width: 70 }} onClick={()=> this.getAll('aidHistory',this.state.argsQuery)}>get history aid </button>
          
          
        <List items={this.state.items}/>
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));