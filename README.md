# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, foreign_key: true|
|name|text|null: true, foregin_key: true, unique: true|
|e-mail|integer|null: true, foregin_key:false, unique: true|
|password|integer|null: true, foregin_key:false, unique: true|

### Association
- has_many :messages
- has_many :groups, through: :groups_users

## goroupsテーブル

|Column|Type|Options|
|------|----|-------|
|group_name|text|null: true, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|

### Association
- has_many :messages
- has_many :users, through: :groups_users

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|text|null: false, foreign_key: false|
|image|string|null: false, foreign_key: false|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user