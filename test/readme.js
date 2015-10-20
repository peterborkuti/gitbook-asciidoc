var fs = require('fs');
var path = require('path');
var assert = require('assert');

var readme = require('../').readme;


var CONTENT = fs.readFileSync(path.join(__dirname, './fixtures/README.adoc'), 'utf8');
var LEXED = readme(CONTENT);

describe('Readme parsing', function () {

    it('should contain a title', function() {
        assert(LEXED.title);
    });

    it('should contain a description', function() {
        assert(LEXED.description);
    });

    it('should extract the right title', function() {
        assert.equal(LEXED.title, "This is the title");
    });

    it('should extract the right description', function() {
        assert.equal(LEXED.description, "This is the book description.");
    });

    it('should include file "include.txt"', function() {
        assert.equal(LEXED.paragraphs.indexOf('include.txt'), -1);
    });

    it('should not contain "line1"', function() {
        assert.equal(LEXED.paragraphs.indexOf('line1'), -1);
    });

    it('should not contain "line3"', function() {
        assert.equal(LEXED.paragraphs.indexOf('line3'), -1);
    });

    it('should contain line2', function() {
        assert.equal(LEXED.paragraphs.indexOf('line2') > -1, true);
    });
});
