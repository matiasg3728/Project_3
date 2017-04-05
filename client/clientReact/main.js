var React = require('react')
var ReactDOM = require('react-dom')
var request = require('superagent')

console.log("Connected to main.js")

var MainComponent = React.createClass({
  getInitialState: function(){
    return {
    session:{
      username:'',
      user_id:0,
    },
    project_page:true,
    copy_page:false,
    projects:[], 
    copies:[]
  }
  },
  componentDidMount: function(){
    var state = this.state;
    var self = this;
    request.get('http://localhost:9393/projects/list')
      .end(function(err, data){
        console.log(data + " this is data")
        state.projects = data.body;
        self.setState(state)
      })

  },
  render: function(){
    return (
      <div>
        {this.state.projects}
      </div>
    )
  }
});

ReactDOM.render(
  <MainComponent/>, document.getElementById('container')
)
