class ProjectController < ApplicationController

	# All the requests here will deal with projects

	get '/' do

		erb :home

	end

	get '/list' do
		# This page will show a list of the User's projects
		content_type :json
		
		@user = User.find(session[:user_id])

		@projects = @user.projects	

		@projects.to_json
			
	end

	post '/' do

		# This will allow users to make a new project
		@project = Project.new
		@project.name = params[:name]
		@project.user_id = session[:user_id]
		@project.save

		@user = User.find(session[:user_id])

		@projects = @user.projects

		@projects.to_json

		
	end

	delete '/:id' do
		#There will be a delete button, it will send a delete request to this page.
		id = params[:id]
		@project = Project.find(id)
		@project.destroy 

	end

end