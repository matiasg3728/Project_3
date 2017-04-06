class CopyController < ApplicationController

	# /copy
	get '/' do

		erb :home

	end

	# just return the specific copy accoding to the passed copy_id
	get '/:id' do
		content_type :json

		copy_id = params[:id]

		@copy = Copies.find(copy_id)

	end

	# This rout will pull up all the copies that belong
	# to a specific project_id
	get '/copies/:id' do

		content_type :json

		project_id = params[:id]

		@project = Project.find(project_id)

		@copies = @project.copies

		@copies.to_json

	end

	# This is how we will make new copies
	# A project_id will be passed in
	# text will also be passed in
	# it wont be submitted until the user 'copies'
	# their copy or makes a new one on the copy page
	post '/:id' do

		project_id = params[:id]

		@copy = Copy.new

		@copy.project_id = project_id
		@copy.document = params[:document]

		@copy.save

		@copy.to_json

	end

	# this is how a user will save their progress on a specific copy
	patch '/:id' do

    	content_type :json
	
    	id = params[:id]
	
    	@copy = Copy.find(id)
    	@copy.document = params[:document]
    	@copy.save

	end

	# this is how we
	delete '/:id' do

		id = params[:id]
		
		@copy = Copy.find(id)
		@copy.destroy

		@copies = Copy.all
		@copies.to_json
	end

end