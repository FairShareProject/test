import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: [],
     
    }

    this.submit=this.submit.bind(this);
   
  }


// onChange (e) {
//     this.setState({
     
//        [e.target.name]: e.target.value });
    
//   }
  submit(data) {
    $.ajax({
      type:'POST',
      url: '/items',
      data:{key:data}, 
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

        <h1>Get all the queriees</h1>

          <button  style={{width: 70 }} onClick={()=> this.submit('queryAllAids')}>get the last aid </button>
          
        <List items={this.state.items}/>
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));