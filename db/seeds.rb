# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



require "faker"
Actor.destroy_all
Food.destroy_all



5.times do
    Actor.create(
    character: Faker::TvShows::DumbAndDumber.character,
    quote: Faker::TvShows::DumbAndDumber.quote,
    )
    end

 5.times do
    Food.create(
    dish: Faker::Food.dish,
        )
    end
