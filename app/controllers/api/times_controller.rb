class Api::TimesController < Api::BaseController
  def show
    render json: Time.now
  end
end
