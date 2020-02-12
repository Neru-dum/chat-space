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
|name|string|null: false, foregin_key: true, unique: true|
|e-mail|string|null: false, foregin_key:false, unique: true|
|password|string|null: false, foregin_key:false, unique: true|

### Association
- has_many :messages
- has_many :groups, through: :groups_users
- has_many :groups_users

## goroupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: true, foreign_key: true|


### Association
- has_many :messages
- has_many :users, through: :groups_users
- has_many :groups_users

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|content|text|null: false, foreign_key: false|
|image|string|null: false, foreign_key: false|


### Association
- belongs_to :user
- belongs_to :group