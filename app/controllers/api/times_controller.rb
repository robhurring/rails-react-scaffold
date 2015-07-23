class Api::TimesController < Api::BaseController
  def show
    result = GetTime.call(time_params)

    if result.success?
      render json: {time: result.time}
    else
      render json: {error: result.error}, status: :unprocessable_entity
    end
  end

  private

  def time_params
    params.permit(:format)
  end
end
