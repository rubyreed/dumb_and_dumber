class Actor < ApplicationRecord
    has_many :foods, dependent: :destroy
end
