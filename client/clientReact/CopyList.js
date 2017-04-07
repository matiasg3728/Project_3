var React    = require('react');
var ReactDOM = require('react-dom')

var CopyListComponent = React.createClass({
  getInitialState: function(){
    return{list_obj:[]}
  },
  handleClick: function(id){
    event.preventDefault();
    console.log(id)
    this.props.show_document(id)
    //this.props.goCopyPage(id)
  },
  render: function(){
    var list = []//this will hold the passed in list of copies
    var self = this
    console.log(this.props.copies)
    this.props.copies.map(function(copy){
    list.push(<li key={copy.copy_id}> <a href='#' onClick={self.handleClick.bind( self/* this is a extra argument that allows u to reference that specific element*/, copy.copy_id)}>{copy.copy_id}</a> </li>)       
    })
    return(

 		<ul>
    {list}  
    </ul>

    )
  }

})

module.exports = CopyListComponent;