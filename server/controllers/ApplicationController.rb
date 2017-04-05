class ApplicationController < Sinatra::Base

	require 'bundler'
	Bundler.require

	enable :sessions


	ActiveRecord::Base.establish_connection(
		:adapter => 'postgresql',
		:database => 'forem'
	)

	set :session_secret, "session"
	set :views, File.expand_path('../../views', __FILE__);
	set :public_dir, File.expand_path('../../public', __FILE__) 

	not_found do
		"404"
	end
end