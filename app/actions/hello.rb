class Hello
  include Troupe

  expects :name
  provides :message

  def call
    context.message = %(Hello #{name}!)
  end
end
