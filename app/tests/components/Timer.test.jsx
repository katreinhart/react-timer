var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');
var Controls = require('Controls');

var Timer = require('Timer');

describe('Timer', () => {
  it('should exist', () => {
    expect(Timer).toExist();
  });

  describe('HandleSetCount', () => {
    it('should count up when started', () => {
      var timer = TestUtils.renderIntoDocument(<Timer />);

      timer.handleStatusChange('started');
      expect(timer.state.count).toBe(0);

      setTimeout(() =>{
        expect(timer.state.count).toBe(10);
        done();
      }, 10001);
    });
  });

});
