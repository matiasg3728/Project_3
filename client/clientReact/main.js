var React = require('react')
var ReactDOM = require('react-dom')
var request = require('superagent')
var ProjectPageComponent = require('./ProjectPage');
var CopyPageComponent = require('./CopyPage');

console.log("Connected to main.js")

var MainComponent = React.createClass({
  getInitialState: function(){
    return {
    project_page:true,
    copy_page:false,
    current_project:0
    }
  },
  goCopyPage: function(project_id){
    var state = this.state
    var self = this
    var id = project_id

    state.copy_page = true
    state.project_page = false
    state.current_project = id
    this.setState(state)
  },
  goProjectsPage: function(){
    var state = this.state
    state.project_page = true
    state.copy_page = false
    state.current_project = 0
    this.setState(state)
  },
  render: function(){
    console.log(this.state.project_page+'')
    console.log(this.state.copy_page+'')

    return (
      <div>
        {this.state.project_page ? <ProjectPageComponent goCopyPage={this.goCopyPage}/> : <CopyPageComponent goProjectsPage={this.goProjectsPage} project_id={this.state.current_project}/>}
      </div>     
      
    )
  }
});

ReactDOM.render(
  <MainComponent/>, document.getElementById('container')
)
