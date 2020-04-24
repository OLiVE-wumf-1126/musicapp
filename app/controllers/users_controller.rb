class UsersController < ApplicationController
  def show
    user = User.find(params[:id])
    @name = user.id
    @posts = user.posts
  end
end
