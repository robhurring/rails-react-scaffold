module Action
  extend ActiveSupport::Concern

  included do |_base|
    include Troupe
  end
end
