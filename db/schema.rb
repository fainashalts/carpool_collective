# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150310203148) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "api_keys", force: :cascade do |t|
    t.string   "access_token"
    t.integer  "user_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "api_keys", ["user_id"], name: "index_api_keys_on_user_id", using: :btree

  create_table "carpools", force: :cascade do |t|
    t.string   "name"
    t.string   "time"
    t.string   "origin_address"
    t.float    "origin_latitude"
    t.float    "origin_longitude"
    t.string   "destination_address"
    t.float    "destination_latitude"
    t.float    "destination_longitude"
    t.datetime "created_at",            null: false
    t.datetime "updated_at",            null: false
  end

  create_table "carpools_users", id: false, force: :cascade do |t|
    t.integer "user_id",    null: false
    t.integer "carpool_id", null: false
  end

  create_table "comments", force: :cascade do |t|
    t.integer  "carpool_id"
    t.string   "message"
    t.string   "username"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "name"
    t.string   "email"
    t.string   "img"
    t.string   "password_digest"
    t.boolean  "admin"
    t.datetime "created_at",            null: false
    t.datetime "updated_at",            null: false
    t.string   "origin_address"
    t.float    "origin_latitude"
    t.float    "origin_longitude"
    t.string   "destination_address"
    t.float    "destination_latitude"
    t.float    "destination_longitude"
  end

end
