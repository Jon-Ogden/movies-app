class Movie < ApplicationRecord
    validates :name, presence: true
    validates :year, numericality: true
end
