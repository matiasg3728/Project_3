var React    = require('react');
var ReactDOM = require('react-dom')

var ProjectListComponent = React.createClass({
  getInitialState: function(){
    return{list_obj:[]}
  },
  handleClick: function(event){
    event.preventDefault();
  },
  render: function(){

    var list = []

    this.props.projects.map(function(project){      
    list.push(<li key={project.project_id}>{project.name}</li>)
            
  })

    return(

 		<ul>
    {list}  
    </ul>

    )
  }

})

module.exports = ProjectListComponent;