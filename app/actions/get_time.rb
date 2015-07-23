class GetTime
  include Action

  permits :format do
    '%m/%d/%Y %I:%M:%S'
  end

  provides :time

  def call
    context.time = formatted_time
  end

  private

  def formatted_time
    Time.now.strftime(format).to_s
  rescue => e
    context.fail!(error: e.to_s)
  end
end
