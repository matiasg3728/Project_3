var React    = require('react');
var ReactDOM = require('react-dom')

var ProjectFormComponent = React.createClass({
  getInitialState: function(){
    return{inputValue:''}
  },
  handleClick: function(event){
    event.preventDefault();
    this.props.onItemSubmit(this.state.inputValue)
    var state = this.getInitialState()
      state.inputValue = ''
      this.setState(state)
    
  },
  updateValue: function(event){
    this.setState({inputValue: event.target.value})
  },
  render: function(){
    return(

    <form>
      <input placeholder = "Project Name" value={this.state.inputValue} onChange={this.updateValue}/>
      <button onClick={this.handleClick}> Submit!</button>
    </form>

    )
  }

})

module.exports = ProjectFormComponent;