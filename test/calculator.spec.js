'use strict';
/*jshint expr: true*/

var expect = require('chai').expect;
var calculator = require('../kata');

describe('calculator existance', function () {
  it('calculator object exist', function () {
    expect(calculator).be.ok;
  });
});

describe('calculator add smoke', function () {
  it('1+1 == 2', function () {
    expect(calculator.add('1,2')).to.equal(3);
  });
  it('"" == 0', function () {
    expect(calculator.add('')).to.equal(0);
  });
  it('1 == 1', function () {
    expect(calculator.add('1')).to.equal(1);
  });
});
