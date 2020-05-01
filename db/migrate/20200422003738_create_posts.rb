class CreatePosts < ActiveRecord::Migration[5.0]
  def change
    create_table :posts do |t|
      t.text :title, null: false
      t.text :content
      t.text :image
      t.text :artist_name
      # t.references :user,       null: false, foreign_key: true

      t.timestamps
    end
  end
end
