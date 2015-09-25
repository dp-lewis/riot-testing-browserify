var riot = require('riot');
var helloworld = require('../tags/hello-world.tag');

/*global riot, describe, it, beforeEach, expect*/
describe('Hello World', function () {

  beforeEach(function () {
    // create mounting points
    var html = document.createElement('hello-world');
    document.body.appendChild(html);
  });

  it('should mount the tag', function () {
    riot.mount('hello-world');
    expect(document.querySelector('hello-world h1').textContent)
      .toBe('Hello World');
  });

});
