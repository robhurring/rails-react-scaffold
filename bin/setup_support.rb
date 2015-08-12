module SetupSupport
  def file_data
    @_file_data ||= DATA.read
  end

  def templates
    @_templates ||= begin
      templates = {}
      template = nil

      file_data.each_line do |line|
        if line =~ /^@@\s*(.*\S)\s*$/
          template = ''
          templates[$1.to_sym] = template
        elsif template
          template << line
        end
      end

      templates
    end
  end

  def template(name)
    templates[name.to_sym]
  end

  def files?(*paths)
    paths.map{ |p| File.exist?(p) }.any?
  end

  def exists?(command)
    system("which #{command}> /dev/null 2>&1")
  end

  def header(str)
    puts "=====> #{str}\n"
  end

  def indent(str)
    puts "       #{str}\n"
  end

  def run(command, successful_output = nil, &block)
    output = %x(#{command} 2>&1)
    result = $?.to_i

    if block_given?
      yield output
    else
      if result.zero? && successful_output
        indent successful_output
      else
        indent(result.zero? ? command.to_s.green : "Fail! '#{output}'".red)
      end
    end
  end

  def rake(task)
    run %(bin/rake #{task})
  end

  def step(name, &block)
    header name
    block.call
    puts
  end
end

class String
  def colorize(color_code)
    "\e[#{color_code}m#{self}\e[0m"
  end

  def red
    colorize(31)
  end

  def green
    colorize(32)
  end

  def yellow
    colorize(33)
  end

  def blue
    colorize(34)
  end

  def pink
    colorize(35)
  end

  def light_blue
    colorize(36)
  end
end
