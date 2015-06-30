/*global describe, beforeEach, it */

'use strict';

var assert = require('assert');
var resize = require('./index.js');
var PluginApi = require('gardr-core-plugin').PluginApi;
var sinon = require('sinon');

function mockItem () {
    return {
        options: {
            container: {
                style: {
                    width: '100px',
                    height: '100px'
                }
            }
        },
        iframe: {
            resize: sinon.spy(),
            width: 100,
            height: 100
        }
    };
}

describe('resize-host', function () {
    var pluginApi;

    beforeEach(function () {
        pluginApi = new PluginApi();
    });

    it('should be a function', function () {
        assert.equal(typeof resize, 'function');
    });

    it('should not resize anything if both item.options.resizeHorizontal and item.options.resizeVertical are not true', function () {
        var item = mockItem();
        resize(pluginApi);
        item.rendered = {
            width: 120,
            height: 120
        };
        pluginApi.trigger('item:afterrender', item);

        assert.equal(item.options.container.style.width, '100px');
        assert.equal(item.options.container.style.height, '100px');
        assert(!item.iframe.resize.called, 'item resize called');
    });

    it('should only resize horizontal if item.options.resizeHorizontal is true, leaving vertical unchanged', function () {
        var item = mockItem();
        item.options.resizeHorizontal = true;
        resize(pluginApi);
        item.rendered = {
            width: 120,
            height: 120
        };
        pluginApi.trigger('item:afterrender', item);

        assert.equal(item.options.container.style.width, '120px');
        assert.equal(item.options.container.style.height, '100px');
        assert(item.iframe.resize.calledOnce, 'item resize called');
        assert(item.iframe.resize.calledWith(item.rendered.width, null), 'called with new width');
    });

    it('should only resize vertical if item.options.resizeVertical is true, leaving horizontal unchanged', function () {
        var item = mockItem();
        item.options.resizeVertical = true;
        resize(pluginApi);
        item.rendered = {
            width: 120,
            height: 120
        };
        pluginApi.trigger('item:afterrender', item);

        assert.equal(item.options.container.style.width, '100px');
        assert.equal(item.options.container.style.height, '120px');
        assert(item.iframe.resize.calledOnce, 'item resize called');
        assert(item.iframe.resize.calledWith(null, item.rendered.height), 'called with new height');
    });

    it('should resize horizontal and vertical if both item.options.resizeHorizontal and item.options.resizeVertical are true', function () {
        var item = mockItem();
        item.options.resizeHorizontal = true;
        item.options.resizeVertical = true;
        resize(pluginApi);
        item.rendered = {
            width: 120,
            height: 120
        };
        pluginApi.trigger('item:afterrender', item);

        assert.equal(item.options.container.style.width, '120px');
        assert.equal(item.options.container.style.height, '120px');
        assert(item.iframe.resize.calledOnce, 'item resize called');
        assert(item.iframe.resize.calledWith(item.rendered.width, item.rendered.height), 'called with new width and height');
    });

    it('shoud not resize container if items.options.disableContainerResize is true', function () {
        var item = mockItem();
        resize(pluginApi);
        item.options.disableContainerResize = true;
        item.rendered = {
            width: 120,
            height: 120
        };
        pluginApi.trigger('item:afterrender', item);

        assert.equal(item.options.container.style.width, '100px');
        assert.equal(item.options.container.style.height, '100px');
        assert(!item.iframe.resize.called, 'item resize called');
    });
});
