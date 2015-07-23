((exports, $) => {
  const API_BASE = '/api';

  exports.request = (options) => {
    if(!options) {
      throw new Error('No options given')
    }

    if(typeof options === 'string') {
      options = {'url': options};
    } else{
      options = JSON.parse(JSON.stringify(options));
    }

    options.url = `${API_BASE}${options.url}`;
    options.dataType = 'json';

    return new Promise((resolve, reject) => {
      $.ajax(options).success(resolve).error(reject);
    });
  };

})(window, jQuery);
