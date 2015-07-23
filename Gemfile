source 'https://rubygems.org'

source ENV['GEMSERVER_HOST'] || 'http://gems.lendkeylabs.com' do
  def custom_require(name, version, opts = {})
    unless ENV.key?('NO_CUSTOM_GEMS')
      name_upcased = name.upcase.gsub('-', '_')
      if gem_branch = ENV["#{name_upcased}_GIT_BRANCH"]
        opts[:git] = "git@github.com:lendkey/#{name}.git"
        opts[:branch] = gem_branch
      elsif gem_dir = ENV["#{name_upcased}_DIR"]
        opts[:path] = gem_dir
      end  unless ENV["#{name_upcased}_DEPLOY"]
    end
    gem name, version, opts
  end

  #-----> LendKey Gemserver gems

  # gem 'lkid', '>0'
  # gem 'paperclip_strongbox', '> 0'
  # custom_require 'gh-client', '> 0'
  # custom_require 'quotes-client', '> 0'
  # custom_require 'pullson-client', '> 0'
  # custom_require 'nada-client', '> 0'
end

#-----> Framework Dependencies

gem 'rails', '4.2.3'
gem 'mysql2'
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'
gem 'jbuilder', '~> 2.0'
gem 'sdoc', '~> 0.4.0', group: :doc

#-----> App Dependencies

gem 'sprockets-es6', '~> 0.7.0', require: 'sprockets/es6'
gem 'react-rails', '~> 1.1.0'
gem 'troupe', '~> 0.1.0'
gem 'reform', '~> 2.0.3'
gem 'virtus', '~> 1.0.3'

group :development do
  gem 'quiet_assets', '~> 1.1.0'
  gem 'hipchat', '~> 1.4'
  gem 'capistrano', '3.2.1' # Capfile is locked to 3.2.1
  gem 'capistrano-rails', '~> 1.1'
  gem 'guard', '~> 2.8.0'
  gem 'guard-rspec', '~> 4.3.1'
  gem 'guard-jasmine', github: 'guard/guard-jasmine', branch: 'jasmine-2'
end

group :development, :test do
  gem 'pry', '~> 0.10.0'
  gem 'debugger', '~> 1.6.1', :platform => :mri_19
  gem 'pry-debugger', '~> 0.2.3', :platform => :mri_19
  gem 'byebug', '~> 4.0.5', :platform => :mri_20
  gem 'pry-byebug', '~> 3.1.0', :platform => :mri_20
  gem 'web-console', '~> 2.0'

  gem 'jasmine', '= 2.0.3'
  gem 'jasmine-rails', '= 0.10.5'
  gem 'phantomjs', '~> 1.9.7.0', '< 1.9.8.0' # 1.9.8+ has issues on semaphore
  gem 'factory_girl', '~> 4.4.0'
  gem 'database_cleaner', '~> 1.2.0'
  gem 'faker', '~> 1.3.0', require: false
  gem 'rspec-rails', '~> 3.1.0'
  gem 'capybara-angular'
end

group :test do
  gem 'colorize', '~> 0.7.5'
  gem 'factory_girl_rails', '~> 4.4.1'
  gem 'capybara', '~> 2.4.4'
  gem 'selenium-webdriver', '~> 2.44.0'
  gem 'simplecov', '~> 0.9.0'
  gem 'poltergeist', '~> 1.5.1'
  gem 'shoulda-matchers', '~> 2.7.0', require: false
  gem 'webmock', '~> 1.21.0', require: false
  gem 'vcr', '~> 2.9.3'
end
