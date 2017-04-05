require 'sinatra/base'

require './controllers/ApplicationController'
require './controllers/UserController'
require './controllers/ProjectController'

require './models/UserModel'
require './models/ProjectModel'
require './models/CopyModel'

map('/'){run ApplicationController}
map('/home'){run UserController}
map('/projects'){run ProjectController}
