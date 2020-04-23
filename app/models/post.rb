class Post < ApplicationRecord
  has_many :comments
  has_many :posts

  mount_uploader :image, ImageUploader
end
