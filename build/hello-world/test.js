'use strict';

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _supertest = require('supertest');

var _supertest2 = _interopRequireDefault(_supertest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const request = _supertest2.default.agent(_index2.default.listen());

describe("hello-world", () => {
  it("should say 'Hello World'", done => {
    request.get("/").expect(200).expect("Hello World", done);
  });
});
//# sourceMappingURL=test.js.map