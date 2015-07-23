((exports, $) => {
  let API = exports.API = {
    endpoint: '/api'
  }

  let apiPath = (path) => {
    return `${API.endpoint}${path}`;
  };

  // API Wrapper around $.ajax that is specific to this app's API and Promise-based
  exports.request = (options) => {
    if(!options) {
      throw new Error('No options given')
    }

    if(typeof options === 'string') {
      options = {'url': options};
    } else{
      options = JSON.parse(JSON.stringify(options));
    }

    options.url = apiPath(options.url);
    options.dataType = 'json';

    return new Promise((resolve, reject) => {
      let successHandler = (data, status, xhr) => {
        resolve(data);
      };

      let errorHandler = (xhr, status, error) => {
        reject(xhr.responseJSON);
      };

      $.ajax(options).success(successHandler).fail(errorHandler);
    });
  };

})(window, jQuery);
