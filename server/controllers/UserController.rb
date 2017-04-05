class UserController < ApplicationController


	# /home
	get '/' do
		# This page will show a list of the User's projects

		if session[:logged_in]
			puts "if statment at '/' "
			@username = session[:username];
			redirect '/forem'

		else
			puts "else statement at '/' "
			@msg = "You are not logged in hommie"
			erb :login
		end
	end

	

	get '/login' do
		erb :login
	end

	get '/logout' do
		session.destroy
		redirect'/home/login'
	end

	get '/register' do
		erb :register
	end

	post '/register' do
		@user = User.new

		@user.username = params['username']
		@user.password = params['password']

		@user.save

		p @user

		redirect '/home/login'
	end

	post '/login' do
		p session
		pUsername = params[:username]
		pPassword = params[:password]

		user = User.find_by(username: pUsername)

		if user && user.authenticate(pPassword)
			
			session[:logged_in] = true
			session[:username] = pUsername;
			session[:User_ID] = user.User_ID

			redirect '/home'
		else
			@msg = "login attempt unsuccessfull"

			erb :login
		end
	end

end
