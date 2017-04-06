var React = require('react')
var ReactDOM = require('react-dom')
var request = require('superagent')
var ProjectFormComponent = require('./ProjectForm')
var ProjectListComponent = require('./ProjectList')

console.log("Connected to main.js")

var MainComponent = React.createClass({
  getInitialState: function(){
    return {
    project_page:true,
    copy_page:false,
    projects:[], 
    copies:[]
  }
  },
  componentDidMount: function(){
    var state = this.state;
    var self = this;
    request.get('/projects/list')
      .end(function(err, data){
        console.log(data + " this is data")
        state.projects = data.body;
        self.setState(state)
      })

  },
  createItem: function(project){
  var state = this.state;
  var self = this;
  request.post('/projects/')
    .send("name=" + project)
    .end(function(err, data){
      var json_txt = data.text
      console.log(json_txt)
      json_txt = JSON.parse(json_txt); 
      state.projects = json_txt;
      console.log(state.projects)
      self.setState(state)
    })
  }, 
  render: function(){
    console.log(this.state.projects)
    return (
      <div>

        <ProjectFormComponent onItemSubmit={this.createItem}/>

        <ProjectListComponent projects={this.state.projects}/>
        
      </div>
    )
  }
});

ReactDOM.render(
  <MainComponent/>, document.getElementById('container')
)
