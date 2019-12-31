let loaderUtils = require('loader-utils');
module.exports =  function(source) {
  let options = loaderUtils.getOptions(this) || {};
  console.log(options);
  source = source.replace('wweeeexx', 'aabbffgg');
  return source;
}
