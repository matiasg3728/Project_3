class ProjectController < ApplicationController

	# All the requests here will deal with projects

	get '/' do

		erb :home

	end

	get '/list' do
		# This page will show a list of the User's projects
		content_type :json
		
		pUser_id = session[:user_id]

		@projects = Project.where("user_id = #{pUser_id}")

		@projects.to_json
			
	end

	post '/' do

		# This will allow users to make a new project
		@project = Project.new
		@project.name = params[:name]
		@project.user_id = session[:user_id]
		@project.save

		@projects = Project.where("user_id = #{pUser_id}")

		@projects.to_json

		
	end

	delete '/:id' do
		#There will be a delete button, it will send a delete request to this page.
		id = params[:id]
		@project = Project.find(id)
		@project.destroy 

	end

end