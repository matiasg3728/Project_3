class CopyController < ApplicationController

	get '/' do

		erb :home

	end

	get '/copies/:id' do

		content_type :json
		id = params[:id]

		

	end

end