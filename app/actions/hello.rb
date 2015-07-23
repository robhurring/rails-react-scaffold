class Hello
  include Action

  expects :name
  provides :message

  def call
    context.message = %(Hello #{name}!)
  end
end
