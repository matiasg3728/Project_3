var React    = require('react');
var ReactDOM = require('react-dom')

var CopyFormComponent = React.createClass({
    getInitialState: function(){

    return {
      current_txt:''
      }
    },
  updateValue: function(event){
    this.props.update_doc(event.target.value)
    //console.log(this.state.document_txt)
  },
  render: function(){
    console.log(this.props.document_txt)
    return(

    <form>
      <input value={this.props.document_txt} onChange={this.updateValue}/>
    </form>

    )
  }

})

module.exports = CopyFormComponent;