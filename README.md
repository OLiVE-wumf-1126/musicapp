# musicapp DB設計
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|null: false|
|password|string|null: false|
### Association
- has_many :comments
- has_many :posts

## postsテーブル
|Column|Type|Options|
|------|----|-------|
|content|text||
|image|text||
|artist_name||
|user|reference|null: false, foreign_key: true|
### Association
- belongs_to :user
- has_many :comments

## commentsテーブル
|Column|Type|Options|
|------|----|-------|
|text|text||
|user|reference|null: false, foreign_key: true|
|post|reference|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :post