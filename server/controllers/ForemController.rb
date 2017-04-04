class ForemController < ApplicationController

	get '/' do

		erb :home

	end

	get '/:id' do
		# This page will show a list of the User's projects
		content_type :json

		id = params[:id]
		
		@project = Projects.find(id)
		@project.to_json	
	end

	post '/' do

		# This will allow users to make a new project
		@project = Project.new
		@project.name = params[:name]

	end

	delete '/:id' do

		#There will be a delete button, it will send a delete request to this page. 

	end

end