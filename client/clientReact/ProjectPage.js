var React = require('react')
var ReactDOM = require('react-dom')
var request = require('superagent')
var ProjectFormComponent = require('./ProjectForm')
var ProjectListComponent = require('./ProjectList')

var ProjectPageComponent = React.createClass({
	 getInitialState: function(){
    return {
    	projects:[]
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
  to_copy_page: function(project_id){
  		this.props.goCopyPage(project_id)
    },
  render: function(){
		return(
			<div>

				<ProjectFormComponent onItemSubmit={this.createItem}/>

				<ProjectListComponent to_copy_page={this.to_copy_page} projects={this.state.projects}/>

			</div>
			)
	}

})

module.exports = ProjectPageComponent;