'use strict';

var grunt = require('grunt');
var crypto = require('crypto');

var path = 'test/out';

exports.favicons = {

    // html test hashsum with two-space indentation
    htmlsum: function(test) {
        test.expect(1);
        var original = crypto.createHash('sha1').update(grunt.file.read(path + '/test.html.indent')).digest('hex');
        test.ok(original === 'fcfe8ea114791d5a4a9bbec8508c17f174b0e0fc', 'html hashsum (' + original + ') not valid');
        test.done();
    }

};
