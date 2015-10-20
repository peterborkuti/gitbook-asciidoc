var _ = require('lodash');
var cheerio = require('cheerio');

var convert = require('./utils/convert');

function parseReadme(src) {
    var html = convert(src);
    var $ = cheerio.load(html);

    return {
        title: $("h1:first-child").text().trim(),
        description: $("div.paragraph").first().text().trim(),
        paragraphs: $("div.paragraph").map(function(i,e) {
            return $(this).text().trim();
        }).get().join(',')
    };
}


// Exports
module.exports = parseReadme;
