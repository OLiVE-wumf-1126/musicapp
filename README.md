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
|artist_name|text||
|user_id|integer||
### Association
- belongs_to :user
- has_many :comments

## commentsテーブル
|Column|Type|Options|
|------|----|-------|
|text|text||
|user_id|integer||
|post_id|integer||
### Association
- belongs_to :user
- belongs_to :post