class ProjectsController < ApplicationController

	# All the requests here will deal with projects

	get '/' do

		erb :home

	end

	get '/projects' do
		# This page will show a list of the User's projects
		content_type :json
		
		user_id = session[:user_id]

		@projects = Projects.find_by(user_id)
		@projects.to_json	
	end

	post '/' do

		# This will allow users to make a new project
		@project = Project.new
		@project.name = params[:name]
		@project.User_ID = session[User_ID]
		@project.save

		p @projects

	end

	delete '/:id' do
		#There will be a delete button, it will send a delete request to this page.
		id = params[:id]
		@project = Project.find(id)
		@project.destroy 

	end

end