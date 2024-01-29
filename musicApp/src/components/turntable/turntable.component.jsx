import React, { useEffect } from "react";
import styled from "@emotion/styled";
import "./turntable.styles.css";

const Turntable = () => {
  useEffect(() => {
    // Load SoundManager 2 script dynamically
    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/soundmanager2/2.97a.20150601/script/soundmanager2-jsmin.js";
    script.async = true;
    script.onload = () => {
      // SoundManager 2 script loaded, now load custom JavaScript
      const customScript = document.createElement("script");
      customScript.innerHTML = `
        // Custom JavaScript code goes here
        ${customJavaScriptCode}
      `;
      document.body.appendChild(customScript);
    };
    document.body.appendChild(script);

    return () => {
      // Cleanup if necessary
    };
  }, []);

  // JSX structure for the Turntable component
  return (
    <div className="landscape">
      <div
        id="turntable1"
        className="turntable has-slipmat has-record power-on"
      >
        <div className="frame"></div>
        <div className="table-bg"></div>
        <img
          src="https://hubertsouchaud.fr/mYxTubes/image/turntable/landscape/tt_case_and_lighting.png"
          alt=""
          className="stub portrait-hidden"
        />

        <div className="bd">
          <div className="platter"></div>
          <div className="slipmat-holder">
            <div className="slipmat"></div>
          </div>

          <div className="record-holder">
            <div className="record"></div>
            <div className="record-grooves"></div>
            <div className="label"></div>
          </div>

          <div className="spindle"></div>
          <div className="power-light"></div>
          <a href="#" className="power-dial" data-method="powerToggle"></a>
          <a href="#" className="button start-stop" data-method="toggle"></a>
          <a href="#" className="button speed-33 on"></a>
          <a href="#" className="button speed-45"></a>
          <div className="light light-on"></div>
          <a href="#" className="button light"></a>
          <div className="tonearm-holder">
            <div className="tonearm"></div>
          </div>
        </div>
      </div>
  
      {/* <ul>
      <li><a href="https://hubertsouchaud.fr/mYxTubes/audio/record-noise-1.mp3" data-turntable="turntable-1" data-artwork="https://hubertsouchaud.fr/mYxTubes/image/turntable/slipmat-ass.gif"><b>dj DMSR</b> - vynil noice 1</a> (<span title="Published under a Creative Commons BY-NC-ND license">BY-CC-ND</span>,
        <a href="http://www.schillmania.com/projects/soundmanager2/demo/turntable/" target="_blank">via</a>)</li>
      <li><a href="https://hubertsouchaud.fr/mYxTubes/audio/record-noise-2.mp3" data-turntable="turntable-1" data-artwork="https://hubertsouchaud.fr/mYxTubes/image/turntable/slipmat-hair.gif"><b>dj DMSR</b> - vynil noice 2</a> (<span title="Published under a Creative Commons BY-NC-ND license">BY-CC-ND</span>,
        <a href="http://www.schillmania.com/projects/soundmanager2/demo/turntable/" target="_blank">via</a>)</li>
    </ul> */}
  </div>
  );
};

export default Turntable;

// Custom JavaScript code (provided in the question)
const customJavaScriptCode = `
  // Put the provided JavaScript code here
  /*jslint plusplus: true, white: true, nomen: true */
/*global soundManager, document, console, window */
 
(function(window) {

  /** @license
   * SoundManager 2: "Turntable UI": Base and API
   * Copyright (c) 2015, Scott Schiller. All rights reserved.
   * http://www.schillmania.com/projects/soundmanager2/
   * Code provided under BSD license.
   * http://schillmania.com/projects/soundmanager2/license.txt
   */

  "use strict";

  var turntables = [],
      turntablesById = {},
      // CSS selector for top-level DOM node
      turntableSelector = '.turntable',
      tt_prefix = 'tt_',
      idCounter = 0,
      utils;

  /**
   * Slightly hackish: Turntable event callbacks.
   * Override globally by setting turntables.on = {}, or individually by turntables[0].on = {} etc.
   */
  turntables.on = {/*
    stop: function(tt) {
      console.log('turntable stopped', tt);
    },
    start: function(tt) {
      console.log('turntable started', tt);
    },
    powerOn: function(tt) {
      console.log('turntable powerOn', tt);
    },
    powerOff: function(tt) {
      console.log('turntable powerOff', tt);
    }*/
  };

  function Turntable(o, options) {

    var api, css, dom, data, id, methods;

    // DOM ID + SM2 sound reference
    id = (tt_prefix + idCounter);

    idCounter++;

    options = options || {};

    function add(className) {
      utils.css.add(dom.o, className);
    }

    function remove(className) {
      utils.css.remove(dom.o, className);
    }

    function callback(method) {
      if (method) {
        // fire callback, passing current turntable object
        if (api.on && api.on[method]) {
          api.on[method](api);
        } else if (turntables.on[method]) {
          turntables.on[method](api);
        }
      }
    }

    function applyTonearmAngle() {
      if (data.tonearm.angle >= 0) {
        dom.tonearm.style[utils.features.transform.prop] = 'rotate(' + data.tonearm.angle + 'deg)';
      }
    }

    // TODO: use mixin
    if (options.hideLabelWithArtwork === undefined) {
      options.hideLabelWithArtwork = true;
    }

    css = {

      power: {
        turntable: 'power-on',
        motor: 'motor-on'
      },

      turntable: {
        hasArtwork: 'has-artwork',
        hasRecord: 'has-record',
        hasSlipmat: 'has-slipmat',
        hideLabelWithArtwork: 'hide-label-with-artwork'
      }

    };

    data = {

      power: {
        turntable: false,
        motor: false,
        motorVelocity: 0
      },

      tonearm: {
        angle: 0,
        maxAngle: 42,
        minAngle: 0
      },

      record: {
        hasArtwork: false
      }

    };

    methods = {

      start: function() {
        if (data.power.turntable && !data.power.motor) {
          data.power.motor = true;
          add(css.power.motor);
          callback('start');
        }
      },

      stop: function() {
        if (data.power.motor) {
          data.power.motor = false;
          remove(css.power.motor);
          callback('stop');
        }
      },

      toggle: function() {
        if (data.power.motor) {
          methods.stop();
        } else {
          methods.start();
        }
      },

      powerOn: function() {
        if (!data.power.turntable) {
          data.power.turntable = true;
          add(css.power.turntable);
          callback('powerOn');
        }
      },

      powerOff: function() {
        if (data.power.turntable) {
          data.power.turntable = false;
          remove(css.power.turntable);
          callback('powerOff');
        }
        // no power = no motor, too.
        methods.stop();
      },

      powerToggle: function() {
        if (!data.power.turntable) {
          methods.powerOn();
        } else {
          methods.powerOff();
        }
      },

      setTonearmAngle: function(angle) {
        if (!isNaN(angle)) {
          data.tonearm.angle = Math.max(data.tonearm.minAngle, Math.min(data.tonearm.maxAngle, angle));
          if (utils.features.transform.prop) {
            if (utils.features.getAnimationFrame) {
              utils.features.getAnimationFrame(applyTonearmAngle);
            } else {
              applyTonearmAngle();
            }
          }
        }
      },

      addSlipmat: function() {
        add(css.turntable.hasSlipmat);
      },

      removeSlipmat: function() {
        remove(css.turntable.hasSlipmat);
      },

      toggleSlipmat: function() {
        utils.css.toggle(dom.o, css.turntable.hasSlipmat);
      },

      addRecord: function() {
        add(css.turntable.hasRecord);
      },

      removeRecord: function() {
        remove(css.turntable.hasRecord);
      },

      toggleRecord: function() {
        utils.css.toggle(dom.o, css.turntable.hasRecord);
      },

      setArtwork: function(url) {
        if (url) {
          dom.record.style.backgroundImage = 'url(' + url + ')';
          if (!data.record.hasArtwork) {
            add(css.turntable.hasArtwork);
            data.record.hasArtwork = true;
          }
        } else {
          if (data.record.hasArtwork) {
            dom.record.style.backgroundImage = 'none';
            remove(css.turntable.hasArtwork);
            data.record.hasArtwork = false;
          }
        }
        if (options.hideLabelWithArtwork) {
          add(css.turntable.hideLabelWithArtwork);
        } else {
          remove(css.turntable.hideLabelWithArtwork);
        }
      }

    };

    function handleMethod(e) {

      var target, action;

      target = e.target;
      
      if (target) {
        
        action = target.getAttribute('data-method');
        
        if (action && methods[action]) {
          methods[action](e);
        }
      
      }

    }

    function preventDefault(e) {

        if (e.target && e.target.nodeName === 'A') {
          utils.events.preventDefault(e);
          return false;
        }

    }

    function assignEvents() {

      utils.events.add(dom.o, 'mousedown', handleMethod);
      utils.events.add(dom.o, 'click', preventDefault);

    }

    function initDOM() {

      dom = {
        o: o,
        platter: utils.dom.get(o, '.platter'),
        record: utils.dom.get(o, '.record'),
        slipmat: utils.dom.get(o, '.slipmat'),
        tonearm: utils.dom.get(o, '.tonearm')
      };

      // inherit ID
      if (!dom.o.id) {
        dom.o.id = id;
      } else {
        id = dom.o.id;
      }

    }

    function init() {

      initDOM();

      assignEvents();

      // in a moment...
      window.setTimeout(methods.powerToggle, 500);

    }

    init();

    // public interface
    api = {
      id: id,
      // css: css,
      data: data,
      methods: methods,
      on: {} // per-turntable event overrides you can specify; see turntables.on for examples
    };

    return api;

  }

  // common JS helpers

  utils = {

    array: (function() {

      function compare(property) {

        var result;

        return function(a, b) {

          if (a[property] < b[property]) {
            result = -1;
          } else if (a[property] > b[property]) {
            result = 1;
          } else {
            result = 0;
          }
          return result;
        };

      }

      function shuffle(array) {

        // Fisher-Yates shuffle algo

        var i, j, temp;

        for (i = array.length - 1; i > 0; i--) {
          j = Math.floor(Math.random() * (i+1));
          temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }

        return array;

      }

      return {
        compare: compare,
        shuffle: shuffle
      };

    }()),

    css: (function() {

      function hasClass(o, cStr) {

        return (o.className !== undefined ? new RegExp('(^|\\s)' + cStr + '(\\s|$)').test(o.className) : false);

      }

      function addClass(o, cStr) {

        if (!o || !cStr || hasClass(o, cStr)) {
          return false; // safety net
        }
        o.className = (o.className ? o.className + ' ' : '') + cStr;

      }

      function removeClass(o, cStr) {

        if (!o || !cStr || !hasClass(o, cStr)) {
          return false;
        }
        o.className = o.className.replace(new RegExp('( ' + cStr + ')|(' + cStr + ')', 'g'), '');

      }

      function swapClass(o, cStr1, cStr2) {

        var tmpClass = {
          className: o.className
        };

        removeClass(tmpClass, cStr1);
        addClass(tmpClass, cStr2);

        o.className = tmpClass.className;

      }

      function toggleClass(o, cStr) {

        var found,
            method;

        found = hasClass(o, cStr);

        method = (found ? removeClass : addClass);

        method(o, cStr);

        // indicate the new state...
        return !found;

      }

      return {
        has: hasClass,
        add: addClass,
        remove: removeClass,
        swap: swapClass,
        toggle: toggleClass
      };

    }()),

    dom: (function() {

      function getAll(param1, param2) {

        var node,
            selector,
            results;

        if (arguments.length === 1) {

          // .selector case
          node = document.documentElement;
          // first param is actually the selector
          selector = param1;

        } else {

          // node, .selector
          node = param1;
          selector = param2;

        }

        // sorry, IE 7 users; IE 8+ required.
        if (node && node.querySelectorAll) {

          results = node.querySelectorAll(selector);

        }

        return results;

      }

      function get(/* parentNode, selector */) {

        var results = getAll.apply(this, arguments);

        // hackish: if an array, return the last item.
        if (results && results.length) {
          return results[results.length-1];
        }

        // handle "not found" case
        return results && results.length === 0 ? null : results;

      }

      return {
        get: get,
        getAll: getAll
      };

    }()),

    position: (function() {

      function getOffX(o) {

        // http://www.xs4all.nl/~ppk/js/findpos.html
        var curleft = 0;

        if (o.offsetParent) {

          while (o.offsetParent) {

            curleft += o.offsetLeft;

            o = o.offsetParent;

          }

        } else if (o.x) {

            curleft += o.x;

        }

        return curleft;

      }

      function getOffY(o) {

        // http://www.xs4all.nl/~ppk/js/findpos.html
        var curtop = 0;

        if (o.offsetParent) {

          while (o.offsetParent) {

            curtop += o.offsetTop;

            o = o.offsetParent;

          }

        } else if (o.y) {

            curtop += o.y;

        }

        return curtop;

      }

      return {
        getOffX: getOffX,
        getOffY: getOffY
      };

    }()),

    style: (function() {

      function get(node, styleProp) {

        // https://www.quirksmode.org/dom/getstyles.html
        var value;

        if (node.currentStyle) {

          value = node.currentStyle[styleProp];

        } else if (window.getComputedStyle) {

          value = document.defaultView.getComputedStyle(node, null).getPropertyValue(styleProp);

        }

        return value;

      }

      return {
        get: get
      };

    }()),

    events: (function() {

      var add, remove, preventDefault;

      add = function(o, evtName, evtHandler) {
        // return an object with a convenient detach method.
        var eventObject = {
          detach: function() {
            return remove(o, evtName, evtHandler);
          }
        };
        if (window.addEventListener) {
          o.addEventListener(evtName, evtHandler, false);
        } else {
          o.attachEvent('on' + evtName, evtHandler);
        }
        return eventObject;
      };

      remove = (window.removeEventListener !== undefined ? function(o, evtName, evtHandler) {
        return o.removeEventListener(evtName, evtHandler, false);
      } : function(o, evtName, evtHandler) {
        return o.detachEvent('on' + evtName, evtHandler);
      });

      preventDefault = function(e) {
        if (e.preventDefault) {
          e.preventDefault();
        } else {
          e.returnValue = false;
          e.cancelBubble = true;
        }
        return false;
      };

      return {
        add: add,
        preventDefault: preventDefault,
        remove: remove
      };

    }()),

    features: (function() {

      var getAnimationFrame,
          localAnimationFrame,
          localFeatures,
          prop,
          styles,
          testDiv,
          transform;

        testDiv = document.createElement('div');

      /**
       * hat tip: paul irish
       * http://paulirish.com/2011/requestanimationframe-for-smart-animating/
       * https://gist.github.com/838785
       */

      localAnimationFrame = (window.requestAnimationFrame
        || window.webkitRequestAnimationFrame
        || window.mozRequestAnimationFrame
        || window.oRequestAnimationFrame
        || window.msRequestAnimationFrame
        || null);

      // apply to window, avoid "illegal invocation" errors in Chrome
      getAnimationFrame = localAnimationFrame ? function() {
        return localAnimationFrame.apply(window, arguments);
      } : null;

      function has(prop) {

        // test for feature support
        var result = testDiv.style[prop];

        return (result !== undefined ? prop : null);

      }

      // note local scope.
      localFeatures = {

        transform: {
          ie: has('-ms-transform'),
          moz: has('MozTransform'),
          opera: has('OTransform'),
          webkit: has('webkitTransform'),
          w3: has('transform'),
          prop: null // the normalized property value
        },

        rotate: {
          has3D: false,
          prop: null
        },

        getAnimationFrame: getAnimationFrame

      };

      localFeatures.transform.prop = (
        localFeatures.transform.w3 ||
        localFeatures.transform.moz ||
        localFeatures.transform.webkit ||
        localFeatures.transform.ie ||
        localFeatures.transform.opera
      );

      function attempt(style) {

        try {
          testDiv.style[transform] = style;
        } catch(e) {
          // that *definitely* didn't work.
          return false;
        }
        // if we can read back the style, it should be cool.
        return !!testDiv.style[transform];

      }

      if (localFeatures.transform.prop) {

        // try to derive the rotate/3D support.
        transform = localFeatures.transform.prop;
        styles = {
          css_2d: 'rotate(0deg)',
          css_3d: 'rotate3d(0,0,0,0deg)'
        };

        if (attempt(styles.css_3d)) {
          localFeatures.rotate.has3D = true;
          prop = 'rotate3d';
        } else if (attempt(styles.css_2d)) {
          prop = 'rotate';
        }

        localFeatures.rotate.prop = prop;

      }

      testDiv = null;

      return localFeatures;

    }())

  };

  soundManager.setup({
    // Trade-off: higher UI responsiveness (play/progress bar), but may use more CPU.
    html5PollingInterval: 50,
    flashVersion: 9
  });

  soundManager.onready(function() {

    var nodes, i, j, tt;

    nodes = utils.dom.getAll(turntableSelector);

    if (nodes && nodes.length) {
      for (i=0, j=nodes.length; i<j; i++) {
        tt = new Turntable(nodes[i]);
        turntables.push(tt);
        turntablesById[tt.id] = tt;
      }
    }
  
  });

  window.turntables = turntables;
  window.turntablesById = turntablesById;

  // for external reference by demos, etc.
  window.turntables.utils = utils;

}(window));

/*jslint vars: true, plusplus: true, white: true, nomen: true */
/*global soundManager, console, document, navigator, turntables, turntablesById, window */

(function(window) {

  /** @license
   * SoundManager 2: "Turntable UI": Demo application
   * Copyright (c) 2015, Scott Schiller. All rights reserved.
   * http://www.schillmania.com/projects/soundmanager2/
   * Code provided under BSD license.
   * http://schillmania.com/projects/soundmanager2/license.txt
   */

  "use strict";

  var turntables;
  var events;
  var utils;
  var sounds;
  var config;
  var state;
  var isMonophonic;
  var localMethods;
  var playSound;

  // Default behaviours.
  config = {

    // if specified, CSS className required for links to be played
    requireCSS: null,

    // CSS className that will prevent links from being played
    excludeCSS: 'turntable-exclude',

    // when a sound finishes, find and play the next one?
    playNext: true,

    // show a record right away? (otherwise, "techniques" slipmat.)
    hasRecordAtStart: false,
  
    // play some background noise when end of record is hit.
    useEndOfRecordNoise: true,

    // samples from a real turntable. add more to taste.
    endOfRecordNoise: [
      'http://hubertsouchaud.free.fr/mYxTubes/audio/record-noise-1.mp3',
      'http://hubertsouchaud.free.fr/mYxTubes/audio/record-noise-2.mp3'
    ],

    // for assigning a target (turntable) to play. e.g., <a href="some.mp3" data-turntable="tt-1">some.mp3</a>
    htmlAttribute: 'data-turntable',

    // turntable innards. modify at own risk.
    turntable: {
      tonearm: {
        angleToRecord: 16,   // tonearm angle to outer edge of record
        recordAngleSpan: 26  // outer edge -> inner edge of record
      }
    },

    /**
     * recommendation: don't edit these, use methods on window.turntables[] instead.
     * to control sounds, call methods on turntables[0] etc. which will affect sounds in turn.
     */
    soundOptions: {
      multiShot: false,
      onload: function(ok) {
        if (!ok && !this.duration) {
          // treat as a failure.
          events.sound.error.apply(this, arguments);
        }
      },
      whileplaying: function() {
        events.sound.whileplaying.apply(this, arguments);
      },
      onfinish: function() {
        events.sound.finish.apply(this, arguments);
      }
    }
  
  };

  sounds = {
    endOfRecordNoise: []
  };

  state = {
    endOfRecordNoise: null,
    soundFinished: false,
    lastLink: null
  };

  // devices that likely block auto-play and only allow one sound to be played at a time
  isMonophonic = navigator.userAgent.match(/iphone|ipad|android|tablet|mobile/i);

  function findTheDamnLink(o) {

    // click events may have a nested target element instead of the link. Find the parent <a>.

    // link was clicked.
    if (o && o.nodeName === 'A') {
      return o;
    }

    // nested case.
    if (o && o.parentNode) {
      do {
        o = o.parentNode;
      } while (o && o.nodeName !== 'A' && o.parentNode);
    }

    return o;

  }

  function canPlayLink(a) {

    // can SM2 play the <a>, and does it specifically include or exclude via CSS?
    return (
      a && soundManager.canPlayLink(a)
        && (!config.requireCSS || utils.css.has(a, config.requireCSS))
        && (!config.excludeCSS || !utils.css.has(a, config.excludeCSS))
    );

  }

  function findNextLink(o) {

    // find current link in page, play next in DOM (or first, if no match.)

    var foundCurrent, i, j, links, playableLinks, result, target;

    // check for data- turntable target attribute.
    target = o.getAttribute(config.htmlAttribute);

    links = document.getElementsByTagName('a');

    playableLinks = [];

    for (i=0, j=links.length; i<j; i++) {

      if (canPlayLink(links[i])) {

        // no data- target attribute, OR same target
        if (!target || links[i].getAttribute(config.htmlAttribute) === target) {

          playableLinks.push(links[i]);

          // if last-active link found, take this one and exit.
          if (foundCurrent) {
            result = links[i];
            break;
          }

          // is this the current link?
          if (o === links[i]) {
            foundCurrent = true;
          }

        }

      }

    }

    // no match in DOM, perhaps rewritten via AJAX while playing etc.? Take the first.
    if (!foundCurrent) {
      result = playableLinks[0];
    }

    // if result is current, return null to avoid double-playing.
    if (result === o) {
      result = null;
    }

    return result;

  }

  events = {

    mouse: {

      click: function(e) {
        
        // look for and play links to sounds.

        var target,
            ttID,
            turntable;

        target = findTheDamnLink(e.target);

        if (canPlayLink(target)) {

          // should this play on a particular turntable? (by HTML ID)
          ttID = target.getAttribute('data-turntable');

          // get the proper turntable.
          turntable = turntablesById[ttID] || turntables[0];

          // track this link for later.
          state.lastLink = target;

          playSound(turntable, target.href);

          // artwork URL?
          turntable.methods.setArtwork(target.getAttribute('data-artwork') || '');

          return utils.events.preventDefault(e);

        }

      }

    },
    
    sound: {
  
      whileplaying: function() {

        var progress = (this.position / this.durationEstimate);

        if (progress >= 0 && this._turntable) {
          // base "tonearm over record" angle, plus additional angle to move across the record.
          this._turntable.methods.setTonearmAngle(config.turntable.tonearm.angleToRecord + (config.turntable.tonearm.recordAngleSpan * progress));
        }

      },
  
      error: function() {

        // something failed. 404, decode error, network loss etc.
        // handle as though a sound finished.
        if (window.console && console.warn) {
          console.warn('Turntable failed to load ' + this.url);
        }
        events.sound.finish.apply(this);

      },

      finish: function() {

        var nextLink;

        state.finished = true;

        if (config.playNext) {
          
          nextLink = findNextLink(state.lastLink);

          // click handler again
          if (nextLink) {
            events.mouse.click({
              target: nextLink
            });
          }

        }

        // nothing else to play?
        if (!nextLink && this._turntable) {

          if (config.useEndOfRecordNoise && sounds.endOfRecordNoise.length) {

            // make sure we're at end of record
            this._turntable.methods.setTonearmAngle(config.turntable.tonearm.angleToRecord + config.turntable.tonearm.recordAngleSpan);
            
            // end of record?
            state.endOfRecordNoise = sounds.endOfRecordNoise[parseInt(Math.random() * sounds.endOfRecordNoise.length, 10)];

            state.endOfRecordNoise.play({
              loops: 999
            });
          
          } else {

            // no more to do?
            this._turntable.methods.stop();

          }

        }

      }
  
    }
  
  };

  playSound = function(turntable, url, load_only) {

    var tt,
        sound;

    // if no turntable specified, take the first one.
    tt = (turntable || turntables[0]);

    if (tt.id) {
      // second param: don't complain to console when sound doesn't exist.
      sound = soundManager.getSoundById(tt.id, true);
    }

    // first play?
    if (!sound) {

      sound = soundManager.createSound({
        id: tt.id,
        url: url
      });

    } else {

      // loading a new URL?
      if (sound.url !== url) {
        sound.stop();
      }

    }

    state.finished = false;

    // associate sound events with the given turntable.
    // TODO: handle one sound object per table.
    sound._turntable = turntable;

    config.soundOptions.url = url;

    // stop any previous record noise
    if (state.endOfRecordNoise) {
      state.endOfRecordNoise.stop();
      state.endOfRecordNoise = null;
    }

    // if motor is already on, and the sound hasn't started yet (i.e., turntable motor was already on), start it now.
    if (tt.data.power.motor && !sound.playState && !load_only) {
      sound.play(config.soundOptions);
    }

    // start the turntable, add a slipmat and record if there isn't one already.
    tt.methods.addSlipmat();
    tt.methods.addRecord();

    if (!load_only) {

      tt.methods.powerOn();
      tt.methods.start();

      events.sound.whileplaying.apply(sound);

    }

  };

  function applyDefaults() {

    var i, j;

    if (!isMonophonic && config.useEndOfRecordNoise && config.endOfRecordNoise.length) {
      for (i=0, j=config.endOfRecordNoise.length; i<j; i++) {
        sounds.endOfRecordNoise.push(soundManager.createSound({
          url: config.endOfRecordNoise[i]
        }));
      }
    }

    if (config.hasRecordAtStart) {
      for (i=0, j=turntables.length; i<j; i++) {
        turntables[i].methods.addRecord();
      }
    }

  }

  function assignEvents() {

    // default turntable behaviours
    // TODO: use utils.mixin?

    var i, j;

    turntables.on.start = function(tt) {
      soundManager.play(tt.id, config.soundOptions);
    };

    turntables.on.stop = function(tt) {
      soundManager.pause(tt.id);
      if (state.endOfRecordNoise) {
        state.endOfRecordNoise.stop();
      }
    };

    // tack on localMethods to turntable object
    // TODO: use proper mixin
    // note use of Function.bind (IE 9, Chrome 7, Firefox 4, Opera 11.60, Safari 5.1.4) to correct scope ('this') within handler.
    if (localMethods.load.bind) {
      for (i=0, j=turntables.length; i<j; i++) {
        turntables[i].methods.load = localMethods.load.bind(turntables[i]);
      }
    }

    // a little hackish: global for now
    turntables.config = config;

  }

  // will be mixed into global turntable API. runs within scope of turntable instance.
  localMethods = {
      // convenience method for scripting, i.e., if you want to load a sound (and optionally, with associated artwork URL), without playing it.
      load: function(soundURL, artworkURL) {
        playSound(this, soundURL, true);
        if (artworkURL) {
          this.methods.setArtwork(artworkURL);
        }
      }
  };

  function init() {

    applyDefaults();

    turntables = window.turntables;

    assignEvents();

    // local references
    utils = turntables.utils;

    // watch clicks, load and play MP3s etc. on the turntable UI.
    utils.events.add(document, 'click', events.mouse.click);

  }

  soundManager.onready(init);

}(window));
`;
