var Mustache = require('mustache');

module.exports.templateRunner = function (callback, templateText, jsonText) {

    var resultText = Mustache.render(templateText, JSON.parse(jsonText));

    callback(null, resultText);

};
