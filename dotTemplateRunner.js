var doT = require('dot');

module.exports.templateRunner = function (callback, templateText, jsonText) {
    
    var tempFn = doT.template(templateText);

    var resultText = tempFn(JSON.parse(jsonText));

    callback(null, resultText);
    
};
