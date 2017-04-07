var React    = require('react');
var ReactDOM = require('react-dom')

//test

var CopyButtonBarComponent = React.createClass({

	save: function(){

	},
	copy: function(){

	},
	create_new: function(){

	},
	project_page_direct: function(){

	},

	render: function(){
		return(

			<div>

			<button onClick={this.save()}>Save</button>
			<button onClick={this.copy()}>Copy</button>
			<button onClick={this.create_new()}>New</button>
			<button onClick={this.project_page_direct()}>Projects</button>

			</div>

		)
	}
})

module.exports = CopyButtonBarComponent;