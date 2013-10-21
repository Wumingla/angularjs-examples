require 'rubygems'
require 'sinatra'
require 'sinatra/json'

set :public_folder, 'app'
users = [
  {:id => 1, :name => 'bachue'},
  {:id => 2, :name => 'elicier'},
  {:id => 3, :name => 'david'},
  {:id => 4, :name => 'derek'}
]

get '/' do
  send_file File.join(settings.public_folder, 'index.html')
end

get '/users' do
  json users
end

get '/users/:id' do
  json users.find {|user| user[:id] == params[:id].to_i }
end

post '/users' do
  users << {:id => users.size + 1, :name => params[:name]}
  json users.last
end

post '/users/:id' do
  user = users.find {|user| user[:id] == params[:id].to_i }
  user[:name] = params[:name]
  json user
end

delete '/users/:id' do
  users.reject! {|user| user[:id] == params[:id].to_i }
  nil
end
