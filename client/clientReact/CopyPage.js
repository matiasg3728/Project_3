var React = require('react')
var ReactDOM = require('react-dom')
var request = require('superagent')
var CopyButtonBarComponent = require('./CopyButtonBar')
var CopyFormComponent = require('./CopyForm')
var CopyListComponent = require('./CopyList')

console.log("we are in the copy page")

var CopyPageComponent = React.createClass({
  getInitialState: function(){
    return {
    	copies: [],
    	current_document:{},
      current_txt:'',
      show_txt_box:false
    	}
    },
  componentDidMount: function(){
    var state = this.state;
    var self = this;
    var id = this.props.project_id

    //lets maybe put this one level up so we dont have to contunually 
    //make get requests
    request.get('/copy/copies/'+ id)
      .end(function(err, data){
        console.log(data + " this is data for copy_component")
        state.copies = data.body;
        self.setState(state)
      })
  	},
// ------------------------------------------------------------ \\

    // All of these functions communicate with the CopyButtonBarComponent
    // And update current_document
  save: function(txt){
    	// updates the state of current_document.document
    	// sends a patch request
    },
  copy: function(txt){
    	// Creates a new Copy of the current_document.document
    	// sends a post request

    	var state = this.state;
  		var self = this;
  		var txt = this.state.txt
  		var id = this.props.project_id

  		request.post('/copy/'+ id)
    	.send("document=" + txt)
   		.end(function(err, data){
      		var json_txt = data.text
     		console.log(json_txt)
      		json_txt = JSON.parse(json_txt); 
      		state.projects = json_txt;
      		console.log(state.projects)
      		self.setState(state)
   		})
    },
  create_new: function(){
    	// Creates a new blank document
    	// Sends a post request

    	var state = this.state;
  		var self = this;
  		var id = // project_id prop

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
  project_page_direct: function(){
    	// This will use a Prop passed down from
    	// the main component to switch back to the 
    	// project page.  It will also reset this component's
    	// state.
    },
// ------------------------------------------------------------ \\
  show_document: function(copy_id){
    var state = this.state
    var self = this
  	var id = copy_id
    console.log(id)
    request.get('/copy/'+ id)
      .end(function(err, data){
        console.log(data.body)
        console.log("^ data body inside show doc")
        state.current_document = data.body
        state.current_txt = data.body.document
        state.show_txt_box = true
        self.setState(state)
      })  		
    },
    update_doc: function(txt){
      console.log(txt + 'this is the txt')
      var state = this.state
      state.current_txt = txt
      this.setState(state) 
      console.log(this.state.current_txt + ' this is current text')
    },
  render: function(){
    return(
    	<div>

    	<CopyButtonBarComponent save={this.save} copy={this.copy} create_new={this.create_new} project_page_direct={this.project_page_direct}/>
    	<CopyListComponent copies={this.state.copies} show_document={this.show_document}/>

      <CopyFormComponent update_doc={this.update_doc} document_txt={this.state.current_txt}/>
        
    	</div>
      )
    }
})

module.exports = CopyPageComponent;
