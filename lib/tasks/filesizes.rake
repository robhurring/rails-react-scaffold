class FileTable
  class Asset
    KB = 1024.0

    attr_reader :name, :attributes

    def initialize(name, attributes = {})
      @name = name
      @attributes = attributes
    end

    def path
      File.join('assets', logical_path)
    end

    def logical_path
      attributes.fetch('logical_path', '?')
    end

    def filesize
      (attributes.fetch('size', 0) / KB).round(1)
    end

    def type
      @_type ||= name.split('.').last
    end
  end

  attr_reader :manifest

  def initialize(manifest)
    @manifest = manifest
  end

  def output(stream)
    filename_column_size = assets.map{ |a| a.path.length }.max
    filesize_column_size = 7
    type_column_size = 6

    column_format = "| %-#{filename_column_size}s | %-#{type_column_size}s | %-#{filesize_column_size}s |\n"
    separator = "+#{'-' * (filename_column_size + 2)}+#{'-' * (type_column_size + 2)}+#{'-' * (filesize_column_size + 2)}+\n"

    stream << separator
    stream << column_format % ['File Path', 'Type', 'Size']
    stream << separator

    assets.each do |asset|
      stream << column_format % [
        asset.path,
        asset.type,
        "#{asset.filesize}K"
      ]
    end
    stream << separator
  end

  private

  def assets
    @_assets ||= begin
      manifest['files'].map do |name, attributes|
        Asset.new(name, attributes)
      end
    end
  end
end

namespace :filesizes do
  task :clean do
    require 'fileutils'
    FileUtils.rm_rf(Rails.root.join('public', 'assets'))
  end

  desc 'Show asset filesizes after compiling (staging)'
  task :staging => [:clean] do
    system("rake assets:precompile RAILS_ENV=staging")
    Rake::Task['filesizes:list'].invoke
  end

  desc 'Show asset filesizes after compiling (dev)'
  task :dev => [:clean, 'assets:precompile', 'filesizes:list']

  task :list do
    manifest_root = Rails.root.join('public', 'assets')
    manifest_file = Dir[File.join(manifest_root, '.sprockets-manifest*.json')].first

    if File.exist?(manifest_file)
      data = JSON.parse(File.read(manifest_file))
      table = FileTable.new(data)
      table.output($stdout)
    else
      puts "No manifest file found in #{manifest_root}"
    end
  end
end

desc 'Show asset filesizes in staging'
task :filesizes => ['filesizes:staging']
