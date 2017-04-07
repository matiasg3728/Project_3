var React    = require('react');
var ReactDOM = require('react-dom')

var ProjectListComponent = React.createClass({
  getInitialState: function(){
    return{list_obj:[]}
  },
  handleClick: function(id){
    event.preventDefault();
    this.props.to_copy_page(id)
  },
  render: function(){
    var list = []
    var self = this
    this.props.projects.map(function(project){
    list.push(<li key={project.project_id}> <a href='#' onClick={self.handleClick.bind(self,project.project_id)}>{project.name}</a> </li>)       
    })

    console.log(list)

    return(

 		<ul>
    {list}  
    </ul>

    )
  }

})

module.exports = ProjectListComponent;