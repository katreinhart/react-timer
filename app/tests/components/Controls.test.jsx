var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var Controls = require('Controls');

describe('Controls', () => {
  it('should exist', () => {
    expect(Controls).toExist();
  });

  describe('render', ()=>{
    it('should render Pause when started', () => {
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus = 'started'/>);
      var $el = $(ReactDOM.findDOMNode(controls));
      var $pauseButton = $el.find('button:contains(Pause)');

      expect($pauseButton.length).toBe(1);
    });

    it('should render Start when paused', () => {
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus='paused' />);
      var $el= $(ReactDOM.findDOMNode(controls));
      var $startButton = $el.find('button:contains(Start)');

      expect($startButton.length).toBe(1);
    });

    // it('should not render Start when started', () => {
    //   var controls = TestUtils.renderIntoDocument(<Controls countdownStatus='started' />);
    //   var $el= $(ReactDOM.findDOMNode(controls));
    //   var $startButton = $el.find('button:contains(Start)');
    //
    //   expect($startButton.length).toBe(0);
    // });
    //
    // it('should not render Pause when paused', () => {
    //   var controls = TestUtils.renderIntoDocument(<Controls countdownStatus='started' />);
    //   var $el= $(ReactDOM.findDOMNode(controls));
    //   var $pauseButton = $el.find('button:contains(Pause)');
    //
    //   expect($pauseButton.length).toBe(0);
    // });

    it('should render two buttons', () => {
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus='started' />);
      var $el= $(ReactDOM.findDOMNode(controls));
      var $button = $el.find('button');

      expect($button.length).toBe(2);
    });

    it('should render clear button', () => {
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus='started' />);
      var $el= $(ReactDOM.findDOMNode(controls));
      var $clearButton = $el.find('button:contains(Clear)');

      expect($clearButton.length).toBe(1);
    })
  });
});
